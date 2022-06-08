import { Row, Col, Card, Stack } from 'react-bootstrap';

import ChangeAccountNumber from './forms/ChangeAccountNumber';
import ChangePhoneNumber from './forms/ChangePhoneNumber';
import ChangeAccountAvatar from './forms/ChangeAccountAvatar';
import ChangeAccountInstagram from './forms/ChangeAccountInstagram';
import ChangeAccountYouTube from './forms/ChangeAccountYouTube';
import ChangeAccountTikTok from './forms/ChangeAccountTikTok';
import ChangeAccountDescription from './forms/ChangeAccountDescription';
import ChangeAccountPassword from './forms/ChangeAccountPassword';

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
                    <ChangeAccountDescription currentDescription={user.profileDescription}
                                              parentCallback={updateCallback}
                    />
                </Stack>
                <h5 className="mt-5 mb-4">Change password</h5>
                <ChangeAccountPassword />
                <h5 className="mt-5 mb-4">Socials</h5>
                <Stack gap={4}>
                    <ChangeAccountInstagram currentInstagram={user.InstagramURL}
                                            parentCallback={updateCallback}
                    />
                    <ChangeAccountYouTube  currentYouTube={user.YouTubeURL}
                                            parentCallback={updateCallback}
                    />
                    <ChangeAccountTikTok  currentTikTok={user.TikTokURL}
                                            parentCallback={updateCallback}
                    />
                </Stack>
            </Card>
        </Col>
    </Row>
  )
}

export default UserSettingsSection