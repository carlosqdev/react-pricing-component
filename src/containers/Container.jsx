import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Switch from '../components/Switch';

export const ContainerContext = React.createContext();

const Container = () => {
  const [ planType, setPlanType ] = useState('Annually');
  const [ switchStyle, setSwitchStyle ] = useState('switch');

  useEffect(() => {
    if(planType === "Monthly")
      setSwitchStyle("switch monthly");
    else
    setSwitchStyle("switch");
  },[planType])

  const changePlanType = () => {
    if(planType === "Annually")
      setPlanType("Monthly");
    else
      setPlanType("Annually")
  }

  return (
    <>
      <Header />
      <ContainerContext.Provider value={{planType, switchStyle, setPlanType, setSwitchStyle, changePlanType}}>
        <Switch />
      </ContainerContext.Provider>
    </>
  )
}

export default Container;