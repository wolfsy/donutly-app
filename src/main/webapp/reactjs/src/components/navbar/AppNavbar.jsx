import { Navbar, Nav, Container, Button, Row, Col } from 'react-bootstrap';
import './AppNavbar.css';

function AppNavbar() {
  return (
    <>
      <Navbar className="app-navbar pb-3" expand="sm">
        <Container fluid>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="basic-navbar-nav ms-auto">
              <Row className="my-1 mx-5">
                <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}
                     className="mb-3">
                  <Button className="nav-button ms-auto">Login</Button>
                </Col>
                <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
                  <Button className="nav-button">Sign Up</Button>
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