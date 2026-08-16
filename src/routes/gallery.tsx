import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { FloatingActions, MobileBottomBar } from "@/components/FloatingActions";
import { galleryCategories, galleryImages } from "@/data/gallery";
import type { GalleryCategory } from "@/data/gallery";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Cafe CHAPTER 14" },
      {
        name: "description",
        content:
          "Browse photos of the food, drinks, interior and atmosphere at Cafe CHAPTER 14, Dhaka.",
      },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [active, setActive] = useState<"all" | GalleryCategory>("all");

  const filtered =
    active === "all" ? galleryImages : galleryImages.filter((img) => img.category === active);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-espresso pb-16 pt-40 sm:pt-48">
        <div className="mx-auto max-w-[86rem] px-5 sm:px-8">
          <SectionHeading
            eyebrow="Gallery"
            title="A look inside."
            subtitle="Food, drinks, people and the spaces that bring them together."
            tone="light"
          />
        </div>
      </section>

      {/* Filter */}
      <section className="sticky top-16 z-30 border-b border-border bg-background/95 backdrop-blur-sm sm:top-20">
        <div className="mx-auto max-w-[86rem] px-5 sm:px-8">
          <div className="no-scrollbar flex gap-6 overflow-x-auto py-4">
            {galleryCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActive(cat.id)}
                className={cn(
                  "shrink-0 text-[0.72rem] font-semibold uppercase tracking-[0.18em] transition-colors",
                  active === cat.id
                    ? "border-b-2 border-accent pb-1 text-accent"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry grid */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[86rem] px-5 sm:px-8">
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
            {filtered.map((img) => (
              <Reveal key={img.id} className="mb-4 break-inside-avoid">
                <div className="group relative overflow-hidden rounded-sm">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className={cn(
                      "w-full object-cover transition-transform duration-500 group-hover:scale-105",
                      img.span === "tall" && "aspect-[2/3]",
                      img.span === "wide" && "aspect-[4/3]",
                      img.span === "standard" && "aspect-square",
                    )}
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-espresso/80 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="text-xs font-medium text-light-text">{img.caption}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
      <MobileBottomBar />
    </>
  );
}
