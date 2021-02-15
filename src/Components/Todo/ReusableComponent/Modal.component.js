import React, {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';

function ModalComponent(props) {
  const {showModalFlag, header, body, changeValue} = props.data;
  const [show, setShow] = useState(showModalFlag);

  const handleClose = () => {
    props.closeButton();
    setShow(false);
  }
  const handleShow = () => setShow(true);

  return (
    <>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{header}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
           {changeValue}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalComponent
