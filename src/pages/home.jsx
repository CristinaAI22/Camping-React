import React from 'react';
import NavigationButton from '../components/NavigationButton';


const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <NavigationButton
      to="/accommodation"
      label="Detalii despre cazare"
      className="custom-class"
      />
    </div>
  );
};

export default Home;
