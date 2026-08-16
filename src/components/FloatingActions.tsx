import { Link } from "@tanstack/react-router";
import { CalendarCheck, MapPin, Phone, UtensilsCrossed } from "lucide-react";

import { restaurant } from "@/config/restaurant";

/** Desktop: single floating call button. */
export function FloatingActions() {
  return (
    <a
      href={restaurant.phoneHref}
      aria-label={`Call ${restaurant.name} at ${restaurant.phone}`}
      className="fixed bottom-8 right-8 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-[var(--shadow-lift)] transition-transform duration-300 hover:scale-105 sm:flex"
    >
      <Phone className="h-5 w-5" aria-hidden="true" />
    </a>
  );
}

/** Mobile: sticky bottom action bar. */
export function MobileBottomBar() {
  const itemClass =
    "flex flex-1 flex-col items-center justify-center gap-1 py-3 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-light-text/80 transition-colors hover:text-light-text";

  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-50 flex border-t border-light-text/10 bg-espresso/97 backdrop-blur-sm sm:hidden"
    >
      <a href={restaurant.phoneHref} className={itemClass}>
        <Phone className="h-4 w-4" aria-hidden="true" />
        Call
      </a>
      <Link to="/menu" className={itemClass}>
        <UtensilsCrossed className="h-4 w-4" aria-hidden="true" />
        Menu
      </Link>
      <a
        href={restaurant.maps.directions}
        target="_blank"
        rel="noreferrer noopener"
        className={itemClass}
      >
        <MapPin className="h-4 w-4" aria-hidden="true" />
        Directions
      </a>
      <Link to="/reservation" className={`${itemClass} bg-accent text-accent-foreground`}>
        <CalendarCheck className="h-4 w-4" aria-hidden="true" />
        Book
      </Link>
    </nav>
  );
}
