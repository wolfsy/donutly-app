import { useState } from 'react'
import { Row, Col, Spinner, Modal, Stack } from 'react-bootstrap';
import ModalCloseXmark from '../../../common/ModalCloseXmark';

import UserService from '../../../../services/UserService';

function RequestWithdraw({ currentBalance, parentCallback }) {

    const [showModal, setShowModal] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
        setSuccess(false);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            setSuccess(false);
            setIsLoading(true);
            await UserService.updateUserAccountBalanceAndLastWithdraw();
            setIsLoading(false);
            setSuccess(true);
            parentCallback(true);
        }
        catch(err) {
            setIsLoading(false);
        }
    }

  return (
    <Row className="justify-content-center">
        <Col xs={5}>
            <button
                className="app-button form-confirm-button w-100"
                onClick={handleShowModal}
            >
                Request withdraw
            </button>
        </Col>

        <Modal
            show={showModal}
            onHide={handleCloseModal}
            centered={true}
            aria-labelledby="contained-modal-title-vcenter"
        >
            <Modal.Header>
                <Modal.Title>Request withdraw</Modal.Title>
                <ModalCloseXmark handleClose={handleCloseModal} />
            </Modal.Header>
            <Modal.Body>
                    <h5 className="py-5">
                        {
                            !success ? 
                            <span>Current user balance: {currentBalance} PLN</span>
                            :
                            <span>Withdraw have been completed</span>
                        }
                    </h5>
                    {
                        currentBalance === 0 && <h6>You cannot make a withdraw</h6>
                    }
            </Modal.Body>
            <Modal.Footer>
                <Stack direction="horizontal" gap={3}>
                    {   currentBalance !== 0 &&
                        !success ?
                        <button className="app-button modal-button" 
                            type="submit" 
                            form="loginForm"
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
                            onClick={handleCloseModal}
                            disabled={isLoading}
                    >
                        {!success ? 'Cancel' : 'Close'}
                    </button>
                </Stack>
            </Modal.Footer>
        </Modal>
    </Row>
  )
}

export default RequestWithdraw