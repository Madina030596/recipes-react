import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import { Logo } from "./Logo";
import { Switch } from "./Switch";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(false);

  // function closeMenu() {
  //     setIsOpen(false)
  // }
  return (
    <header
      className={s.header}
      style={{ backgroundColor: value ? "#808080" : "#f5f5f5" }}
    >
      <div className={s.container}>
        <Logo value={value} />

        <Switch
          isOn={value}
          handleToggle={() => setValue(!value)}
          onColor="#005555"
        />

        <nav
          className={`${s.nav} ${isOpen ? s.activeBtn : ""}`}
          style={{ backgroundColor: value ? "#808080" : "#f5f5f5" }}
        >
          <ul
            onClick={() => setIsOpen(false)}
            className={s.list}
            style={{ color: value ? "white" : "black" }}
          >
            <li className={s.link}>
              <NavLink
                className={({ isActive }) => (isActive ? s.active : "")}
                to="/"
              >
                Main
              </NavLink>
            </li>
            <li className={s.link}>
              <NavLink
                className={({ isActive }) => (isActive ? s.active : "")}
                to="/history"
              >
                History
              </NavLink>
            </li>
            <li className={s.link}>
              <NavLink
                className={({ isActive }) => (isActive ? s.active : "")}
                to="/favorites"
              >
                Favorites
              </NavLink>
            </li>
            <li className={s.link}>
              <NavLink
                className={({ isActive }) => (isActive ? s.active : "")}
                to="/signin"
              >
                Sign in
              </NavLink>
            </li>
            <li className={s.link}>
              <NavLink
                className={({ isActive }) => (isActive ? s.active : "")}
                to="/signup"
              >
                Sign up
              </NavLink>
            </li>
          </ul>
        </nav>

        <div onClick={() => setIsOpen(!isOpen)} className={s.burgerMenu}>
          {isOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
      </div>
    </header>
  );
}
