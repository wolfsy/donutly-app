import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap';

function UserBrowser() {
  return (
    <>
        <Container fluid className="powder-color">
            <Row className="d-flex justify-content-center">
                <Col xl={8}>
                    <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default UserBrowser