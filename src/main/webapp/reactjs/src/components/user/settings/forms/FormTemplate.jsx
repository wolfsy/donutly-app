import { Row, Form, Col } from 'react-bootstrap';

function FormTemplate({ label, value, onChange, error, submit }) {
  return (
    <Row>
        <Col xs={12} className="d-flex">
            <Form className="w-75">
                <Form.Group className="text-start">
                    <Form.Label>{label}</Form.Label>
                    <Form.Control 
                        type="text"
                        value={value || ""}
                        onChange={onChange}
                        isInvalid={!!error}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        {error}
                    </Form.Control.Feedback>
                </Form.Group>
                
            </Form>
            <button className="app-button form-confirm-button ms-4"
                    onClick={submit}
            >
                    Confirm
            </button>
        </Col>
    </Row>
  )
}

export default FormTemplate