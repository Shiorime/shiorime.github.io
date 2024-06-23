import React, { useState } from 'react'
import "./styles.css"

export default function Cards() {
  const images = ["../images/yinlin/yinlincard.jpg", "../images/yinlin/yinlincloseup.jpg", "../images/yinlin/yinlinsit.jpg"]
  const backgroundPositions = ["30% 35%", "100% 100%", "55% 35%"];
  const backgroundSizes = ["175%", "100%", "200%", "100%"]
  const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * images.length));
  const [randomImage, setRandomImage] = useState(images[randomNum])
  const [randomPosition, setRandomPosition] = useState(backgroundPositions[randomNum])
  const [randomSize, setRandomSize] = useState(backgroundSizes[randomNum]);

  const setImage = () => {
    const newRandomNum = Math.floor(Math.random() * images.length);
    setRandomNum(newRandomNum);
    setRandomImage(images[newRandomNum]);
    setRandomPosition(backgroundPositions[newRandomNum]);
    setRandomSize(backgroundSizes[newRandomNum]);
  };

  return (
    <>
      <div className="cards-container">
        <div className="screen">
          <div className="screen-image"></div>
          <div className="screen-overlay"></div>
        </div>

        <div className="robin-card">
          <img src={"./images/flowing-nightglow.webp"}></img>
        </div>

        <div className="yinlin-card">
          <div className="yinlin-image" onMouseOver={setImage} style={{ backgroundImage: `url(${randomImage})`, backgroundPosition: `${randomPosition}`, backgroundSize: `${randomSize}` }} />
        </div>
      </div>
    </>
  )
}
