import { Navbar, Nav, Container, Button, Row, Col, Stack } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './AppNavbar.css';

function AppNavbar() {
  return (
    <>
      <Navbar className="app-navbar py-4" expand="md">
        <Container fluid>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="basic-navbar-nav w-100">
              <Row className="w-100 my-4 my-xl-0 my-md-0 mx-lg-3 mx-auto">
                <Col className="d-flex justify-content-center justify-content-lg-start mb-3 mb-lg-2">
                  <Button className="nav-button nav-button-small mx-2">
                    <FontAwesomeIcon icon="fa-solid fa-house" />
                  </Button>
                  <Button className="nav-button nav-button-small mx-2">
                    <FontAwesomeIcon icon="fa-solid fa-bars" />
                  </Button>
                  <Button className="nav-button nav-button-small mx-2">
                    <FontAwesomeIcon icon="fa-solid fa-envelope" />
                  </Button>
                  <Button className="nav-button nav-button-small mx-2">
                    <FontAwesomeIcon icon="fa-solid fa-user" />
                  </Button>
                </Col>
                <Col className="d-flex justify-content-center justify-content-lg-end">
                    <Button className="nav-button">Login</Button>
                    <Button className="nav-button ms-3">Sign Up</Button>
                </Col>
              </Row>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default AppNavbar