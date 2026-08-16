import { createFileRoute } from "@tanstack/react-router";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SectionHeading } from "@/components/SectionHeading";
import { FloatingActions, MobileBottomBar } from "@/components/FloatingActions";
import { menuCategories, menuItems, menuFilters, formatPrice, itemsFor } from "@/data/menu";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Cafe CHAPTER 14" },
      {
        name: "description",
        content:
          "Explore the full Cafe CHAPTER 14 menu — chowmein, pasta, kebab, curries, burgers, set menus and more.",
      },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const [active, setActive] = useState<string>("popular");

  const items = itemsFor(active as "popular" | "all");

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative bg-espresso pb-16 pt-40 sm:pt-48">
        <div className="mx-auto max-w-[86rem] px-5 sm:px-8">
          <SectionHeading
            eyebrow="Our Menu"
            title="Every dish, made with care."
            subtitle="Explore our full menu — from street-inspired starters to slow-cooked curries."
            tone="light"
          />
        </div>
      </section>

      {/* Filter tabs */}
      <section className="sticky top-16 z-30 border-b border-border bg-background/95 backdrop-blur-sm sm:top-20">
        <div className="mx-auto max-w-[86rem] px-5 sm:px-8">
          <div className="no-scrollbar flex gap-6 overflow-x-auto py-4">
            {menuFilters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setActive(f.id)}
                className={cn(
                  "shrink-0 text-[0.72rem] font-semibold uppercase tracking-[0.18em] transition-colors",
                  active === f.id
                    ? "text-accent border-b-2 border-accent pb-1"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Items grid */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[86rem] px-5 sm:px-8">
          {items.length === 0 ? (
            <p className="text-center text-muted-foreground">No items available.</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {items.map((item) => (
                <article
                  key={item.id}
                  className="group overflow-hidden rounded-sm border border-border bg-card shadow-[var(--shadow-soft)] transition-shadow hover:shadow-[var(--shadow-lift)]"
                >
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
                    {!item.chefsChoice && item.popular && (
                      <span className="absolute left-3 top-3 bg-espresso/80 px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-widest text-light-text">
                        Popular
                      </span>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-[family-name:var(--font-display)] text-lg leading-snug text-foreground">
                      {item.name}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="font-semibold text-accent">{formatPrice(item.price)}</span>
                      {item.tags.length > 0 && (
                        <span className="text-[0.65rem] uppercase tracking-wider text-muted-foreground">
                          {item.tags[0]}
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
      <FloatingActions />
      <MobileBottomBar />
    </>
  );
}
