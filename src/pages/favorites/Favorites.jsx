import { useFavorites } from "../../hooks/useFavorites";
import s from "./Favorites.module.css";
import { Card } from "../../components/card/Card";
import { useGetRecipesQuery } from "../../redux/api";
import { Preloader } from "../../components/preloader/Preloader";

export function Favorites() {
  const { favorites } = useFavorites();
  const { isLoading } = useGetRecipesQuery();

  if (isLoading) {
    return <Preloader />;
  }

  if (favorites.length < 1) {
    return (
      <div className={s.container}>
        <h3>You don't have favorites</h3>
      </div>
    );
  }

  return (
    <div className={s.container}>
      <h3 className={s.title}>Favourites:</h3>
      <Card cards={favorites} />
    </div>
  );
}
