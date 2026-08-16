import { Link } from "@tanstack/react-router";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/utils";

export const actionButton = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.16em] transition-all duration-300 disabled:pointer-events-none disabled:opacity-55",
  {
    variants: {
      variant: {
        solid: "bg-espresso text-light-text hover:bg-coffee",
        accent: "bg-accent text-accent-foreground hover:bg-caramel-soft",
        outline:
          "border border-espresso/35 text-espresso hover:border-espresso hover:bg-espresso hover:text-light-text",
        ghostLight:
          "border border-light-text/45 text-light-text hover:border-light-text hover:bg-light-text hover:text-espresso",
        quiet: "text-espresso hover:text-accent",
      },
      size: {
        md: "px-6 py-3.5",
        lg: "px-8 py-4",
        sm: "px-4 py-2.5 text-[0.7rem]",
      },
    },
    defaultVariants: { variant: "solid", size: "md" },
  },
);

type Variants = VariantProps<typeof actionButton>;

export function ActionLink({
  className,
  variant,
  size,
  children,
  ...props
}: ComponentProps<typeof Link> & Variants & { children: ReactNode }) {
  return (
    <Link className={cn(actionButton({ variant, size }), className)} {...props}>
      {children}
    </Link>
  );
}

export function ActionAnchor({
  className,
  variant,
  size,
  children,
  ...props
}: ComponentProps<"a"> & Variants & { children: ReactNode }) {
  return (
    <a className={cn(actionButton({ variant, size }), className)} {...props}>
      {children}
    </a>
  );
}

export function ActionButton({
  className,
  variant,
  size,
  children,
  ...props
}: ComponentProps<"button"> & Variants & { children: ReactNode }) {
  return (
    <button className={cn(actionButton({ variant, size }), className)} {...props}>
      {children}
    </button>
  );
}
