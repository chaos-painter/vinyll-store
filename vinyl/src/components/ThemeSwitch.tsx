import { useState, useEffect } from "react";
import "../styles/ThemeSwitch.css";

function CartItem() {
  const [dark, setDark] = useState(false);
  const [animate, setAnimate] = useState("");

  useEffect(() => {
    if (animate) {
      setAnimate("animate");
      const timer = setTimeout(() => setAnimate(""), 300);
      return () => clearTimeout(timer);
    }
  }, [dark]);

  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("data-theme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("data-theme", "light");
  };

  const toggleTheme = (dark: Boolean) => {
    if (dark) {
      setLightMode();
    } else {
      setDarkMode();
    }
  };

  const handleClick = () => {
    setDark(!dark);
    setAnimate("animate");
    toggleTheme(dark);
  };

  return (
    <>
      <div
        className={`theme-switch ${dark ? "dark" : ""}`}
        onClick={() => handleClick()}
      >
        <div className={`switch-body ${animate}`}></div>
        <div className="switch-tip"></div>
      </div>
    </>
  );
}

export default CartItem;
