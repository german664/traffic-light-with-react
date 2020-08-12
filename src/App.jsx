import React, { useState } from 'react';
import './App.css';
import TrafficTop from './componentes/trafficTop';
import TrafficContainer from './componentes/trafficContainer';

function App() {
  return (
      <div className="d-flex justify-content-center mt-5 flex-column align-items-center">
        <TrafficTop />
        <TrafficContainer/>

      </div>
  );
}

export default App;
