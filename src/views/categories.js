import React from 'react';

import AppFeature from '../components/categories/feature.js';
import AppPricing from '../components/categories/pricing.js';


function AppCategories() {
  return (
    <div className="categories">
      <h1>Categories</h1>
 
      <AppFeature/>
      <AppPricing/>
    </div>
  );
}

export default AppCategories;