import "./WeatherCard.css";
import weatherImage from "../../assets/Group119.svg";

function WeatherCard({ temperature }) {
  const isReady = temperature !== undefined && temperature !== null;

  return (
    <section className="weather-card">
      <div className="weather-card__temp">
        {isReady ? `${temperature}°F` : "Loading..."}
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
