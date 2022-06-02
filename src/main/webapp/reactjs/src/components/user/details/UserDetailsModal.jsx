import { useRef, useState, useEffect } from 'react';
import { Row, Col, Modal, Spinner } from "react-bootstrap";

import UserService from '../../../services/UserService';

function UserDetailsModal({ showModal, handleCloseModal, username, token }) {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState('');
    const errorRef = useRef();

    useEffect(() => {
        const fetchData = async () => {
            try{
                setErrorMsg('');
                const response = await UserService.getUserInfo(username, token.decoded?.name);
                var data = response.data; 
                var time = new Date(data.lastWithdrawRequest);
                const strTime = time.toLocaleString();
                data.lastWithdrawRequest = strTime.substring(0, strTime.length - 3);
                setUser(data);
                setIsLoading(false);   
            }
            catch(err) {
                if (!err?.response)
                    setErrorMsg("No Server Response");
                else
                    setErrorMsg("Error while loading data");
                setIsLoading(false);
                errorRef.current.focus();
            }
        }

        if(showModal) {
            fetchData();
        }
    }, [showModal, username, token]);

  return (
    <Modal
        show={showModal} 
        onHide={handleCloseModal}
        centered={true}
        aria-labelledby="contained-modal-title-vcenter"
    >
        <Modal.Header closeButton>
            <Modal.Title>Personal user details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row className="justify-content-center">
                {
                    isLoading ?
                    <Spinner animation="border" variant="secondary" />
                    :
                    <Col>
                        {
                            !errorMsg ?
                            <div>
                                <p className="mb-5">
                                    <b>E-mail address: </b>
                                    <span className="text-secondary">{user.email}</span>
                                </p>
                                <p>
                                    <b>Current user balance: </b>
                                    <span className="text-secondary">{user.currentUserBalance} PLN</span>
                                </p>
                                <p>
                                    <b>Last withdraw request: </b>
                                    <span className="text-secondary">{user.lastWithdrawRequest}</span>
                                </p>
                                <p>
                                    <b>Bank account number: </b>
                                    <span className="text-secondary">{user.bankAccountNumber}</span>
                                </p>
                                <p className="mb-5">
                                    <b>Phone number: </b>
                                    <span className="text-secondary">{user.phoneNumber}</span>
                                </p>
                                <p>
                                    <b>Street: </b>
                                    <span className="text-secondary">{user.street}</span>
                                </p>
                                <p>
                                    <b>Building number: </b>
                                    <span className="text-secondary">{user.buildingNumber}</span>
                                </p>
                                <p>
                                    <b>City: </b>
                                    <span className="text-secondary">{user.city}</span>
                                </p>
                                <p>
                                    <b>Zip code: </b>
                                    <span className="text-secondary">{user.zipCode}</span>
                                </p>
                            </div>
                            :
                            <h3 className="text-danger text-center mt-3" 
                            ref={errorRef} 
                            aria-live="assertive"
                            >
                                {errorMsg}
                            </h3>
                        }   
                    </Col>
                }
            </Row>
        </Modal.Body>
        <Modal.Footer>
            <button className="app-button modal-button" 
                    onClick={handleCloseModal}
            >
                    Close
            </button>
        </Modal.Footer>
    </Modal>
  )
}

export default UserDetailsModal