import React from 'react'
import { Row, Col, Card } from 'react-bootstrap';

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
                        <span className="text-secondary"></span>
                    </p>
                    <p className="mb-3">
                        <b>Last withdraw request: </b>
                        <span className="text-secondary"></span>
                    </p>
                    <p className="mb-3">
                        <b>Bank account number: </b>
                        <span className="text-secondary"></span>
                    </p>
                    <p>
                        <b>Phone number: </b>
                        <span className="text-secondary"></span>
                    </p>
                </Card>
            </Card>
        </Col>
    </Row>
  )
}

export default UserInfoSection