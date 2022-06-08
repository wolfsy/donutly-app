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
                            The business application Donutly is a system for individual
                            artists who want to raise money for their creative purposes.
                            The service is user-friendly, regardless of gender or age.
                            The business application Donutly is a system for individual
                            artists who want to raise money for their creative purposes.
                            The service is user-friendly, regardless of gender or age.
                            The business application Donutly is a system for individual
                            artists who want to raise money for their creative purposes.
                            The service is user-friendly, regardless of gender or age.
                            The business application Donutly is a system for individual
                            artists who want to raise money for their creative purposes.
                            The service is user-friendly, regardless of gender or age.
                            The business application Donutly is a system for individual
                            artists who want to raise money for their creative purposes.
                            The service is user-friendly, regardless of gender or age.
                            The business application Donutly is a system for individual
                            artists who want to raise money for their creative purposes.
                            The service is user-friendly, regardless of gender or age.
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
