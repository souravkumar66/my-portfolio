import Hero from '../sections/Hero';
import Services from '../sections/Services';
import FeaturedWork from '../sections/FeaturedWork';
import ContactCTA from '../sections/ContactCTA';

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <FeaturedWork />
      <ContactCTA />
    </div>
  );
};

export default Home;