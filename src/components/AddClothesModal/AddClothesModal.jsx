import { useForm } from "../../hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./AddClothesModal.css";

function AddClothesModal({ isOpen, onClose, onAddItem }) {
  const { values, handleChange, resetForm } = useForm({
    name: "",
    imageUrl: "",
    weather: "",
  });

  const { name, imageUrl, weather } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({
      id: Date.now(),
      name,
      imageUrl,
      weather,
    });
    resetForm();
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
        name="name"
        onChange={handleChange}
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
        name="imageUrl"
        onChange={handleChange}
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
            onChange={handleChange}
          />
          Hot
        </label>

        <label>
          <input
            type="radio"
            name="weather"
            value="warm"
            checked={weather === "warm"}
            onChange={handleChange}
          />
          Warm
        </label>

        <label>
          <input
            type="radio"
            name="weather"
            value="cold"
            checked={weather === "cold"}
            onChange={handleChange}
          />
          Cold
        </label>
      </div>
    </ModalWithForm>
  );
}

export default AddClothesModal;
