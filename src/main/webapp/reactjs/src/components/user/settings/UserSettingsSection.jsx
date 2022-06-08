import { Row, Col, Card, Stack } from 'react-bootstrap';

import ChangeAccountNumber from './forms/ChangeAccountNumber';
import ChangePhoneNumber from './forms/ChangePhoneNumber';
import ChangeAccountAvatar from './forms/ChangeAccountAvatar';

function UserSettingsSection({ user, parentCallback }) {

  const updateCallback = (success) => {
    parentCallback(success);
  }

  return (
    <Row>
        <Col>
            <Card className="user-settings-card bg-light-powder" body>
                <h3 className="mb-5">Update user data</h3>
                <Stack gap={4}>
                    <ChangeAccountNumber currentNumber={user.accountNumber}
                                         parentCallback={updateCallback}
                    />

                    <ChangePhoneNumber currentNumber={user.phone}
                                       parentCallback={updateCallback}
                    />
                </Stack>
                <h5 className="mt-5 mb-4">User account details</h5>
                <Stack gap={4}>
                    <ChangeAccountAvatar currentAvatar={user.avatarURL}
                                         parentCallback={updateCallback}
                    />
                </Stack>
            </Card>
        </Col>
    </Row>
  )
}

export default UserSettingsSection