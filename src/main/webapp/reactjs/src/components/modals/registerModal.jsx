import React from "react";
import {Form} from "react-bootstrap";

const RegisterModal = () => {

    return (
        <Form id="registerForm">
            <Form.Group className="mb-4">
                <Form.Group className="mb-2">
                    <Form.Control type="text" placeholder="First Name" required />
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Control type="text" placeholder="Last Name" required />
                </Form.Group>
            </Form.Group>

            <Form.Group className="mb-4">
                <Form.Group className="mb-2">
                    <Form.Control type="text" placeholder="Username"/>
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Control type="email" placeholder="Email" required />
                </Form.Group>
            </Form.Group>

            <Form.Group className="mb-4">
                <Form.Group className="mb-2">
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Control type="password" placeholder="Confirm Password" required />
                </Form.Group>
            </Form.Group>
        </Form>
    );
}

export default RegisterModal;