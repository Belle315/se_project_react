import { useState, useEffect } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ItemModal from "../ItemModal/ItemModal";
import AddClothesModal from "../AddClothesModal/AddClothesModal";
import { defaultClothingItems } from "../../utils/clothingItems.js";
import Footer from "../Footer/Footer";
import { getWeather } from "../../utils/weatherApi";
import { coordinates } from "../../utils/constants";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);

  const [clothingItems, setClothingItems] = useState(defaultClothingItems);

  const [weatherData, setWeatherData] = useState({});
  const handleAddItem = (newItem) => {
    setClothingItems([{ _id: Date.now(), ...newItem }, ...clothingItems]);
  };

  useEffect(() => {
    getWeather(coordinates.latitude, coordinates.longitude)
      .then((data) => {
        setWeatherData({
          city: data.name,
          temperature: Math.round(data.main.temp),
          type:
            data.main.temp >= 86
              ? "hot"
              : data.main.temp >= 66
                ? "warm"
                : "cold",
        });
      })
      .catch((err) => console.error(err));
  }, []);

  const handleAddClothesClick = () => {
    setActiveModal("add-garment");
  };

  const handleSelectCard = (card) => {
    setSelectedCard(card);
    setActiveModal("preview");
  };

  return (
    <div className="page">
      <div className="page__content">
        <Header
          onAddClothesClick={handleAddClothesClick}
          weatherData={weatherData}
        />

        <Main
          weatherData={weatherData}
          clothingItems={clothingItems}
          onSelectCard={handleSelectCard}
        />

        <Footer />

        <ItemModal
          card={selectedCard}
          isOpen={activeModal === "preview"}
          onClose={() => setActiveModal("")}
        />
        <AddClothesModal
          isOpen={activeModal === "add-garment"}
          onClose={() => setActiveModal("")}
          onAddItem={handleAddItem}
        />
      </div>
    </div>
  );
}

export default App;
