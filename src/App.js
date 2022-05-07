import './App.css';
import Navbar from './Navbar/Navbar';
import Destination from './Pages/Destination';
import Hero from './Pages/Home';
import Services from './Pages/Services';
import Furniture from './Pages/Furniture';
import Registry from './Pages/Registry';
import Footer from './Pages/Footer';

function App() {
  return (
    <div className="App" >
      <Navbar />
      <Hero />
      < Services />
      < Destination />
      <Furniture />
      <Registry />
      <Footer />
    </div>
  );
}

export default App;