import { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Login from "../authentication/Login";
import Register from "../authentication/Register";
import Logout from "../authentication/Logout";
import AuthContext from "../../context/AuthProvider";

import './AppNavbar.css';

function AppNavbar() {

  const navigate = useNavigate();
  const { auth, setAuth } = useContext(AuthContext);
  
  const [showLogin, setShowLogin] = useState(false);
  const handleShowLogin = () => setShowLogin(true);
  const handleCloseLogin = () => setShowLogin(false);

  const [showRegister, setShowRegister] = useState(false);
  const handleShowRegister = () => setShowRegister(true);
  const handleCloseRegister = () => setShowRegister(false);

  const [showLogout, setShowLogout] = useState(false);
  const handleShowLogout = () => setShowLogout(true);
  const handleCloseLogout = () => setShowLogout(false);

  const handleLogout = () => {
    localStorage.removeItem('auth');
    setAuth({ token: null, isLogged: false });
    handleShowLogout();
    navigate('/');
  }

  console.log(auth.token);

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
                  <button className="app-button nav-button nav-button-small mx-2" onClick={() => window.location.href='/browser'} >
                    <FontAwesomeIcon icon="fa-solid fa-bars" />
                  </button>
                  <button className="app-button nav-button nav-button-small mx-2" onClick={() =>  window.location.href='/about'} >
                    <FontAwesomeIcon icon="fa-solid fa-envelope" />
                  </button>
                  { 
                    auth.isLogged ?
                    <button className="app-button nav-button nav-button-small mx-2" onClick={() =>  window.location.href='/user'}>
                        <FontAwesomeIcon icon="fa-solid fa-user" />
                    </button> : ''
                  }
                </Col>
                <Col className="d-flex justify-content-center justify-content-lg-end">
                  {
                    auth.isLogged ?
                    <button className="app-button nav-button" onClick={handleLogout}>Sign Out</button> :
                    <button className="app-button nav-button" onClick={handleShowLogin}>Sign In</button>
                  }
                  {
                    !auth.isLogged ?
                    <button className="app-button nav-button ms-3" onClick={handleShowRegister}>Sign Up</button>
                    : ''
                  }
                </Col>
              </Row>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Login handleCloseLogin={handleCloseLogin}
             showLogin={showLogin}
      />

      <Register handleCloseRegister={handleCloseRegister}
                showRegister={showRegister}
      />

      <Logout handleCloseLogout={handleCloseLogout}
              showLogout={showLogout}
      />

    </>
  )
}

export default AppNavbar