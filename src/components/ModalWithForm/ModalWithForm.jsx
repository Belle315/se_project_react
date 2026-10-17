import { useEffect } from "react";
import "./ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  title,
  name,
  isOpen,
  onClose,
  onSubmit,
  isDisabled,
}) {
  // ESC key close
  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  // Overlay click close
  const handleOverlay = (e) => {
    if (e.target.classList.contains("form-modal")) {
      onClose();
    }
  };

  return (
    <div
      className={`form-modal form-modal_type_${name} ${isOpen ? "form-modal_is-opened" : ""}`}
      onClick={handleOverlay}
    >
      <div className="form-modal__content">
        <button
          type="button"
          className="form-modal__close"
          onClick={onClose}
          aria-label="Close Popup"
        >
          &times;
        </button>

        <h2 className="form-modal__title">{title}</h2>

        <form className="form-modal__form" name={name} onSubmit={onSubmit}>
          {children}

          <button
            type="submit"
            className={`form-modal__submit ${isDisabled ? "form-modal__submit_disabled" : ""}`}
            disabled={isDisabled}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
