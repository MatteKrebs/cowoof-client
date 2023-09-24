import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import ErrorPage from './pages/ErrorPage';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import PetsPage from './pages/PetsPage';
import OwnersPage from './pages/OwnersPage';
import GroupsPage from './pages/GroupsPage';
import AddPet from './components/AddPet';
import SignupCombined from './pages/SignupCombined';
import './App.css';

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
        <Route path='/groups' element={<GroupsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
