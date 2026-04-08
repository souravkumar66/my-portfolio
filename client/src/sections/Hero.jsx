import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="container mx-auto px-5 py-20 flex flex-col items-center justify-center text-center min-h-[85vh]">
      
      {/* Badge Animation */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="inline-block px-4 py-1.5 rounded-full border border-gray-800 bg-[#111] text-gray-300 text-sm font-medium mb-6"
      >
        Available for Freelance Work 🚀
      </motion.div>
      
      {/* Heading Animation */}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight"
      >
        Designing Brands that <br className="hidden md:block" />
        <span className="text-green-400">Convert.</span>
      </motion.h1>
      
      {/* Paragraph Animation */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
      >
        Hi, I'm Sourav. A versatile graphic designer specializing in vector illustrations, branding, and high-impact digital designs for international clients.
      </motion.p>
      
      {/* Buttons Animation */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <Link to="/portfolio" className="bg-green-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-green-300 transition shadow-[0_0_15px_rgba(74,222,128,0.3)] hover:shadow-[0_0_25px_rgba(74,222,128,0.5)]">
          View My Work
        </Link>
        <Link to="/contact" className="border border-gray-700 hover:border-green-400 text-white px-8 py-3 rounded-full font-semibold transition">
          Let's Talk
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;