import { useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';

import Donut5Anim from "./donutAnimations/Donut5Anim";
import Donut10Anim from "./donutAnimations/Donut10Anim";
import Donut25Anim from "./donutAnimations/Donut25Anim";
import Donut100Anim from "./donutAnimations/Donut100Anim";
import Donut50Anim from "./donutAnimations/Donut50Anim";
import DonutCustomAnim from "./donutAnimations/DonutCustomAnim";
import DonationModal from './DonationModal';

function DonationsOptions({ userId }) {

  const [amount, setAmount] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const chooseOption = (amount) => {
    setAmount(amount);
    handleShowModal();
  }

  return (
    <Row className="py-5 justify-content-center">
      <Col xs={12} sm={10} md={12} lg={10} xl={11} xxl={10}>
        <Card body className="bg-light-powder px-4 pb-3 shadow-sm">
          <Row className="justify-content-center">
            <Col xs={6} sm={5} md={3} lg={3} xl={2} className="mt-3">
              <Card body className="donation-option-card shadow-sm">
                <div onClick={() => chooseOption("5")}>
                  <Donut5Anim />
                </div>
                <p className="">5 PLN</p>
              </Card>
            </Col>
            <Col xs={6} sm={5} md={3} lg={3} xl={2} className="mt-3">
              <Card body className="donation-option-card shadow-sm">
                <div onClick={() => chooseOption("10")}>
                  <Donut10Anim />
                </div>
                <p className="">10 PLN</p>
              </Card>
            </Col>
            <Col xs={6} sm={5} md={3} lg={3} xl={2} className="mt-3">
              <Card body className="donation-option-card shadow-sm">
                <div onClick={() => chooseOption("25")}>
                  <Donut25Anim />
                </div>
                <p className="">25 PLN</p>
              </Card>
            </Col>
            <Col xs={6} sm={5} md={3} lg={3} xl={2} className="mt-3">
              <Card body className="donation-option-card shadow-sm">
                <div onClick={() => chooseOption("50")}>
                  <Donut50Anim />
                </div>
                <p className="">50 PLN</p>
              </Card>
            </Col>
            <Col xs={6} sm={5} md={3} lg={3} xl={2} className="mt-3">
              <Card body className="donation-option-card shadow-sm">
                <div onClick={() => chooseOption("100")}>
                  <Donut100Anim />
                </div>
                <p className="">100 PLN</p>
              </Card>
            </Col>
            <Col xs={6} sm={5} md={3} lg={3} xl={2} className="mt-3">
              <Card body className="donation-option-card shadow-sm">
                <div onClick={() => chooseOption("?")}>
                  <DonutCustomAnim />
                </div>
                <p className="">? PLN</p>
              </Card>
            </Col>
          </Row>
        </Card>
      </Col>

      <DonationModal
        handleCloseModal={handleCloseModal}
        showModal={showModal}
        selectedAmount={amount}
        userId={userId}
      />

    </Row>
  )
}

export default DonationsOptions