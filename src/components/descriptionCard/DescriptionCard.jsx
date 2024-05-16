import { useParams } from "react-router-dom";
import { useGetRecipeDescriptionQuery } from "../../redux/api";
import { Preloader } from "../preloader/Preloader";
import s from "./DescriptionCard.module.css";
import { Button } from "../button/Button";

export function DescriptionCard() {
  const { id } = useParams();
  const { data, isLoading } = useGetRecipeDescriptionQuery(Number(id));

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className={s.card}>
      <div className={s.btnBox}>
        <Button item={+id} className={s.btn} />
      </div>

      <h3 className={s.title}>{data.name}</h3>
      <div className={s.container}>
        <div>
          <img className={s.image} src={data.image} alt="Picture of dish" />
        </div>

        <div className={s.textContainer}>
          <h4 className={s.subtitle}>Ingredients:</h4>
          <ul>
            {data.ingredients.map(element => {
              return <li key={element.toString()}>{element}</li>;
            })}
          </ul>
          <h4 className={`${s.subtitle} ${s.subtitleMargin}`}>Instructions:</h4>
          <ol>
            {data.instructions.map(element => {
              return <li key={element.toString()}>{element}</li>;
            })}
          </ol>
        </div>
      </div>

      <div className={s.box}>
        <p>Rating: {data.rating}/5.0</p>
        <p>Cuisine: {data.cuisine}</p>
      </div>
    </div>
  );
}
