import { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Form, InputGroup, Modal, Stack, Row, Spinner } from "react-bootstrap";
import ModalCloseXmark from "../common/ModalCloseXmark";

import UserService from "../../services/UserService";

import './authentication.css';

const Register = ({ handleCloseRegister, showRegister }) => {

    const navigate = useNavigate();
    const errorRef = useRef();
    const formRef = useRef();
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

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
    };

    const validateForm = () => {
        const { firstName, lastName, userName, email, password, confirmPassword } = form;
        const errors = {};

        if(!firstName || firstName.length > 30)
            errors.firstName  = "First name must be between 1 and 30 characters long";
        if(!lastName || lastName.length > 30)
            errors.lastName = "Last name must be between 1 and 50 characters long";
        if(!userName || userName.length > 100)
            errors.userName = "Username must be between 1 and 100 characters long";
        if(!email || !validateEmail(email))
            errors.email = "Email is invalid";
        if(!password || password.length < 8 || password.length > 60)
            errors.password = "Password must be between 8 and 60 characters long";
        if(password !== confirmPassword)
            errors.confirmPassword = "Passwords do not match";

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
                await UserService.register(
                    form.email, form.firstName, form.lastName,
                    form.userName, form.password, form.confirmPassword);

                setSubmited(false);
                setSuccess(true);
                setForm({});
            }
            catch (err) {
                if (!err?.response)
                    setErrorMsg('No Server Response');
                else if (err.response?.status === 409)
                    setErrorMsg('Chosen Email or Username is already taken');
                else 
                    setErrorMsg('Register Failed');
                    
                setSubmited(false);
                errorRef.current.focus();
            }
        }
    }

    const handleKeyUp = (e) => {
        if (e.keyCode === 13) {
            handleSubmit(e);
        }
    }

    const modalClose = () => {
        setFormErrors({});
        setForm({});
        handleCloseRegister();
        if(success)
        {
            setSuccess(false);
            navigate('/');
        }
    }

    return (
        <Modal
          show={showRegister}
          onHide={modalClose}
          centered={true}
          aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header>
          <Modal.Title>Sign up</Modal.Title>
          <ModalCloseXmark handleClose={modalClose} />
        </Modal.Header>
        <Modal.Body>
            {
                !success ?
                <Form ref={formRef} onKeyUp={handleKeyUp} tabIndex={0}>
                    <fieldset disabled={submited}>
                        <Form.Group className="mb-4">
                            <Form.Group className="mb-2">
                                <InputGroup>
                                    <InputGroup.Text>
                                        <FontAwesomeIcon icon="fa-solid fa-user" />
                                    </InputGroup.Text>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="First Name" 
                                        required
                                        value={form.firstName || ""}
                                        onChange={(e) => setField("firstName", e.target.value)}
                                        isInvalid={!!formErrors.firstName}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {formErrors.firstName}
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group className="mb-2">
                                <InputGroup>
                                    <InputGroup.Text>
                                        <FontAwesomeIcon icon="fa-solid fa-user" />
                                    </InputGroup.Text>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Last Name" 
                                        required
                                        value={form.lastName || ""}
                                        onChange={(e) => setField("lastName", e.target.value)}
                                        isInvalid={!!formErrors.lastName} 
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {formErrors.lastName}
                                    </Form.Control.Feedback>
                                </InputGroup>  
                            </Form.Group>
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Group className="mb-2">
                                <InputGroup>
                                    <InputGroup.Text>
                                        <FontAwesomeIcon icon="fa-solid fa-user" />
                                    </InputGroup.Text>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Username"
                                        value={form.userName || ""}
                                        onChange={(e) => setField("userName", e.target.value)}
                                        isInvalid={!!formErrors.userName}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {formErrors.userName}
                                    </Form.Control.Feedback>
                                </InputGroup>  
                            </Form.Group>
                            <Form.Group className="mb-2">
                                <InputGroup>
                                    <InputGroup.Text>
                                        <FontAwesomeIcon icon="fa-solid fa-at" />
                                    </InputGroup.Text>
                                    <Form.Control 
                                        type="email" 
                                        placeholder="Email" 
                                        required
                                        value={form.email || ""}
                                        onChange={(e) => setField("email", e.target.value)}
                                        isInvalid={!!formErrors.email}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {formErrors.email}
                                    </Form.Control.Feedback>
                                    </InputGroup> 
                                </Form.Group>
                            </Form.Group>

                            <Form.Group className="mb-4">
                                <Form.Group className="mb-2">
                                    <InputGroup>
                                        <InputGroup.Text>
                                            <FontAwesomeIcon icon="fa-solid fa-key" />
                                        </InputGroup.Text>
                                        <Form.Control 
                                            type="password" 
                                            placeholder="Password" 
                                            required
                                            value={form.password || ""}
                                            onChange={(e) => setField("password", e.target.value)}
                                            isInvalid={!!formErrors.password}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {formErrors.password}
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                            <Form.Group className="mb-2">
                                <InputGroup>
                                    <InputGroup.Text>
                                        <FontAwesomeIcon icon="fa-solid fa-key" />
                                    </InputGroup.Text>
                                    <Form.Control 
                                        type="password" 
                                        placeholder="Confirm Password" 
                                        required
                                        value={form.confirmPassword || ""}
                                        onChange={(e) => setField("confirmPassword", e.target.value)}
                                        isInvalid={!!formErrors.confirmPassword}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {formErrors.confirmPassword}
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Form.Group>
                    </fieldset>
                    <p className="text-danger" ref={errorRef} aria-live="assertive">
                            {errorMsg}
                    </p>
                </Form> :
                <Row>
                    <h4>Your donutly account has been successfully created!</h4>
                    <p>Please check your inbox. The account confirmation link has been sent to your email address.</p>
                </Row>
            }
        </Modal.Body>
        <Modal.Footer>
          <Stack direction="horizontal" gap={3}>
              {
                    !success ?
                    <button className="app-button modal-button" 
                            type="submit" 
                            form="registerForm"
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

export default Register;