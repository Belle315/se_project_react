import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./AddClothesModal.css";

function AddClothesModal({ isOpen, onClose, onAddItem }) {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weather, setWeather] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({
      id: Date.now(),
      name,
      imageUrl,
      weather,
    });
    setName("");
    setImageUrl("");
    setWeather("");
    onClose();
  };

  return (
    <ModalWithForm
      title="New garment"
      name="add-garment"
      buttonText="Add garment"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isDisabled={!name || !imageUrl || !weather}
    >
      {/* NAME FIELD */}
      <label htmlFor="name" className="modal__label">
        Name
      </label>
      <input
        id="name"
        type="text"
        className="modal__input"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      {/* IMAGE URL FIELD */}
      <label htmlFor="image-url" className="modal__label">
        Image
      </label>
      <input
        id="image-url"
        type="url"
        className="modal__input"
        placeholder="Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        required
      />

      <p className="modal__label">Select the weather type:</p>

      <div className="modal__radio-group">
        <label>
          <input
            type="radio"
            name="weather"
            value="hot"
            checked={weather === "hot"}
            onChange={(e) => setWeather(e.target.value)}
          />
          Hot
        </label>

        <label>
          <input
            type="radio"
            name="weather"
            value="warm"
            checked={weather === "warm"}
            onChange={(e) => setWeather(e.target.value)}
          />
          Warm
        </label>

        <label>
          <input
            type="radio"
            name="weather"
            value="cold"
            checked={weather === "cold"}
            onChange={(e) => setWeather(e.target.value)}
          />
          Cold
        </label>
      </div>
    </ModalWithForm>
  );
}

export default AddClothesModal;
