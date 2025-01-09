import React from 'react';
import Accommodation from './Accommodation'; 
import Services from './Services';           
import Contact from './Contact';             

const Home = () => {
  return (
    <>

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

    </>
  );
};

export default Home;
