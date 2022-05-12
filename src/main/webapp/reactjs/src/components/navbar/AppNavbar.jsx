import {useState} from "react";
import {Navbar, Nav, Container, Row, Col, Modal, Stack} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LoginModal from "../modals/loginModal";
import RegisterModal from "../modals/registerModal";

import './AppNavbar.css';
import '../modals/modals.css';

function AppNavbar() {

  const [showLogin, setShowLogin] = useState(false);
  const handleShowLogin = () => setShowLogin(true);
  const handleCloseLogin = () => setShowLogin(false);

  const [showRegister, setShowRegister] = useState(false);
  const handleShowRegister = () => setShowRegister(true);
  const handleCloseRegister = () => setShowRegister(false);

  return (
    <>
      <Navbar className="app-navbar py-4" expand="md">
        <Container fluid>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="basic-navbar-nav w-100">
              <Row className="w-100 my-4 my-xl-0 my-md-0 mx-lg-3 mx-auto">
                <Col className="d-flex justify-content-center justify-content-lg-start mb-3 mb-lg-2">
                  <button className="app-button nav-button nav-button-small mx-2" onClick={() =>  window.location.href='/'} >
                    <FontAwesomeIcon icon="fa-solid fa-house" />
                  </button>
                  <button className="app-button nav-button nav-button-small mx-2" onClick={() => window.location.href='/categories'} >
                    <FontAwesomeIcon icon="fa-solid fa-bars" />
                  </button>
                  <button className="app-button nav-button nav-button-small mx-2" onClick={() =>  window.location.href='/about'} >
                    <FontAwesomeIcon icon="fa-solid fa-envelope" />
                  </button>
                  <button className="app-button nav-button nav-button-small mx-2" onClick={() =>  window.location.href='/user'}>
                    <FontAwesomeIcon icon="fa-solid fa-user" />
                  </button>
                </Col>
                <Col className="d-flex justify-content-center justify-content-lg-end">
                  <button className="app-button nav-button" onClick={handleShowLogin}>Sign In</button>
                  <button className="app-button nav-button ms-3" onClick={handleShowRegister}>Sign Up</button>
                </Col>
              </Row>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal 
          show={showLogin} 
          onHide={handleCloseLogin}
          centered={true}
          aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginModal />
        </Modal.Body>
        <Modal.Footer>
          <Stack direction="horizontal" gap={3}>
              <button className="app-button modal-button" type="submit" form="loginForm">
                Confirm
              </button>
              <button className="app-button modal-button" onClick={handleCloseLogin}>
                Cancel
              </button>
            </Stack>
        </Modal.Footer>
      </Modal>

      <RegisterModal handleCloseRegister={handleCloseRegister}
                     showRegister={showRegister}
      />

    </>
  )
}

export default AppNavbar