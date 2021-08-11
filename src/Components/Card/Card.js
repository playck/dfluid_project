import React from "react";
import "./Card.scss";

const Card = ({ card }) => {
  return (
    <li className="card">
      <img src={card.img} alt="프로필 사진" />
      <div className="label">{card.label}</div>
      <div className="text">{card.text}</div>
      <span className="more">Learn more</span>
    </li>
  );
};

export default Card;
