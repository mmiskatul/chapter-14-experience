import { createFileRoute } from "@tanstack/react-router";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { FloatingActions, MobileBottomBar } from "@/components/FloatingActions";
import { restaurant } from "@/config/restaurant";
import { Facebook, Phone, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Cafe CHAPTER 14" },
      {
        name: "description",
        content: "Contact Cafe CHAPTER 14 — call us, find us on Facebook, or drop by in Dhaka.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-espresso pb-16 pt-40 sm:pt-48">
        <div className="mx-auto max-w-[86rem] px-5 sm:px-8">
          <SectionHeading eyebrow="Contact" title="We'd love to hear from you." tone="light" />
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[86rem] px-5 sm:px-8">
          <div className="grid gap-6 sm:grid-cols-3">
            {/* Phone */}
            <Reveal>
              <div className="rounded-sm border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
                <Phone className="h-6 w-6 text-accent" aria-hidden="true" />
                <h2 className="mt-4 font-[family-name:var(--font-display)] text-xl">Call Us</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  The fastest way to reach us — for reservations, orders and general enquiries.
                </p>
                <a
                  href={restaurant.phoneHref}
                  className="mt-5 inline-block font-semibold text-accent hover:text-caramel-soft transition-colors"
                >
                  {restaurant.phone}
                </a>
              </div>
            </Reveal>

            {/* Facebook */}
            <Reveal delay={80}>
              <div className="rounded-sm border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
                <Facebook className="h-6 w-6 text-accent" aria-hidden="true" />
                <h2 className="mt-4 font-[family-name:var(--font-display)] text-xl">Facebook</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Follow us for daily specials, updates and to send us a message.
                </p>
                <a
                  href={restaurant.social.facebook}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-5 inline-block font-semibold text-accent hover:text-caramel-soft transition-colors"
                >
                  @cafechapter14
                </a>
              </div>
            </Reveal>

            {/* Location */}
            <Reveal delay={160}>
              <div className="rounded-sm border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
                <MapPin className="h-6 w-6 text-accent" aria-hidden="true" />
                <h2 className="mt-4 font-[family-name:var(--font-display)] text-xl">Find Us</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {restaurant.city}, {restaurant.country}
                </p>
                <a
                  href={restaurant.maps.directions}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-5 inline-block font-semibold text-accent hover:text-caramel-soft transition-colors"
                >
                  Get Directions →
                </a>
              </div>
            </Reveal>
          </div>

          {/* Map embed */}
          <Reveal className="mt-12">
            <div className="aspect-[16/7] overflow-hidden rounded-sm border border-border">
              <iframe
                src={restaurant.maps.embed}
                title={`Map showing ${restaurant.name}`}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
      <FloatingActions />
      <MobileBottomBar />
    </>
  );
}
