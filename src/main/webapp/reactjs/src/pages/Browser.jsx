import { useLocation } from 'react-router-dom';
import { Card, Container, Row, Col } from 'react-bootstrap';
import UserBrowser from "../components/user/browser/UserBrowser";

const Browser = () => {

    const location = useLocation();

    return (
        <div>
            <Container fluid className="my-5">
                <Row className="justify-content-center">
                    <Col xs={11} sm={8} md={8} lg={10} xl={8}>
                        <h4 className="text-start">Categories</h4>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs={11} sm={8} md={8} lg={5} xl={4} className="mb-3 mb-lg-0">
                        <Card body>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
                            </p>
                        </Card>
                    </Col>
                    <Col xs={11} sm={8} md={8} lg={5} xl={4}>
                        <Card body className="h-100">
                            
                        </Card>
                    </Col>
                </Row>
            </Container>
            <hr className="mx-5"/>
            <UserBrowser categoryId={location?.state?.categoryId} />
        </div>
    );
}

export default Browser;
