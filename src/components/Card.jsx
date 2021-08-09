import React, { useContext, useState, useEffect } from "react";
import { ContainerContext } from "../containers/Container";
import "../assets/styles/components/Card.css";

const Card = (props) => {
  const context = useContext(ContainerContext);
  const [price, setPrice] = useState(props.price);

  useEffect(() => {
    return () => {
      if(context.planType === "Annually")
        setPrice(props.price * 12)
      else
        setPrice(props.price)
    }
  });

  return (
    <div className="card">
      <h2 className="title_card">{props.plan}</h2>
      <div className="card_body">
        <div className="cost">
          <p>
            <span className="symbol">&#36;</span>
          </p>
          <h2 id="priceBasic" className="price">
            {price}
          </h2>
        </div>
        <p className="line">
          <span className="span">{props.storage}</span>
        </p>
        <p className="line">
          <span className="span">{props.userAllow}</span>
        </p>
        <p className="line">
          <span className="span">{props.sendUp}</span>
        </p>
        <button className="button">Learn More</button>
      </div>
    </div>
  );
};

export default Card;