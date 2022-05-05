import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Form, InputGroup } from "react-bootstrap";

const LoginModal = () => {

    return (
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
    );
}

export default LoginModal;