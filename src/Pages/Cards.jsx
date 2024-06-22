import React from 'react'
import "./styles.css"

export default function Cards() {
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
      </div>
    </>
  )
}
