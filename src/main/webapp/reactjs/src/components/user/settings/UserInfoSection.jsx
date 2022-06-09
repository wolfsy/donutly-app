import { Row, Col, Card, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "./UserSettings.css";

function UserInfoSection({ user }) {

  return (
    <Row>
        <Col>
            <Card className="user-settings-card bg-light-powder" body>
                <h3>Current user data</h3>
                <Card className="user-settings-smaller-card text-start mt-4" body>
                    <p className="mb-3 mt-2">
                        <b>Total user balance: </b>
                        <span className="text-secondary">{user.totalPaymentBalance}</span>
                    </p>
                    <p className="mb-3">
                        <b>Current user balance: </b>
                        <span className="text-secondary">{user.paymentBalance}</span>
                    </p>
                    <p className="mb-3">
                        <b>Last withdraw request: </b>
                        <span className="text-secondary">{user.lastWithdraw}</span>
                    </p>
                    <p className="mb-3">
                        <b>Bank account number: </b>
                        <span className="text-secondary">{user.accountNumber}</span>
                    </p>
                    <p>
                        <b>Phone number: </b>
                        <span className="text-secondary">{user.phone}</span>
                    </p>
                </Card>
                <Row className="my-5 justify-content-center">
                    <Col xs={6} sm={7} xl={4}>
                        <div className="d-flex justify-content-center">
                            <Card className="p-4 user-settings-smaller-card">
                                <Image className="user-card-img" src={user.avatarURL} />
                            </Card>
                        </div>
                    </Col>
                </Row>
                <Card className="user-settings-smaller-card text-start" body>
                    <p className="mb-3 mt-2">
                        <b>Category: </b>
                        <span className="text-secondary">{user.category}</span>
                    </p>
                    <p className="mb-3">
                        <b>Login: </b>
                        <span className="text-secondary">{user.login}</span>
                    </p>
                    <p className="mb-3">
                        <b>Email: </b>
                        <span className="text-secondary">{user.email}</span>
                    </p>
                    <p className="mb-3">
                        <b>First name: </b>
                        <span className="text-secondary">{user.firstName}</span>
                    </p>
                    <p className="mb-3">
                        <b>Last name: </b>
                        <span className="text-secondary">{user.lastName}</span>
                    </p>
                    <p className="mb-3">
                        <b>Profile description: </b>
                        <span className="text-secondary">{user.profileDescription}</span>
                    </p>
                    <p className="mb-3">
                        <b>Status: </b>
                        <span className="text-secondary">{user.status ? "Blocked" : "Active"}</span>
                    </p>
                    <p className="mb-3">
                        <b>Email verification: </b>
                        <span className="text-secondary">{user.emailVerification ? "Yes" : "No"}</span>
                    </p>
                    <p className="mb-3">
                        <b>Admin verification: </b>
                        <span className="text-secondary">{user.adminVerification ? "Yes" : "No"}</span>
                    </p>
                    <p className="mb-3">
                        <FontAwesomeIcon className="social-icon" 
                                         icon="fa-brands fa-instagram" 
                        />
                        <span className="text-secondary ms-3">{user.InstagramURL}</span>
                    </p>
                    <p className="mb-3">
                        <FontAwesomeIcon className="social-icon" 
                                         icon="fa-brands fa-youtube" 
                        />
                        <span className="text-secondary ms-3">{user.YouTubeURL}</span>
                    </p>
                    <p className="mb-3">
                        <FontAwesomeIcon className="social-icon" 
                                         icon="fa-brands fa-tiktok" 
                        />
                        <span className="text-secondary ms-3">{user.TikTokURL}</span>
                    </p>
                    <p className="mb-3">
                        <b>Street: </b>
                        <span className="text-secondary">{user.street}</span>
                    </p>
                    <p className="mb-3">
                        <b>Building number: </b>
                        <span className="text-secondary">{user.number}</span>
                    </p>
                    <p className="mb-3">
                        <b>City: </b>
                        <span className="text-secondary">{user.city}</span>
                    </p>
                    <p className="mb-3">
                        <b>Zip code: </b>
                        <span className="text-secondary">{user.zipCode}</span>
                    </p>
                </Card>
            </Card>
        </Col>
    </Row>
  )
}

export default UserInfoSection