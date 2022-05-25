import { useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import UserDetailsCard from '../components/user/details/UserDetailsCard';
import DonationsOptions from '../components/user/details/DonationsOptions';
import UserDonationList from '../components/user/details/UserDonationList';

const User = () => {

    const location = useLocation();

    return (
        <Container fluid>
            <UserDetailsCard user={location.state.user} />
            <DonationsOptions />
            <UserDonationList userId={location.state.user.id} />
        </Container>  
    );
}

export default User;
