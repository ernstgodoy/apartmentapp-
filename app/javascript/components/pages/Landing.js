import React from 'react';
import { Container } from 'reactstrap'

const Landing = () => {
  return (
    <div id="landing">
      <Container >
        <div id="landing-text" className="text-center">
          <h2>Welcome To Apartment List!</h2>
          <p>Looking for a new home? Click to see What is Available.<br /> Are you a property manager looking to fill your vacant properties?<br /> Sign up to list your available properties!</p>
        </div>
      </Container>
    </div>
  );
};

export default Landing;