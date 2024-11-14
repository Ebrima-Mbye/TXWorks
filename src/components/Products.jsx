import React from "react";
import Card from "./Card";

const cardData = [
  {
    id: 1,
    name: "Tomato",
    description: "A Tomato is a vegetable that is very popular in Africa...",
  },
  {
    id: 2,
    name: "Carrot",
    description: "Carrots are root vegetables, usually orange in color...",
  },
  {
    id: 3,
    name: "Potato",
    description:
      "Potatoes are a starchy vegetable that can be boiled, mashed, or fried...",
  },
  {
    id: 4,
    name: "Spinach",
    description: "Spinach is a leafy green vegetable rich in iron...",
  },
  {
    id: 5,
    name: "Cucumber",
    description: "Cucumbers are a refreshing vegetable often used in salads...",
  },
];

function Products() {
  return (
    <section className="cards-container">
      {cardData.map((item) => (
        <Card key={item.id} name={item.name} description={item.description} />
      ))}
    </section>
  );
}

export default Products;
