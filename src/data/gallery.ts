/**
 * Centralized image configuration for the gallery and editorial sections.
 * Replace the imported files in src/assets with official restaurant photos —
 * no other file needs to change.
 */

import atmosphereWide from "@/assets/atmosphere-wide.jpg";
import coldDrinks from "@/assets/drinks-cold.jpg";
import coffee from "@/assets/drinks-coffee.jpg";
import events from "@/assets/events-table.jpg";
import appetizer from "@/assets/food-appetizer.jpg";
import butterMasala from "@/assets/food-butter-masala.jpg";
import chowmein from "@/assets/food-chowmein.jpg";
import kebab from "@/assets/food-kebab.jpg";
import setMenu from "@/assets/food-set-menu.jpg";
import tandoori from "@/assets/food-tandoori.jpg";
import heroInterior from "@/assets/hero-interior.jpg";
import interiorDetail from "@/assets/interior-detail.jpg";
import introTable from "@/assets/intro-table.jpg";
import peopleDining from "@/assets/people-dining.jpg";

export const siteImages = {
  hero: heroInterior,
  intro: introTable,
  atmosphere: atmosphereWide,
  people: peopleDining,
  interiorDetail,
  events,
  coffee,
  coldDrinks,
  reservation: events,
};

export type GalleryCategory = "food" | "drinks" | "interior" | "people" | "events";

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: GalleryCategory;
  /** Controls masonry emphasis: tall, wide or standard tiles. */
  span: "tall" | "wide" | "standard";
}

export const galleryCategories: Array<{ id: "all" | GalleryCategory; label: string }> = [
  { id: "all", label: "All" },
  { id: "food", label: "Food" },
  { id: "drinks", label: "Drinks" },
  { id: "interior", label: "Interior" },
  { id: "people", label: "People" },
  { id: "events", label: "Events" },
];

export const galleryImages: GalleryImage[] = [
  {
    id: "g-tandoori",
    src: tandoori,
    alt: "Tandoori chicken served on a cast iron platter with charred onion and lemon",
    caption: "Tandoori chicken, straight off the fire",
    category: "food",
    span: "tall",
  },
  {
    id: "g-interior-hero",
    src: heroInterior,
    alt: "Warm restaurant interior with leather banquettes and brass pendant lights",
    caption: "The dining room at golden hour",
    category: "interior",
    span: "wide",
  },
  {
    id: "g-coffee",
    src: coffee,
    alt: "Cappuccino with latte art on a dark wooden table",
    caption: "Cafe hours",
    category: "drinks",
    span: "standard",
  },
  {
    id: "g-people",
    src: peopleDining,
    alt: "Friends laughing together over dinner at a warmly lit table",
    caption: "Conversations that last a little longer",
    category: "people",
    span: "wide",
  },
  {
    id: "g-chowmein",
    src: chowmein,
    alt: "Bowl of chicken chowmein topped with spring onion",
    caption: "Chowmein, tossed to order",
    category: "food",
    span: "standard",
  },
  {
    id: "g-cold-drinks",
    src: coldDrinks,
    alt: "Iced mint cooler and cold coffee on a dark marble counter",
    caption: "Something cold to start",
    category: "drinks",
    span: "tall",
  },
  {
    id: "g-interior-detail",
    src: interiorDetail,
    alt: "Brass wall sconce and dried florals against a textured cream wall",
    caption: "Details around the room",
    category: "interior",
    span: "tall",
  },
  {
    id: "g-kebab",
    src: kebab,
    alt: "Chicken kebab skewers grilling over charcoal",
    caption: "Off the charcoal grill",
    category: "food",
    span: "standard",
  },
  {
    id: "g-events",
    src: events,
    alt: "Long table set with candles and plated dishes for a private event",
    caption: "Set for a celebration",
    category: "events",
    span: "wide",
  },
  {
    id: "g-atmosphere",
    src: atmosphereWide,
    alt: "Guests dining in a warmly lit restaurant room",
    caption: "A full room, a good night",
    category: "people",
    span: "wide",
  },
  {
    id: "g-butter-masala",
    src: butterMasala,
    alt: "Chicken butter masala in a copper bowl with naan",
    caption: "Butter masala and fresh naan",
    category: "food",
    span: "standard",
  },
  {
    id: "g-appetizer",
    src: appetizer,
    alt: "Platter of crispy fried appetizers with dipping sauces",
    caption: "Where every table starts",
    category: "food",
    span: "standard",
  },
  {
    id: "g-set-menu",
    src: setMenu,
    alt: "Complete set menu tray with rice, curry, salad and drinks",
    caption: "Set menus for every appetite",
    category: "events",
    span: "standard",
  },
  {
    id: "g-intro-table",
    src: introTable,
    alt: "Hands passing a shared dish across a candlelit table",
    caption: "Made for sharing",
    category: "people",
    span: "tall",
  },
];
