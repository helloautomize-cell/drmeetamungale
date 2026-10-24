// One-off: derive 1200x630 landscape OG crops from the portrait specialty
// photos (OG-021). Center-crop keeps the subject band.
import sharp from "sharp";
import { join } from "node:path";

const PAIRS: [string, string][] = [
  ["specialty-cataract.jpg", "og-cataract.jpg"],
  ["specialty-cornea.jpg", "og-cornea.jpg"],
  ["specialty-glaucoma.jpg", "og-glaucoma.jpg"],
  ["specialty-optical.jpg", "og-optical.jpg"],
];

const dir = join(process.cwd(), "public", "images", "mungale");
for (const [src, out] of PAIRS) {
  await sharp(join(dir, src))
    .resize(1200, 630, { fit: "cover", position: "centre" })
    .jpeg({ quality: 82 })
    .toFile(join(dir, out));
  console.log("wrote", out);
}
