import UserBrowser from "../components/user/browser/UserBrowser";
import { useLocation } from 'react-router-dom';

const Categories = () => {

    const location = useLocation();

    return (
        <div className="border-2">
            <UserBrowser categoryId={location?.state?.categoryId} />
        </div>
    );
}

export default Categories;
