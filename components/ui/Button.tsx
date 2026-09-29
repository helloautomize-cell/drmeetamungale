"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// shadcn-style button (cva variants + cn merge + asChild).
// CTA hierarchy per design.md: primary = flat red filled (hover dark red);
// secondary = black outline; tertiary = plain text link (inline, not here).
// "cta" = primary with lift, for the single booking action per view.
const buttonVariants = cva(
  "inline-flex items-center gap-2 px-6 py-3 rounded-full font-label-md text-label-md font-semibold transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-on-primary hover:bg-primary-fixed",
        secondary:
          "bg-transparent text-on-surface ring-1 ring-inset ring-secondary/30 hover:ring-secondary hover:bg-secondary hover:text-white",
        tonal: "bg-primary-container text-primary hover:bg-primary/10",
        ghost:
          "bg-transparent text-primary hover:underline shadow-none px-2",
        // §2.4 tertiary — text link with underline that draws on hover
        // (.btn-link in globals.css). Compose inside a `group` parent.
        tertiary:
          "bg-transparent text-ink shadow-none px-1 py-1 h-auto rounded-none btn-link hover:text-brand-red-strong",
        cta: "bg-primary text-on-primary shadow-brand-md hover:bg-primary-fixed hover:shadow-brand-glow hover:-translate-y-0.5",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
