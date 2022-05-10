import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Form, InputGroup, Modal, Stack } from "react-bootstrap";

import './authentication.css';

const Login = ({ handleCloseLogin, showLogin }) => {

    return (
        <Modal 
          show={showLogin} 
          onHide={handleCloseLogin}
          centered={true}
          aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className="mb-4">
                    <InputGroup>
                        <InputGroup.Text>
                            <FontAwesomeIcon icon="fa-solid fa-at" />
                        </InputGroup.Text>
                        <Form.Control type="email" placeholder="Email" required />
                    </InputGroup>
                </Form.Group>
                <Form.Group className="mb-4">
                    <InputGroup>
                        <InputGroup.Text>
                            <FontAwesomeIcon icon="fa-solid fa-key" />
                        </InputGroup.Text>
                        <Form.Control type="password" placeholder="Password" required />
                    </InputGroup>
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Stack direction="horizontal" gap={3}>
              <button className="app-button modal-button" type="submit" form="loginForm">
                Confirm
              </button>
              <button className="app-button modal-button" onClick={handleCloseLogin}>
                Cancel
              </button>
            </Stack>
        </Modal.Footer>
      </Modal>
    );
}

export default Login;