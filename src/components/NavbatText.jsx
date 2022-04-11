import React from 'react';
import arrowRight from './pics/Arrow-Right 1.png';

function NavbatText() {
  return (
    <React.Fragment>
      <span id='smartBanking'>Smart Banking for freelancers</span>
      <span id='navbar-draft'>
        Draft is a revolutionary mobile app built to help you manage your
        business easily and save your money.
      </span>
      <button id='registerButton'>
        <span style={{ color: 'white', paddingRight: '20px' }}>
          Register Now{' '}
        </span>
        <img src={arrowRight} />
      </button>
    </React.Fragment>
  );
}

export default NavbatText;
