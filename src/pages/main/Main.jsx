import s from "./Main.module.css"
import {Cards} from '../../components/cards/Cards'

export function Main() {
    return (
      <div>
        <h2 className={s.margin}>Main</h2>
        <Cards/>
      </div>
    );
  }
  