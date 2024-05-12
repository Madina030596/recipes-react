// import { useDispatch, useSelector } from "react-redux";
import s from "./Card.module.css";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";
import { useActions } from "../../hooks/useActions";
import { useFavorites } from "../../hooks/useFavorites";

export function Card({ cards }) {
  const { favorites } = useFavorites();

  const { toggleFavorites } = useActions();

  // console.log(favorites);
  console.log(cards);

  return (
    <main className={s.container}>
      {cards.map(item => {
        return (
          <div key={item.id} className={s.card}>
            <h2 className={s.title}>{item.name}</h2>
            <img src={item.image} className={s.image} alt="picture of dish" />
            <p className={`${s.text} ${s.ratingText}`}>
              Rating: {item.rating}/5.0
            </p>
            <p className={`${s.text} ${s.cuisineText}`}>
              Cuisine: {item.cuisine}
            </p>
            {/* <button onClick={() => dispatch(actions.toggleFavorites(item))}> */}
            <button onClick={() => toggleFavorites(item)}>
              {favorites.some(r => r.id === item.id) ? (
                <FaHeart className={s.addedToFav} />
              ) : (
                <CiHeart className={s.addToFav} />
              )}
            </button>
          </div>
        );
      })}
    </main>
  );
}
