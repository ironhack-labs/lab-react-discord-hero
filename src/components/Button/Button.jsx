/* eslint-disable react/prop-types */
// ? style
import "./Button.css";

export default function Button({ children, isDark = false }) {
  return (
    <button className={`button ${isDark && "button_type_dark"}`}>
      {children}
    </button>
  );
}
