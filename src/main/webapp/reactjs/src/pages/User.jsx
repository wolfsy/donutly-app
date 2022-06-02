import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import UserDetailsCard from '../components/user/details/UserDetailsCard';
import DonationsOptions from '../components/user/details/DonationsOptions';
import UserDonationList from '../components/user/details/UserDonationList';

import TokenContext from '../context/TokenProvider';

const User = () => {

    const location = useLocation();
    const { token } = useContext(TokenContext);

    return (
        <Container fluid>
            <UserDetailsCard user={location.state.user} token={token} />
            <DonationsOptions userId={location.state.user.id} />
            <UserDonationList userId={location.state.user.id} token={token} />
        </Container>  
    );
}

export default User;
