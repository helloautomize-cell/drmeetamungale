# One-off importer: extract blog post front-matter + body blocks from
# new_blog/*.docx into JSON (stdout or files) for content/blog-bodies.ts.
# Stdlib only. Block mapping:
#   Heading1/2/3 -> heading | numPr para -> item | w:tbl -> table (row0=head)
#   other non-empty para -> para
# Skips: everything before "POST CONTENT", the "Medically reviewed by:"
# placeholder line, and a Heading1 that duplicates BLOG TITLE (the page
# already renders the title in PageHero).
import sys, json, glob, os, re
from zipfile import ZipFile
import xml.etree.ElementTree as ET

W = "{http://schemas.openxmlformats.org/wordprocessingml/2006/main}"

def para_text(p):
    return "".join(t.text or "" for t in p.iter(W + "t"))

def para_style(p):
    el = p.find(W + "pPr/" + W + "pStyle")
    return el.get(W + "val") if el is not None else ""

def is_list_item(p):
    return p.find(W + "pPr/" + W + "numPr") is not None

def cell_text(tc):
    # join paragraphs inside a cell with a space
    parts = [para_text(p).strip() for p in tc.findall(W + "p")]
    return " ".join(x for x in parts if x).strip()

def parse_docx(path):
    z = ZipFile(path)
    root = ET.fromstring(z.read("word/document.xml"))
    body = root.find(W + "body")

    # --- front matter: KEY on one para, value on next non-empty para ---
    paras = [para_text(c).strip() for c in body.iter(W + "p")]
    fm = {}
    keys = {"BLOG TITLE": "title", "SLUG": "slug", "EXCERPT": "excerpt",
            "CATEGORY": "category", "ARTICLE TYPE": "article_type",
            "READ TIME": "read_time"}
    i = 0
    while i < len(paras):
        t = paras[i]
        if t == "POST CONTENT":
            break
        if t in keys:
            j = i + 1
            while j < len(paras) and not paras[j]:
                j += 1
            fm[keys[t]] = paras[j] if j < len(paras) else ""
            i = j
        i += 1

    # --- body blocks in document order ---
    children = list(body)
    start = None
    for idx, c in enumerate(children):
        if c.tag == W + "p" and para_text(c).strip() == "POST CONTENT":
            start = idx + 1
            break
    if start is None:
        raise RuntimeError("POST CONTENT marker not found in " + path)

    title_h1_done = False
    blocks = []
    for c in children[start:]:
        if c.tag == W + "p":
            text = para_text(c).strip()
            if not text:
                continue
            if text.startswith("Medically reviewed by:"):
                continue
            style = para_style(c)
            if style in ("Heading1", "Heading2", "Heading3"):
                if style == "Heading1" and not title_h1_done:
                    # first H1 in POST CONTENT is the post title (wording may
                    # differ slightly from BLOG TITLE) — PageHero renders it
                    title_h1_done = True
                    continue
                blocks.append({"type": "heading", "text": text})
            elif is_list_item(c):
                blocks.append({"type": "item", "text": text})
            else:
                blocks.append({"type": "para", "text": text})
        elif c.tag == W + "tbl":
            rows = [[cell_text(tc) for tc in tr.findall(W + "tc")]
                    for tr in c.findall(W + "tr")]
            rows = [r for r in rows if any(r)]
            if rows:
                blocks.append({"type": "table", "text": "",
                               "head": rows[0], "rows": rows[1:]})
    return fm, blocks

def read_minutes(rt):
    nums = [int(n) for n in re.findall(r"\d+", rt)]
    return max(nums) if nums else None

def main():
    out_dir = os.path.join(os.path.dirname(__file__), "..", "archive",
                           "analysis", "new-blog-extract")
    os.makedirs(out_dir, exist_ok=True)
    for path in sorted(glob.glob(os.path.join(os.path.dirname(__file__),
                                              "..", "new_blog", "*.docx"))):
        fm, blocks = parse_docx(path)
        fm["read_minutes"] = read_minutes(fm.get("read_time", ""))
        post = {"meta": fm, "blocks": blocks,
                "source": os.path.basename(path)}
        out = os.path.join(out_dir, fm.get("slug", "post") + ".json")
        with open(out, "w", encoding="utf-8") as f:
            json.dump(post, f, ensure_ascii=False, indent=2)
        print(f"{os.path.basename(path)} -> {out} "
              f"({len(blocks)} blocks, "
              f"{sum(1 for b in blocks if b['type']=='table')} tables)")

if __name__ == "__main__":
    main()
