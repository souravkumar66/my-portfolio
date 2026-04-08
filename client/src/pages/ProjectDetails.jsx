import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProjectDetails = () => {
  const { id } = useParams();

  // যেহেতু এখনো ডাটাবেস কানেক্ট করিনি, তাই এটি একটি ডেমো ডাটা
  const project = {
    title: "Neon Brand Identity",
    category: "Branding & Vector Art",
    heroImage: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1920&auto=format&fit=crop",
    problem: "The client needed a modern, vibrant brand identity that stands out in the crowded tech startup space. They lacked a cohesive visual language.",
    process: "Started with hand-drawn vector sketches, focusing on geometric shapes. Transitioned to digital illustrations, iterating on a neon-green and dark theme palette to ensure high contrast and modern appeal.",
    output: "Delivered a complete brand guideline, scalable vector logo, social media kits, and premium print-ready business cards.",
    mockups: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=800&auto=format&fit=crop"
    ]
  };

  return (
    <div className="pt-24 pb-20 min-h-screen">
      {/* Hero Image */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full h-[40vh] md:h-[60vh] relative"
      >
        <img src={project.heroImage} alt={project.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
      </motion.div>

      <div className="container mx-auto px-5 -mt-20 relative z-10 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="text-green-400 font-bold tracking-widest uppercase text-sm mb-4 block">
            {project.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-12">
            {project.title}
          </h1>

          {/* Case Study Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
            <div className="bg-[#111] p-8 rounded-2xl border border-gray-800 hover:border-green-400/50 transition-colors">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-green-400">01.</span> The Problem
              </h3>
              <p className="text-gray-400 leading-relaxed">{project.problem}</p>
            </div>
            <div className="bg-[#111] p-8 rounded-2xl border border-gray-800 hover:border-green-400/50 transition-colors">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-green-400">02.</span> The Process
              </h3>
              <p className="text-gray-400 leading-relaxed">{project.process}</p>
            </div>
            <div className="bg-[#111] p-8 rounded-2xl border border-gray-800 hover:border-green-400/50 transition-colors">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-green-400">03.</span> Final Output
              </h3>
              <p className="text-gray-400 leading-relaxed">{project.output}</p>
            </div>
          </div>

          {/* High-Quality Mockups */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Project Gallery</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.mockups.map((img, index) => (
                <div key={index} className="rounded-2xl overflow-hidden border border-gray-800">
                  <img src={img} alt={`Mockup ${index + 1}`} className="w-full h-auto hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>

          {/* Back to Portfolio CTA */}
          <div className="text-center border-t border-gray-800 pt-12">
            <Link to="/portfolio" className="inline-flex items-center gap-3 bg-transparent border-2 border-green-400 text-green-400 px-8 py-4 rounded-xl font-bold hover:bg-green-400 hover:text-black transition-all">
              ← Back to All Works
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetails;