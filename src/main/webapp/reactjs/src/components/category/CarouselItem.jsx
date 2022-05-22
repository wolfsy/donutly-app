import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom';

import './CarouselItem.css'

function CarouselItem({ category }) {

  const navigate = useNavigate();

  const handleNavigateToCategory = () => {
    navigate("/browser", { state: { categoryId: category.id } });
  }

  return (
    <>
        <Container className="carousels-item mt-3 d-flex justify-content-center"
                   onDoubleClick={handleNavigateToCategory}
        >
            <Row className="mt-4">
              <Col lg={12} className="w-100 h-100 p-5">
                  <FontAwesomeIcon className="h-50 mb-3" icon={category.iconUrl} />
                  <h4>{category.name}</h4>
              </Col>
            </Row>
        </Container>
    </>
  )
}

export default CarouselItem