import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // ডাটাবেস (Backend) থেকে প্রজেক্ট ফেচ করার লজিক
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // আপনার Render ব্যাকএন্ড লিংক
        const response = await fetch('https://my-portfolio-h1fo.onrender.com/api/projects');
        const data = await response.json();
        setProjects(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section className="pt-32 pb-20 container mx-auto px-5 min-h-screen">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Selected <span className="text-green-400">Works</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-400 text-lg md:text-xl"
        >
          A collection of my recent vector illustrations, branding projects, and digital designs.
        </motion.p>
      </div>

      {/* Loading State */}
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-400"></div>
        </div>
      ) : projects.length === 0 ? (
        <div className="text-center text-gray-500 mt-10 text-xl border border-gray-800 p-10 rounded-2xl">
          No projects found. Add some from your MongoDB Atlas!
        </div>
      ) : (
        /* Dynamic Grid Layout */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project._id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer bg-[#111] border border-gray-800"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image || project.heroImage} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-green-400 font-semibold text-sm mb-2 uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {project.title}
                </h3>
                
                <Link 
                  to={`/project/${project._id}`} 
                  className="inline-flex items-center gap-2 text-white hover:text-green-400 transition-colors w-max pb-1 border-b border-transparent hover:border-green-400"
                >
                  View Case Study <span className="text-xl">↗</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Portfolio;