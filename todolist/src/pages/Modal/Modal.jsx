import React from 'react';
import "./Modal.css"

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">Nova Tarefa</h2>
        {children}
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};

export default Modal;