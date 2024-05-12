// import { useEffect, useState } from "react";
import { Card } from "../card/Card";
import { useGetRecipesQuery } from "../../redux/api";
import { Preloader } from "../preloader/Preloader";

export function Cards() {
  const { isLoading, data } = useGetRecipesQuery();

  if (isLoading) {
    return <Preloader />;
  }

  if (data) {
    return <Card cards={data.recipes} />;
  }
  return null;

  // const [cards, setCards] = useState();

  // useEffect(() => {
  //   async function getData() {
  //     try {
  //       const response = await fetch("https://dummyjson.com/recipes");
  //       const data = await response.json();
  //       setCards(data.recipes);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }

  //   getData();
  // }, []);

  // if (cards) {
  //   return <Card cards={cards} />;
  // }
  // return null;
}
