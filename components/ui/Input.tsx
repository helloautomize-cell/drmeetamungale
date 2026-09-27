import React from "react";
import { ChevronDown } from "lucide-react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ label, ...props }: InputProps) {
  return (
    <div>
      {label && <label className="block font-label-sm text-label-sm text-on-surface font-semibold mb-1">{label}</label>}
      <input
        className="w-full bg-surface-canvas text-on-surface font-body-md text-body-md rounded-lg px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/40 placeholder:text-outline-variant"
        {...props}
      />
    </div>
  );
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
}

export function Select({ label, children, ...props }: SelectProps) {
  return (
    <div>
      {label && <label className="block font-label-sm text-label-sm text-on-surface font-semibold mb-1">{label}</label>}
      <div className="relative">
        <select
          className="w-full bg-surface-canvas text-on-surface font-body-md text-body-md rounded-lg px-3.5 py-2.5 appearance-none focus:outline-none focus:ring-2 focus:ring-primary/40 cursor-pointer"
          {...props}
        >
          {children}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-2.5 w-5 h-5 text-on-surface-variant" />
      </div>
    </div>
  );
}
