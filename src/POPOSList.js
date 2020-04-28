// src/POPOSList.js

import React from 'react';
import POPOSSpace from './POPOSSpace';
import './POPOSList.css';

function POPOSList() {
  return (
    <div className="POPOSList">
      <POPOSSpace
        name="50 California Street"
        address="50 California St."
        image="50-california-st.jpg"
      />
      <POPOSSpace
        name="100 Pine"
        address="100 Pine St."
        image="100-pine.jpg" 
      />
      <POPOSSpace
        name="101 California"
        address="101 California St."
        image="101-california.jpg" 
      />
      <POPOSSpace
        name="Sansome Roof Garden"
        address="343 Garden St."
        image="343-sansome-roof-garden.jpg" 
      />
      <POPOSSpace
        name="Market Street Plaza"
        address="525 Market St."
        image="525-market-street-plaza.jpg" 
      />
      <POPOSSpace
        name="555 Cali"
        address="555 California St."
        image="555-california.jpg" 
      />
    </div>
  )
}

export default POPOSList