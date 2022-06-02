import React from 'react'
import { Row, Col, Card } from 'react-bootstrap';

function UserSettingsSection() {
  return (
    <Row>
        <Col>
            <Card className="user-settings-card  bg-light-powder" body>
                <h3>Update user data</h3>
            </Card>
        </Col>
    </Row>
  )
}

export default UserSettingsSection