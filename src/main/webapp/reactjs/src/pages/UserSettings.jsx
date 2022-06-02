import { Container, Row, Col } from 'react-bootstrap';
import UserInfoSection from '../components/user/settings/UserInfoSection';
import UserSettingsSection from '../components/user/settings/UserSettingsSection';

const UserSettings = () => {
    return (
        <Container className="py-4">
            <Row className="justify-content-center">
                <Col md={5}>
                    <UserInfoSection />
                </Col>
                <Col md={5}>
                    <UserSettingsSection />
                </Col>
            </Row>
        </Container>
    );
}

export default UserSettings;