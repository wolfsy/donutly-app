import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './CarouselItem.css'

function CarouselItem({ category }) {
  return (
    <>
        <Container className="carousels-item mt-3 d-flex justify-content-center">
            <Row className="mt-5">
              <Col lg={12} className="w-100 h-100">
                  <FontAwesomeIcon className="h-50 mb-2" icon={category.iconUrl} />
                  <h2>{category.name}</h2>
              </Col>
            </Row>
        </Container>
    </>
  )
}

export default CarouselItem