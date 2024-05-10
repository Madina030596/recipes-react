import s from "./Card.module.css";
import { CiHeart } from "react-icons/ci";
// import { FaHeart } from "react-icons/fa6";

export function Card({ cards }) {
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
            <button>
              <CiHeart className={s.fav} />
            </button>
          </div>
        );
      })}
    </main>
  );
}
