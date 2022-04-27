import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'typeface-nunito'
import AppNavbar from './components/navbar/AppNavbar';
import AvatarList from './components/avatarList/AvatarList';
import CategoryCarousel from './components/category/CategoryCarousel';

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <AvatarList />
      <CategoryCarousel />
    </div>
  );
}

export default App;
