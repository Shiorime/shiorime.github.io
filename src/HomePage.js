import React, {useState, useEffect} from 'react'

import "./HomePage.css"

export default function HomePage() {
    const [counter, setCounter] = useState(0);
    const incrementCounter = () => {
        setCounter((prev) => prev + 1);
    }

    const [windowWidth, setWindowwidth] = useState(window.innerWidth);
    const handleResize = () => {
        setWindowwidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
    }, [])

    return (
        <>
            <img class="avatar" src={"./images/belfastavatar.png"} alt=""/>
            <p>Hi, I'm Shiori but I also go by Shizu. Just a guy who likes programming and anime.</p>
            <p>Also I like playing fighting games such as (mostly) Tekken and sometimes in other FGs.</p>
            <div class="links">
                <li><a class="link" href="https://github.com/Shiorime?tab=repositories">Github</a></li>
                <li><a class="link" href="https://www.twitch.tv/shiorime">Twitch</a></li>
                <li><a class="link" href="https://steamcommunity.com/id/ShizuHeart/">Steam</a></li>
            </div>
            <div class="button">
                <button onClick={(incrementCounter)}>Hey! Clicked {counter} times</button>
            </div>
            <pre>Window width = {windowWidth}</pre>
        </>
  )
}
