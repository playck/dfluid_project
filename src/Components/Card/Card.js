import React from "react";
import "./Card.scss";

const Card = ({ card }) => {
  console.log(card);
  return (
    <li className="card">
      <img src={card.img} alt="프로필 사진" />
      <div>{card.label}</div>
      <div>{card.text}</div>
      <span class="Learn-more">Learn more</span>
    </li>
  );
};

export default Card;
