import { Button, Container, Row, Image, Col } from "react-bootstrap"

import './AboutUsSection.css';

function AboutUsSection() {
  return (
    <>
        <Container fluid className="about-us-section">
            <Row className="my-1 mx-5 py-4">
                <Col xl={4}>
                  <h1 className="text-start">About us</h1>
                  <p className="text-start col-12">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec dignissim porttitor magna vitae egestas.
                    Quisque et mollis enim. In hac habitasse platea dictumst.
                  </p>
                  <Row>
                    <Button className="about-us-button mt-4 ms-2">Read more</Button>
                  </Row>
                </Col>
                <Col xl={4} className="ms-auto">
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