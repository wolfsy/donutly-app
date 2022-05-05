import {Navbar, Nav, Container, Button, Row, Col, Modal} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './AppNavbar.css';
import '../modals/modals.css';
import LoginModal from "../modals/loginModal";
import RegisterModal from "../modals/registerModal";
import {useState} from "react";


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
                  <button className="app-button nav-button nav-button-small mx-2">
                    <FontAwesomeIcon icon="fa-solid fa-bars" />
                  </button>
                  <button className="app-button nav-button nav-button-small mx-2" onClick={() =>  window.location.href='/about'} >
                    <FontAwesomeIcon icon="fa-solid fa-envelope" />
                  </button>
                  <button className="app-button nav-button nav-button-small mx-2">
                    <FontAwesomeIcon icon="fa-solid fa-user" />
                  </button>
                </Col>
                <Col className="d-flex justify-content-center justify-content-lg-end">
                  <button className="app-button nav-button" onClick={handleShowLogin}>Login</button>
                  <button className="app-button nav-button ms-3" onClick={handleShowRegister}>Sign Up</button>
                </Col>
              </Row>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={showLogin} onHide={handleCloseLogin}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginModal />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseLogin}>Cancel</Button>
        </Modal.Footer>
      </Modal>

      <Modal
          show={showRegister}
          onHide={handleCloseRegister}
          centered={true}
          aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header closeButton className="modal-register-bg">
          <Modal.Title>Sign up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RegisterModal />
        </Modal.Body>
        <Modal.Footer className="modal-register-bg">
          <button className="app-button" type="submit" form="registerForm">
            Confirm
          </button>
          <button className="app-button" onClick={handleCloseRegister}>
            Cancel
          </button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default AppNavbar