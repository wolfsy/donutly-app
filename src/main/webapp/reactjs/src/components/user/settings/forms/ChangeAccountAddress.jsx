import { useState, useRef, useEffect } from 'react'
import { Row, Form, Col, Spinner } from 'react-bootstrap';

import UserService from '../../../../services/UserService';

function ChangeAccountAddress({ currentAddress, parentCallback }) {

    const formRef = useRef();
    const errorRef = useRef();
    const [form, setForm] = useState(currentAddress);
    const [formErrors, setFormErrors] = useState({});
    const [errorMsg, setErrorMsg] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        setFormErrors('');
        setErrorMsg('');
        setSuccess(false);
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
        setSuccess(false);
        const { street, number, city, zipCode } = form;
        const errors = {};

        if(currentAddress.street === street && currentAddress.number === number &&  
           currentAddress.city === city &&  currentAddress.zipCode === zipCode)
        {
            setErrorMsg('You must change at least one field');
            errors.error = 'You must change at least one field';
        }

        if(street.length > 40)
            errors.street = 'Street must be less than 40 characters';
        if(number.length > 10)
            errors.number = 'Number must be less than 10 characters';
        if(city.length > 40)
            errors.city = 'City must be less than 40 characters';
        if(zipCode.length > 10)
            errors.zipCode = 'Zip code must be less than 10 characters';

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
                await UserService.updateUserAccountAddress(form);
                setIsLoading(false);
                parentCallback(true);
                setSuccess(true);
            }
            catch (err) {
                if (!err?.response)
                    setErrorMsg('No Server Response');
                else 
                    setErrorMsg('Failed to update address');
                    
                setIsLoading(false);
                errorRef.current.focus();
            }
        }
    }

  return (
    <Row>
        <Col xs={9} className="">
            <fieldset disabled={isLoading}>
                <Form ref={formRef}>
                    <Form.Group className="text-start">
                        <Form.Label>Street</Form.Label>
                        <Form.Control 
                                type="text" 
                                value={form.street || ""}
                                onChange={(e) => setField("street", e.target.value)}
                                isInvalid={!!formErrors.street}
                                required
                            />
                        <Form.Control.Feedback type="invalid">
                            {formErrors.street}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="text-start mt-3">
                        <Form.Label>Number</Form.Label>
                        <Form.Control 
                                type="text" 
                                value={form.number || ""}
                                onChange={(e) => setField("number", e.target.value)}
                                isInvalid={!!formErrors.number}
                                required
                            />
                        <Form.Control.Feedback type="invalid">
                            {formErrors.number}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="text-start mt-3">
                        <Form.Label>City</Form.Label>
                        <Form.Control 
                                type="text" 
                                value={form.city || ""}
                                onChange={(e) => setField("city", e.target.value)}
                                isInvalid={!!formErrors.city}
                                required
                            />
                        <Form.Control.Feedback type="invalid">
                            {formErrors.city}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="text-start mt-3">
                        <Form.Label>Zip code</Form.Label>
                        <Form.Control 
                                type="text" 
                                value={form.zipCode || ""}
                                onChange={(e) => setField("zipCode", e.target.value)}
                                isInvalid={!!formErrors.zipCode}
                                required
                            />
                        <Form.Control.Feedback type="invalid">
                            {formErrors.zipCode}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form>
            </fieldset>
            <p className="text-danger text-start mt-3" ref={errorRef} aria-live="assertive">
                {errorMsg}
            </p>
            {
                success && <p className="text-success text-start mt-3" aria-live="assertive">
                                Address has been updated
                            </p>
            }
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
    </Row>
  )
}

export default ChangeAccountAddress