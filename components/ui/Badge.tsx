import React from "react";

export function Badge({ children, variant = "primary" }: { children: React.ReactNode; variant?: "primary" | "secondary" | "success" }) {
  const styles = {
    primary: "bg-primary-container text-on-primary",
    secondary: "bg-secondary-container text-on-secondary",
    success: "bg-success-emerald/10 text-success-emerald",
  };
  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md font-label-sm text-label-sm font-bold ${styles[variant]}`}>
      {children}
    </span>
  );
}
