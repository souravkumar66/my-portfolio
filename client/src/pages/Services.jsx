import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Vector Illustration",
      description: "High-quality, scalable vector art for your business, merchandise, or editorial needs. Clean paths and vibrant colors.",
      icon: "✒️"
    },
    {
      id: 2,
      title: "Brand Identity",
      description: "Complete branding solutions including logos, typography, color palettes, and brand guidelines to make you stand out.",
      icon: "🎯"
    },
    {
      id: 3,
      title: "Custom Graphics",
      description: "Eye-catching social media posts, banners, and digital assets designed to engage your audience and boost conversions.",
      icon: "🎨"
    },
    {
      id: 4,
      title: "Print Design",
      description: "Print-ready designs for business cards, flyers, posters, and packaging that leave a lasting physical impression.",
      icon: "🖨️"
    }
  ];

  return (
    <section className="pt-32 pb-20 container mx-auto px-5 min-h-screen">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          My <span className="text-green-400">Services</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-400 text-lg md:text-xl"
        >
          Everything you need to build a strong visual presence. I specialize in turning complex ideas into clean, impactful designs.
        </motion.p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {services.map((service, index) => (
          <motion.div 
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            className="group bg-[#111111] border border-gray-800 hover:border-green-400 rounded-3xl p-8 md:p-10 transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,222,128,0.15)] hover:-translate-y-2"
          >
            <div className="text-5xl mb-6 bg-[#1a1a1a] w-20 h-20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
              {service.title}
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-20 text-center"
      >
        <p className="text-gray-400 mb-6">Need a custom service not listed here?</p>
        <a href="/contact" className="inline-block bg-transparent border-2 border-green-400 text-green-400 font-bold px-8 py-4 rounded-xl hover:bg-green-400 hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(74,222,128,0.2)]">
          Let's Discuss Your Project ↗
        </a>
      </motion.div>
    </section>
  );
};

export default Services;