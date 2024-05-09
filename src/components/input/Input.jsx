import s from "./Input.module.css";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";

export function Input() {
  const [value, setValue] = useState("");

  return (
    <div className={s.container}>
      <input
        onChange={e => setValue(e.target.value)}
        className={s.input}
        type="text"
        placeholder="search recipe"
        value={value}
      />
      <CiSearch className={s.icon} />
    </div>
  );
}
