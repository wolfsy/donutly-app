import { useState, useEffect } from 'react'
import { Row, Form, Col } from 'react-bootstrap';

import UserService from '../../../../services/UserService';

function ChangeAccountNumber() {

    const [accountNumber, setAccountNumber] = useState('');
    const [formError, setFormError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [validated, setValidated] = useState(false);

    useEffect(() => {
        setFormError('');
        setValidated(false)
    }, [accountNumber]);

    const validateForm = () => {
        if(!accountNumber)
        {
            setFormError('Account number is required');
            return false;
        }
        else if(isNaN(accountNumber))
        {
            setFormError('Account number must be a number');
            return false;
        }

        return true;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if(!validateForm())
            return;
        else 
        {
            try {
                const response = await UserService.updateUserAccountBankNumber(accountNumber);
                console.log(response);
            }
            catch(err) {
                setFormError('Error while updating account number');
            }
        }
        
    }

  return (
    <Row>
        <Col xs={12} className="d-flex">
            <Form validated={validated} className="w-75">
                <Form.Group className="text-start">
                    <Form.Label>Account number</Form.Label>
                    <Form.Control 
                        type="text"
                        value={accountNumber || ""}
                        onChange={(e) => setAccountNumber(e.target.value)}
                        isInvalid={!!formError}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        {formError}
                    </Form.Control.Feedback>
                    <Form.Control.Feedback>
                        Account number has been updated
                    </Form.Control.Feedback>
                </Form.Group>
                
            </Form>
            <button className="app-button form-confirm-button ms-4"
                    onClick={handleSubmit}
            >
                    Confirm
            </button>
        </Col>
    </Row>
  )
}

export default ChangeAccountNumber