import { useEffect, useState } from "react";
import "./ItemModal.css";

function ItemModal({ card, isOpen, onClose, onDeleteItem }) {
  const [showConfirm, setShowConfirm] = useState(false);
  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  const handleOverlay = (e) => {
    if (e.target.classList.contains("modal")) {
      onClose();
    }
  };

  return (
    <div
      className={`modal modal_type_preview ${isOpen ? "modal_is-opened" : ""}`}
      onClick={handleOverlay}
    >
      <div className="modal__content">
        <button className="modal__close" onClick={onClose}></button>

        {card && (
          <>
            <img src={card.imageUrl} alt={card.name} className="modal__image" />

            <div className="modal__info">
              <h2 className="modal__name">{card.name}</h2>
              <p className="modal__weather">Weather: {card.weather}</p>

              <button
                className="modal__delete-btn"
                onClick={() => {
                  setShowConfirm(true);
                }}
              >
                Delete Item
              </button>
              {showConfirm && (
                <div className="confirm-overlay">
                  <div className="confirm-modal">
                    <button
                      className="confirm-close"
                      onClick={() => setShowConfirm(false)}
                    >
                      ×
                    </button>

                    <h2>
                      Are you sure you want to delete this item?
                      <br />
                      This action is irreversible.
                    </h2>

                    <button
                      className="confirm-delete"
                      onClick={() => {
                        onDeleteItem(card.id);
                        setShowConfirm(false);
                        onClose();
                      }}
                    >
                      Yes, delete item
                    </button>

                    <button
                      className="confirm-cancel"
                      onClick={() => setShowConfirm(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ItemModal;
