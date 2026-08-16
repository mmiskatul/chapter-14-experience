/**
 * Single source of truth for restaurant information.
 * Update values here — nothing else in the codebase hardcodes them.
 *
 * NOTE: address and opening hours are intentionally unverified. Fill them in
 * only once confirmed by the restaurant owner; components hide unset fields.
 */

export interface OpeningHour {
  days: string;
  hours: string;
}

export const restaurant = {
  name: "Cafe CHAPTER 14",
  shortName: "CHAPTER 14",
  tagline: "Good Food. Great Moments. Your Chapter.",
  description:
    "Discover Cafe CHAPTER 14 — delicious food, a welcoming atmosphere and memorable dining experiences in Dhaka.",
  phone: "01711945873",
  phoneHref: "tel:+8801711945873",
  email: "" as string,
  /** City is confirmed; street address is NOT verified — leave empty until confirmed. */
  city: "Dhaka",
  country: "Bangladesh",
  streetAddress: "" as string,
  priceRange: "৳৳",
  currency: "BDT",
  currencySymbol: "৳",
  social: {
    facebook: "http://www.facebook.com/cafechapter14",
  },
  maps: {
    /** Owner-supplied Google Maps place link. */
    place: "https://maps.app.goo.gl/3S2kbHETdfP8qNig6",
    /** Directions use the same place link so no coordinates are invented. */
    directions: "https://maps.app.goo.gl/3S2kbHETdfP8qNig6",
    /** Embed by search query — no fabricated coordinates. */
    embed: "https://www.google.com/maps?q=Cafe%20Chapter%2014%20Dhaka&output=embed",
  },
  /** Empty until confirmed by the owner. */
  openingHours: [] as OpeningHour[],
} as const;

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Menu", to: "/menu" },
  { label: "About", to: "/about" },
  { label: "Gallery", to: "/gallery" },
  { label: "Reservation", to: "/reservation" },
  { label: "Contact", to: "/contact" },
] as const;

export const footerColumns = [
  {
    title: "Explore",
    links: [
      { label: "Home", to: "/" },
      { label: "Menu", to: "/menu" },
      { label: "About", to: "/about" },
      { label: "Gallery", to: "/gallery" },
    ],
  },
  {
    title: "Visit",
    links: [
      { label: "Reservation", to: "/reservation" },
      { label: "Location", to: "/location" },
      { label: "Contact", to: "/contact" },
    ],
  },
] as const;

export const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: restaurant.name,
  telephone: `+880${restaurant.phone.replace(/^0/, "")}`,
  servesCuisine: ["Chinese", "Indian", "Continental", "Cafe"],
  priceRange: restaurant.priceRange,
  sameAs: [restaurant.social.facebook],
  hasMap: restaurant.maps.place,
  address: {
    "@type": "PostalAddress",
    addressLocality: restaurant.city,
    addressCountry: "BD",
  },
};
