import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'typeface-nunito'
import AppNavbar from './components/navbar/AppNavbar';
import AvatarList from './components/avatarList/AvatarList';
import CategoryCarousel from './components/category/CategoryCarousel';
import CharitySection from './components/charity/CharitySection';

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <AvatarList />
      <CategoryCarousel />
      <CharitySection />
    </div>
  );
}

export default App;
