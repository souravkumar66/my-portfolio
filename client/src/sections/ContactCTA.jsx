import { Link } from 'react-router-dom';

const ContactCTA = () => {
  return (
    <section className="container mx-auto px-5 py-24 mb-10">
      <div className="bg-gradient-to-r from-[#0f0f0f] to-[#1a1a1a] border border-gray-800 rounded-3xl p-10 md:p-20 text-center relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-500/10 blur-[100px] rounded-full pointer-events-none"></div>
        
        <h2 className="text-4xl md:text-6xl font-bold mb-6 relative z-10">Let's create something <br/><span className="text-green-400">amazing together.</span></h2>
        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto relative z-10">
          I'm currently available for freelance projects. If you have a project that needs some creative magic, I'd love to hear about it.
        </p>
        
        <Link to="/contact" className="relative z-10 inline-block bg-green-400 text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-green-300 transition shadow-[0_0_20px_rgba(74,222,128,0.2)] hover:shadow-[0_0_30px_rgba(74,222,128,0.4)]">
          Start a Project
        </Link>
      </div>
    </section>
  );
};

export default ContactCTA;