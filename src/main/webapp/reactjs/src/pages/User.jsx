import { useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import UserDetailsCard from '../components/user/details/UserDetailsCard';
import DonationsOptions from '../components/user/details/DonationsOptions';
import UserDonatorsList from '../components/user/details/UserDonatorsList';

const User = () => {

    const location = useLocation();

    return (
        <Container fluid>
                <UserDetailsCard user={location.state.user} />
                <DonationsOptions  />
        </Container>
    );
}

export default User;
