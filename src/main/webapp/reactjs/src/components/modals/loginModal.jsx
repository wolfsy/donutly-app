import React from "react";
import {Button, Form} from "react-bootstrap";

const LoginModal = () => {

    return (
        <Form>
            <Form.Group>
                <Form.Control type="email" placeholder="Email" required />
            </Form.Group>
            <Form.Group>
                <Form.Control type="password" placeholder="Password" required />
            </Form.Group>
            <Button variant="success" type="submit">
                Login
            </Button>
        </Form>
    );
}

export default LoginModal;