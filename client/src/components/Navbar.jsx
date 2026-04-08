import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-800 p-5">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-white tracking-widest">
          SOURAV<span className="text-green-400">.</span>
        </Link>
        <div className="flex gap-6 text-gray-300">
          <Link to="/" className="hover:text-green-400 transition">Home</Link>
<Link to="/portfolio" className="hover:text-green-400 transition">Work</Link>
<Link to="/services" className="hover:text-green-400 transition">Services</Link>
<Link to="/about" className="hover:text-green-400 transition">About</Link>
<Link to="/contact" className="hover:text-green-400 transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;