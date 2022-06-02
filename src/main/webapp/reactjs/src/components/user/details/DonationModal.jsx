import { useRef, useState, useEffect } from 'react';
import { Form, InputGroup, Modal, Stack, Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import DepositService from '../../../services/DepositService';

function DonationModal({ showModal, handleCloseModal, selectedAmount, userId }) {

    const formRef = useRef();
    const errorRef = useRef();
    const [form, setForm] = useState({});
    const [formErrors, setFormErrors] = useState({});
    const [errorMsg, setErrorMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect (() => {
        setField("amount", selectedAmount === "?" ? "" : selectedAmount);
    }, [selectedAmount]);

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
        const { amount, message } = form;
        const errors = {};

        if(!amount)
            errors.amount = "Amount is required";   
        else if(isNaN(amount))
            errors.amount = "Amount must be a number";
        else if(amount.includes(".") || amount.includes(","))
            errors.amount = "Amount must be an integer number";
        else if(selectedAmount === "?" && amount < 100)
            errors.amount = "Amount must be at least 100";
        if(message && message.length > 500)
            errors.message = "Message must be less than 500 characters";

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
                const deposit = 
                {
                    amount: parseInt(form.amount),
                    donator: form.donator ? form.donator : "Anonymous",
                    message: form.message,
                    time: new Date(),
                    visibility: true
                }

                setIsLoading(true);
                await DepositService.addDeposit(userId, deposit);

                setSuccess(true);
                setIsLoading(false);
                setForm({});
            } 
            catch (err) {
                if (!err?.response)
                    setErrorMsg("No Server Response");
                else
                    setErrorMsg("Error while adding donation");
                setIsLoading(false);
                errorRef.current.focus();
            }
        }
    }

    const modalClose = () => {
        setForm({});
        setFormErrors({});
        handleCloseModal();
        if(success)
        {
            setSuccess(false);
            window.location.reload();
        }
    }

    const handleKeyUp = (e) => {
        if (e.keyCode === 13) {
            handleSubmit(e);
        }
    }

  return (
    <Modal
          show={showModal} 
          onHide={modalClose}
          centered={true}
          aria-labelledby="contained-modal-title-vcenter"
    >
            <Modal.Header closeButton>
                <Modal.Title>Donate</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {
                    !success ?
                    <Form ref={formRef} 
                      onKeyUp={handleKeyUp} 
                      tabIndex={0}
                    >
                        <fieldset disabled={isLoading}>
                            <Form.Group className="mb-4 mt-2">
                                <InputGroup>
                                    <InputGroup.Text className="form-icon">
                                        <FontAwesomeIcon icon="fa-solid fa-dollar-sign" />
                                    </InputGroup.Text>
                                    <Form.Control
                                        type="text"
                                        placeholder="Amount"
                                        value={form.amount || ""}
                                        onChange={(e) => setField("amount", e.target.value)}
                                        disabled={selectedAmount === "?" ? false : true}
                                        isInvalid={!!formErrors.amount}
                                        required
                                        autoFocus
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {formErrors.amount}
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group className="mb-4">
                                <InputGroup>
                                    <InputGroup.Text className="form-icon">
                                        <FontAwesomeIcon icon="fa-solid fa-user" />
                                    </InputGroup.Text>
                                    <Form.Control
                                        type="text"
                                        placeholder="Donator"
                                        value={form.donator || ""}
                                        onChange={(e) => setField("donator", e.target.value)}
                                    />
                                </InputGroup>
                            </Form.Group>
                            <Form.Group className="mb-2">
                                <InputGroup>
                                    <InputGroup.Text className="form-icon">
                                        <FontAwesomeIcon icon="fa-solid fa-message" />
                                    </InputGroup.Text>
                                    <Form.Control as="textarea" 
                                                rows={10}
                                                placeholder="Message"
                                                value={form.message || ""}
                                                onChange={(e) => setField("message", e.target.value)}
                                                isInvalid={!!formErrors.message}
                                                required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {formErrors.message}
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </fieldset>
                        <p className="text-danger" ref={errorRef} aria-live="assertive">
                            {errorMsg}
                        </p>
                    </Form> :
                    <h4>Thanks for your support!</h4>
                }
            </Modal.Body>
            <Modal.Footer>
                <Stack direction="horizontal" gap={3}>
                    {
                        !success ?
                        <button className="app-button modal-button" 
                            type="submit" 
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
                        </button> : ''
                    }
                    <button className="app-button modal-button" 
                            onClick={modalClose}
                            disabled={isLoading}
                    >
                        {!success ? 'Cancel' : 'Close'}
                    </button>
                </Stack>
            </Modal.Footer>
    </Modal>
  )
}

export default DonationModal