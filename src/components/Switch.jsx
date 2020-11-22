import React from 'react';
import '../assets/styles/components/Switch.css';

const Switch = () => {
  return(
    <div className="conten_plans">
      <p className="copy_switch">Annually</p>
      <button className="switch" id="switch"></button>
      <p className="copy_switch">Monthly</p>
    </div>
  );
};

export default Switch;