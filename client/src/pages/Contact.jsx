import { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    
    try {
      // ব্যাকএন্ড API-তে ডেটা পাঠানো হচ্ছে
      const response = await axios.post('https://my-portfolio-vlso.onrender.com/api/contact', formData);
      
      if(response.status === 201) {
        setStatus('Message sent successfully! 🚀');
        setFormData({ name: '', email: '', message: '' }); // ফর্ম ক্লিয়ার করা
      }
    } catch (error) {
      console.error(error);
      setStatus('Failed to send message. Please try again. 😢');
    }
  };

  return (
    <section className="container mx-auto px-5 py-20 min-h-[80vh] flex flex-col justify-center items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl bg-[#0f0f0f] border border-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl"
      >
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-3">Get in <span className="text-green-400">Touch</span></h2>
          <p className="text-gray-400">Have a project in mind? Drop me a message.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-[#1a1a1a] border border-gray-800 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 transition"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-[#1a1a1a] border border-gray-800 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 transition"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full bg-[#1a1a1a] border border-gray-800 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 transition resize-none"
              placeholder="Tell me about your project..."
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full bg-green-400 text-black font-bold py-4 rounded-xl hover:bg-green-300 transition shadow-[0_0_15px_rgba(74,222,128,0.2)] hover:shadow-[0_0_25px_rgba(74,222,128,0.4)]"
          >
            Send Message
          </button>

          {/* স্ট্যাটাস মেসেজ দেখানোর জায়গা */}
          {status && (
            <p className={`text-center mt-4 font-medium ${status.includes('successfully') ? 'text-green-400' : 'text-yellow-400'}`}>
              {status}
            </p>
          )}
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;