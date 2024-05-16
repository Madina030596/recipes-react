import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";
import { useActions } from "../../hooks/useActions";
import { useFavorites } from "../../hooks/useFavorites";
import s from "./Button.module.css";

export function Button({ item, className }) {
  const { favorites } = useFavorites();

  const { toggleFavorites } = useActions();

  return (
    <button onClick={() => toggleFavorites(item)}>
      {favorites.some(r => r.id === item.id) ? (
        <FaHeart className={`${s.addedToFav} ${className}`} />
      ) : (
        <CiHeart className={`${s.addToFav} ${className}`} />
      )}
    </button>
  );
}
