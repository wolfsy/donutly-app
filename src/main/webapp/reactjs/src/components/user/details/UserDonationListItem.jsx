import { useState, useEffect } from 'react';
import { Row, Col, Card } from 'react-bootstrap';

function UserDonationListItem({ donation }) {

    const [date, setDate] = useState(null);

    useEffect(() => {
        var time = new Date(donation.time);
        const strTime = time.toLocaleString();
        setDate(strTime.substring(0, strTime.length - 3));
    }, [donation.time])

  return (
        <Row className="d-flex justify-content-center">
            <Col xs={11} xl={10}>
                <Card className="my-3 user-card p-3 shadow-sm">
                    <Card.Body>
                        <Row>
                            <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={3}
                                className="d-flex flex-column align-items-start"
                            >
                                <p className="fs-4">{donation.donator}</p>
                                <p className="fst-italic text-secondary">{date}</p>
                            </Col>
                            <Col xs={12} sm={9} md={9} lg={6} xl={6} xxl={7}
                                className="text-start mt-5 mt-md-0"
                            >
                                <p>{donation.message}</p>
                            </Col>
                            <Col xs={12} sm={3} md={3} lg={2} xl={2} xxl={2} className="d-flex flex-column justify-content-start align-items-center mt-5 mt-sm-5 mt-md-0">
                                <p className="mb-5 fst-italic">{donation.amount} PLN</p>
                                <button 
                                    className="app-button donation-card-btn mt-auto"
 
                                >
                                        Hide
                                </button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
  )
}

export default UserDonationListItem