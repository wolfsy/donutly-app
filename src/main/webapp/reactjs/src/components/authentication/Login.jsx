import { useRef, useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Form, InputGroup, Modal, Stack } from "react-bootstrap";
import AuthContext from "../../context/AuthProvider";
import UserService from "../../services/UserService";

import './authentication.css';

const Login = ({ handleCloseLogin, showLogin }) => {

    const { setAuth } = useContext(AuthContext);

    const userRef = useRef();
    // const errRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [errMsg, setErrMsg] = useState('');
    // const [success, setSuccess] = useState(false);

    // useEffect(() => {
    //     userRef.current.focus();
    // }, []);

    useEffect(() => {
        //setErrMsg('');
    }, [email, password]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const response = await UserService.login(email, password);
        const token = response?.data;
        setAuth({ email, password, token, isLogged: true });
        
        setEmail('');
        setPassword('');
        //setSuccess(true);

        handleCloseLogin();
    }

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
                            <Form.Control 
                                type="email"
                                id="email"
                                placeholder="Email" 
                                ref={userRef}
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                required
                            />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <InputGroup>
                            <InputGroup.Text>
                                <FontAwesomeIcon icon="fa-solid fa-key" />
                            </InputGroup.Text>
                            <Form.Control 
                                type="password"
                                id="password"
                                placeholder="Password" 
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                required />
                        </InputGroup>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
            <Stack direction="horizontal" gap={3}>
                <button className="app-button modal-button" type="submit" form="loginForm" onClick={handleSubmit}>
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