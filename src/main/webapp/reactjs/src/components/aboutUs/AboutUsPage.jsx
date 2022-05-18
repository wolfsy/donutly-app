import { Container, Row, Image, Col, Accordion, Stack } from "react-bootstrap"
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Tristique sollicitudin nibh sit amet.
                            Mauris nunc congue nisi vitae suscipit tellus mauris a.
                            Sit amet nisl suscipit adipiscing bibendum est.
                            Ac orci phasellus egestas tellus rutrum tellus.
                            Curabitur gravida arcu ac tortor dignissim.
                            Posuere sollicitudin aliquam ultrices sagittis. Lorem ipsum dolor sit amet.
                            At volutpat diam ut venenatis tellus in.
                            Sit amet facilisis magna etiam tempor orci eu lobortis elementum.
                            Enim nunc faucibus a pellentesque sit amet porttitor.
                        </p>
                        <p className="text-start col-12">
                            Ligula ullamcorper malesuada proin libero nunc.
                            Id volutpat lacus laoreet non curabitur gravida.
                            Fames ac turpis egestas maecenas.
                            Porttitor massa id neque aliquam vestibulum morbi blandit cursus risus.
                            Nulla porttitor massa id neque aliquam vestibulum morbi blandit.
                            Nam libero justo laoreet sit amet cursus sit amet dictum.
                            Hendrerit dolor magna eget est lorem ipsum.
                            Eget nunc scelerisque viverra mauris in aliquam sem fringilla.
                            Malesuada fames ac turpis egestas. Laoreet sit amet cursus sit.
                            Scelerisque eu ultrices vitae auctor eu augue ut.
                            Faucibus purus in massa tempor nec feugiat.
                            Vel facilisis volutpat est velit egestas dui id.
                            Id venenatis a condimentum vitae sapien pellentesque habitant.
                            Id semper risus in hendrerit gravida rutrum quisque.
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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </Col>
                        <Col sm={7} xl={4} className="mb-5 px-5 why-donutly-conatiner">
                            <div className="icon-container">
                                <FontAwesomeIcon className="h-100" icon="fa-solid fa-money-bill-1-wave" />
                            </div>
                            <p className="fw-bold mt-3">Greater freedom</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </Col>
                        <Col sm={7} xl={4} className="mb-5 px-5 why-donutly-conatiner">
                            <div className="icon-container">
                                <FontAwesomeIcon className="h-100" icon="fa-solid fa-stopwatch" />
                            </div>
                            <p className="fw-bold mt-3">Quick</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </Col>
                        <Col sm={7} xl={4} className="mb-5 px-5 why-donutly-conatiner">
                            <div className="icon-container">
                                <FontAwesomeIcon className="h-100" icon="fa-solid fa-handshake-slash" />
                            </div>
                            <p className="fw-bold mt-3">Unbound</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </Col>
                        <Col sm={7} xl={4} className="mb-5 px-5 why-donutly-conatiner">
                            <div className="icon-container">
                                <FontAwesomeIcon className="h-100"  icon="fa-solid fa-user-shield" />
                            </div>
                            <p className="fw-bold mt-3">Safe</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </Col>
                    </Row>
                </Row>
                <Row className="py-5 justify-content-center">
                    <p className="fw-bold fs-3">Frequently asked Questions</p>
                    <Col lg={9}>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Lorem ipsum dolor sit amet</Accordion.Header>
                                <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Lorem ipsum dolor sit amet</Accordion.Header>
                                <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Lorem ipsum dolor sit amet</Accordion.Header>
                                <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Lorem ipsum dolor sit amet</Accordion.Header>
                                <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Lorem ipsum dolor sit amet</Accordion.Header>
                                <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>Lorem ipsum dolor sit amet</Accordion.Header>
                                <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
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
                            <p className="mt-4">ul. J.H. Dąbrowskiego 69</p>
                            <p>42-201 Częstochowa</p>
                            <p>Politechnika Częstochowska</p>
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