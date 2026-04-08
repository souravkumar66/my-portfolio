import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0a]/80 backdrop-blur-md shadow-lg py-4 border-b border-gray-800' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-5 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold tracking-wider text-white">
          SOURAV<span className="text-green-400">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 font-medium">
          <Link to="/" className={`transition-colors hover:text-green-400 ${location.pathname === '/' ? 'text-green-400' : 'text-gray-300'}`}>Home</Link>
          <Link to="/portfolio" className={`transition-colors hover:text-green-400 ${location.pathname === '/portfolio' ? 'text-green-400' : 'text-gray-300'}`}>Work</Link>
          <Link to="/services" className={`transition-colors hover:text-green-400 ${location.pathname === '/services' ? 'text-green-400' : 'text-gray-300'}`}>Services</Link>
          <Link to="/about" className={`transition-colors hover:text-green-400 ${location.pathname === '/about' ? 'text-green-400' : 'text-gray-300'}`}>About</Link>
          
          {/* Highlighted Contact Button */}
          <Link to="/contact" className="bg-green-400 text-black px-6 py-2.5 rounded-full font-bold hover:bg-green-500 transition-all hover:shadow-[0_0_20px_rgba(74,222,128,0.4)] hover:-translate-y-0.5">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Icon (Placeholder) */}
        <div className="md:hidden text-gray-300 text-2xl cursor-pointer hover:text-green-400">
          ☰
        </div>
      </div>
    </nav>
  );
};

export default Navbar;