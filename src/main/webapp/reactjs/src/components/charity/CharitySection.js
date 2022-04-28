import React, { useState, useEffect } from 'react'
import { Stack, Button, Row, Container } from 'react-bootstrap';
import CharityService from '../../services/CharityService';

import './CharitySection.css';

function CharitySection() {
    
    const [charity, setCharity] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            const res = await CharityService.getActiveCharity();
            setCharity(res.data);
        }

        fetchData();
    }, [])


    const today = new Date();
    const endDate = new Date(charity.endTime);
    const daysLeft = Math.floor((endDate - today) / (1000 * 60 * 60 * 24));

    return (
        <>
            <Container fluid className="charity-section">            
                <Row className="my-1 mx-5 pt-4">
                    <Stack direction="horizontal" gap={1}>
                        <h1 className="charity-title">
                            {charity.title}
                        </h1>
                    </Stack>
                </Row>
                <Row className="my-1 mx-5">
                    <Stack direction="horizontal" gap={1}>
                        <p className="col-5 text-start">
                            {charity.description}
                        </p>
                    </Stack>
                </Row>
                <Row className="my-1 mx-5 pb-3">
                    <Stack direction="horizontal" gap={1}>
                        <Button className="charity-button">
                            Learn More
                        </Button>
                        <Stack gap={0}>
                            <p className="text-secondary fs-4 fw-bold fst-italic ms-auto">
                                Time left: {daysLeft} days
                            </p>
                            <p className="text-secondary fs-4 fw-bold fst-italic ms-auto">
                                Cash collected: {charity.charityBalance}
                            </p>
                        </Stack>
                    </Stack>
                </Row>
            </Container>
        </>
    )
}

export default CharitySection