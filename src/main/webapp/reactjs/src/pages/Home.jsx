import AvatarGrid from '../components/avatarGrid/AvatarGrid';
import CategoryCarousel from '../components/category/CategoryCarousel';
import CharitySection from '../components/charity/CharitySection';
import AboutUsSection from '../components/aboutUs/AboutUsSection';

const Home = () => {
    return (
        <div>
            <AvatarGrid />
            <AboutUsSection />
            <CategoryCarousel />
            <CharitySection />
        </div>
    );
}

export default Home;
