# One-off transform: collapse blog FAQ regions into {"type":"faq"} blocks
# with {q, a:[{type,text}]} items. Works on the JSON array inside
# content/blog-bodies.ts (keeps the file's other text untouched) and rewrites
# content/blog-links.ts block indices accordingly.
#
# Shapes handled:
#   stored: heading "?" / QN heading + answer blocks | "?" para pairs |
#           merged "Qn." paras (split on "? " or " A. ")
#   wp-html: posts in archive/raw/posts_full.json — FAQ region parsed from
#           the raw HTML (h-tag questions + p/ul/li answers); this recovers
#           the questions that flattening dropped (5 posts) and gives the
#           authoritative region boundary.
import json, re, os
from html import unescape

ROOT = os.path.join(os.path.dirname(__file__), "..")
BODIES = os.path.join(ROOT, "content", "blog-bodies.ts")
LINKS = os.path.join(ROOT, "content", "blog-links.ts")
POSTS = os.path.join(ROOT, "archive", "raw", "posts_full.json")

QN = re.compile(r"^Q\s*\d+\s*[:.)\-]?\s*")
AN = re.compile(r"^A\s*[:.)]\s*")
NUMQ = re.compile(r"^\d+[.)]\s+")
FAQ_RX = re.compile(
    r"(frequently asked|\bfaqs?\b|faq section|people (also|often) ask)", re.I)
CLOSING = re.compile(
    r"^(conclusion\b|the bottom line|final takeaway|final thoughts|"
    r"medical disclaimer|before you go|summary\b|wrapping up)", re.I)


def norm(s):
    s = unescape(s).replace("&nbsp;", " ").replace("\xa0", " ")
    return re.sub(r"[\s’‘]+", " ", s).strip()


def key(s):
    """Punctuation/entity-insensitive comparison key."""
    return re.sub(r"[^a-z0-9]+", "", unescape(s).lower())


def strip_tags(html):
    t = re.sub(r"<br\s*/?>", " ", html)
    t = re.sub(r"<[^>]+>", "", t)
    return norm(t)


def load_array(path, varname):
    src = open(path, encoding="utf-8").read()
    i = src.index("=", src.index(varname)) + 1
    while src[i] in " \t":
        i += 1
    open_ch = src[i]
    close_ch = "]" if open_ch == "[" else "}"
    j = src.index("\n" + close_ch + ";", i)  # j = '\n' before '];' / '};'
    arr = src[i:j + 2]                        # include the close bracket
    try:
        data = json.loads(arr)
    except json.JSONDecodeError:
        data = json.loads(re.sub(r",(\s*[}\]])", r"\1", arr))
    return src, data, i, j + 2


def html_elements(html):
    """Top-level-ish elements in order: (tag, inner_html)."""
    els = []
    for m in re.finditer(r"<(h[1-6]|p|ul|ol|li|blockquote)[^>]*>(.*?)</\1>",
                         html, re.S | re.I):
        els.append((m.group(1).lower(), m.group(2)))
    return els


def split_qn_para(text):
    """'Q1. Foo? Bar.' / 'Q1. Foo A. Bar.' -> ('Foo?', 'Bar.')."""
    t = QN.sub("", text).strip()
    m = re.search(r"\?\s+", t)
    if m:
        return t[:m.end()].strip(), AN.sub("", t[m.end():].strip()).strip()
    mm = re.search(r"\s+A\s*[:.)]\s+", t)
    if mm:
        return t[:mm.start()].strip(), t[mm.end():].strip()
    return t, ""


def faq_items_from_html(post_html):
    """(title, items, region_text) or None. Region = elements from the FAQ
    heading until the next heading of same/higher level or a closing heading."""
    els = []
    for m in re.finditer(r"<(h[1-6]|p|ul|ol)[^>]*>(.*?)</\1>",
                         post_html, re.S | re.I):
        els.append((m.start(), m.group(1).lower(), m.group(2)))
    # find the FAQ title element
    ti = None
    for i, (pos, tag, inner) in enumerate(els):
        if tag.startswith("h") and FAQ_RX.search(strip_tags(inner)):
            ti = i
            break
    if ti is None:
        return None
    title = strip_tags(els[ti][2])
    tlevel = int(els[ti][1][1])
    items, cur = [], None
    region_texts = [title]
    end_pos = els[ti][0]
    for pos, tag, inner in els[ti + 1:]:
        text = strip_tags(inner)
        if not text:
            continue
        if tag.startswith("h"):
            lvl = int(tag[1])
            if lvl <= tlevel or CLOSING.match(text):
                break  # section boundary — FAQ region ends
            cur = {"q": NUMQ.sub("", QN.sub("", text)).strip(), "a": []}
            items.append(cur)
            region_texts.append(text)
            end_pos = pos
            continue
        # p / ul / ol / li
        if tag in ("ul", "ol"):
            sub = re.findall(r"<li[^>]*>(.*?)</li>", inner, re.S | re.I)
            texts = [strip_tags(s) for s in sub if strip_tags(s)]
        else:
            texts = [text]
        for tx in texts:
            if cur is None:
                if QN.match(tx):
                    q, a = split_qn_para(tx)
                    items.append({"q": q, "a":
                                  [{"type": "para", "text": a}] if a else []})
                    region_texts.append(tx)
                    end_pos = pos
                    continue
                break
            cur["a"].append({"type": "para",
                             "text": AN.sub("", tx).strip() if
                             re.match(r"^A\s*[:.)]", tx) else tx})
            region_texts.append(tx)
            end_pos = pos
    if not items:
        return None
    return title, items, " ".join(region_texts)


def transform_post(blocks, slug, html_posts, report):
    n = len(blocks)
    start = None
    for i, b in enumerate(blocks):
        txt = b["text"].strip()
        if b["type"] == "heading" and FAQ_RX.search(txt):
            start = i
            break
        if b["type"] == "para" and len(txt) < 90 and FAQ_RX.search(txt):
            start = i
            break
        if b["type"] == "para" and QN.match(txt):
            start = i
            break
    if start is None:
        report.append(f"{slug:60s} no faq")
        return None

    title_block = blocks[start]
    title_is_heading = not QN.match(title_block["text"].strip())
    title = title_block["text"].strip() if title_is_heading else ""

    hp = html_posts.get(slug)
    if hp is not None:
        got = faq_items_from_html(hp)
        if got:
            htitle, items, region_text = got
            if not title:
                title = htitle
            region_key = key(region_text)
            end = start + (1 if title_is_heading else 0)
            last = end
            for i in range(end, n):
                b = blocks[i]
                celltxt = b["text"]
                if b["type"] == "table":
                    celltxt += " " + " ".join(b.get("head") or [])
                    for r in b.get("rows") or []:
                        celltxt += " " + " ".join(r)
                if key(celltxt) and key(celltxt) in region_key:
                    last = i + 1
                else:
                    break
            end = last
            faq = {"type": "faq", "text": title, "items": items}
            report.append(f"{slug:60s} HTML   items={len(items):2d} "
                          f"region[{start},{end})")
            return blocks[:start] + [faq] + blocks[end:], start, end

    # ---- stored-block path ----
    # merged "Question? Answer..." para (no Qn. prefix)
    QA_P = re.compile(r"^.{3,200}?\?\s+\S")

    def is_qa_para(t):
        return QA_P.match(t) is not None and not t.endswith("?")

    i = start + (1 if title_is_heading else 0)
    items = []
    while i < n:
        b = blocks[i]
        txt = b["text"].strip()
        if b["type"] == "para" and QN.match(txt):
            while i < n and blocks[i]["type"] == "para" and \
                    QN.match(blocks[i]["text"].strip()):
                q, a = split_qn_para(blocks[i]["text"].strip())
                items.append({"q": q, "a":
                              [{"type": "para", "text": a}] if a else []})
                i += 1
            break
        if b["type"] == "para" and is_qa_para(txt):
            while i < n and blocks[i]["type"] == "para" and \
                    is_qa_para(blocks[i]["text"].strip()):
                t = blocks[i]["text"].strip()
                m = re.search(r"\?\s+", t)
                items.append({"q": t[:m.end()].strip(),
                              "a": [{"type": "para",
                                     "text": t[m.end():].strip()}]})
                i += 1
            continue
        is_q_head = b["type"] == "heading" and (txt.endswith("?")
                                                or QN.match(txt))
        is_q_para = b["type"] == "para" and txt.endswith("?") and len(txt) < 200
        if is_q_head or is_q_para:
            q = NUMQ.sub("", QN.sub("", txt)).strip()
            i += 1
            ans = []
            a_mode = (i < n and blocks[i]["type"] == "para"
                      and AN.match(blocks[i]["text"].strip()[:4]))
            while i < n and blocks[i]["type"] in ("para", "item"):
                t2 = blocks[i]["text"].strip()
                if a_mode and not AN.match(t2[:4]):
                    break
                if not a_mode and is_q_para and t2.endswith("?") \
                        and len(t2) < 200:
                    break
                if not a_mode and is_qa_para(t2):
                    break
                txt2 = blocks[i]["text"]
                if a_mode and blocks[i]["type"] == "para":
                    txt2 = AN.sub("", txt2).strip()
                ans.append({"type": blocks[i]["type"], "text": txt2})
                i += 1
            items.append({"q": q, "a": ans})
            continue
        break
    if not items:
        report.append(f"{slug:60s} NO ITEMS parsed")
        return None
    faq = {"type": "faq", "text": title, "items": items}
    report.append(f"{slug:60s} STORED items={len(items):2d} "
                  f"region[{start},{i})")
    return blocks[:start] + [faq] + blocks[i:], start, i


def main():
    src, posts, a0, a1 = load_array(BODIES, "blogBodies")
    lsrc, links, l0, l1 = load_array(LINKS, "blogLinks")
    html_posts = {}
    for p in json.load(open(POSTS, encoding="utf-8")):
        html_posts[p["slug"]] = (
            p["content"]["rendered"] if isinstance(p["content"], dict)
            else p["content"])

    report, shifts = [], {}
    for post in posts:
        res = transform_post(post["blocks"], post["slug"], html_posts, report)
        if not res:
            continue
        new_blocks, start, end = res
        shifts[post["slug"]] = (start, end, new_blocks[start])
        post["blocks"] = new_blocks

    # second pass: remap links by locating link anchor text inside items
    for slug, lns in links.items():
        if slug not in shifts:
            continue
        start, end, faq = shifts[slug]
        delta = end - start - 1
        for l in lns:
            b = l["block"]
            if start < b < end:
                hit = None
                for qi, it in enumerate(faq["items"]):
                    if key(l["text"]) in key(it["q"]):
                        hit = (qi, -1)
                        break
                    for si, ab in enumerate(it["a"]):
                        if key(l["text"]) in key(ab["text"]):
                            hit = (qi, si)
                            break
                    if hit:
                        break
                if hit:
                    l["block"], l["item"], l["sub"] = start, hit[0], hit[1]
                    print(f"  link {slug} b{b} -> item{hit[0]}/sub{hit[1]}")
                else:
                    l["block"] = start
                    print(f"  link {slug} b{b} -> faq (UNMATCHED text "
                          f"{l['text']!r})")
            elif b >= end:
                l["block"] = b - delta

    out = src[:a0] + json.dumps(posts, ensure_ascii=False, indent=6) + src[a1:]
    open(BODIES, "w", encoding="utf-8", newline="\n").write(out)
    lout = lsrc[:l0] + json.dumps(links, ensure_ascii=False, indent=2) + lsrc[l1:]
    open(LINKS, "w", encoding="utf-8", newline="\n").write(lout)
    print("\n".join(report))


if __name__ == "__main__":
    main()
