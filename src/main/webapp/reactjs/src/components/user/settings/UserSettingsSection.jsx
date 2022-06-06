import React from 'react'
import { Row, Col, Card } from 'react-bootstrap';
import ChangeAccountNumber from './forms/ChangeAccountNumber';

function UserSettingsSection({ user }) {

  return (
    <Row>
        <Col>
            <Card className="user-settings-card bg-light-powder" body>
                <h3 className="mb-5">Update user data</h3>
                <ChangeAccountNumber currentNumber={user.accountNumber} />
            </Card>
        </Col>
    </Row>
  )
}

export default UserSettingsSection