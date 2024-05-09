import s from './Card.module.css'

export function Card({ cards }) {
  return (
    <main className={s.container}>
      {cards.map(item => {
        return (
          <div key={item.id} className={s.card}>
            <h2 className={s.title}>{item.name}</h2>
            <img src={item.image} className={s.image} alt="picture of dish" />
            <p className={s.text}>Rating: {item.rating}/5.0</p>
            <p className={s.text}>Cuisine: {item.cuisine}</p>
          </div>
        );
      })}
    </main>
  );
}
