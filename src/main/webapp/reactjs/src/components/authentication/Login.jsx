import { useState, useEffect, useContext, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Form, InputGroup, Modal, Stack, Spinner } from "react-bootstrap";

import AuthContext from "../../context/AuthProvider";
import UserService from "../../services/UserService";

import './authentication.css';

const Login = ({ handleCloseLogin, showLogin }) => {

    const navigate = useNavigate();
    const formRef = useRef();
    const errorRef = useRef();
    const { setAuth } = useContext(AuthContext);
    const [form, setForm] = useState({});
    const [formErrors, setFormErrors] = useState({});
    const [errorMsg, setErrorMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const [submited, setSubmited] = useState(false);

    useEffect(() => {
        setErrorMsg('');
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
                setSubmited(true);
                const response = await UserService.login(form.email, form.password);
                const token = response?.data;

                setSubmited(false);
                setSuccess(true);
                setAuth({ email: form.email, password: form.password, token, isLogged: true });
                setForm({});
            } 
            catch (err) {
                if (!err?.response)
                    setErrorMsg('No Server Response');
                else if (err.response?.status === 400)
                    setErrorMsg('Invalid Email or Password');
                else 
                    setErrorMsg('Login Failed');

                setSubmited(false);
                errorRef.current.focus();
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
                        <fieldset disabled={submited}>
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
                        </fieldset>
                        <p className="text-danger" ref={errorRef} aria-live="assertive">
                            {errorMsg}
                        </p>
                    </Form> :
                    <h4>You are signed in!</h4>
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
                        disabled={submited}
                    >
                        {
                            submited ? 
                            <Spinner
                              as="span"
                              animation="border"
                              size="sm"
                              role="status"
                              aria-hidden="true"
                            /> : 
                            <span>Confirm</span>
                        }
                    </button> : ''
                }
                <button className="app-button modal-button" 
                        onClick={modalClose}
                        disabled={submited}
                >
                    {!success ? 'Cancel' : 'Close'}
                </button>
            </Stack>
            </Modal.Footer>
      </Modal>
    );
}

export default Login;