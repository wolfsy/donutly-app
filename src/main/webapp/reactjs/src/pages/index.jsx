import '../style/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'typeface-nunito'
import AppNavbar from '../components/navbar/AppNavbar';
import AvatarList from '../components/avatarList/AvatarList';
import CategoryCarousel from '../components/category/CategoryCarousel';
import CharitySection from '../components/charity/CharitySection';
import Footer from '../components/footer/Footer';
import AboutUsSection from '../components/aboutUs/AboutUsSection';

const MainPage = () => {
    return (
        <div className="App">
            <AppNavbar />
            <AvatarList />
            <AboutUsSection />
            <CategoryCarousel />
            <CharitySection />
            <Footer />
        </div>
    );
}

export default MainPage;
