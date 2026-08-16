/**
 * Centralized menu data. Prices in BDT and availability change often —
 * this file is the only place to edit them.
 *
 * Shape is intentionally ready for a future CMS / admin dashboard and for
 * cart-based online ordering (stable ids, availability flag, tags).
 */

import appetizer from "@/assets/food-appetizer.jpg";
import burger from "@/assets/food-burger.jpg";
import butterMasala from "@/assets/food-butter-masala.jpg";
import chowmein from "@/assets/food-chowmein.jpg";
import friedRice from "@/assets/food-fried-rice.jpg";
import kebab from "@/assets/food-kebab.jpg";
import momo from "@/assets/food-momo.jpg";
import naan from "@/assets/food-naan.jpg";
import pasta from "@/assets/food-pasta.jpg";
import salad from "@/assets/food-salad.jpg";
import setMenu from "@/assets/food-set-menu.jpg";
import soup from "@/assets/food-soup.jpg";
import tandoori from "@/assets/food-tandoori.jpg";
import vegetable from "@/assets/food-vegetable.jpg";

export type MenuCategoryId =
  | "appetizers"
  | "salad"
  | "soup"
  | "chowmein"
  | "burger"
  | "pasta"
  | "chicken"
  | "vegetable"
  | "bread"
  | "kebab"
  | "curry"
  | "rice"
  | "set-menu"
  | "package";

export interface MenuCategory {
  id: MenuCategoryId;
  label: string;
  blurb: string;
  image: string;
}

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategoryId;
  description: string;
  /** BDT. Null when the kitchen quotes on request. */
  price: number | null;
  image: string;
  popular?: boolean;
  chefsChoice?: boolean;
  available: boolean;
  tags: string[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "appetizers",
    label: "Appetizers",
    blurb: "Start your experience.",
    image: appetizer,
  },
  { id: "salad", label: "Salad", blurb: "Fresh and light.", image: salad },
  { id: "soup", label: "Soups", blurb: "Warm, comforting & flavorful.", image: soup },
  { id: "chowmein", label: "Chowmein", blurb: "Stir-fried favorites.", image: chowmein },
  { id: "burger", label: "Burger", blurb: "Stacked and satisfying.", image: burger },
  { id: "pasta", label: "Oven Baked Pasta", blurb: "Comfort food with character.", image: pasta },
  { id: "chicken", label: "Chicken", blurb: "Flavor-packed favorites.", image: tandoori },
  { id: "vegetable", label: "Vegetable", blurb: "Garden-fresh sides.", image: vegetable },
  { id: "bread", label: "Paratha & Naan", blurb: "Fresh from the oven.", image: naan },
  { id: "kebab", label: "Kebab", blurb: "Grilled to perfection.", image: kebab },
  { id: "curry", label: "Curry", blurb: "Slow-built, deep flavor.", image: butterMasala },
  { id: "rice", label: "Rice", blurb: "Perfectly satisfying.", image: friedRice },
  {
    id: "set-menu",
    label: "Set Menu",
    blurb: "Complete meals for every occasion.",
    image: setMenu,
  },
  { id: "package", label: "Package", blurb: "Made for groups.", image: momo },
];

export const menuItems: MenuItem[] = [
  {
    id: "chicken-chowmein",
    name: "Chicken Chowmein",
    category: "chowmein",
    description:
      "Prepared with stir-fried noodles, chicken, mixed vegetables, soy sauce and sesame oil.",
    price: 280,
    image: chowmein,
    popular: true,
    available: true,
    tags: ["Noodles", "Chicken", "Stir-fried"],
  },
  {
    id: "special-chowmein",
    name: "Special Chowmein",
    category: "chowmein",
    description:
      "Our loaded chowmein with chicken, egg, prawn and crisp vegetables tossed over high heat.",
    price: 340,
    image: chowmein,
    popular: true,
    chefsChoice: true,
    available: true,
    tags: ["Noodles", "House Special"],
  },
  {
    id: "vegetable-chowmein",
    name: "Vegetable Chowmein",
    category: "chowmein",
    description: "Noodles stir-fried with seasonal vegetables, garlic and a light soy glaze.",
    price: 230,
    image: vegetable,
    available: true,
    tags: ["Vegetarian", "Noodles"],
  },
  {
    id: "cream-of-mushroom-soup",
    name: "Cream of Mushroom Soup",
    category: "soup",
    description: "Slow-simmered mushrooms blended smooth with cream, butter and fresh thyme.",
    price: 220,
    image: soup,
    popular: true,
    available: true,
    tags: ["Creamy", "Vegetarian"],
  },
  {
    id: "thai-soup",
    name: "Thai Soup",
    category: "soup",
    description: "Hot and sour broth with chicken, egg ribbons, mushroom and coriander.",
    price: 240,
    image: soup,
    available: true,
    tags: ["Spicy", "Broth"],
  },
  {
    id: "chicken-corn-soup",
    name: "Chicken Corn Soup",
    category: "soup",
    description: "A comforting classic of shredded chicken and sweet corn in a silky broth.",
    price: 200,
    image: soup,
    available: true,
    tags: ["Comfort", "Mild"],
  },
  {
    id: "special-pasta",
    name: "Special Pasta",
    category: "pasta",
    description:
      "Oven-baked pasta in a rich cheese and tomato-cream sauce, finished with herbs and a golden crust.",
    price: 380,
    image: pasta,
    popular: true,
    chefsChoice: true,
    available: true,
    tags: ["Baked", "Cheesy"],
  },
  {
    id: "chicken-alfredo-pasta",
    name: "Chicken Alfredo Pasta",
    category: "pasta",
    description: "Creamy white sauce pasta with grilled chicken, garlic and parmesan.",
    price: 350,
    image: pasta,
    available: true,
    tags: ["Creamy", "Chicken"],
  },
  {
    id: "chicken-momo",
    name: "Chicken Momo",
    category: "appetizers",
    description: "Steamed dumplings filled with seasoned minced chicken, served with chili sauce.",
    price: 200,
    image: momo,
    popular: true,
    available: true,
    tags: ["Steamed", "Sharing"],
  },
  {
    id: "chicken-wings",
    name: "Fried Chicken Wings",
    category: "appetizers",
    description: "Crisp-fried wings tossed in house spices with a cool dip on the side.",
    price: 260,
    image: appetizer,
    available: true,
    tags: ["Crispy", "Sharing"],
  },
  {
    id: "french-fries",
    name: "Loaded French Fries",
    category: "appetizers",
    description: "Golden fries under melted cheese, chili flakes and spring onion.",
    price: 180,
    image: appetizer,
    available: true,
    tags: ["Snack", "Vegetarian"],
  },
  {
    id: "chicken-salad",
    name: "Grilled Chicken Salad",
    category: "salad",
    description: "Garden greens, cherry tomato and grilled chicken with a light olive dressing.",
    price: 290,
    image: salad,
    available: true,
    tags: ["Fresh", "Light"],
  },
  {
    id: "russian-salad",
    name: "Russian Salad",
    category: "salad",
    description: "Diced vegetables and pineapple folded through a creamy mayonnaise dressing.",
    price: 220,
    image: salad,
    available: true,
    tags: ["Creamy", "Vegetarian"],
  },
  {
    id: "tandoori-chicken",
    name: "Tandoori Chicken",
    category: "chicken",
    description:
      "Yogurt and spice marinated chicken roasted until charred at the edges, served with onion and lemon.",
    price: 420,
    image: tandoori,
    popular: true,
    chefsChoice: true,
    available: true,
    tags: ["Grilled", "Smoky"],
  },
  {
    id: "fried-chicken",
    name: "Chapter Fried Chicken",
    category: "chicken",
    description: "Buttermilk-marinated chicken in a crisp seasoned crust with fries and dip.",
    price: 340,
    image: appetizer,
    available: true,
    tags: ["Crispy", "Family Favorite"],
  },
  {
    id: "chicken-butter-masala",
    name: "Chicken Butter Masala",
    category: "curry",
    description:
      "Tender chicken in a buttery tomato and cashew gravy, finished with cream and coriander.",
    price: 450,
    image: butterMasala,
    popular: true,
    available: true,
    tags: ["Rich", "Mild Spice"],
  },
  {
    id: "chicken-curry",
    name: "Chicken Curry",
    category: "curry",
    description: "Home-style chicken curry slow-cooked with onion, ginger and whole spices.",
    price: 380,
    image: butterMasala,
    available: true,
    tags: ["Traditional", "Spiced"],
  },
  {
    id: "chicken-seekh-kebab",
    name: "Chicken Seekh Kebab",
    category: "kebab",
    description: "Minced chicken kebabs grilled on skewers with mint chutney and onion rings.",
    price: 360,
    image: kebab,
    popular: true,
    available: true,
    tags: ["Grilled", "Charcoal"],
  },
  {
    id: "chicken-tikka-kebab",
    name: "Chicken Tikka Kebab",
    category: "kebab",
    description: "Boneless chicken cubes marinated in spice and yogurt, grilled over open flame.",
    price: 390,
    image: kebab,
    available: true,
    tags: ["Grilled", "Smoky"],
  },
  {
    id: "special-fried-rice",
    name: "Special Fried Rice",
    category: "rice",
    description:
      "Wok-tossed rice with chicken, egg, prawn and vegetables in a light soy seasoning.",
    price: 320,
    image: friedRice,
    popular: true,
    available: true,
    tags: ["House Special", "Wok"],
  },
  {
    id: "chicken-fried-rice",
    name: "Chicken Fried Rice",
    category: "rice",
    description: "Fragrant fried rice with chicken, egg and spring onion.",
    price: 270,
    image: friedRice,
    available: true,
    tags: ["Wok", "Chicken"],
  },
  {
    id: "plain-rice",
    name: "Steamed Rice",
    category: "rice",
    description: "Long-grain rice steamed to order — the right partner for any curry.",
    price: 90,
    image: friedRice,
    available: true,
    tags: ["Side"],
  },
  {
    id: "mixed-vegetable",
    name: "Mixed Vegetable",
    category: "vegetable",
    description: "Seasonal vegetables stir-fried with garlic and a glossy light sauce.",
    price: 210,
    image: vegetable,
    available: true,
    tags: ["Vegetarian", "Side"],
  },
  {
    id: "butter-naan",
    name: "Butter Naan",
    category: "bread",
    description: "Soft oven-baked naan brushed with butter.",
    price: 60,
    image: naan,
    available: true,
    tags: ["Bread", "Oven"],
  },
  {
    id: "paratha",
    name: "Paratha",
    category: "bread",
    description: "Flaky pan-fried paratha, made fresh through the day.",
    price: 40,
    image: naan,
    available: true,
    tags: ["Bread"],
  },
  {
    id: "chicken-burger",
    name: "Chapter Chicken Burger",
    category: "burger",
    description:
      "Crispy chicken fillet, cheese and house sauce in a toasted brioche bun with fries.",
    price: 330,
    image: burger,
    popular: true,
    available: true,
    tags: ["Burger", "Fries"],
  },
  {
    id: "beef-burger",
    name: "Double Beef Burger",
    category: "burger",
    description: "Two seared beef patties with melted cheese, pickles and smoked mayo.",
    price: 420,
    image: burger,
    available: true,
    tags: ["Burger", "Beef"],
  },
  {
    id: "set-menu-one",
    name: "Set Menu 1",
    category: "set-menu",
    description:
      "Rice, chicken curry, vegetable, salad and a soft drink — a complete plate for one.",
    price: 420,
    image: setMenu,
    popular: true,
    available: true,
    tags: ["Complete Meal", "Value"],
  },
  {
    id: "set-menu-two",
    name: "Set Menu 2",
    category: "set-menu",
    description: "Fried rice, chicken, soup, salad and a drink — generously portioned.",
    price: 520,
    image: setMenu,
    available: true,
    tags: ["Complete Meal"],
  },
  {
    id: "package-family",
    name: "Family Package",
    category: "package",
    description:
      "A shared spread built for four — rice, chicken, kebab, vegetable, bread and drinks. Ask us to tailor it.",
    price: null,
    image: setMenu,
    available: true,
    tags: ["Group", "On Request"],
  },
];

export const popularItems = menuItems.filter((item) => item.popular);

export function getCategory(id: MenuCategoryId) {
  return menuCategories.find((category) => category.id === id);
}

export function categoryLabel(id: MenuCategoryId) {
  return getCategory(id)?.label ?? id;
}

export function formatPrice(price: number | null) {
  return price === null ? "On request" : `৳${price.toLocaleString("en-US")}`;
}

/** Tabs used on the homepage menu preview. */
export const previewTabs: Array<{ id: "popular" | MenuCategoryId; label: string }> = [
  { id: "popular", label: "Popular" },
  { id: "appetizers", label: "Appetizers" },
  { id: "soup", label: "Soup" },
  { id: "chowmein", label: "Chowmein" },
  { id: "pasta", label: "Pasta" },
  { id: "chicken", label: "Chicken" },
  { id: "kebab", label: "Kebab" },
  { id: "rice", label: "Rice" },
  { id: "set-menu", label: "Set Menu" },
];

/** Full menu page filter list (includes Popular pseudo-category). */
export const menuFilters: Array<{ id: "popular" | MenuCategoryId; label: string }> = [
  { id: "popular", label: "Popular" },
  ...menuCategories.map((category) => ({ id: category.id, label: category.label })),
];

export function itemsFor(filter: "all" | "popular" | MenuCategoryId) {
  if (filter === "all") return menuItems;
  if (filter === "popular") return popularItems;
  return menuItems.filter((item) => item.category === filter);
}
