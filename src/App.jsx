import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import LogoutPage from './pages/LogoutPage';
import ProfilePage from './pages/ProfilePage';
import ErrorPage from './pages/ErrorPage';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import OwnersPage from './pages/OwnersPage';
import GroupsPage from './pages/GroupsPage';
import AddPet from './components/AddPet';
import SignupCombined from './pages/SignupCombined';
import './App.css';
import { AuthProvider } from './context/auth.context';
import { useAuth } from './hooks/useAuth';

function App() {
  const { user, setUser } = useAuth();
  
  return (
    <div className="App">
      <AuthProvider value={{ user, setUser }}>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/signup" element={<SignupCombined />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path='/profile' element={<ProfilePage />}/>
        <Route path="/newpet" element={<AddPet />} />
        <Route path='/owners' element={<OwnersPage />} />
        <Route path='/groups' element={<GroupsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
