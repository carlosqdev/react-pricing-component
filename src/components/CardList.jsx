import React from 'react';
import Card from './Card';
import Api from '../Api.js';
import '../assets/styles/components/CardList.css';

const CardList = () => {
  const data = Api;
  return(
    <section className="cards">
      <div className="wrapper">
        {data.map((item) =>
          <Card key={item.id.toString()} {...item} />
        )
        }
      </div>
    </section>
  )
}

export default CardList;