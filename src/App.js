import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation';
import Hero from './Components/Hero';
import Specialists from './Components/Specialists';
import Services from './Components/Services';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
     <Navigation />
     <Hero />
     <Specialists />
     <Services />
     <Footer />

    </div>
  );
}

export default App;
