import '../style/App.css';

import AppNavbar from '../components/navbar/AppNavbar';
import AvatarGrid from '../components/avatarGrid/AvatarGrid';
import CategoryCarousel from '../components/category/CategoryCarousel';
import CharitySection from '../components/charity/CharitySection';
import Footer from '../components/footer/Footer';
import AboutUsSection from '../components/aboutUs/AboutUsSection';

const MainPage = () => {
    return (
        <div className="App">
            <AppNavbar />
            <AvatarGrid />
            <AboutUsSection />
            <CategoryCarousel />
            <CharitySection />
            <Footer />
        </div>
    );
}

export default MainPage;
