const mealCategories = [
  { name: "Platters", active: true, title: "Platters" },
  { name: "New daily Specials", active: false, title: "New daily Specials" },
  { name: "Create your own", active: false, title: "Create your own" },
  { name: "Salads", active: false, title: "Salads" },
  { name: "Gym food", active: false, title: "Gym food" },
  { name: "Hot Power Bowls", active: false, title: "Hot Power Bowls" },
  { name: "Rainbow Wraps", active: false, title: "Rainbow Wraps" },
  { name: "Vegan Menu", active: false, title: "Vegan Menu" },
  { name: "Snacks & Sides", active: false, title: "Snacks & Sides" },
  { name: "Yoghurt & fruit", active: false, title: "Yoghurt & fruit" },
  { name: "Cold Drinks", active: false, title: "Cold Drinks" },
  {
    name: "Smoothies, shakes & juice",
    active: false,
    title: "Smoothies, shakes & juice",
  },
];
const cardData = [
  { id: 1, name: "Card 1", calories: 200, price: 10 },
  { id: 2, name: "Card 2", calories: 300, price: 15 },
  { id: 3, name: "Card 3", calories: 250, price: 12 },
  { id: 4, name: "Card 4", calories: 180, price: 8 },
  { id: 5, name: "Card 5", calories: 320, price: 18 },
  { id: 6, name: "Card 6", calories: 240, price: 14 },
  { id: 7, name: "Card 7", calories: 280, price: 13 },
  { id: 8, name: "Card 8", calories: 220, price: 11 },
  { id: 9, name: "Card 9", calories: 270, price: 16 },
  { id: 10, name: "Card 10", calories: 350, price: 20 },
  { id: 11, name: "Card 11", calories: 200, price: 10 },
  { id: 12, name: "Card 12", calories: 300, price: 15 },
  { id: 13, name: "Card 13", calories: 250, price: 12 },
  { id: 14, name: "Card 14", calories: 180, price: 8 },
  { id: 15, name: "Card 15", calories: 320, price: 18 },
  { id: 16, name: "Card 16", calories: 240, price: 14 },
  { id: 17, name: "Card 17", calories: 280, price: 13 },
  { id: 18, name: "Card 18", calories: 220, price: 11 },
  { id: 19, name: "Card 19", calories: 270, price: 16 },
  { id: 20, name: "Card 20", calories: 350, price: 20 },
];

const dummyCards = [
  {
    title: "Dummy Card 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    calories: 250,
    price: "$9.99",
    popularity: "High",
    img: "logo.png",
  },
  {
    title: "Dummy Card 2",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    calories: 300,
    price: "$12.99",
    popularity: "Medium",
  },
  {
    title: "Dummy Card 3",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    calories: 200,
    price: "$7.99",
    popularity: "Low",
    img: "logo.png",
  },
];

export { mealCategories, cardData, dummyCards };
