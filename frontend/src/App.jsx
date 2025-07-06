import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Cars from './pages/Cars';
import About from './pages/About';
import Owner from './pages/Owner';
// import Contact from './pages/Contect';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="bg-white text-gray-900 dark:bg-[#111] dark:text-white min-h-screen transition-colors duration-300">
        <Navbar />

        {/* Main Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/about" element={<About />} />
          <Route path="/owner" element={<Owner />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
