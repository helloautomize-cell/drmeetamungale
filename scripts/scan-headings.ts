import { blogBodies } from "../content/blog-bodies";
const out: string[] = [];
for (const b of blogBodies) {
  b.blocks.forEach((blk: any) => {
    if (blk.type === "heading" && blk.text) out.push(blk.text);
  });
}
console.log(out.join("\n"));
console.error("total headings:", out.length);
