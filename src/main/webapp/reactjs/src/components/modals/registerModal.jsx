import React from "react";
import {Button, Form} from "react-bootstrap";

const RegisterModal = () => {

    return (
        <Form>
            <Form.Group>
                <Form.Control type="text" placeholder="Username"/>
                <Form.Control type="email" placeholder="Email" required />
            </Form.Group>

            <Form.Group>
                <Form.Control type="text" placeholder="First Name" required />
                <Form.Control type="text" placeholder="Last Name" required />
            </Form.Group>

            <Form.Group>
                <Form.Control type="text" placeholder="City" required />
                <Form.Control type="text" placeholder="Street" required />
                <Form.Control type="text" placeholder="Number" required />
                <Form.Control type="text" placeholder="Zip Code" required />
            </Form.Group>

            <Form.Group>
                <Form.Control type="password" placeholder="Password" required />
                <Form.Control type="password" placeholder="Confirm Password" required />
            </Form.Group>
            <Button variant="primary" type="submit">
                Register
            </Button>
        </Form>
    );
}

export default RegisterModal;