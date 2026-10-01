import re, json, sys

src = open(r"content/blog-bodies.ts", encoding="utf-8").read()
chunks = re.split(r'\{\s*"slug":', src)[1:]
BLOCK = re.compile(r'"type":\s*"(para|heading|item|table)",\s*"text":\s*"((?:[^"\\]|\\.)*)"')
FAQ_HEAD = re.compile(r"^(FAQ SECTION|.*Frequently Asked.*|.*FAQs.*)$", re.I)
QN = re.compile(r"^Q\s*\d+[:.)]")

def dec(t):
    try:
        return json.loads('"' + t + '"')
    except Exception:
        return t

for ch in chunks:
    slug = re.match(r'\s*"([^"]+)"', ch).group(1)
    blocks = [(t, dec(x)) for t, x in BLOCK.findall(ch)]

    # locate FAQ start: heading/para matching FAQ_HEAD, or first Qn para run
    start = None
    for i, (t, txt) in enumerate(blocks):
        if FAQ_HEAD.match(txt.strip()):
            start = i
            break
    if start is None:
        qruns = [i for i, (t, txt) in enumerate(blocks) if t == "para" and QN.match(txt.strip())]
        if qruns:
            start = qruns[0]
    if start is None:
        print(f"{slug:62s} NO FAQ")
        continue

    # classify blocks after start
    seg = blocks[start + 1:]
    desc = []
    for t, txt in seg:
        if t == "heading":
            desc.append("H?" if txt.strip().endswith("?") else "H.")
        elif t == "para":
            s = txt.strip()
            if QN.match(s):
                desc.append("Qn")
            elif s.endswith("?"):
                desc.append("P?")
            else:
                desc.append("P.")
        else:
            desc.append(t[0].upper())
    head_txt = blocks[start][1][:40]
    print(f"{slug:62s} [{head_txt}] {' '.join(desc)}")
