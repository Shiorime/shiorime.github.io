import React, { useState } from 'react'
import "./styles.css"

const images = ["https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20698-YZIYor2zW3Ta.png",
                "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21455-hTd6T0s9fvYj.jpg"
]
const backgroundPositions = ["30% 50%", 
                             "55% 35%"
];
const animeTitles = ["Yahari Ore no Seishun Love Come wa Machigatteiru.",
                     "NEW GAME!"
]

export default function ThreeByThree() {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [image, setImage] = useState(images[0]);
  const [imagePosition, setImagePosition] = useState(backgroundPositions[0]);
  const [opacity, setOpacity] = useState(1);
  const [animeTitle, setAnimeTitle] = useState(animeTitles[0]);

  const setBigDisplay = (number) => {
    if (number != currentNumber) {
      setCurrentNumber(number);
      setOpacity(0.3); // Start the transition to fade out
      setTimeout(() => {
        setImage(images[number]);
        setImagePosition(backgroundPositions[number]);
        setAnimeTitle(animeTitles[number]);
        setOpacity(1); // Start the transition to fade in
      }, 200); // This timeout duration should match the CSS transition duration
    }
  }

  return (
    <>
      <div className="three-by-three">
        <div className="three-by-three-container">
          <div onClick={() => setBigDisplay(0)} className="three-by-three-element"></div>
          <div onClick={() => setBigDisplay(1)} className="three-by-three-element"></div>
          <div className="three-by-three-element"></div>
          <div className="three-by-three-element"></div>
          <div className="three-by-three-element"></div>
          <div className="three-by-three-element"></div>
          <div className="three-by-three-element"></div>
          <div className="three-by-three-element"></div>
          <div className="three-by-three-element"></div>
        </div>
        <div className="three-by-three-display-wrapper">
          <div 
            className="three-by-three-display" 
            style={{ 
              backgroundImage: `url(${image})`, 
              backgroundPosition: `${imagePosition}`,
              opacity: opacity
            }}
          ></div>
        </div>
        <div className="anime-title-wrapper">
          <div className="anime-title" style={{ opacity: opacity }}>{animeTitle}</div>
        </div>
      </div>
    </>
  )
}