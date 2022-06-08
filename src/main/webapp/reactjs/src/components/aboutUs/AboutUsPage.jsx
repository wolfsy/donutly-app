import { Container, Row, Col, Accordion, Stack } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import GoogleMap from "./GoogleMap";
import DonutsSvg from "./DonutsSvg";

import './AboutUsSection.css';

function AboutUsPage() {

    return (
        <>
            <Container fluid className="bg-light-powder">
                <Row className="mx-5 py-4">
                    <Col xl={4}>
                        <h1 className="text-start">About us</h1>
                        <p className="text-start col-12">
                            The business application Donutly is a system for individual
                            artists who want to raise money for their creative purposes.
                            The service is user-friendly, regardless of gender or age.
                            The application is easy to use and free of any kind of violence or discrimination.
                            We guarantee technical support for the whole part of the day.
                            You might request a withdrawal of the money you have collected at any time.
                            The internal currency in the form of donuts will spice up the
                            time you spend on the website and put you in a comfortable mood!
                        </p>
                        <p className="text-start col-12">
                            Donutly is fully secured and payments are processed by a verified partner.
                            All personal data we store is fully secured by an advanced encryption algorithm.
                            Donutly is fully secured and payments are processed by a verified partner.
                            All personal data we store is fully secured by an advanced encryption algorithm.
                            Donutly is fully secured and payments are processed by a verified partner.
                            All personal data we store is fully secured by an advanced encryption algorithm.
                        </p>
                    </Col>
                    <Col xl={4} className="ms-auto">
                        <DonutsSvg />
                    </Col>
                </Row>
                <Row className="bg-white py-5 justify-content-center">
                    <p className="fw-bold fs-3">Why donutly?</p>
                    <Row className="d-flex mt-2 mb-xl-5 justify-content-center">
                        <Col sm={7} xl={4} className="mb-5 px-5 why-donutly-conatiner">
                            <div className="icon-container">
                                <FontAwesomeIcon className="h-100" icon="fa-solid fa-mug-hot" />
                            </div>
                            <p className="fw-bold mt-3">Causal</p>
                            <p xl={3}>
                                The business application Donutly is a system for individual
                                artists who want to raise money for their creative purposes.
                            </p>
                        </Col>
                        <Col sm={7} xl={4} className="mb-5 px-5 why-donutly-conatiner">
                            <div className="icon-container">
                                <FontAwesomeIcon className="h-100" icon="fa-solid fa-money-bill-1-wave" />
                            </div>
                            <p className="fw-bold mt-3">Greater freedom</p>
                            <p>
                                The service is user-friendly, regardless of gender or age.
                                The application is easy to use and free of any kind of violence or discrimination.
                            </p>
                        </Col>
                        <Col sm={7} xl={4} className="mb-5 px-5 why-donutly-conatiner">
                            <div className="icon-container">
                                <FontAwesomeIcon className="h-100" icon="fa-solid fa-stopwatch" />
                            </div>
                            <p className="fw-bold mt-3">Quick</p>
                            <p>
                                We guarantee technical support for the whole part of the day.
                                You might request a withdrawal of the money you have collected at any time.
                            </p>
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <Col sm={7} xl={4} className="mb-5 px-5 why-donutly-conatiner">
                            <div className="icon-container">
                                <FontAwesomeIcon className="h-100" icon="fa-solid fa-face-smile-beam" />
                            </div>
                            <p className="fw-bold mt-3">Comfort for supporters</p>
                            <p>
                                We guarantee technical support for the whole part of the day.
                                Donutly is fully secured and payments are processed by a verified partner.
                            </p>
                        </Col>
                        <Col sm={7} xl={4} className="mb-5 px-5 why-donutly-conatiner">
                            <div className="icon-container">
                                <FontAwesomeIcon className="h-100" icon="fa-solid fa-handshake-slash" />
                            </div>
                            <p className="fw-bold mt-3">Unbound</p>
                            <p>
                                The internal currency in the form of donuts will spice up the
                                time you spend on the website and put you in a comfortable mood!
                            </p>
                        </Col>
                        <Col sm={7} xl={4} className="mb-5 px-5 why-donutly-conatiner">
                            <div className="icon-container">
                                <FontAwesomeIcon className="h-100"  icon="fa-solid fa-user-shield" />
                            </div>
                            <p className="fw-bold mt-3">Safe</p>
                            <p>
                                Donutly is fully secured and payments are processed by a verified partner.
                                All personal data we store is fully secured by an advanced encryption algorithm.
                            </p>
                        </Col>
                    </Row>
                </Row>
                <Row className="py-5 justify-content-center">
                    <p className="fw-bold fs-3">Frequently asked Questions</p>
                    <Col lg={9}>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>For whom the system has been created?</Accordion.Header>
                                <Accordion.Body>
                                    The business application Donutly is a system for individual
                                    artists who want to raise money for their creative purposes.
                                    The business application Donutly is a system for individual
                                    artists who want to raise money for their creative purposes.
                                    The business application Donutly is a system for individual
                                    artists who want to raise money for their creative purposes.
                                    The business application Donutly is a system for individual
                                    artists who want to raise money for their creative purposes.
                                    The business application Donutly is a system for individual
                                    artists who want to raise money for their creative purposes.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>What kind of system is Donutly?</Accordion.Header>
                                <Accordion.Body>
                                    The service is user-friendly, regardless of gender or age.
                                    The application is easy to use and free of any kind of violence or discrimination.
                                    The service is user-friendly, regardless of gender or age.
                                    The application is easy to use and free of any kind of violence or discrimination.
                                    The service is user-friendly, regardless of gender or age.
                                    The application is easy to use and free of any kind of violence or discrimination.
                                    The service is user-friendly, regardless of gender or age.
                                    The application is easy to use and free of any kind of violence or discrimination.
                                    The service is user-friendly, regardless of gender or age.
                                    The application is easy to use and free of any kind of violence or discrimination.
                                    The service is user-friendly, regardless of gender or age.
                                    The application is easy to use and free of any kind of violence or discrimination.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>How Donutly is secured?</Accordion.Header>
                                <Accordion.Body>
                                    Donutly is fully secured and payments are processed by a verified partner.
                                    All personal data we store is fully secured by an advanced encryption algorithm.
                                    Donutly is fully secured and payments are processed by a verified partner.
                                    All personal data we store is fully secured by an advanced encryption algorithm.
                                    Donutly is fully secured and payments are processed by a verified partner.
                                    All personal data we store is fully secured by an advanced encryption algorithm.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>I'm under 18, am I allowed to create an account?</Accordion.Header>
                                <Accordion.Body>
                                    The business application Donutly is a system for individual
                                    artists who want to raise money for their creative purposes.
                                    The service is user-friendly, regardless of gender or age.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Is an account free to use?</Accordion.Header>
                                <Accordion.Body>
                                    The internal currency in the form of donuts will spice up the
                                    time you spend on the website and put you in a comfortable mood!
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
                <Row className="py-5 justify-content-center bg-white">
                    <p className="fw-bold fs-3 mb-4">Where to find us?</p>
                    <Col className="d-flex justify-content-center mt-md-5 mb-3">
                        <div>
                            <h4 className="mt-2 mb-3 text-center">Contact details</h4>
                            <p>Piotr Jonczyk</p>
                            <p>Grzegorz Wisniewski</p>
                            <p>Pawel Wnuk</p>
                            <p className="mt-4">ul. J.H. Dabrowskiego 69</p>
                            <p>42-201 Czestochowa</p>
                            <p>Politechnika Czestochowska</p>
                            <p>Phone: XXX-XXX-XXX</p>
                            <p>NIP: 0123456789</p>
                            <h4 className="mt-5 text-center">Socials</h4>
                            <div className="d-flex justify-content-center"> 
                                <Stack className="mt-3" direction="horizontal" gap={4}>
                                    <a className="follow-link" href="#">
                                        <FontAwesomeIcon className="h-100 blue-icon-hover" icon="fa-brands fa-facebook" />
                                    </a>
                                    <a className="follow-link" href="#">
                                        <FontAwesomeIcon className="h-100 purple-icon-hover" icon="fa-brands fa-instagram" />
                                    </a>
                                    <a className="follow-link" href="#">
                                        <FontAwesomeIcon className="h-100 red-icon-hover" icon="fa-brands fa-youtube" />
                                    </a>
                                    <a className="follow-link" href="#">
                                        <FontAwesomeIcon className="h-100 blue-icon-hover" icon="fa-brands fa-twitter" />
                                    </a>
                                </Stack>
                            </div>
                        </div>
                    </Col>
                    <Col className="mt-5">
                        <h4 className="mt-2 mb-3">Localization</h4>
                        <div className="d-flex justify-content-center">
                            <GoogleMap />   
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AboutUsPage;