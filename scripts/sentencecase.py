import re

PRESERVE = set("""OCT OCTA LASIK PRK SMILE ICL IOL DALK DSEK DMEK DSAEK PK PKP GATT SLT IOP NPDR PDR VEGF UV TV LED AI FDA NEI AAO AGV EBAA MGD SLET PTK HbA1c AMD OPD IPD TPA CGHS ESI OTC FAQs FAQ IDRA
Vadodara Gujarat India Indian Mungale Kothi Ahmedabad Mumbai Chennai Hyderabad Delhi Thane Panvel Aurangabad Baroda Sankara Nethralaya LVPEI Prasad Google YouTube Facebook Instagram Practo Justdial Diwali Acanthamoeba Nocardia Herpes COVID Zeiss Meibomian Hindi English American European Asian African Ayurvedic SSG BMC LTM GMC DNB MBBS MS Sir Ratan Tata ESPY Cipla MedlinePlus EyeWiki Cleveland Mayo PhonePe WhatsApp Christmas
January February March April May June July August September October November December
Monday Tuesday Wednesday Thursday Friday Saturday Sunday""".split())
BIGRAM_KEEP = {
    ("New", "Year"), ("Glaucoma", "Awareness"), ("Awareness", "Month"),
    ("Eye", "Bank"), ("Mungale", "Eye"), ("Eye", "Hospital"),
    ("Vitamin", "A"), ("Vitamin", "C"), ("Vitamin", "E"), ("Vitamin", "D"),
    ("Hospital", "Near"), ("Near", "Me"),
}

ENTITY_RE = re.compile(r"&[^;]+;")
PUNCT = "“”\"'()[]{}.,:;!?—–-*#"

def lower_outside_entities(word):
    parts = ENTITY_RE.split(word)
    ents = ENTITY_RE.findall(word)
    out = ""
    for i, part in enumerate(parts):
        out += part.lower()
        if i < len(ents):
            out += ents[i]
    return out

def fix_word(word, is_first, prev_core):
    if not word:
        return word
    core = word.strip(PUNCT)
    core_clean = ENTITY_RE.sub("", core)  # strip entities before checks
    if not core_clean:
        return word
    if prev_core and (prev_core, core_clean) in BIGRAM_KEEP:
        return word
    if core_clean in PRESERVE or (len(core_clean) > 1 and core_clean.isupper()) or any(c.isdigit() for c in core_clean) or core_clean == "I":
        return word
    if is_first:
        w = lower_outside_entities(word)
        return w[0].upper() + w[1:]
    return lower_outside_entities(word)

def sentence_case(text):
    in_quote = False
    out = []
    words = text.split(" ")
    prev_core = None
    for i, w in enumerate(words):
        quotes = w.count('"') + w.count("“") + w.count("”")
        if in_quote:
            out.append(w)
        else:
            out.append(fix_word(w, i == 0, prev_core))
        prev_core = ENTITY_RE.sub("", w.strip(PUNCT))
        if quotes % 2 == 1:
            in_quote = not in_quote
    return " ".join(out)

if __name__ == "__main__":
    import sys
    for line in open("seo-audit/tmp/headings.txt", encoding="utf-8"):
        line = line.rstrip("\n")
        if line:
            print(sentence_case(line))
