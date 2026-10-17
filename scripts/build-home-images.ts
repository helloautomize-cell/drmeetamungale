import sharp from "sharp";
import fs from "fs";
import path from "path";

// Builds the homepage images in public/images/home/ from the intake
// sources in image-sources/ (kept out of public/ so unprocessed sources
// are never deployed). Run: npx tsx scripts/build-home-images.ts
// Crop + resize only — no retouching, no upscaling. Every output <200KB.
//
// Vercel does not have image-sources/ or draft-assets/ (both are
// gitignored), so every step SKIPS with a message when its source is
// missing — this script must never fail a deploy. The generated files
// the live pages need are committed to the repo instead.
//
// public/images/home/pristine-fundus-camera.webp is a committed file
// (an approved illustrative placeholder until 2026-10-27) — this script
// never generates, overwrites or deletes it.

const ROOT = path.join(path.dirname(new URL(import.meta.url).pathname), "..");
const SRC = path.join(ROOT, "image-sources");
const OUT = path.join(ROOT, "public", "images", "home");
const LIMIT = 200 * 1024;

fs.mkdirSync(OUT, { recursive: true });

async function webp(
  input: string,
  output: string,
  pipeline: (img: sharp.Sharp) => sharp.Sharp
) {
  if (!fs.existsSync(input)) {
    console.log(`skip ${path.basename(output)}: missing ${path.relative(ROOT, input)}`);
    return;
  }
  // Step quality down until under 200KB.
  for (const quality of [80, 72, 64, 56, 48]) {
    const info = await pipeline(sharp(input))
      .webp({ quality })
      .toFile(output);
    if (info.size <= LIMIT) {
      console.log(`${path.basename(output)}: ${info.width}x${info.height}, ${info.size} bytes (q${quality})`);
      return;
    }
  }
  console.error(`FAIL: ${path.basename(output)} still over 200KB`);
  process.exit(1);
}

async function main() {
  // Column 2 — 4:5 crop keeping face, embroidered name and the slit
  // lamp (lamp column occupies the left ~45%, name is on the chest).
  // Crop 1025x1281 from the left edge of the 1227x1281 source, then
  // downscale to 960x1200.
  await webp(path.join(SRC, "dr-sachin-slit-lamp-v2.png"), path.join(OUT, "why-consultation.webp"), (img) =>
    img.extract({ left: 0, top: 0, width: 1025, height: 1281 }).resize(960, 1200)
  );

  // Column 1 — entrance photo. The v2 source is already 3:2
  // (1536x1024) with the whole signboard in frame, so a straight
  // downscale to 800x533 keeps everything. Never upscaled; the page
  // fills the column with object-cover centred on the signboard.
  await webp(path.join(SRC, "hospital-entrance-v2.png"), path.join(OUT, "why-entrance.webp"), (img) =>
    img.resize(800, 533, { fit: "fill" })
  );

  // Conference photos — unapproved, gitignored, data-only entries in
  // content/gallery.ts + content/doctors.ts. Regenerated only for local
  // preview; never shipped.
  for (const [src, out] of [
    ["ophthaquest-2024-panel-v2.png", "conference-2024.webp"],
    ["ophthaquest-2023-award-v2.png", "conference-2023.webp"],
  ] as const) {
    await webp(path.join(SRC, src), path.join(OUT, out), (img) =>
      img.resize(1536, null, { withoutEnlargement: true })
    );
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
