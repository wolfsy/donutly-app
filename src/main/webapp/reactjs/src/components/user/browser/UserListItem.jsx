import { useNavigate } from 'react-router-dom';
import { Card, Image, Row, Col, Stack } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './UserBrowser.css';

function UserListItem({ user }) {

    const navigate = useNavigate();

    const handleNavigateToUser = () => {
        navigate("/user", { state: { user: user } });
    }

  return (
    <Row className="d-flex justify-content-center">
        <Col xs={11} xl={10}>
            <Card className={`my-3 user-card p-3 ${user.status ? 'hidden-card-border' : 'unhidden-card-border'}`}>
                <Card.Body>
                    <Row>
                        <Col xs={12} sm={12} md={5} lg={5} xl={5}
                             className="d-flex justify-content-start align-items-end"
                        >
                            <div className="user-card-img-container p-4 me-2">
                                <Image className="user-card-img" src={user.avatarUrl} />
                            </div>
                            <Stack className="f-flex mt-auto" direction="horizontal" gap={2}>
                                <FontAwesomeIcon 
                                    icon={user.adminVerification ? "fa-solid fa-square-check" : "fa-solid fa-square"}
                                    className="verified-check" />
                                <span>{user.adminVerification ? "Verified" : "Not verified"}</span>
                            </Stack>
                        </Col>
                        <Col xs={6} sm={6} md={4} lg={5} xl={5} 
                             className="text-start mt-5 mt-md-0"
                        >
                            <h3>{user.login}</h3>
                            <p>{`${user.firstName} ${user.lastName}`}</p>
                        </Col>
                        <Col xs={5} sm={6} md={3} lg={2} xl={2} className="d-flex flex-column justify-content-start align-items-center mt-5 mt-sm-5 mt-md-0">
                            <p className="mb-5 fst-italic">{user.payment} PLN</p>
                            <button 
                                className="app-button user-card-btn mt-auto"
                                onClick={handleNavigateToUser}
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