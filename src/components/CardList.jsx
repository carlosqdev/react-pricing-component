import React from 'react';
import Card from './Card';
import '../assets/styles/components/CardList.css';

const CardList = () => {
  return(
    <section className="cards">
      <div className="wrapper">
        <Card />
      </div>
    </section>
  )
}

export default CardList;