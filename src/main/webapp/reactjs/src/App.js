import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'typeface-nunito'
import AppNavbar from './components/navbar/AppNavbar';
import CategoryCarousel from './components/category/CategoryCarousel';

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <CategoryCarousel />
    </div>
  );
}

export default App;
