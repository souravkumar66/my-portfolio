import { motion } from 'framer-motion';

const servicesList = [
  { title: "Logo & Brand Identity", desc: "Professional logo design and comprehensive brand guidelines to make your business stand out." },
  { title: "Social Media Graphics", desc: "High-engaging posts, banners, and digital assets tailored for maximum conversion." },
  { title: "Print & Marketing", desc: "Eye-catching business cards, flyers, and brochure designs for your physical marketing." },
  { title: "Vector Illustration", desc: "Custom vector art, icons, and fully scalable designs ready for any medium." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 } // কার্ডগুলো এক এক করে আসবে
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Services = () => {
  return (
    <section className="container mx-auto px-5 py-20 border-t border-gray-900">
      
      {/* Title Scroll Animation */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">My <span className="text-green-400">Services</span></h2>
        <p className="text-gray-400 max-w-xl mx-auto">Everything you need to build a strong visual presence.</p>
      </motion.div>
      
      {/* Cards Scroll Animation */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {servicesList.map((service, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants}
            className="bg-[#0f0f0f] p-8 rounded-2xl border border-gray-800 hover:border-green-400 transition duration-300 group hover:-translate-y-2"
          >
            <div className="w-12 h-12 bg-gray-900 rounded-lg mb-6 border border-gray-800 group-hover:border-green-400 flex items-center justify-center text-green-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-green-400 transition">{service.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
};

export default Services;