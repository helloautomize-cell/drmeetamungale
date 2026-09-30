// Side-effect CSS imports (e.g. `import "./globals.css"` in app/layout.tsx)
// are bundled by Next.js but not declared in next/types — this silences the
// editor/TS "cannot find module" diagnostic without affecting the build.
declare module "*.css";
