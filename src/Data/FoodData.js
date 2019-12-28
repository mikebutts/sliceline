export function formatPrice(price) {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
}

export const foodItems = [
  {
    name: "Cheese Pizza",
    img: "/img/pizza.png",
    section: "Pizza",
    price: 8
  },
  {
    name: "Pepperoni Pizza",
    img: "/img/pizza2.jpeg",
    section: "Pizza",
    price: 9.5
  },
  {
    name: "Chicken Pizza",
    img: "/img/chicken-pizza.jpeg",
    section: "Pizza",
    price: 11
  },
  {
    img: "/img/healthy-pizza.jpeg",
    name: "Veggie Pizza",
    section: "Pizza",
    price: 10
  },
  {
    img: "/img/burger.jpeg",
    name: "Burger",
    section: "Sandwich",
    price: 6
  },
  { img: "/img/gyro.jpeg", name: "Gyro", section: "Sandwich", price: 4.5 },
  {
    img: "/img/sandwich.jpeg",
    name: "Shrimp PoBoy",
    section: "Sandwich",
    price: 7
  },
  {
    img: "/img/fries.jpeg",
    name: "Fries",
    section: "Sides",
    price: 4
  },
  {
    img: "/img/soda.jpg",
    price: 2,
    name: "Soda",
    section: "Drinks",
    choices: ["Coke", "Sprite", "Root Beer"]
  }
];

export const foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});
