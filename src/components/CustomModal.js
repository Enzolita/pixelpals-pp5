// Custom code

import React from "react";
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import { useHistory } from "react-router-dom";

function CustomModal({ show, handleClose, title, message, redirectPath }) {
  const history = useHistory();

  const handleCloseAndRedirect = () => {
    handleClose();
    history.push(redirectPath);
  };

  return (
    <Modal show={show} onHide={handleCloseAndRedirect}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseAndRedirect}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CustomModal;