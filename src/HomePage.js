import React, { useState, useEffect } from 'react'
import { CalculateTimeLeft, CheckIfUp } from './utils/CalculateTime';

export default function HomePage() {
    //Counter
    const [counter, setCounter] = useState(0);
    const incrementCounter = () => {
        setCounter((prev) => prev + 1);
    }

    //Window Width
    const [windowWidth, setWindowwidth] = useState(window.innerWidth);
    const handleResize = () => {
        setWindowwidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
    }, [])

    //Show Date
    const [dateTime, setDatetime] = useState(new Date());

    useEffect(() => {
        const id = setInterval(() => setDatetime(new Date()), 1000);
        return () => {
            clearInterval(id);
        }
    }, []);

    //Wuthering Waves banner
    const deadline = new Date("6 Jun 2024 04:00:00 UTC+2");
    const [timeLeft, setTimeLeft] = useState(CalculateTimeLeft(deadline));

    useEffect(() => {
        const id = setInterval(() => {
            setTimeLeft(CalculateTimeLeft(deadline));
        }, 1000);

        return () => {
            clearTimeout(id)
        };
    });

    return (
        <>
            <img class="avatar" src={"./images/belfastavatar.png"} alt="" />
            <p>Hi, I'm Shiori but I also go by Shizu. Just a guy who likes programming and anime.</p>
            <p>Also I like playing fighting games such as (mostly) Tekken and sometimes in other FGs.</p>
            <div class="links">
                <li><a class="link" href="https://github.com/Shiorime?tab=repositories">Github</a></li>
                <li><a class="link" href="https://www.twitch.tv/shiorime">Twitch</a></li>
                <li><a class="link" href="https://steamcommunity.com/id/ShizuHeart/">Steam</a></li>
            </div>

            <h3>Videos I've edited with Adobe Premiere:</h3>
            <div className="editedvideos">
                <ul className="list">
                    <li><a class="videolink" href="https://www.youtube.com/watch?v=B8BgMCA2HmU">Favourite Element</a></li>
                    <li><a class="videolink" href="https://www.youtube.com/watch?v=bPYU5BT74Z8">TGR Speedrun</a></li>
                </ul>
            </div>

            <div className="date">
                <pre>Time now: {dateTime.toUTCString()}</pre>
                <pre>Yinlin banner: {CheckIfUp(timeLeft)}</pre>
            </div>

            <div class="button">
                <button onClick={(incrementCounter)}>Hey! Clicked {counter} times</button>
            </div>
            <pre>Window width = {windowWidth}</pre>
        </>
    )
}
