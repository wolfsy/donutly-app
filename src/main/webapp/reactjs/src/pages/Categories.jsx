import { useLocation } from 'react-router-dom';
import UserBrowser from "../components/user/browser/UserBrowser";

const Categories = () => {

    const location = useLocation();

    return (
        <div>
            <UserBrowser categoryId={location?.state?.categoryId} />
        </div>
    );
}

export default Categories;
