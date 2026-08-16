import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { MobileMenu } from "@/components/MobileMenu";
import { navLinks, restaurant } from "@/config/restaurant";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const transparentStart = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || !transparentStart;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          solid
            ? "border-b border-light-text/10 bg-espresso/95 backdrop-blur-sm"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex h-16 max-w-[86rem] items-center justify-between px-5 sm:h-20 sm:px-8"
        >
          <Link
            to="/"
            className="text-light-text transition-opacity hover:opacity-80"
            aria-label={`${restaurant.name} — home`}
          >
            <span className="font-[family-name:var(--font-display)] text-lg tracking-[0.14em] sm:text-xl">
              CAFE CHAPTER <span className="text-accent">14</span>
            </span>
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  activeOptions={{ exact: link.to === "/" }}
                  className="group relative text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-light-text/75 transition-colors hover:text-light-text data-[status=active]:text-light-text"
                >
                  {link.label}
                  <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full group-data-[status=active]:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Link
              to="/reservation"
              className="hidden bg-accent px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-accent-foreground transition-colors hover:bg-caramel-soft sm:inline-flex"
            >
              Book a Table
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] text-light-text lg:hidden"
            >
              <span className="block h-px w-6 bg-current transition-transform" />
              <span className="block h-px w-6 bg-current" />
              <span className="block h-px w-4 bg-current" />
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
