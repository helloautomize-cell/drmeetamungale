export default function PalettePage() {
  const swatches = [
    { name: "primary", value: "#c41e1e", desc: "Brand crimson (logo red #ed2225 toned for premium medical)" },
    { name: "primary-container", value: "#ffe5e3", desc: "Soft red tint" },
    { name: "primary-fixed", value: "#ed2225", desc: "Logo red" },
    { name: "on-primary", value: "#ffffff", desc: "White text on crimson" },
    { name: "secondary", value: "#0b1c30", desc: "Deep navy/charcoal (logo #0c0607)" },
    { name: "background / surface", value: "#f8f9ff", desc: "Near-white clinical surface" },
    { name: "surface-tint", value: "#e2f5f6", desc: "Very light teal tint" },
    { name: "surface-ice", value: "#f0fdff", desc: "Hero ambient glow" },
    { name: "card-white", value: "#ffffff", desc: "Pure white cards" },
    { name: "border-subtle", value: "#CCFBF1", desc: "Card borders" },
    { name: "outline", value: "#6c7a77", desc: "Input borders" },
    { name: "success-emerald", value: "#10B981", desc: "Success / verification" },
    { name: "star-gold", value: "#F59E0B", desc: "Rating stars" },
  ];
  return (
    <main className="min-h-screen bg-background p-12">
      <h1 className="font-display-hero text-display-hero text-on-surface mb-8">Palette — Mungale Eye Hospital</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {swatches.map((s) => (
          <div key={s.name} className="bg-card-white rounded-2xl p-5 shadow-sm">
            <div className="w-full h-16 rounded-xl mb-3 shadow-sm" style={{ backgroundColor: s.value }} />
            <h3 className="font-label-md font-bold text-on-surface">{s.name}</h3>
            <p className="font-body-sm text-on-surface-variant">{s.value}</p>
            <p className="font-label-sm text-on-surface-variant">{s.desc}</p>
          </div>
        ))}
      </div>
      <p className="font-body-md text-on-surface-variant mt-8">Brand crimson (#c41e1e) derived from logo #ed2225. Deep navy (#0b1c30) from logo #0c0607. All clinical surfaces (#f8f9ff) preserved from reference design.</p>
    </main>
  );
}
