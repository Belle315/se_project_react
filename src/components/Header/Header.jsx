import "./Header.css";
import avatarImage from "../../assets/chibi.svg";
import logo from "../../assets/wtwrLogo.svg";
function Header({ onAddClothesClick, weatherData }) {
  // Generate current date
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      {/* Logo */}
      <img src={logo} alt="WTWR logo" className="header__logo" />

      {/* Date + Location */}
      <p className="header__date-and-location">
        {currentDate}, {weatherData?.city || "Your City"}
      </p>

      {/* Add Clothes Button */}
      <button className="header__add-clothes-btn" onClick={onAddClothesClick}>
        + Add clothes
      </button>

      {/* User Info */}
      <div className="header__user-container">
        <p className="header__username">Terrence Tegegne</p>
        <img src={avatarImage} alt="Terrence" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;
