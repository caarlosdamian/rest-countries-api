import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Moon from "../../assets/moon.svg";
import DarkMoon from "../../assets/moonDark.svg";
import { rootState } from "../../redux/store";
import { toggle } from "../../redux/themeSlice/themeSlice";
import "./Header.scss";

export const Header = () => {
  const { theme } = useSelector((state: rootState) => state.theme);
  const dispatch = useDispatch();
  return (
    <nav
      id="header"
      className={`header-container ${theme ? "dark" : ''}`}
      data-testid="header-container"
    >
      <span className="header-title">Where in the world?</span>
      <div className="header-left" onClick={() => dispatch(toggle())} data-testid='toggle-button'>
        <img src={theme ? DarkMoon : Moon} alt="Moon" className="header-icon" />
        <span className="header-left-subtext">Dark Mode</span>
      </div>
    </nav>
  );
};
