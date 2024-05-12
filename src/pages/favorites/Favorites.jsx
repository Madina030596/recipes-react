import { useFavorites } from "../../hooks/useFavorites";
import s from "./Favorites.module.css";

export function Favorites() {
  const { favorites } = useFavorites();

  return (
    <div>
      <h2 className={s.margin}>Favourites</h2>
      <span>{favorites.length}</span>
    </div>
  );
}
