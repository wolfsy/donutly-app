import { Card, Row, Col } from 'react-bootstrap';
import Donut5Anim from "./Donut5Anim";
import Donut10Anim from "./Donut10Anim";
import Donut25Anim from "./Donut25Anim";
import Donut100Anim from "./Donut100Anim";
import Donut50Anim from "./Donut50Anim";
import DonutCustomAnim from "./DonutCustomAnim";

function DonationsOptions() {
  return (
    <Row className="py-5 justify-content-center">
      <Col xs={12} sm={10} md={12} lg={10} xl={11} xxl={10}>
        <Card body className="bg-light-powder px-4 pb-3 shadow-sm">
          <Row className="justify-content-center">
            <Col xs={6} sm={5} md={3} lg={3} xl={2} className="mt-3">
              <Card body className="donation-option-card shadow-sm">
                <Donut5Anim />
                <p className="">5 PLN</p>
              </Card>
            </Col>
            <Col xs={6} sm={5} md={3} lg={3} xl={2} className="mt-3">
              <Card body className="donation-option-card shadow-sm">
                <Donut10Anim />
                <p className="">10 PLN</p>
              </Card>
            </Col>
            <Col xs={6} sm={5} md={3} lg={3} xl={2} className="mt-3">
              <Card body className="donation-option-card shadow-sm">
                <Donut25Anim />
                <p className="">25 PLN</p>
              </Card>
            </Col>
            <Col xs={6} sm={5} md={3} lg={3} xl={2} className="mt-3">
              <Card body className="donation-option-card shadow-sm">
                <Donut50Anim />
                <p className="">50 PLN</p>
              </Card>
            </Col>
            <Col xs={6} sm={5} md={3} lg={3} xl={2} className="mt-3">
              <Card body className="donation-option-card shadow-sm">
                <Donut100Anim />
                <p className="">100 PLN</p>
              </Card>
            </Col>
            <Col xs={6} sm={5} md={3} lg={3} xl={2} className="mt-3">
              <Card body className="donation-option-card shadow-sm">
                <DonutCustomAnim />
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