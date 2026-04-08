import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    "Vector Illustration", "Brand Identity", "Logo Design", 
    "Typography", "UI/UX Design", "Print Media", 
    "Adobe Illustrator", "Adobe Photoshop"
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Jenkins",
      role: "CEO, TechStart",
      feedback: "Sourav took our vague ideas and turned them into a stunning, vibrant brand identity. The vector graphics are top-notch and exactly what we needed to stand out."
    },
    {
      id: 2,
      name: "David Chen",
      role: "Marketing Director",
      feedback: "Incredibly professional and fast. The custom illustrations elevated our marketing campaign to a whole new level. Highly recommended for any serious business."
    }
  ];

  return (
    <div className="pt-32 pb-20 container mx-auto px-5 min-h-screen">
      
      {/* About Me Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Hi, I'm <span className="text-green-400">Sourav.</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            I am a passionate graphic designer and vector artist with a knack for translating complex ideas into clean, impactful visuals. Over the years, I have helped businesses worldwide build strong visual identities.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            When I'm not designing, I'm usually experimenting with new illustration techniques or exploring the latest design trends to keep my work fresh and modern.
          </p>
          <a href="/contact" className="inline-block bg-green-400 text-black px-8 py-3 rounded-full font-bold hover:bg-green-500 transition-all shadow-[0_0_15px_rgba(74,222,128,0.3)]">
            Let's Collaborate
          </a>
        </motion.div>

        {/* Profile Image / Abstract Representation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-full border-2 border-green-400/30 p-2 relative">
            <div className="w-full h-full bg-[#111] rounded-full overflow-hidden relative group">
              {/* আপনি চাইলে নিচের src-এর জায়গায় আপনার নিজের সুন্দর একটি ছবির লিংক দিতে পারেন */}
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" 
                alt="Sourav" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-green-400/10 mix-blend-overlay"></div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Skills Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-32"
      >
        <h3 className="text-3xl font-bold mb-10">My <span className="text-green-400">Toolkit</span></h3>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span 
              key={index} 
              className="px-6 py-3 bg-[#111] border border-gray-800 rounded-full text-gray-300 hover:border-green-400 hover:text-green-400 transition-colors cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Testimonials Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <h3 className="text-3xl font-bold mb-12 text-center">Client <span className="text-green-400">Testimonials</span></h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-[#111] p-8 rounded-2xl border border-gray-800 relative">
              <span className="text-5xl text-green-400/20 absolute top-4 right-6 font-serif">"</span>
              <p className="text-gray-400 italic mb-6 relative z-10">
                "{testimonial.feedback}"
              </p>
              <div>
                <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                <span className="text-green-400 text-sm">{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

    </div>
  );
};

export default About;