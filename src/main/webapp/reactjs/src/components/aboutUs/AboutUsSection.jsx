import { Button, Container, Row, Image, Col } from "react-bootstrap"

import './AboutUsSection.css';

function AboutUsSection() {
  return (
    <>
        <Container fluid className="about-us-section">
            <Row className="my-1 mx-5 py-4">
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={5}>
                  <h1 className="text-start">About us</h1>
                  <p className="text-start col-12">
                    Początkowa koncepcja projektu została utworzona na potrzeby pierwszego
                    laboratorium i zamieszczona na forum przedmiotu na platformie e-learningowej.
                    Wówczas określone zostało, że w ramach projektu zostanie utworzona aplikacja
                    internetowa obsługująca system składania donacji indywidualnym artystom.
                  </p>
                  <Row>
                    <Button onClick={() =>  window.location.href='/about'} className="about-us-button mt-4 ms-2">Read more</Button>
                  </Row>
                </Col>
                <Col xs={12} sm={12} md={5} lg={5} xl={4} xxl={4} 
                     className="ms-auto mt-4 mt-md-0">
                  <Image 
                    className="img-fluid about-us-img"
                    src="https://i0.wp.com/www.biggerbolderbaking.com/wp-content/uploads/2020/11/Homemade-Dunkin-Donuts-WS-Thumb-scaled.jpg?w=1920&ssl=1" 
                  />
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default AboutUsSection