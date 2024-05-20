import React from 'react';
import AppAbout from '../components/Information/about.js';
import AppMoreInfo from '../components/Information/moreInfo.js';
function Information() {
  return (
    <div id="information">
      <h1>Information</h1>

      <AppAbout/>
      <AppMoreInfo/>
      {/* Otros contenidos de la página de inicio */}
    </div>
  );
}

export default Information;
