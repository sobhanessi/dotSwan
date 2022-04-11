import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './pics/Logo 1.png';

function Footer() {
  return (
    <footer>
      <div id='group-21'>
        <div id='logo'>
          <img src={logo} />
        </div>
        <p>
          Copyright © 2020 Draft LLC. <br />
          All rights reserved.
        </p>
      </div>
      <div id='links'>
        <div id='first-links'>
          <NavLink to='/team' className='footer-links'>
            Team
          </NavLink>
          <NavLink to='/press' className='footer-links'>
            Press
          </NavLink>
          <NavLink to='/fees' className='footer-links'>
            Fees
          </NavLink>
        </div>
        <div id='second-links'>
          <NavLink to='/services' className='footer-links'>
            Services
          </NavLink>
          <NavLink to='/projects' className='footer-links'>
            Projects
          </NavLink>
          <NavLink to='/affiliate' className='footer-links'>
            Affiliate
          </NavLink>
        </div>
        <div id='third-links'>
          <NavLink to='/terms-of-use' className='footer-links'>
            Terms of use
          </NavLink>
          <NavLink to='/privacy-policy' className='footer-links'>
            Privacy policy
          </NavLink>
          <NavLink to='/contact-us' className='footer-links'>
            Contact us
          </NavLink>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
