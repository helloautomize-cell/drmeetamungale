import re, json, sys

src = open(r"content/blog-bodies.ts", encoding="utf-8").read()
chunks = re.split(r'\{\s*"slug":', src)[1:]
BLOCK = re.compile(r'"type":\s*"(para|heading|item|table)",\s*"text":\s*"((?:[^"\\]|\\.)*)"')
QN = re.compile(r"^Q\s*\d+[:.)]")

def dec(t):
    try:
        return json.loads('"' + t + '"')
    except Exception:
        return t

want = set(sys.argv[1:])
for ch in chunks:
    slug = re.match(r'\s*"([^"]+)"', ch).group(1)
    if want and slug not in want:
        continue
    blocks = [(t, dec(x)) for t, x in BLOCK.findall(ch)]
    qn = [i for i, (t, txt) in enumerate(blocks) if QN.match(txt.strip())]
    if not qn:
        continue
    print("=" * 25, slug)
    # context: 2 blocks before first Qn
    i0 = qn[0]
    for t, txt in blocks[max(0, i0 - 2):i0 + 1]:
        print(f"  ctx[{t}] {txt[:120]}")
