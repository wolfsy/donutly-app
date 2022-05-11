import { useState, useEffect, useContext, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Form, InputGroup, Modal, Stack } from "react-bootstrap";

import AuthContext from "../../context/AuthProvider";
import UserService from "../../services/UserService";

import './authentication.css';

const Login = ({ handleCloseLogin, showLogin }) => {

    const navigate = useNavigate();
    const errRef = useRef();
    const formRef = useRef();
    const { setAuth } = useContext(AuthContext);
    const [form, setForm] = useState({});
    const [formErrors, setFormErrors] = useState({});
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        setErrMsg('');
        setFormErrors({});
    }, [form]);

    const setField = (field, value) => {
        setForm({
             ...form, 
             [field]: value 
        });

        if(!!formErrors[field]) {
            setFormErrors({
                ...formErrors,
                [field]: null
            });
        }
    }

    const validateForm = () => {
        const { email, password } = form;
        const errors = {};

        if(!email)
            errors.email = "Email is required";
        if(!password)
            errors.password = "Password is required";

        return errors;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        
        if(Object.keys(formErrors).length > 0) {
            setFormErrors(formErrors);
        }
        else {
            try {
                const response = await UserService.login(form.email, form.password);
                const token = response?.data;
                setSuccess(true);
                setAuth({ email: form.email, password: form.password, token, isLogged: true });
                setForm({});
            } 
            catch (err) {
                if (!err?.response)
                    setErrMsg('No Server Response');
                else if (err.response?.status === 400)
                    setErrMsg('Invalid Email or Password');
                else 
                    setErrMsg('Login Failed');
                errRef.current.focus();
            }
        }
    }

    const modalClose = () => {
        setForm({});
        setFormErrors({});
        handleCloseLogin();
        if(success)
        {
            setSuccess(false);
            navigate('/');
        }
    }

    const handleKeyUp = (e) => {
        if (e.keyCode === 13) {
            handleSubmit(e);
        }
    }

    return (
        <Modal 
          show={showLogin} 
          onHide={modalClose}
          centered={true}
          aria-labelledby="contained-modal-title-vcenter"
        >
            <Modal.Header closeButton>
                <Modal.Title>Sign In</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {   !success ?
                    <Form ref={formRef} onKeyUp={handleKeyUp} tabIndex={0}>
                        <Form.Group className="mb-4">
                            <InputGroup>
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon="fa-solid fa-at" />
                                </InputGroup.Text>
                                <Form.Control 
                                    type="email"
                                    id="email"
                                    placeholder="Email" 
                                    value={form.email || ""}
                                    onChange={(e) => setField("email", e.target.value)}
                                    isInvalid={!!formErrors.email}
                                    required
                                    autoFocus
                                />
                                <Form.Control.Feedback type="invalid">
                                    {formErrors.email}
                                </Form.Control.Feedback>
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
                                    value={form.password || ""}
                                    onChange={(e) => setField("password", e.target.value)}
                                    isInvalid={!!formErrors.password}
                                    required 
                                />
                                <Form.Control.Feedback type="invalid">
                                    {formErrors.password}
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <p className="text-danger" ref={errRef} aria-live="assertive">
                        {errMsg}
                        </p>
                    </Form> :
                    <h4>You are logged in!</h4>
                }
            </Modal.Body>
            <Modal.Footer>
            <Stack direction="horizontal" gap={3}>
                {
                    !success ?
                    <button className="app-button modal-button" 
                        type="submit" 
                        form="loginForm"
                        onClick={handleSubmit} 
                    >
                        Confirm
                    </button> : ''
                }
                <button className="app-button modal-button" 
                        onClick={modalClose}>
                    {!success ? 'Cancel' : 'Close'}
                </button>
            </Stack>
            </Modal.Footer>
      </Modal>
    );
}

export default Login;