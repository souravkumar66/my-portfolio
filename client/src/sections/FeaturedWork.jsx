import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';

const FeaturedWork = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // ব্যাকএন্ড থেকে প্রজেক্ট ফেচ করা
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/projects');
        setProjects(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section className="container mx-auto px-5 py-20 border-t border-gray-900">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-green-400">Work</span></h2>
          <p className="text-gray-400 max-w-xl">A selection of my recent design projects.</p>
        </div>
        <Link to="/portfolio" className="hidden md:inline-block border-b border-green-400 text-green-400 hover:text-white hover:border-white transition pb-1">
          View All Projects ↗
        </Link>
      </div>

      {/* লোডিং স্টেট */}
      {loading ? (
        <div className="text-center text-green-400 py-10">Loading projects...</div>
      ) : projects.length === 0 ? (
        <div className="text-center text-gray-500 py-10 border border-gray-800 rounded-2xl">
          No projects found in database. Add some projects to MongoDB!
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project._id} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
            >
              <div className="aspect-video w-full overflow-hidden bg-gray-900">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-80 group-hover:opacity-100"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition duration-300">
                <span className="text-green-400 text-sm font-medium mb-2">{project.category}</span>
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      )}
      
      <div className="mt-10 text-center md:hidden">
        <Link to="/portfolio" className="border-b border-green-400 text-green-400 hover:text-white transition pb-1">
          View All Projects ↗
        </Link>
      </div>
    </section>
  );
};

export default FeaturedWork;