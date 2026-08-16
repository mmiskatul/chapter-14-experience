import { Link } from "@tanstack/react-router";
import { Facebook, MapPin, Phone } from "lucide-react";

import { footerColumns, restaurant } from "@/config/restaurant";

export function Footer() {
  return (
    <footer className="bg-espresso pb-24 pt-20 text-light-text sm:pb-16">
      <div className="mx-auto max-w-[86rem] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <p className="font-[family-name:var(--font-display)] text-2xl tracking-[0.12em]">
              CAFE CHAPTER <span className="text-accent">14</span>
            </p>
            <p className="mt-4 max-w-xs font-[family-name:var(--font-display)] text-lg italic text-light-text/70">
              {restaurant.tagline}
            </p>
            <p className="mt-6 text-sm text-light-text/55">
              {restaurant.city}, {restaurant.country}
            </p>
          </div>

          {footerColumns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className="eyebrow text-caramel-soft">{column.title}</h2>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-light-text/70 transition-colors hover:text-light-text"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h2 className="eyebrow text-caramel-soft">Connect</h2>
            <ul className="mt-5 space-y-3 text-sm text-light-text/70">
              <li>
                <a
                  href={restaurant.social.facebook}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 transition-colors hover:text-light-text"
                >
                  <Facebook className="h-4 w-4" aria-hidden="true" /> Facebook
                </a>
              </li>
              <li>
                <a
                  href={restaurant.phoneHref}
                  className="inline-flex items-center gap-2 transition-colors hover:text-light-text"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" /> {restaurant.phone}
                </a>
              </li>
              <li>
                <a
                  href={restaurant.maps.directions}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 transition-colors hover:text-light-text"
                >
                  <MapPin className="h-4 w-4" aria-hidden="true" /> Get Directions
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-light-text/10 pt-6 text-xs text-light-text/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {restaurant.name}. All rights reserved.</p>
          <p>Menu items, prices and availability are subject to change.</p>
        </div>
      </div>
    </footer>
  );
}
