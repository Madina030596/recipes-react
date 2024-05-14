import { Card } from "../card/Card";
import { useGetRecipesQuery } from "../../redux/api";
import { Preloader } from "../preloader/Preloader";

export function Cards() {
  const { isLoading, data } = useGetRecipesQuery();

  if (isLoading) {
    return <Preloader />;
  }

  if (data) {
    return <Card cards={data} />;
  }
  return null;
}
