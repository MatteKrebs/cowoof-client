import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ErrorPage from './pages/ErrorPage';
import NavigationBar from './components/NavigationBar';
import Button from './components/Button';
import Footer from './components/Footer';
import './App.css';
//import PetList from './components/PetList';
import PetsPage from './pages/PetsPage';

function App() {

  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/pets" element={<PetsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Button />
      <Footer />
    </div>
  );
}

export default App;
