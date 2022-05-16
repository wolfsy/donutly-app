import '../style/App.css';

import AppNavbar from '../components/navbar/AppNavbar';
import AboutUsPage from "../components/aboutUs/AboutUsPage";
import Footer from '../components/footer/Footer';

const About = () => {
    return (
        <div className="App">
            <AppNavbar />
            <AboutUsPage />
            <Footer />
        </div>
    );
}

export default About;
