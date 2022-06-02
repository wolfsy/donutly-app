import React from 'react'
import { Row, Col, Card } from 'react-bootstrap';

import "./UserSettings.css";

function UserInfoSection() {
  return (
    <Row>
        <Col>
            <Card className="user-settings-card  bg-light-powder" body>
                <h3>Current user data</h3>
            </Card>
        </Col>
    </Row>
  )
}

export default UserInfoSection