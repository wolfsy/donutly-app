import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Form, InputGroup } from "react-bootstrap";

const RegisterModal = () => {

    return (
        <Form id="registerForm">
            <Form.Group className="mb-4">
                <Form.Group className="mb-2">
                    <InputGroup>
                        <InputGroup.Text>
                            <FontAwesomeIcon icon="fa-solid fa-user" />
                        </InputGroup.Text>
                        <Form.Control type="text" placeholder="First Name" required />
                    </InputGroup>
                </Form.Group>
                <Form.Group className="mb-2">
                    <InputGroup>
                        <InputGroup.Text>
                            <FontAwesomeIcon icon="fa-solid fa-user" />
                        </InputGroup.Text>
                        <Form.Control type="text" placeholder="Last Name" required />
                    </InputGroup>  
                </Form.Group>
            </Form.Group>

            <Form.Group className="mb-4">
                <Form.Group className="mb-2">
                    <InputGroup>
                        <InputGroup.Text>
                            <FontAwesomeIcon icon="fa-solid fa-user" />
                        </InputGroup.Text>
                        <Form.Control type="text" placeholder="Username"/>
                    </InputGroup>  
                </Form.Group>
                <Form.Group className="mb-2">
                    <InputGroup>
                        <InputGroup.Text>
                            <FontAwesomeIcon icon="fa-solid fa-at" />
                        </InputGroup.Text>
                        <Form.Control type="email" placeholder="Email" required />
                    </InputGroup> 
                </Form.Group>
            </Form.Group>

            <Form.Group className="mb-4">
                <Form.Group className="mb-2">
                    <InputGroup>
                        <InputGroup.Text>
                            <FontAwesomeIcon icon="fa-solid fa-key" />
                        </InputGroup.Text>
                        <Form.Control type="password" placeholder="Password" required />
                    </InputGroup>
                </Form.Group>
                <Form.Group className="mb-2">
                    <InputGroup>
                        <InputGroup.Text>
                            <FontAwesomeIcon icon="fa-solid fa-key" />
                        </InputGroup.Text>
                        <Form.Control type="password" placeholder="Confirm Password" required />
                    </InputGroup>
                </Form.Group>
            </Form.Group>
        </Form>
    );
}

export default RegisterModal;