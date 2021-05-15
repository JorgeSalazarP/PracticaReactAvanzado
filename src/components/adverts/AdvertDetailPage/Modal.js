import React from 'react';
import T from 'prop-types';
import './Modal.css';

function Modal({ openModal, onClickDeleteAdvert }) {
  return (
    <div className="modal">
      <div className="modal_container">
        <header>Are you sure to delete this advert?</header>
        <div className="content">
          <button 
            onClick={onClickDeleteAdvert}
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
    onClickDeleteAdvert: T.func.isRequired,
    openModal: T.func.isRequired
};

export default Modal;
