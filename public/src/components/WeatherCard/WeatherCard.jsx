import "./WeatherCard.css";
import weatherImage from "../../assets/Group119.svg";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function WeatherCard({ temperature }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const isReady = temperature !== undefined && temperature !== null;

  return (
    <section className="weather-card">
      <div className="weather-card__temp">
        {isReady
          ? `${temperature[currentTemperatureUnit]}°${currentTemperatureUnit}`
          : "Loading..."}
      </div>

      <img
        src={weatherImage}
        alt="Weather background"
        className="weather-card__image"
      />
    </section>
  );
}

export default WeatherCard;
