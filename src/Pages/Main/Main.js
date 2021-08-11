import React, { useState } from "react";
import image1 from "../../image/image1.png";
import image2 from "../../image/image2.png";
import image3 from "../../image/image3.png";
import Card from "../../Components/Card/Card";
import "./Main.scss";

const Main = () => {
  const [cards, setCards] = useState({
    1: {
      id: "1",
      label: "Sed ut perspiciatis",
      text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.",
      img: image1,
    },
    2: {
      id: "2",
      label: "Lorem ipsum dolor",
      text: "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
      img: image2,
    },
    3: {
      id: "3",
      label: "Nemo enim ipsam",
      text: "Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor.",
      img: image3,
    },
  });

  return (
    <>
      <header className="header">
        Snap photos and share like <br /> never before
      </header>
      <ul className="cardList">
        {Object.keys(cards).map((key) => (
          <Card key={key} card={cards[key]} />
        ))}
      </ul>
    </>
  );
};

export default Main;
