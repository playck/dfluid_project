import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ImageContainer.scss";
import Rectangle from "../../image/Rectangle.png";

const ImageContainer = () => {
  const [img, setImg] = useState(null);
  const previousImg = localStorage.getItem("img");

  useEffect(() => {
    if (localStorage.getItem("img") === null) {
      axios
        .get(
          "https://api.unsplash.com/photos/random?client_id=RfZSbn_rdvEPrnhslq8HRwmCwyayZg3DBo_LDcXXaTM"
        )
        .then(function (res) {
          setImg(res.data.urls.raw);
          localStorage.setItem("img", res.data.urls.raw);
        });
    }
  }, []);

  return (
    <div className="imgBox">
      {previousImg ? (
        <img src={previousImg} alt="img" />
      ) : (
        <img src={img} alt="img" />
      )}
      <img src={Rectangle} alt="" className="background" />
      <div className="context">
        <h2 className="head">Sed ut perspiciatis unde omnis</h2>
        <div className="text">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary.
        </div>
        <div className="border"></div>
        <div className="footer">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore.
        </div>
      </div>
    </div>
  );
};

export default ImageContainer;
