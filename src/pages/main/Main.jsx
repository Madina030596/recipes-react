import s from "./Main.module.css";
import { Cards } from "../../components/cards/Cards";

export function Main() {
  return (
    <div className={s.container}>
      <Cards />
    </div>
  );
}
