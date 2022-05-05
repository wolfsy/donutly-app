import { Container } from "react-bootstrap"

import './Footer.css';

function Footer() {
  return (
    <Container fluid className="footer d-flex py-5">
        <span className="fst-italic fs-5 fw-bold w-100">Donutly&copy; 2022</span>
    </Container>
  )
}

export default Footer