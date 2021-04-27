import React from "react";
import { FaTimes } from "react-icons/fa";
import { useAppContext } from "./context";

const Modal = () => {
  const { modalOpen, closeModal } = useAppContext();
  return (
    <div className={modalOpen ? "modal-overlay show-modal" : "modal-overlay"}>
      <div className="modal-container">
        <h3>Modal Content</h3>
        <button onClick={closeModal} className="close-modal-btn">
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
