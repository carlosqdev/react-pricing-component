import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Switch from '../components/Switch';
import Card from '../components/Card';
import Api from '../Api';

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
        <section className="cards">
          <div className="wrapper">
            {Api.map((item) =>
              <Card key={item.id.toString()} {...item} />
            )
            }
          </div>
        </section>
      </ContainerContext.Provider>
    </>
  )
}

export default Container;