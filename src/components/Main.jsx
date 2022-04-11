import React from 'react';

import ExceptionalPlans from './ExceptionalPlans';
import Feature1Section from './Feature1Section';
import Feature2Section from './Feature2Section';
import Feature3Section from './Feature3Section';
import Plans from './Plans';
import Questions from './Questions';
import './css/mainPage.css';
import Footer from './Footer';

function Main() {
  return (
    <main>
      <Feature1Section />
      <Feature2Section />
      <Feature3Section />
      <ExceptionalPlans />
      <Plans />
      <Questions />
      <Footer />
    </main>
  );
}

export default Main;
