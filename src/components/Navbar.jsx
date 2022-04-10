import React from 'react';
import arrowRight from './pics/Arrow-Right 1.png';
import background from './pics/Mask Group.png';
import NavbarMiddleLinks from './NavbarMiddleLinks';
import phone1 from './pics/Phone 1.png';
import shape11 from './pics/Shape 1 1.png';
import shape21 from './pics/Shape 2 1.png';
import shape31 from './pics/Shape 3 1.png';
import shape41 from './pics/Shape 4 1.png';
import './css/navbar.css';

function Navbar() {
  const styles = {
    background: {
      position: 'absolute',
      top: '-95px',
      left: '-73px',
      width: '1591px',
    },
    shape31: {
      position: 'absolute',
      width: '385px',
      height: '394px',
      left: '473px',
      top: '28px',
    },
    shape31blur: {
      position: 'absolute',
      width: '385px',
      height: '394px',
      left: '502px',
      top: '28px',
      filter: 'blur(8px)',
    },
  };
  return (
    <React.Fragment>
      <nav>
        <img src={background} style={{ ...styles.background }} />
        <NavbarMiddleLinks />
        <img src={shape31} style={{ ...styles.shape31blur }} />
        <img src={shape31} style={{ ...styles.shape31 }} />
        <img src={shape11} id='shape11' />
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
        <img src={phone1} id='phone1' />
        <img src={shape41} id='shape41' />
        <img src={shape41} id='shape412' />
        <img src={shape21} id='shape21' />
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
