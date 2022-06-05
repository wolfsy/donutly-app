import { useState, useEffect } from 'react'
import { Stack, Row, Container, Col, Spinner } from 'react-bootstrap';
import CharityService from '../../services/CharityService';

import './CharitySection.css';

function CharitySection() {
    
    const [charity, setCharity] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const res = await CharityService.getActiveCharity();
            setCharity(res.data);
            setIsLoading(false);
        }

        fetchData();
    }, [])


    const today = new Date();
    const endDate = new Date(charity.endTime);
    const daysLeft = Math.floor((endDate - today) / (1000 * 60 * 60 * 24));

    return (
        <Container id="charity-container" fluid className="bg-light-powder py-5">
        {
            isLoading ?
            <Row className="justify-content-center text-secondary mt-5">
                <Spinner
                        as="span"
                        animation="border"
                        role="status"
                        aria-hidden="true"
                        id="loading-spinner"
                        className="mt-4"
                />
            </Row>
            :
            <>
                <Row className="mx-5 py-4">
                    <Col>
                        <h1 className="text-start">
                            {charity.title}
                        </h1>
                    </Col>
                </Row>
                <Row className="my-3 mx-5">
                    <Col xs={12} sm={12} md={10} lg={7} xl={6} xxl={5}>
                        <p className="text-start">
                            {charity.description}
                        </p>
                    </Col>
                </Row>
                <Row className="my-1 mx-5 pb-4">
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={5}
                        className="d-flex">
                        <button className="app-button charity-button">
                            Learn More
                        </button>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={7}
                        className="mt-5 mt-lg-0">
                        <Stack gap={0}>
                            <p className="text-secondary fs-4 fw-bold fst-italic ms-auto">
                                Time left: {daysLeft} days
                            </p>
                            <p className="text-secondary fs-4 fw-bold fst-italic ms-auto">
                                Cash collected: {charity.charityBalance}
                            </p>
                        </Stack>
                    </Col>
                </Row>
            </>
        }
        </Container>
    )
}

export default CharitySection