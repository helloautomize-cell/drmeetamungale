import re, json, sys

src = open(sys.argv[4] if len(sys.argv) > 4 else r"content/blog-bodies.ts",
           encoding="utf-8").read()
chunks = re.split(r'\{\s*"slug":', src)[1:]
BLOCK = re.compile(r'"type":\s*"(para|heading|item|table)",\s*"text":\s*"((?:[^"\\]|\\.)*)"')

def dec(t):
    try:
        return json.loads('"' + t + '"')
    except Exception:
        return t

# args: slug from to
want = sys.argv[1]
lo, hi = int(sys.argv[2]), int(sys.argv[3])
for ch in chunks:
    slug = re.match(r'\s*"([^"]+)"', ch).group(1)
    if slug != want:
        continue
    blocks = [(t, dec(x)) for t, x in BLOCK.findall(ch)]
    print(slug, "nblocks", len(blocks))
    for i, (t, txt) in enumerate(blocks):
        if lo <= i <= hi:
            print(f"  {i:3d} [{t}] {txt[:95]}")
