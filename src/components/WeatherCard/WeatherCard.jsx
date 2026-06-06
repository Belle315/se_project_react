import "./WeatherCard.css";
import weatherImage from "../../assets/group119.svg";

function WeatherCard({ temperature }) {
  return (
    <section className="weather-card">
      <div className="weather-card__temp">{temperature}°F</div>
      <img
        src={weatherImage}
        alt="Weather background"
        className="weather-card__image"
      />
    </section>
  );
}

export default WeatherCard;
