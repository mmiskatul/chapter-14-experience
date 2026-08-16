import { createFileRoute } from "@tanstack/react-router";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { FloatingActions, MobileBottomBar } from "@/components/FloatingActions";
import { restaurant } from "@/config/restaurant";

export const Route = createFileRoute("/location")({
  head: () => ({
    meta: [
      { title: "Location — Cafe CHAPTER 14" },
      {
        name: "description",
        content: `Find Cafe CHAPTER 14 in ${restaurant.city}, ${restaurant.country}. Get directions and opening hours.`,
      },
    ],
  }),
  component: LocationPage,
});

function LocationPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-espresso pb-16 pt-40 sm:pt-48">
        <div className="mx-auto max-w-[86rem] px-5 sm:px-8">
          <SectionHeading
            eyebrow="Location"
            title="Come find us."
            subtitle={`${restaurant.city}, ${restaurant.country}`}
            tone="light"
          />
        </div>
      </section>

      {/* Map + details */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[86rem] px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:items-start">
            {/* Map */}
            <Reveal className="overflow-hidden rounded-sm border border-border aspect-[4/3]">
              <iframe
                src={restaurant.maps.embed}
                title={`Map showing location of ${restaurant.name}`}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>

            {/* Info panel */}
            <div className="space-y-8">
              <Reveal>
                <div className="rounded-sm border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
                  <h2 className="font-[family-name:var(--font-display)] text-xl">Address</h2>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {restaurant.city}, {restaurant.country}
                  </p>
                  <a
                    href={restaurant.maps.directions}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-caramel-soft transition-colors"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </Reveal>

              {restaurant.openingHours.length > 0 && (
                <Reveal delay={80}>
                  <div className="rounded-sm border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
                    <h2 className="font-[family-name:var(--font-display)] text-xl">
                      Opening Hours
                    </h2>
                    <ul className="mt-4 space-y-2">
                      {restaurant.openingHours.map((h) => (
                        <li key={h.days} className="flex justify-between text-sm">
                          <span className="text-foreground">{h.days}</span>
                          <span className="text-muted-foreground">{h.hours}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              )}

              <Reveal delay={120}>
                <div className="rounded-sm border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
                  <h2 className="font-[family-name:var(--font-display)] text-xl">Phone</h2>
                  <a
                    href={restaurant.phoneHref}
                    className="mt-3 inline-block font-semibold text-accent hover:text-caramel-soft transition-colors"
                  >
                    {restaurant.phone}
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
      <MobileBottomBar />
    </>
  );
}
