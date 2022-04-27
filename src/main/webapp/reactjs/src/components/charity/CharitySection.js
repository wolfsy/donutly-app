import React from 'react'
import { Stack, Button, Row, Container } from 'react-bootstrap';

import './CharitySection.css';

function CharitySection() {
  return (
    <>
        <Container fluid className="charity-section">
            <Row className="w-100 my-1 mx-5">
                <Stack direction="horizontal" gap={1}>
                    <h1 className="charity-title">
                        Charity title
                    </h1>
                </Stack>
            </Row>
            <Row className="w-100 my-1 mx-5">
                <Stack direction="horizontal" gap={1}>
                    <p className="charity-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec euismod, nisl eget consectetur consectetur,
                        nisi nisl euismod nisi, euismod nisi nisl euismod
                        nisi.
                    </p>
                </Stack>
            </Row>
            <Row className="w-100 my-1 mx-5">
                <Stack direction="horizontal" gap={1}>
                    <Button className="charity-button">
                        Learn More
                    </Button>
                </Stack>
            </Row>
        </Container>
    </>
  )
}

export default CharitySection