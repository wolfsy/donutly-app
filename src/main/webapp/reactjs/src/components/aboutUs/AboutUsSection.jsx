import { Container, Row, Image, Col } from "react-bootstrap"

import './AboutUsSection.css';
import DonutsSvg from "./DonutsSvg";

function AboutUsSection() {
  return (
    <>
        <Container fluid className="about-us-section py-5 ">
            <Row className="my-1 mx-5 py-4">
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={5}>
                  <h1 className="text-start">About us</h1>
                  <p className="text-start col-12">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Tristique sollicitudin nibh sit amet.
                      Mauris nunc congue nisi vitae suscipit tellus mauris a.
                      Sit amet nisl suscipit adipiscing bibendum est.
                  </p>
                  <Row>
                    <button onClick={() =>  window.location.href='/about'} 
                            className="app-button about-us-button mt-4 ms-2">
                              Read more
                    </button>
                  </Row>
                </Col>
                <Col xs={12} sm={12} md={5} lg={5} xl={4} xxl={4} 
                     className="ms-auto mt-4 mt-md-0">
                  <DonutsSvg />
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default AboutUsSection