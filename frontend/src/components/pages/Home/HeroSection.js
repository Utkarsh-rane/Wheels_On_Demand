import React from 'react';
import '../../../App.css';

import './HeroSection.css';
import { Button } from './../../Buttons/SignInButton/Button';
import Navbar from '../NavBar/Navbar';

function HeroSection() {
  return (
    <>
      <Navbar />
      
      <div className='hero-container'>
      
          {<video src='/videos/vid.mp4' autoPlay loop muted />}  
         
         <h1 className="hero-name">Wheels On Demand </h1>
        <h3>Extensive Range Of Iconic Models Under One Roof
        </h3>
        
        <p>What are you waiting for?</p>
        <div className='hero-btns'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            GET STARTED
          </Button>
          
        </div>
      </div>
    </>
  );
}

export default HeroSection;
