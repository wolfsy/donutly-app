import { Modal, Stack } from "react-bootstrap";
import ModalCloseXmark from "../common/ModalCloseXmark";

import './authentication.css';

const Logout = ({ handleCloseLogout, showLogout }) => {

    return (
        <Modal
            show={showLogout}
            onHide={handleCloseLogout}
            centered={true}
            aria-labelledby="contained-modal-title-vcenter"
        >
            <Modal.Header>
                <Modal.Title>Sign out</Modal.Title>
                <ModalCloseXmark handleClose={handleCloseLogout} />
            </Modal.Header>
            <Modal.Body>
                    <h4>You have signed out successfully!</h4>
            </Modal.Body>
            <Modal.Footer>
                <Stack direction="horizontal" gap={3}>
                    <button className="app-button modal-button" onClick={handleCloseLogout}>
                        Close
                    </button>
                </Stack>
            </Modal.Footer>
        </Modal>
    );
}

export default Logout;