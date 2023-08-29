import NavigationBar from './components/NavigationBar';
import Button from './components/Button';
import Footer from './components/Footer';
import './App.css';
import PetList from './components/PetList';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <PetList />
      <Button />
      <Footer />
    </div>
  );
}

export default App;
