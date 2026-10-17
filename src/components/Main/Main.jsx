import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function Main({ weatherData, clothingItems, onSelectCard, onDeleteItem }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const weatherType = weatherData?.type;

  const filteredItems = weatherType
    ? clothingItems.filter(
        (item) =>
          item.weather &&
          item.weather.toLowerCase() === weatherType.toLowerCase(),
      )
    : clothingItems;

  return (
    <main className="main">
      <WeatherCard temperature={weatherData.temperature} />

      <section className="main__clothes-section">
        {weatherData?.temperature ? (
          <p className="main__title">
            Today is {weatherData.temperature[currentTemperatureUnit]}°
            {currentTemperatureUnit} / You may want to wear:
          </p>
        ) : (
          <p className="main__title">Loading weather…</p>
        )}

        <ul className="main__cards">
          {filteredItems.map((item) => (
            <ItemCard
              key={item.id}
              item={item}
              onSelectCard={onSelectCard}
              onDeleteItem={onDeleteItem}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
