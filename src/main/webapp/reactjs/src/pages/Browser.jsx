import { useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import UserBrowser from "../components/user/browser/UserBrowser";
import DonutsSvg from "../components/aboutUs/DonutsSvg";

const Browser = () => {

    const location = useLocation();

    return (
        <div>
            <Container fluid className="py-5 bg-light-powder">
                <Row className="mx-5">
                    <Col xl={4} className="mb-3 mb-lg-0">
                        <h2 className="text-start">Categories</h2>
                        <p className="text-start">
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
                    </Col>
                    <Col xl={4} className="ms-auto">
                        <DonutsSvg />
                    </Col>
                </Row>
            </Container>
            <UserBrowser categoryId={location?.state?.categoryId} />
        </div>
    );
}

export default Browser;
