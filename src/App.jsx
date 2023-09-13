import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
//import SignupPage1 from './components/SignupPage1';
//import SignupPage from './pages/SignupPage';
import ErrorPage from './pages/ErrorPage';
import NavigationBar from './components/NavigationBar';
import Button from './components/Button';
import Footer from './components/Footer';
import './App.css';
//import PetList from './components/PetList';
import PetsPage from './pages/PetsPage';
import OwnersPage from './pages/OwnersPage'
import AddPet from './components/AddPet';
import SignupCombined from './pages/SignupCombined';
//import SignupPage2 from './components/SignupPage2';

function App() {

  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/signup" element={<SignupCombined />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/profile' element={<ProfilePage />}/>
        <Route path="/pets" element={<PetsPage />} />
        <Route path="/newpet" element={<AddPet />} />
        <Route path='/owners' element={<OwnersPage />} />
        {/* <Route path="/signup2" element={<SignupPage2 />} /> */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Button />
      <Footer />
    </div>
  );
}

export default App;
