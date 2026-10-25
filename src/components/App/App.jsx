import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import ItemModal from "../ItemModal/ItemModal";
import AddClothesModal from "../AddClothesModal/AddClothesModal";
import Footer from "./Footer/Footer";
import { getWeather } from "../../utils/WeatherApi.js";
import { coordinates } from "../../utils/constants";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import { Routes, Route } from "react-router-dom";
import Profile from "./Profile/Profile";
import { getItems, addItem, deleteItem } from "../../utils/api";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);

  const [clothingItems, setClothingItems] = useState([]);
  const [weatherData, setWeatherData] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit((prev) => (prev === "F" ? "C" : "F"));
  };

  const handleAddItem = (newItem) => {
    const itemToSave = { ...newItem, id: Date.now() };

    addItem(itemToSave)
      .then((savedItem) => {
        setClothingItems((prev) => [savedItem, ...prev]);
      })
      .catch((err) => console.error("Error adding item:", err));
  };

  // WEATHER FETCH
  useEffect(() => {
    getWeather(coordinates.latitude, coordinates.longitude)
      .then((data) => {
        const tempF = Math.round(data.main.temp);
        const tempC = Math.round((data.main.temp - 32) * (5 / 9));

        setWeatherData({
          city: data.name,
          temperature: {
            F: tempF,
            C: tempC,
          },
          type: tempF >= 86 ? "hot" : tempF >= 66 ? "warm" : "cold",
        });
      })
      .catch((err) => console.error(err));
  }, []);

  // LOAD ITEMS FROM DB.JSON
  useEffect(() => {
    getItems()
      .then(setClothingItems)
      .catch((err) => console.error("Error loading items:", err));
  }, []);

  const handleAddClothesClick = () => {
    setActiveModal("add-garment");
  };

  const handleDeleteItem = (id) => {
    deleteItem(id)
      .then(() => {
        setClothingItems((prevItems) =>
          prevItems.filter((item) => item.id !== id),
        );
      })
      .catch((err) => console.error("Error deleting item:", err));
  };

  const handleSelectCard = (card) => {
    setSelectedCard(card);
    setActiveModal("preview");
  };

  return (
    <div className="page">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <div className="page__content">
          <Header
            onAddClothesClick={handleAddClothesClick}
            weatherData={weatherData}
          />

          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  clothingItems={clothingItems}
                  onSelectCard={handleSelectCard}
                  onDeleteItem={handleDeleteItem}
                />
              }
            />

            <Route
              path="/profile"
              element={
                <Profile
                  clothingItems={clothingItems}
                  onSelectCard={handleSelectCard}
                  onAddClothesClick={handleAddClothesClick}
                  onDeleteItem={handleDeleteItem}
                />
              }
            />
          </Routes>

          <Footer />

          <ItemModal
            card={selectedCard}
            isOpen={activeModal === "preview"}
            onClose={() => setActiveModal("")}
            onDeleteItem={handleDeleteItem}
          />

          <AddClothesModal
            isOpen={activeModal === "add-garment"}
            onClose={() => setActiveModal("")}
            onAddItem={handleAddItem}
          />
        </div>
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
