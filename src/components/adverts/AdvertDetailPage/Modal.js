import React from 'react';
import T from 'prop-types';
import './Modal.css';

function Modal({ openModal, onClickDelete,children }) {
  return (
    <div className="modal">
      <div className="modal_container">
        <header>{children}</header>
        <div className="content">
          <button 
            onClick={onClickDelete}
            className="btn btn-danger bt_modal"
          >
            Accept
          </button>
          <button 
            onClick={openModal}
            className="btn btn-primary bt_modal"
          >

            Cancel
          </button>
        </div>

      </div>
    </div>
  
    
  );
}

Modal.propTypes = {
    onClickDelete: T.func.isRequired,
    openModal: T.func.isRequired
};

export default Modal;
