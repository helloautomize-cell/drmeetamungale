import React from "react";

export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`bg-card-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-5 sm:p-6 ${className}`}>{children}</div>;
}
