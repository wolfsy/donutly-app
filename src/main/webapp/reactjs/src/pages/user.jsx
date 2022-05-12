import '../style/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'typeface-nunito'
import AppNavbar from '../components/navbar/AppNavbar';
import Footer from '../components/footer/Footer';

const UserPage = () => {
    return (
        <div className="UserPage">
            <AppNavbar />
            <Footer />
        </div>
    );
}

export default UserPage;
