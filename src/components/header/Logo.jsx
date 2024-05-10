import logo from "../../../public/svg/logo.svg";
import s from "./Logo.module.css";
import { Link } from "react-router-dom";

export function Logo({ value }) {
  return (
    <Link to="/">
      {
        <div className={s.container}>
          <img className={s.img} src={logo} alt="logo" />
          <p className={s.text} style={{ color: value ? "#fff" : "#696969" }}>
            Delicious recipes
          </p>
        </div>
      }
    </Link>
  );
}
