import "./Header.css";
import avatarImage from "../../assets/chibi.svg";
import logo from "../../assets/wtwrLogo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import { Link } from "react-router-dom";

function Header({ onAddClothesClick, weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="WTWR logo" className="header__logo" />
      </Link>

      <p className="header__date-and-location">
        {currentDate}, {weatherData?.city || "Your City"}
      </p>

      <ToggleSwitch />

      <button className="header__add-clothes-btn" onClick={onAddClothesClick}>
        + Add clothes
      </button>

      <Link to="/profile" className="header__user-container">
        <p className="header__username">Terrence Tegegne</p>
        <img src={avatarImage} alt="Terrence" className="header__avatar" />
      </Link>
    </header>
  );
}

export default Header;
