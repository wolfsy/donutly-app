import { Row, Form, Col, Spinner } from 'react-bootstrap';

function FormTemplate({ label, value, loading, success, successMsg,
     errorMsg, isTextArea, onChange, onSubmit }) {

  return (
    <Row>
        <Col xs={9} className="">
            <fieldset disabled={loading}>
                <Form validated={success}>
                    <Form.Group className="text-start">
                        <Form.Label>{label}</Form.Label>
                        {
                            isTextArea ?
                            <Form.Control 
                                as="textarea" 
                                rows="7"
                                type="text"
                                value={value || ""}
                                onChange={onChange}
                                isInvalid={!!errorMsg}
                                required
                            />
                            :
                            <Form.Control 
                                type="text"
                                value={value || ""}
                                onChange={onChange}
                                isInvalid={!!errorMsg}
                                required
                            />
                        }
                        <Form.Control.Feedback type="invalid">
                            {errorMsg}
                        </Form.Control.Feedback>
                        <Form.Control.Feedback>
                            {successMsg}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form>
            </fieldset>
        </Col>
        <Col xs={3}>
            <button className="app-button form-confirm-button"
                        onClick={onSubmit}
                        disabled={loading}
            >
            {
                loading ?
                <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                /> : 
                <span>Confirm</span>
            }
            </button>
        </Col>
    </Row>
  )
}

export default FormTemplate