import React, { useState } from 'react'
import "./styles.css"

const images = ["../images/yinlin/yinlincard.jpg", "../images/yinlin/yinlinsit.jpg", "../images/yinlin/yinlincloseup.jpg"]
const backgroundPositions = ["30% 35%",  "55% 35%", "100% 100%"];
const backgroundSizes = ["175%", "200%", "100%"]

export default function Cards() {
  const [imageNumber, setImageNumber] = useState(0);
  const [yinlinImage, setYinlinImage] = useState(images[imageNumber])
  const [yinlinPosition, setYinlinPosition] = useState(backgroundPositions[imageNumber])
  const [yinlinSize, setYinlinSize] = useState(backgroundSizes[imageNumber]);

  const setYinlinCard = () => {
    const num = (imageNumber + 1) % images.length;
    setImageNumber(num);
    setYinlinImage(images[num]);
    setYinlinPosition(backgroundPositions[num]);
    setYinlinSize(backgroundSizes[num]);
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
          <div className="yinlin-image" onMouseOver={setYinlinCard} style={{ backgroundImage: `url(${yinlinImage})`, backgroundPosition: `${yinlinPosition}`, backgroundSize: `${yinlinSize}` }} />
        </div>
      </div>
    </>
  )
}
