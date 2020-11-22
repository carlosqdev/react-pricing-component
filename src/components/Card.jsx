import React from 'react';
import '../assets/styles/components/Card.css';

const Card = () => {
  return (
    <div className="card">
      <h2 className="title_card">Basic</h2>
      <div className="card_body">
        <div className="cost">
          <p>
            <span className="symbol">&#36;</span>
          </p>
          <h2 id="priceBasic" className="price">200</h2>
        </div>
        <p className="line">
          <span className="span">500 GB Storage</span>
        </p>
        <p className="line">
          <span className="span">2 Users Allowed</span>
        </p>
        <p className="line">
          <span className="span">Send up to 3 GB</span>
        </p>
        <button className="button">Learn More</button>
      </div>
    </div>
  );
};

export default Card;