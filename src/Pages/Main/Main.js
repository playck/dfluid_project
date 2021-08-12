import React, { useState } from "react";
import image1 from "../../image/image1.png";
import image2 from "../../image/image2.png";
import image3 from "../../image/image3.png";
import Card from "../../Components/Card/Card";
import ImageContainer from "../../Components/ImageContainer/ImageContainer";
import "./Main.scss";

const Main = () => {
  const [cards, setCards] = useState([
    {
      id: "1",
      label: "Sed ut perspiciatis",
      text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.",
      img: image1,
    },
    {
      id: "2",
      label: "Lorem ipsum dolor",
      text: "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
      img: image2,
    },
    {
      id: "3",
      label: "Nemo enim ipsam",
      text: "Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor.",
      img: image3,
    },
  ]);

  const shuffle = (arr) => {
    let j, x, i;
    for (i = arr.length; i; i -= 1) {
      j = Math.floor(Math.random() * i);
      x = arr[i - 1];
      arr[i - 1] = arr[j];
      arr[j] = x;
    }
    return arr;
  };
  shuffle(cards);

  return (
    <>
      <header className="header">
        Snap photos and share like <br /> never before
      </header>
      <ul className="cardList">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </ul>
      <ImageContainer />
    </>
  );
};

export default Main;
