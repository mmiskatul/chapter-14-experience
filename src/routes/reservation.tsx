import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { FloatingActions, MobileBottomBar } from "@/components/FloatingActions";
import { restaurant } from "@/config/restaurant";
import { siteImages } from "@/data/gallery";

export const Route = createFileRoute("/reservation")({
  head: () => ({
    meta: [
      { title: "Reserve a Table — Cafe CHAPTER 14" },
      {
        name: "description",
        content:
          "Book a table at Cafe CHAPTER 14, Dhaka. Call us or fill in the form and we'll confirm your reservation.",
      },
    ],
  }),
  component: ReservationPage,
});

function ReservationPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire up to actual booking backend / email
    setSubmitted(true);
  }

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[45vh] overflow-hidden">
        <img
          src={siteImages.reservation}
          alt="Table set for a reservation at Cafe CHAPTER 14"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="overlay-scrim absolute inset-0" />
        <div className="relative flex min-h-[45vh] items-end pb-14 pt-32">
          <div className="mx-auto w-full max-w-[86rem] px-5 sm:px-8">
            <Reveal>
              <p className="eyebrow text-caramel-soft mb-4">Reservations</p>
              <h1 className="display-xl text-light-text">Book your table.</h1>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Form & contact */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[86rem] px-5 sm:px-8">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:items-start">
            {/* Contact info */}
            <div>
              <SectionHeading eyebrow="Get in Touch" title="Prefer to call?" />
              <Reveal delay={80}>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                  For same-day bookings or large-group reservations, it's fastest to call us
                  directly. We're happy to tailor an experience for your occasion.
                </p>
              </Reveal>
              <Reveal delay={120}>
                <a
                  href={restaurant.phoneHref}
                  className="mt-6 inline-flex items-center gap-3 text-lg font-semibold text-accent hover:text-caramel-soft transition-colors"
                >
                  {restaurant.phone}
                </a>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-8 text-sm text-muted-foreground">
                  {restaurant.city}, {restaurant.country}
                </p>
              </Reveal>
            </div>

            {/* Booking form */}
            <Reveal>
              <div className="rounded-sm border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
                {submitted ? (
                  <div className="py-8 text-center">
                    <h2 className="font-[family-name:var(--font-display)] text-2xl text-foreground">
                      We'll be in touch!
                    </h2>
                    <p className="mt-3 text-muted-foreground">
                      Your reservation request has been received. We'll confirm via phone.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-6 text-sm font-semibold text-accent hover:underline"
                    >
                      Make another booking
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h2 className="font-[family-name:var(--font-display)] text-2xl text-foreground">
                      Request a Reservation
                    </h2>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="res-name"
                          className="eyebrow mb-1.5 block text-foreground/70"
                        >
                          Name
                        </label>
                        <input
                          id="res-name"
                          name="name"
                          type="text"
                          required
                          placeholder="Your full name"
                          className="w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="res-phone"
                          className="eyebrow mb-1.5 block text-foreground/70"
                        >
                          Phone
                        </label>
                        <input
                          id="res-phone"
                          name="phone"
                          type="tel"
                          required
                          placeholder="01XXXXXXXXX"
                          className="w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="res-date"
                          className="eyebrow mb-1.5 block text-foreground/70"
                        >
                          Date
                        </label>
                        <input
                          id="res-date"
                          name="date"
                          type="date"
                          required
                          className="w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="res-guests"
                          className="eyebrow mb-1.5 block text-foreground/70"
                        >
                          Guests
                        </label>
                        <select
                          id="res-guests"
                          name="guests"
                          required
                          className="w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                            <option key={n} value={n}>
                              {n} {n === 1 ? "guest" : "guests"}
                            </option>
                          ))}
                          <option value="9+">9+ guests</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="res-note" className="eyebrow mb-1.5 block text-foreground/70">
                        Notes (optional)
                      </label>
                      <textarea
                        id="res-note"
                        name="note"
                        rows={3}
                        placeholder="Allergies, special occasions, seating preferences…"
                        className="w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-accent py-4 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-accent-foreground transition-colors hover:bg-caramel-soft"
                    >
                      Request Reservation
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
      <MobileBottomBar />
    </>
  );
}
