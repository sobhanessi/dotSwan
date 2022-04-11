import React from 'react';
import creditCard from './pics/Credit Card.png';

function Feature1Section() {
  return (
    <div id='feature-1-section'>
      <div id='feature-1'>
        <p id='feature-1-first-p'>One card for all your payments</p>
        <p id='feature-1-second-p'>
          Get 3% back on everything you buy with the Draft card. Register today
          and enjoy every aspect of your business.
        </p>
      </div>
      <div id='feature-1-img'>
        <img src={creditCard} alt='credit card in feature 1' id='' />
      </div>
    </div>
  );
}

export default Feature1Section;
