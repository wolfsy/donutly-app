import { Card, Image, Row, Col, Stack } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './UserBrowser.css';

function UserListItem({ user }) {

  return (
    <Row className="d-flex justify-content-center">
        <Col xl={10}>
            <Card className="my-3 user-card p-3 shadow-sm">
                <Card.Body>
                    <Row>
                        <Col sm={7} md={5} xl={4}
                             className="d-flex justify-content-start align-items-end"
                        >
                            <div className="user-card-img-container pb-2 me-2">
                                <Image className="user-card-img" src={user.avatarUrl} />
                            </div>
                            <Stack className="f-flex mt-auto" direction="horizontal" gap={2}>
                                <FontAwesomeIcon 
                                    icon={user.adminVerification ? "fa-solid fa-square-check" : "fa-solid fa-square"}
                                    className="verified-check" />
                                <span>{user.adminVerification ? "Verified" : "Not verified"}</span>
                            </Stack>
                        </Col>
                        <Col sm={4} md={5} xl={7} 
                             className="text-start mt-4 my-sm-1"
                        >
                            <h3>{user.login}</h3>
                            <p>{`${user.firstName} ${user.lastName}`}</p>
                        </Col>
                        <Col className="d-flex justify-content-end align-items-end">
                            <button 
                                className="app-button user-card-btn"
                            >
                                    Visit profile
                            </button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    </Row>
  )
}

export default UserListItem