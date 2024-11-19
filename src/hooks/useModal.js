import React from 'react';
import useModal from '../hooks/useModal';

function ModalComponent() {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <p>This is a modal</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
