import React, { useContext } from 'react';
import { ContainerContext } from '../containers/Container';
import '../assets/styles/components/Switch.css';

const Switch = (props) => {
  const context = useContext(ContainerContext);
  return(
    <div className="conten_plans">
      <p className="copy_switch">Annually</p>
      <button
        onClick={() => context.changePlanType()}
        className={context.switchStyle}>
      </button>
      <p className="copy_switch">Monthly</p>
    </div>
  );
};

export default Switch;