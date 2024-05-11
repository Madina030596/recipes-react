import { useEffect, useState } from "react";
import { Card } from "../card/Card";

export function Cards() {
  const [cards, setCards] = useState();

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("https://dummyjson.com/recipes");
        const data = await response.json();
        setCards(data.recipes);
      } catch (e) {
        console.log(e);
      }
    }

    getData();
  }, []);

  if (cards) {
    return <Card cards={cards} />;
  }
  return null;
}
