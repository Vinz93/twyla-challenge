import React, { Component } from 'react';
import Modal from 'react-modal';

import BookForm from '../containers/BookForm';

const customStyles = {
  content: {
    width: '60%',
    minWidth: '280px',
    maxWidth: '400px',
    height: '50%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    padding: '10px 20px 14px',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: '0px 50px 30px -30px rgba(0,0,0,0.3)',
  },
};

class BookModal extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button onClick={this.closeModal}>close</button>
          <BookForm />
        </Modal>
      </div>
    );
  }
}

export default BookModal;
