import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';

function App() {
  return (
    <Router>
      {/* Dark minimal theme setup - Added w-full */}
      <div className="bg-[#0a0a0a] text-white min-h-screen w-full flex flex-col font-sans selection:bg-green-400 selection:text-black">
        <Navbar />
        
        {/* Main Content Area */}
        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;