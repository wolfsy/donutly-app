import {Navbar, Nav, Container, Button, Row, Col, Modal} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './AppNavbar.css';
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
                  <Button className="nav-button nav-button-small mx-2" onClick={() =>  window.location.href='/'} >
                    <FontAwesomeIcon icon="fa-solid fa-house" />
                  </Button>
                  <Button className="nav-button nav-button-small mx-2">
                    <FontAwesomeIcon icon="fa-solid fa-bars" />
                  </Button>
                  <Button className="nav-button nav-button-small mx-2" onClick={() =>  window.location.href='/about'} >
                    <FontAwesomeIcon icon="fa-solid fa-envelope" />
                  </Button>
                  <Button className="nav-button nav-button-small mx-2">
                    <FontAwesomeIcon icon="fa-solid fa-user" />
                  </Button>
                </Col>
                <Col className="d-flex justify-content-center justify-content-lg-end">
                    <Button className="nav-button" onClick={handleShowLogin}>Login</Button>
                    <Button className="nav-button ms-3" onClick={handleShowRegister}>Sign Up</Button>
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


      <Modal show={showRegister} onHide={handleCloseRegister}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RegisterModal />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseRegister}>Cancel</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default AppNavbar