import { Link } from "@tanstack/react-router";
import { Facebook, Phone, X } from "lucide-react";
import { useEffect } from "react";

import { navLinks, restaurant } from "@/config/restaurant";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <div
      id="mobile-navigation"
      aria-hidden={!open}
      className={cn(
        "fixed inset-0 z-[60] bg-espresso transition-all duration-400 lg:hidden",
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
      )}
    >
      <div className="flex h-16 items-center justify-between px-5 sm:h-20 sm:px-8">
        <span className="font-[family-name:var(--font-display)] text-lg tracking-[0.14em] text-light-text">
          CAFE CHAPTER <span className="text-accent">14</span>
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close navigation menu"
          className="flex h-11 w-11 items-center justify-center text-light-text"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <nav aria-label="Mobile" className="px-5 pt-6 sm:px-8">
        <ul className="space-y-1">
          {navLinks.map((link, index) => (
            <li key={link.to} className="border-b border-light-text/10">
              <Link
                to={link.to}
                onClick={onClose}
                className="flex items-baseline gap-4 py-4 font-[family-name:var(--font-display)] text-3xl text-light-text transition-colors hover:text-accent"
              >
                <span className="eyebrow text-[0.6rem] text-accent/70">
                  0{index + 1}
                </span>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-8 space-y-3">
          <Link
            to="/reservation"
            onClick={onClose}
            className="flex min-h-12 items-center justify-center bg-accent text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-accent-foreground"
          >
            Book a Table
          </Link>
          <a
            href={restaurant.phoneHref}
            className="flex min-h-12 items-center justify-center gap-2 border border-light-text/30 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-light-text"
          >
            <Phone className="h-4 w-4" aria-hidden="true" /> Call {restaurant.phone}
          </a>
          <a
            href={restaurant.social.facebook}
            target="_blank"
            rel="noreferrer noopener"
            className="flex min-h-12 items-center justify-center gap-2 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-light-text/70"
          >
            <Facebook className="h-4 w-4" aria-hidden="true" /> Facebook
          </a>
        </div>
      </nav>
    </div>
  );
}
