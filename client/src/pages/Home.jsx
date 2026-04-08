import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] -z-10"></div>

      <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
        
        {/* Left Side: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block border border-green-400/30 bg-green-400/10 text-green-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 tracking-wide">
            🚀 Available for Freelance Work
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6 text-white">
            Designing Brands that <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
              Convert.
            </span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
            I'm Sourav, a versatile graphic designer specializing in vector illustrations, branding, and high-impact digital designs for international clients.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-5">
            <Link to="/contact" className="bg-green-400 text-black px-8 py-4 rounded-xl font-bold hover:bg-green-500 transition-all hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(74,222,128,0.2)]">
              Let's Talk
            </Link>
            <Link to="/portfolio" className="bg-transparent border-2 border-gray-700 text-white px-8 py-4 rounded-xl font-bold hover:border-green-400 hover:text-green-400 transition-all hover:-translate-y-1">
              View My Work
            </Link>
          </div>
        </motion.div>

        {/* Right Side: Visual Element / Mockup Placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative hidden md:flex justify-center items-center"
        >
           {/* Abstract Vector Graphic Representation */}
           <div className="w-[450px] h-[450px] bg-gradient-to-tr from-[#0a0a0a] to-[#1a1a1a] border border-gray-800 rounded-full relative shadow-[0_0_50px_rgba(0,0,0,0.5)] flex items-center justify-center">
              
              {/* Spinning decorative ring */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-full h-full border-2 border-dashed border-green-400/20 rounded-full"
              ></motion.div>

              {/* Center Element */}
              <div className="w-48 h-48 bg-green-400/10 rounded-full backdrop-blur-md border border-green-400/30 flex items-center justify-center shadow-[0_0_30px_rgba(74,222,128,0.2)]">
                 <span className="text-7xl">✒️</span>
              </div>

              {/* Floating Badges */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 right-10 bg-[#111] px-5 py-3 border border-gray-700 rounded-xl font-medium text-white shadow-xl flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-green-400"></span> Vector Art
              </motion.div>

              <motion.div 
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-24 left-4 bg-[#111] px-5 py-3 border border-gray-700 rounded-xl font-medium text-white shadow-xl flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-green-400"></span> Branding
              </motion.div>
           </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Home;