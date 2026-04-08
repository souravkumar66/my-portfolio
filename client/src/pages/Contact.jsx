import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      // আপনার লাইভ Render API লিংক
      const response = await fetch('https://my-portfolio-vlso.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('Message sent successfully! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus('Something went wrong. Please check your connection.');
    }
  };

  return (
    <div className="pt-32 pb-20 container mx-auto px-5 min-h-screen">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Left Side: Contact Info & CTA */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Let's create something <span className="text-green-400">awesome.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-md">
            Whether you need a custom vector illustration, a complete brand identity, or just want to say hi, my inbox is always open.
          </p>

          <div className="space-y-6">
            {/* Email Button */}
            <a 
              href="mailto:your.email@example.com" 
              className="flex items-center gap-4 bg-[#111] border border-gray-800 p-5 rounded-2xl hover:border-green-400 transition-colors group"
            >
              <div className="w-12 h-12 bg-[#1a1a1a] rounded-full flex items-center justify-center text-xl group-hover:bg-green-400 group-hover:text-black transition-colors">
                ✉️
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Email Me</p>
                <p className="text-white font-bold text-lg group-hover:text-green-400 transition-colors">hello@sourav.com</p>
              </div>
            </a>

            {/* WhatsApp Button */}
            <a 
              href="https://wa.me/8801700000000" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-4 bg-[#111] border border-gray-800 p-5 rounded-2xl hover:border-green-400 transition-colors group"
            >
              <div className="w-12 h-12 bg-[#1a1a1a] rounded-full flex items-center justify-center text-xl group-hover:bg-green-400 group-hover:text-black transition-colors">
                💬
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">WhatsApp</p>
                <p className="text-white font-bold text-lg group-hover:text-green-400 transition-colors">Start a Chat</p>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-[#111] p-8 md:p-10 rounded-3xl border border-gray-800"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-400 text-sm font-bold mb-2">Your Name</label>
              <input 
                type="text" 
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-[#1a1a1a] border border-gray-800 text-white px-5 py-4 rounded-xl focus:outline-none focus:border-green-400 transition-colors"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label className="block text-gray-400 text-sm font-bold mb-2">Email Address</label>
              <input 
                type="email" 
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-[#1a1a1a] border border-gray-800 text-white px-5 py-4 rounded-xl focus:outline-none focus:border-green-400 transition-colors"
                placeholder="john@example.com"
              />
            </div>
            
            <div>
              <label className="block text-gray-400 text-sm font-bold mb-2">Your Message</label>
              <textarea 
                required
                rows="5"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-[#1a1a1a] border border-gray-800 text-white px-5 py-4 rounded-xl focus:outline-none focus:border-green-400 transition-colors resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-green-400 text-black font-bold text-lg py-4 rounded-xl hover:bg-green-500 transition-all hover:shadow-[0_0_20px_rgba(74,222,128,0.3)]"
            >
              Send Message 🚀
            </button>

            {/* Status Message */}
            {status && (
              <p className={`text-center mt-4 font-medium ${status.includes('successfully') ? 'text-green-400' : 'text-gray-400'}`}>
                {status}
              </p>
            )}
          </form>
        </motion.div>
        
      </div>
    </div>
  );
};

export default Contact;