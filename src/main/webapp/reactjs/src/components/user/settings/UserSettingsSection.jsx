import React from 'react'
import { Row, Col, Card } from 'react-bootstrap';
import ChangeAccountNumber from './forms/ChangeAccountNumber';
import ChangePhoneNumber from './forms/ChangePhoneNumber';

function UserSettingsSection({ user }) {
  return (
    <Row>
        <Col>
            <Card className="user-settings-card bg-light-powder" body>
                <h3 className="mb-5">Update user data</h3>
                <ChangeAccountNumber user={user} />
                {/* <ChangePhoneNumber /> */}
            </Card>
        </Col>
    </Row>
  )
}

export default UserSettingsSection