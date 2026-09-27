"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// shadcn-style button (cva variants + cn merge + asChild).
// Variant names kept (primary/tonal/ghost) using the Mungale design tokens
// so all existing call sites keep working unchanged.
const buttonVariants = cva(
  "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-label-md text-label-md transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-on-primary hover:bg-primary-container shadow-md hover:shadow-lg",
        tonal: "bg-primary-container text-on-primary hover:bg-primary/20",
        ghost:
          "bg-transparent text-primary border border-primary hover:bg-primary hover:text-on-primary",
        cta: "bg-gradient-to-r from-primary to-primary-fixed text-on-primary shadow-brand-md hover:shadow-brand-glow hover:-translate-y-0.5",
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
