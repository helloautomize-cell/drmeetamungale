import { blogBodies } from "../content/blog-bodies";
const BANNED = [
  /\bdelve\b/i, /\btapestry\b/i, /\brealm\b/i, /\blandscape\b/i, /\bnavigate\b/i,
  /\bembark\b/i, /\bjourney\b/i, /\bunlock\b/i, /\belevate\b/i, /\bempower\b/i,
  /\bseamless\b/i, /\brobust\b/i, /\bpivotal\b/i, /\bcrucial\b/i, /\bvital\b/i,
  /\bmyriad\b/i, /\btestament\b/i, /\bholistic\b/i, /\bgame[- ]changer\b/i,
  /in today's fast-paced world/i, /it's important to note/i, /when it comes to/i,
  /whether you're .{1,20} or /i, /comprehensive guide/i, /it's not just .{1,30}, it's/i,
  /in conclusion/i, /the bottom line/i, /cutting[- ]edge\b/i, /paramount\b/i,
  /here's the thing/i, /that said,/i, /the reality is/i, /\bgenuinely\b/i,
  /\bnuanced\b/i, /\bstraightforward\b/i, /world-class/i,
];
let total = 0;
for (const b of blogBodies) {
  b.blocks.forEach((blk: any, i: number) => {
    const texts: string[] = [];
    if (blk.text) texts.push(blk.text);
    for (const it of blk.items ?? []) {
      if (typeof it === "string") texts.push(it);
      else if (it.q) { texts.push(it.q); for (const ab of it.a ?? []) texts.push(ab.text); }
      else if (it.text) texts.push(it.text);
    }
    for (const t of texts) {
      for (const re of BANNED) {
        const m = t.match(re);
        if (m) { console.log(`${b.slug} [${i}]: "${m[0]}" — …${t.slice(Math.max(0, m.index! - 40), m.index! + m[0].length + 50)}…`); total++; }
      }
    }
  });
}
console.log("TOTAL", total);
