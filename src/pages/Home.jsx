import React from 'react';
import Hero from '../components/Hero/Hero';  
import Accommodation from './Accommodation'; 
import Services from './Services';           
import Contact from './Contact';             
import Footer from '../components/Footer/Footer'; 

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* Accommodation Section */}
      <section id="accommodations">
        <Accommodation /> 
      </section>

      {/* Services Section */}
      <section id="services">
        <Services /> 
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact /> 
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
