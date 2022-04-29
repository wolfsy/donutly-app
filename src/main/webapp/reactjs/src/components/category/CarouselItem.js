import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './CarouselItem.css'

function CarouselItem({ name }) {
  return (
    <>
        <Container className="carousels-item mt-3 d-flex justify-content-center">
            <Row className="align-self-center">
              <Col lg={12} className="d-flex w-100 p-4">
                {/* <FontAwesomeIcon className='h-100' icon="fa-solid fa-car" /> */}
                <h2>{name}</h2>
              </Col>
            </Row>
        </Container>
    </>
  )
}

export default CarouselItem