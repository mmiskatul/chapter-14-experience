import { createFileRoute } from "@tanstack/react-router";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { FloatingActions, MobileBottomBar } from "@/components/FloatingActions";
import { restaurant } from "@/config/restaurant";
import { siteImages } from "@/data/gallery";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Cafe CHAPTER 14" },
      {
        name: "description",
        content:
          "Learn about Cafe CHAPTER 14 — our story, our food philosophy, and why we've become a favourite dining destination in Dhaka.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[55vh] overflow-hidden">
        <img
          src={siteImages.atmosphere}
          alt="Warm dining room at Cafe CHAPTER 14"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="overlay-scrim absolute inset-0" />
        <div className="relative flex min-h-[55vh] items-end pb-16 pt-32 sm:pb-24">
          <div className="mx-auto w-full max-w-[86rem] px-5 sm:px-8">
            <Reveal>
              <p className="eyebrow text-caramel-soft mb-4">Our Story</p>
              <h1 className="display-xl text-light-text max-w-3xl">A chapter worth savouring.</h1>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Story section */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-[86rem] px-5 sm:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-24">
            <div>
              <SectionHeading
                eyebrow="Who We Are"
                title="Good Food. Great Moments."
                subtitle={restaurant.tagline}
              />
              <Reveal delay={100}>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                  Cafe CHAPTER 14 was born out of a simple belief — that great food and a warm
                  atmosphere can turn any ordinary day into a memory worth keeping. Located in the
                  heart of {restaurant.city}, we blend the best of Chinese, Indian, Continental and
                  café cooking into a menu that has something for everyone.
                </p>
              </Reveal>
              <Reveal delay={150}>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Every dish is prepared with care, every guest is welcomed like a regular, and
                  every visit is a new chapter in your story with us.
                </p>
              </Reveal>
            </div>
            <Reveal className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <img
                src={siteImages.people}
                alt="Guests enjoying dinner at Cafe CHAPTER 14"
                className="h-full w-full object-cover"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-espresso py-20 sm:py-28 text-light-text">
        <div className="mx-auto max-w-[86rem] px-5 sm:px-8">
          <SectionHeading
            eyebrow="What We Stand For"
            title="Our principles."
            tone="light"
            align="center"
          />
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {[
              {
                title: "Quality First",
                body: "We source fresh ingredients daily and cook everything to order. No shortcuts, ever.",
              },
              {
                title: "Warm Hospitality",
                body: "Whether it's your first visit or your fiftieth, you'll always be greeted with a smile.",
              },
              {
                title: "Community",
                body: "We're proud to be a gathering place for families, friends and colleagues in Dhaka.",
              },
            ].map((v) => (
              <Reveal key={v.title}>
                <div className="border-t border-light-text/20 pt-6">
                  <h3 className="font-[family-name:var(--font-display)] text-xl">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-light-text/70">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[86rem] px-5 sm:px-8">
          <Reveal className="relative aspect-[16/7] overflow-hidden rounded-sm">
            <img
              src={siteImages.interiorDetail}
              alt="Interior details at Cafe CHAPTER 14"
              className="h-full w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      <Footer />
      <FloatingActions />
      <MobileBottomBar />
    </>
  );
}
