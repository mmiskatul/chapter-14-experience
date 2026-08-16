import { createFileRoute, Link } from "@tanstack/react-router";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { FloatingActions, MobileBottomBar } from "@/components/FloatingActions";
import { restaurant } from "@/config/restaurant";
import { popularItems, previewTabs, formatPrice, itemsFor } from "@/data/menu";
import { siteImages } from "@/data/gallery";
import { useState } from "react";
import { cn } from "@/lib/utils";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [activeTab, setActiveTab] = useState<string>("popular");
  const tabItems = itemsFor(activeTab as "popular" | "all");

  return (
    <>
      <Navbar />

      {/* ─── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative flex min-h-screen items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={siteImages.hero}
            alt="Interior of Cafe CHAPTER 14"
            className="h-full w-full object-cover animate-slow-zoom"
          />
          <div className="overlay-scrim absolute inset-0" />
        </div>

        {/* Content */}
        <div className="relative w-full pb-16 pt-40 sm:pb-24">
          <div className="mx-auto max-w-[86rem] px-5 sm:px-8">
            <Reveal>
              <p className="eyebrow text-caramel-soft mb-6">
                {restaurant.city} &middot; {restaurant.country}
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="display-xl text-light-text max-w-3xl">
                Good Food. <span className="text-caramel-soft">Great&nbsp;Moments.</span> Your
                Chapter.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-light-text/75 sm:text-lg">
                {restaurant.description}
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/menu"
                  className="bg-accent px-8 py-4 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-accent-foreground transition-colors hover:bg-caramel-soft"
                >
                  View Menu
                </Link>
                <Link
                  to="/reservation"
                  className="border border-light-text/45 px-8 py-4 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-light-text transition-colors hover:border-light-text hover:bg-light-text hover:text-espresso"
                >
                  Book a Table
                </Link>
              </div>
            </Reveal>

            {/* Scroll indicator */}
            <Reveal delay={400}>
              <div className="mt-16 hidden sm:block">
                <span className="animate-scroll-hint block h-8 w-px bg-light-text/40 mx-auto" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── Intro ────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-[86rem] px-5 sm:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-24">
            <SectionHeading
              eyebrow="Welcome"
              title="A dining experience worth returning to."
              subtitle="Cafe CHAPTER 14 is where every visit becomes a memory — fresh flavours, a warm atmosphere, and people who care."
            />
            <Reveal className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <img
                src={siteImages.intro}
                alt="Hands sharing food around a candlelit table"
                className="h-full w-full object-cover"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── Menu preview ─────────────────────────────────────────────────── */}
      <section className="bg-espresso py-20 sm:py-28">
        <div className="mx-auto max-w-[86rem] px-5 sm:px-8">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Menu Highlights"
              title="Something for everyone."
              tone="light"
            />
            <Link
              to="/menu"
              className="eyebrow shrink-0 border-b border-caramel-soft pb-0.5 text-caramel-soft transition-colors hover:text-light-text"
            >
              Full Menu →
            </Link>
          </div>

          {/* Tabs */}
          <div className="no-scrollbar mt-10 flex gap-6 overflow-x-auto border-b border-light-text/15 pb-3">
            {previewTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "shrink-0 pb-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] transition-colors",
                  activeTab === tab.id
                    ? "border-b-2 border-accent text-accent"
                    : "text-light-text/55 hover:text-light-text",
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Items */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {tabItems.slice(0, 8).map((item) => (
              <Reveal key={item.id}>
                <div className="group overflow-hidden rounded-sm bg-coffee">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {item.chefsChoice && (
                      <span className="absolute left-3 top-3 bg-accent px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-widest text-accent-foreground">
                        Chef's Choice
                      </span>
                    )}
                  </div>
                  <div className="p-4">
                    <p className="font-[family-name:var(--font-display)] text-base text-light-text">
                      {item.name}
                    </p>
                    <p className="mt-0.5 font-semibold text-accent">{formatPrice(item.price)}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Gallery strip ────────────────────────────────────────────────── */}
      <section className="overflow-hidden py-20 sm:py-28">
        <div className="mx-auto max-w-[86rem] px-5 sm:px-8">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading eyebrow="Gallery" title="The chapter in pictures." />
            <Link
              to="/gallery"
              className="eyebrow shrink-0 border-b border-accent pb-0.5 text-accent transition-colors hover:text-caramel-soft"
            >
              View Gallery →
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {[siteImages.hero, siteImages.people, siteImages.coffee, siteImages.atmosphere].map(
              (src, i) => (
                <Reveal key={src} delay={i * 60}>
                  <div className="group overflow-hidden rounded-sm aspect-square">
                    <img
                      src={src}
                      alt={`Gallery image ${i + 1}`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </Reveal>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-24 sm:py-36">
        <img
          src={siteImages.events}
          alt="Private event table set at Cafe CHAPTER 14"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="overlay-scrim absolute inset-0" />
        <Reveal className="relative mx-auto max-w-[86rem] px-5 sm:px-8 text-center">
          <p className="eyebrow text-caramel-soft mb-4">Make a Reservation</p>
          <h2 className="display-lg text-light-text">Reserve your table today.</h2>
          <p className="mx-auto mt-5 max-w-md text-base text-light-text/75">
            Whether it's a casual lunch or a special occasion, we'd love to have you. Book by phone
            or fill in our online form.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/reservation"
              className="bg-accent px-8 py-4 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-accent-foreground transition-colors hover:bg-caramel-soft"
            >
              Book a Table
            </Link>
            <a
              href={restaurant.phoneHref}
              className="border border-light-text/45 px-8 py-4 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-light-text transition-colors hover:border-light-text hover:bg-light-text hover:text-espresso"
            >
              Call {restaurant.phone}
            </a>
          </div>
        </Reveal>
      </section>

      <Footer />
      <FloatingActions />
      <MobileBottomBar />
    </>
  );
}
