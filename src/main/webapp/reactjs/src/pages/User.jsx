import { useLocation } from 'react-router-dom';

import UserDetailsCart from '../components/user/details/UserDetailsCard';
import DonationsOptions from '../components/user/details/DonationsOptions';
import UserDonatorsList from '../components/user/details/UserDonatorsList';

const User = () => {

    const location = useLocation();

    return (
        <div>
            <UserDetailsCart user={location.state.user} />
            {/* <DonationsOptions />
            <UserDonatorsList /> */}
        </div>
    );
}

export default User;
