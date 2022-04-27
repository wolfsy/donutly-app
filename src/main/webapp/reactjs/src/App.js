import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'typeface-nunito'
import AppNavbar from './components/navbar/AppNavbar';
import CategoryCarousel from './components/category/CategoryCarousel';
import CharitySection from './components/charity/CharitySection';

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <CategoryCarousel />
      <CharitySection />
    </div>
  );
}

export default App;
