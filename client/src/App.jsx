import { Analytics } from "@vercel/analytics/react";
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const Home = lazy(() => import('./pages/Home'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Services = lazy(() => import('./pages/Services'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const ProjectDetails = lazy(() => import('./pages/ProjectDetails'));

function App() {
  return (
    <Router>
      <div className="bg-[#0a0a0a] text-white min-h-screen w-full flex flex-col font-sans selection:bg-green-400 selection:text-black">
        <Navbar />
        
        {/* Main Content Area */}
        <main className="flex-grow w-full">
          <Suspense fallback={
            <div className="min-h-screen flex justify-center items-center bg-[#0a0a0a]">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-green-400"></div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/project/:id" element={<ProjectDetails />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
        
        {/* 📊 Vercel Analytics Component */}
        <Analytics />
      </div>
    </Router>
  );
}

export default App;