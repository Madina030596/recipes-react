import preloader from "/gifs/preloader.gif";
import s from "./Preloader.module.css";

export function Preloader() {
  return (
    <div className={s.container}>
      <img src={preloader} alt="loading..." />
    </div>
  );
}
