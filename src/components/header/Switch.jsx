import s from "./Switch.module.css";

export function Switch({ isOn, handleToggle, onColor }) {
  return (
    <div className={s.switch}>
      <input
        className={s.checkbox}
        checked={isOn}
        onChange={handleToggle}
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        className={s.label}
        htmlFor={`react-switch-new`}
        style={{ backgroundColor: isOn && onColor }}
      >
        <span className={s.button} />
      </label>
    </div>
  );
}
