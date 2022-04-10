import React from 'react';
import { Link } from 'react-router-dom';
import logo from './pics/Logo 1.png';

function NavbarMiddleLinks() {
  const styles = {
    navbar: {
      position: 'absolute',
      display: 'flex',
      textDecoration: 'none',
      width: '100%',
      top: '80px',
      left: '18%',
      // justifyContent: 'space-around',
    },
    middleLinks: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    link: {
      textDecoration: 'none',
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '17px',
      lineHeight: '150%',
      color: 'white',
    },
    signUp: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F44E77',
      padding: '10px',
      borderRadius: '20px',
      width: '167px',
      height: '56px',
    },
  };
  return (
    <div style={styles.navbar}>
      <span style={{ ...styles.middleLinks, marginRight: '190px' }}>
        <Link to='/home'>
          <img src={logo} />
        </Link>
      </span>
      <span style={{ ...styles.middleLinks, marginRight: '220px' }}>
        <Link to='/home' style={{ ...styles.link, paddingRight: '70px' }}>
          Home
        </Link>
        <Link to='/feature' style={{ ...styles.link, paddingRight: '70px' }}>
          Feature
        </Link>
        <Link to='/pricing' style={{ ...styles.link }}>
          Pricing
        </Link>
      </span>
      <span style={styles.signUp}>
        <Link to='/sign-up' style={{ ...styles.signUpLink, ...styles.link }}>
          Sign Up
        </Link>
      </span>
    </div>
  );
}

export default NavbarMiddleLinks;
