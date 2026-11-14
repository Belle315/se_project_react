import { useEffect, useState } from "react";
import "./ItemModal.css";

function ItemModal({ card, isOpen, onClose, onDeleteItem }) {
  const [showConfirm, setShowConfirm] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState("");

  useEffect(() => {
    if (!isOpen) {
      setShowConfirm(false);
      setDeleteError("");
      return;
    }

    const handleEsc = (e) => {
      if (e.key === "Escape" && !isDeleting) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose, isDeleting]);

  const handleOverlay = (e) => {
    if (e.target.classList.contains("modal") && !isDeleting) {
      onClose();
    }
  };

  const handleConfirmDelete = async () => {
    if (!card || isDeleting) return;

    setIsDeleting(true);
    setDeleteError("");

    try {
      await onDeleteItem(card.id);

      setShowConfirm(false);
      onClose();
    } catch (error) {
      console.error("Failed to delete item:", error);
      setDeleteError("Could not delete item. Please try again.");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div
      className={`modal modal_type_preview ${isOpen ? "modal_is-opened" : ""}`}
      onClick={handleOverlay}
    >
      <div className="modal__content">
        <button
          className="modal__close"
          onClick={onClose}
          disabled={isDeleting}
        ></button>

        {card && (
          <>
            <img src={card.imageUrl} alt={card.name} className="modal__image" />

            <div className="modal__info">
              <h2 className="modal__name">{card.name}</h2>
              <p className="modal__weather">Weather: {card.weather}</p>

              <button
                className="modal__delete-btn"
                onClick={() => {
                  setDeleteError("");
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
                      disabled={isDeleting}
                    >
                      ×
                    </button>

                    <h2>
                      Are you sure you want to delete this item?
                      <br />
                      This action is irreversible.
                    </h2>

                    {deleteError && <p role="alert">{deleteError}</p>}

                    <button
                      className="confirm-delete"
                      onClick={handleConfirmDelete}
                      disabled={isDeleting}
                    >
                      {isDeleting ? "Deleting..." : "Yes, delete item"}
                    </button>

                    <button
                      className="confirm-cancel"
                      onClick={() => setShowConfirm(false)}
                      disabled={isDeleting}
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
