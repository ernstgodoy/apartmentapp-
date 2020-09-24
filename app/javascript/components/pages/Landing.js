import React from 'react';
import { Button } from 'reactstrap';

const Landing = (props) => {
  const {
    signed_in,
    sign_up_route,
  } = props
  return (
    <div id="landing">
        <div id="landing-text" className="text-center">
          <h2>Welcome To Apartment List!</h2>
          <p>Looking for a new home? Click to see What is Available.<br /> Are you a property manager looking to fill your vacant properties?<br /> Sign up to list your available properties!</p>
          { !signed_in && 
            <Button href={ sign_up_route }>Sign Up</Button>
          }
        </div>
    </div>
  );
};

export default Landing;