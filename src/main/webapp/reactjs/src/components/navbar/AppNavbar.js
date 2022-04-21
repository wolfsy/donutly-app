import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import './AppNavbar.css';

function AppNavbar() {
  return (
    <>
      <Navbar className="app-navbar pb-3" expand="lg">
        <Container fluid>
          <Row className="w-100 my-1 mx-5">
            <Stack direction="horizontal" gap={4}>
              <Button className="nav-button ms-auto">Login</Button>
              <Button className="nav-button">Sign Up</Button>
            </Stack>
          </Row>
        </Container>
      </Navbar>
    </>
  )
}

export default AppNavbar