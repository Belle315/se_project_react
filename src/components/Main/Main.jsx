import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";

function Main({ weatherData, clothingItems, onSelectCard }) {
  const weatherType = weatherData?.type;

  const filteredItems = weatherType
    ? clothingItems.filter(
        (item) => item.weather.toLowerCase() === weatherType.toLowerCase(),
      )
    : clothingItems;

  return (
    <main className="main">
      <WeatherCard temperature={weatherData?.temperature} />

      <section className="main__clothes-section">
        <p className="main__title">
          Today is {weatherData?.temperature}°F / You may want to wear:
        </p>

        <ul className="main__cards">
          {filteredItems.map((item) => (
            <ItemCard key={item._id} item={item} onSelectCard={onSelectCard} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
