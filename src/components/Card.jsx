import React from 'react';
import '../assets/styles/components/Card.css';

const Card = ({ plan, price, storage, userAllow, sendUp }) => {
  return (
    <div className="card">
      <h2 className="title_card">{plan}</h2>
      <div className="card_body">
        <div className="cost">
          <p>
            <span className="symbol">&#36;</span>
          </p>
          <h2 id="priceBasic" className="price">{price}</h2>
        </div>
        <p className="line">
          <span className="span">{storage}</span>
        </p>
        <p className="line">
          <span className="span">{userAllow}</span>
        </p>
        <p className="line">
          <span className="span">{sendUp}</span>
        </p>
        <button className="button">Learn More</button>
      </div>
    </div>
  );
};

export default Card;