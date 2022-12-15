import './App.css';
import {BrowserRouter as Router, Routes ,Route} from "react-router-dom";
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Donate from './components/Donate';

function App() {
  return (
   <>
   <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/donate" element={<Donate />} />
    </Routes>
    <Footer/>
   </Router>
   </>
  );
}

export default App;