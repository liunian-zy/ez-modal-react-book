import 'bootstrap/dist/css/bootstrap.min.css';
import EasyModal from 'ez-modal-react';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const BootstrapModal = EasyModal.create((props) => {
  return (
    <Modal show={props.visible} onHide={props.hide} onExited={props.remove}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.hide}>
          Close
        </Button>
        <Button variant="primary" onClick={props.hide}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default function App() {
  return (
    <EasyModal.Provider>
      <Button
        onClick={async () => {
          EasyModal.show(BootstrapModal).then((result) => {
            console.log(result);
          });
        }}
        color="primary"
      >
        Bootstrap Modal
      </Button>
    </EasyModal.Provider>
  );
}
