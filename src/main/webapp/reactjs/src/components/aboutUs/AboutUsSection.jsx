import { Container, Row, Col } from "react-bootstrap"

import './AboutUsSection.css';
import DonutsSvg from "./DonutsSvg";

function AboutUsSection() {
  return (
    <>
        <Container fluid className="bg-light-powder py-5 ">
            <Row className="my-1 mx-5 py-4">
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={5}>
                  <h1 className="text-start">About us</h1>
                  <p className="text-start col-12">
                      The business application Donutly is a system for individual
                      artists who want to raise money for their creative purposes.
                      The service is user-friendly, regardless of gender or age.
                      The application is easy to use and free of any kind of violence or discrimination.
                      We guarantee technical support for the whole part of the day.
                      You might request a withdrawal of the money you have collected at any time.
                      Donutly is fully secured and payments are processed by a verified partner.
                      All personal data we store is fully secured by an advanced encryption algorithm.
                  </p>
                    <p className="text-start col-12">
                        The internal currency in the form of donuts will spice up the
                        time you spend on the website and put you in a comfortable mood!
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