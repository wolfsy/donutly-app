import { useState } from 'react'
import { Row, Col, Spinner, Modal, Stack } from 'react-bootstrap';
import ModalCloseXmark from '../../../common/ModalCloseXmark';

function RequestWithdraw() {

    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }

  return (
    <Row className="justify-content-center">
        <Col xs={5}>
            <button
                className="app-button form-confirm-button w-100"
                onClick={handleShowModal}
            >
                Request witdhdraw
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
                    <h5>Request withdraw</h5>
            </Modal.Body>
            <Modal.Footer>
                <Stack direction="horizontal" gap={3}>
                    <button className="app-button modal-button" onClick={handleCloseModal}>
                        Close
                    </button>
                </Stack>
            </Modal.Footer>
        </Modal>
    </Row>
  )
}

export default RequestWithdraw