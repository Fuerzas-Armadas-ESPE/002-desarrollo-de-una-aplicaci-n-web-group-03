import React from 'react';

import AppHero from '../components/home/hero.js';
import AppWorks from '../components/home/works.js';


function AppHome() {
  return (
    <div className="main">
      <AppHero/>
      <AppWorks/>
    </div>
  );
}

export default AppHome;