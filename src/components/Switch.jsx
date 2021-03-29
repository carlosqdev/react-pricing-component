import React, { useState } from 'react';
import '../assets/styles/components/Switch.css';

const Switch = () => {
  const [ playmentPlan, setPlaymentPlan ] = useState('Annually');
  const [ switchStyles, setSwitchStyles ] = useState('switch');

  const handleChangePlaymentPlan = () => {
    if (playmentPlan === 'Annually') {
      setPlaymentPlan('Monthly');
      setSwitchStyles('switch monthly')
      console.log('cambiando estado');
    } else {
      setPlaymentPlan('Annually');
      setSwitchStyles('switch')
    }
  };

  return(
    <div className="conten_plans">
      <p className="copy_switch">Annually</p>
      <button
        onClick={handleChangePlaymentPlan}
        className={switchStyles}>
      </button>
      <p className="copy_switch">Monthly</p>
    </div>
  );
};

export default Switch;