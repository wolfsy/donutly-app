import { useState, useRef, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { Row, Form, Col, Spinner, Modal, Stack } from 'react-bootstrap';
import ModalCloseXmark from '../../../common/ModalCloseXmark';
import AuthContext from '../../../../context/AuthProvider';

import UserService from '../../../../services/UserService';

function ChangeAccountPassword() {

    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();
    const formRef = useRef();
    const errorRef = useRef();
    const [form, setForm] = useState({});
    const [formErrors, setFormErrors] = useState({});
    const [errorMsg, setErrorMsg] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);

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
        const { oldPassword, password, confirmPassword } = form;
        const errors = {};

        if(!oldPassword)
            errors.oldPassword = "Old password is required";
        if(!password || password.length < 8 || password.length > 60)
            errors.password = "New password must be between 8 and 60 characters long";
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
                setIsLoading(true);
                await UserService.updateUserAccountPassword(
                    form.oldPassword, form.password, form.confirmPassword);

                localStorage.removeItem('auth');
                setAuth({ token: null, isLogged: false });

                setIsLoading(false);
                setForm({});
                setShowModal(true);
            }
            catch (err) {
                if (!err?.response)
                    setErrorMsg('No Server Response');
                else 
                    setErrorMsg('Failed to update password');
                    
                setIsLoading(false);
                errorRef.current.focus();
            }
        }
    }

    const closeModal = () => {
        setShowModal(false);
        navigate('/');
    }

  return (
    <Row>
        <Col xs={9} className="">
            <fieldset disabled={isLoading}>
                <Form ref={formRef}>
                    <Form.Group className="text-start">
                        <Form.Label>Old password</Form.Label>
                        <Form.Control 
                                type="password" 
                                value={form.oldPassword || ""}
                                onChange={(e) => setField("oldPassword", e.target.value)}
                                isInvalid={!!formErrors.oldPassword}
                                required
                            />
                        <Form.Control.Feedback type="invalid">
                            {formErrors.oldPassword}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="text-start mt-3">
                        <Form.Label>New password</Form.Label>
                        <Form.Control 
                                type="password" 
                                value={form.password || ""}
                                onChange={(e) => setField("password", e.target.value)}
                                isInvalid={!!formErrors.password}
                                required
                            />
                        <Form.Control.Feedback type="invalid">
                            {formErrors.password}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="text-start mt-3">
                        <Form.Label>Confirm new password</Form.Label>
                        <Form.Control 
                                type="password" 
                                value={form.confirmPassword || ""}
                                onChange={(e) => setField("confirmPassword", e.target.value)}
                                isInvalid={!!formErrors.confirmPassword}
                                required
                            />
                        <Form.Control.Feedback type="invalid">
                            {formErrors.confirmPassword}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form>
            </fieldset>
            <p className="text-danger text-start mt-3" ref={errorRef} aria-live="assertive">
                {errorMsg}
            </p>
        </Col>
        <Col xs={3}>
            <button className="app-button form-confirm-button"
                        onClick={handleSubmit}
                        disabled={isLoading}
            >
            {
                isLoading ?
                <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                /> : 
                <span>Confirm</span>
            }
            </button>
        </Col>

        <Modal
            show={showModal}
            onHide={closeModal}
            centered={true}
            aria-labelledby="contained-modal-title-vcenter"
        >
            <Modal.Header>
                <Modal.Title>Message</Modal.Title>
                <ModalCloseXmark handleClose={closeModal} />
            </Modal.Header>
            <Modal.Body>
                    <h5>Your password has been changed.</h5>
                    <h5>Now you must sign in again.</h5>
            </Modal.Body>
            <Modal.Footer>
                <Stack direction="horizontal" gap={3}>
                    <button className="app-button modal-button" onClick={closeModal}>
                        Close
                    </button>
                </Stack>
            </Modal.Footer>
        </Modal>
    </Row>
  )
}

export default ChangeAccountPassword