# Verify the faq-block transform preserved all source text.
# Character-level check: per post, concatenate every text fragment in order
# (Qn./A./numeric prefixes stripped, entities decoded, non-alnum removed) and
# compare old vs new. Any real wording change shows up as a length/char diff.
import json, re, sys
from html import unescape

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

QN = re.compile(r"^Q\s*\d+\s*[:.)\-]?\s*")
AN = re.compile(r"^A\s*[:.)]\s*")
NUMQ = re.compile(r"^\d+[.)]\s+")
MIDA = re.compile(r"\s+A\s*[:.)]\s+")


def load(path):
    src = open(path, encoding="utf-8").read()
    i = src.index("=", src.index("blogBodies")) + 1
    while src[i] in " \t":
        i += 1
    j = src.index("\n];", i)
    arr = src[i:j + 2]
    try:
        return json.loads(arr)
    except json.JSONDecodeError:
        return json.loads(re.sub(r",(\s*[}\]])", r"\1", arr))


def strip_markers(t):
    t = QN.sub("", t)
    t = AN.sub("", t)
    t = NUMQ.sub("", t)
    t = MIDA.sub(" ", t)
    return t


def key(s):
    return re.sub(r"[^a-z0-9]+", "", unescape(s).lower())


def blob(post):
    out = []
    for b in post["blocks"]:
        if b["type"] == "faq":
            out.append(key(strip_markers(b.get("text") or "")))
            for it in b["items"]:
                out.append(key(strip_markers(it["q"])))
                for a in it["a"]:
                    out.append(key(strip_markers(a["text"])))
        else:
            out.append(key(strip_markers(b.get("text", ""))))
            if b["type"] == "table":
                for h in b.get("head") or []:
                    out.append(key(h))
                for r in b.get("rows") or []:
                    for cell in r:
                        out.append(key(cell))
    return "".join(out)


new = load("content/blog-bodies.ts")
old = load("content/blog-bodies.ts.bak")
oldmap = {p["slug"]: p for p in old}

bad = 0
for p in new:
    slug = p["slug"]
    o = oldmap.get(slug)
    a, b = blob(o), blob(p)
    if a == b:
        print(f"OK    {slug}")
        continue
    bad += 1
    print(f"DIFF  {slug}  oldlen={len(a)} newlen={len(b)}")
    for i in range(min(len(a), len(b))):
        if a[i] != b[i]:
            print("   first diff @", i,
                  repr(a[max(0, i - 40):i + 40]),
                  "VS", repr(b[max(0, i - 40):i + 40]))
            break

print("\nposts with char diffs:", bad)
