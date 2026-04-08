import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  // ডেমো প্রজেক্ট ডাটা (পরে ডাটাবেস থেকে আসবে)
  const projects = [
    {
      _id: "1",
      title: "Neon Brand Identity",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop"
    },
    {
      _id: "2",
      title: "Abstract Vector Art",
      category: "Illustration",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop"
    },
    {
      _id: "3",
      title: "Eco Packaging Mockup",
      category: "Print Design",
      image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=800&auto=format&fit=crop"
    },
    {
      _id: "4",
      title: "Tech Startup Social Kit",
      category: "Social Media Design",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop"
    },
    {
      _id: "5",
      title: "Geometric Patterns",
      category: "Vector Graphics",
      image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop"
    },
    {
      _id: "6",
      title: "Corporate UI Elements",
      category: "Digital Design",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop"
    }
  ];

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

      {/* Grid Layout (2-3 Columns) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div 
            key={project._id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative rounded-2xl overflow-hidden cursor-pointer bg-[#111] border border-gray-800"
          >
            {/* Project Image with Hover Scale */}
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-green-400 font-semibold text-sm mb-2 uppercase tracking-wider">
                {project.category}
              </span>
              <h3 className="text-2xl font-bold text-white mb-4">
                {project.title}
              </h3>
              
              {/* Click -> Project Details Link */}
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
    </section>
  );
};

export default Portfolio;