import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-gray-800 pt-16 pb-8 mt-auto">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Left Column: Brand & Short Bio */}
          <div>
            <Link to="/" className="text-3xl font-extrabold tracking-wider text-white mb-6 inline-block">
              SOURAV<span className="text-green-400">.</span>
            </Link>
            <p className="text-gray-400 max-w-sm leading-relaxed">
              A versatile graphic designer specializing in vector illustrations, branding, and high-impact digital designs for international clients.
            </p>
          </div>

          {/* Middle Column: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <div className="flex flex-col space-y-4">
              <Link to="/portfolio" className="text-gray-400 hover:text-green-400 transition-all hover:translate-x-2 w-max">View My Work</Link>
              <Link to="/services" className="text-gray-400 hover:text-green-400 transition-all hover:translate-x-2 w-max">Services</Link>
              <Link to="/about" className="text-gray-400 hover:text-green-400 transition-all hover:translate-x-2 w-max">About Me</Link>
              <Link to="/contact" className="text-gray-400 hover:text-green-400 transition-all hover:translate-x-2 w-max">Contact</Link>
            </div>
          </div>

          {/* Right Column: Social Media Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Connect With Me</h3>
            <div className="flex flex-col space-y-4">
              {/* Facebook */}
              <a href="https://www.facebook.com/imsouravkumar.me" target="_blank" rel="noreferrer" className="group flex items-center gap-3 text-gray-400 hover:text-green-400 transition-all w-max">
                <span className="w-8 h-8 rounded-full bg-[#111] border border-gray-800 flex items-center justify-center group-hover:border-green-400 transition-colors text-sm">✒️</span> 
                Facebook
              </a>
              
              {/* Instagram */}
              <a href="https://instagram.com/imsouravkumar.me" target="_blank" rel="noreferrer" className="group flex items-center gap-3 text-gray-400 hover:text-green-400 transition-all w-max">
                <span className="w-8 h-8 rounded-full bg-[#111] border border-gray-800 flex items-center justify-center group-hover:border-green-400 transition-colors text-sm">📱</span> 
                Instagram
              </a>

              {/* LinkedIn */}
              <a href="https://linkedin.com/in/imsouravkumarme" target="_blank" rel="noreferrer" className="group flex items-center gap-3 text-gray-400 hover:text-green-400 transition-all w-max">
                <span className="w-8 h-8 rounded-full bg-[#111] border border-gray-800 flex items-center justify-center group-hover:border-green-400 transition-colors text-sm">💼</span> 
                LinkedIn
              </a>

              {/* Behance */}
              <a href="https://behance.net/imsouravkumar_me" target="_blank" rel="noreferrer" className="group flex items-center gap-3 text-gray-400 hover:text-green-400 transition-all w-max">
                <span className="w-8 h-8 rounded-full bg-[#111] border border-gray-800 flex items-center justify-center group-hover:border-green-400 transition-colors text-sm">🎨</span> 
                Behance
              </a>

              {/* WhatsApp */}
              <a href="http://wa.me/+8801849683375" target="_blank" rel="noreferrer" className="group flex items-center gap-3 text-gray-400 hover:text-green-400 transition-all w-max">
                <span className="w-8 h-8 rounded-full bg-[#111] border border-gray-800 flex items-center justify-center group-hover:border-green-400 transition-colors text-sm">🎨</span> 
                WhatsApp
              </a>

            </div>
          </div>
        </div>

        {/* Copyright Area */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Sourav. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;