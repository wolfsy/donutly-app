import { Card, Row, Col } from 'react-bootstrap';

function DonationsOptions() {
  return (
    <Row className="py-5 justify-content-center">
      <Col xs={12} sm={10} md={12} lg={10} xl={11} xxl={10}>
        <Card body className="bg-light-powder px-4 pb-3 shadow-sm">
          <Row className="justify-content-center">
            <Col xs={6} sm={5} md={3} lg={3} xl={2} className="mt-3">
              <Card body className="donation-option-card shadow-sm">
                <p className="">5 PLN</p>
              </Card>
            </Col>
            <Col xs={6} sm={5} md={3} lg={3} xl={2} className="mt-3">
              <Card body className="donation-option-card shadow-sm">
                <p className="">10 PLN</p>
              </Card>
            </Col>
            <Col xs={6} sm={5} md={3} lg={3} xl={2} className="mt-3">
              <Card body className="donation-option-card shadow-sm">
                <p className="">25 PLN</p>
              </Card>
            </Col>
            <Col xs={6} sm={5} md={3} lg={3} xl={2} className="mt-3">
              <Card body className="donation-option-card shadow-sm">
                <p className="">50 PLN</p>
              </Card>
            </Col>
            <Col xs={6} sm={5} md={3} lg={3} xl={2} className="mt-3">
              <Card body className="donation-option-card shadow-sm">
                <p className="">100 PLN</p>
              </Card>
            </Col>
            <Col xs={6} sm={5} md={3} lg={3} xl={2} className="mt-3">
              <Card body className="donation-option-card shadow-sm">
                <p className="">? PLN</p>
              </Card>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  )
}

export default DonationsOptions