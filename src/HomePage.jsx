import React, { useState, useEffect, useRef } from 'react'
import { CalculateTimeLeft, CheckIfBannerIsUp } from './utils/CalculateBannerTime';
import { useHover } from "./utils/useHover";
import { ShowDate, TranslateDateTimeDay } from './utils/TranslateDateTimeToString';

export default function HomePage() {
    //Hacker Letters
    const letters = "abcdefghijklmnopqrstuvwxuz";
    const hackerRef = useRef();
    function hackerLetters() {
        let iterations = 0;

        const interval = setInterval(() => {
            if (hackerRef.current) {
                hackerRef.current.innerText = hackerRef.current.innerText.split("")
                .map((letter, index) => {
                    if (index < iterations) {
                        return hackerRef.current.dataset.value[index];
                    }
                    return letters[Math.floor(Math.random() * 26)]
                })
                .join("");
    
                if (iterations >= 9) clearInterval(interval);
    
                iterations += 1 / 3;
            }

        }, 30);
        return "Shiorime";
    }

    const isHovered = useHover(".hometitle");
    const homeTitle = isHovered ? hackerLetters() : "Shiorime";

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
    });

    //Wuthering Waves Current Banner
    const deadline = new Date("28 Jun 2024 10:00:00 UTC+8");
    const [timeLeft, setTimeLeft] = useState(CalculateTimeLeft(deadline));
    const [currentFormat, setCurrentFormat] = useState(true);
    const currentBannerName = "Jinhsi"
    const currentBannerImage = "./images/wuwaicons/jinhsiicon.webp";

    useEffect(() => {
        const id = setInterval(() => {
            setTimeLeft(CalculateTimeLeft(deadline));
        }, 1000);

        return () => {
            clearTimeout(id)
        };
    });

    const setCurrentBannerFormat = () => {
        setCurrentFormat(!currentFormat);
    }

    //Wuthering Waves Next Banner
    const nextDeadline = new Date("19 Jul 2024 10:00:00 UTC+8");
    const [nextTimeLeft, nextSetTimeLeft] = useState(CalculateTimeLeft(deadline));
    const [nextFormat, setNextFormat] = useState(true);
    const nextBannerName = "Changli"
    const nextBannerImage = "./images/wuwaicons/changliicon.webp";

    useEffect(() => {
        const id = setInterval(() => {
            nextSetTimeLeft(CalculateTimeLeft(nextDeadline));
        }, 1000);

        return () => {
            clearTimeout(id)
        };
    });

    const setNextBannerFormat = () => {
        setNextFormat(!nextFormat);
    }

    return (
        <>
            <h1 className="hometitle" ref={hackerRef} data-value="Shiorime">{homeTitle}</h1>
            <img className="avatar" src={"./images/belfastavatar.png"} alt="" />
            <p>Hi, I'm Shiori but I also go by Shizu. Just a guy who likes programming and anime.</p>
            <p>Also I like playing fighting games such as (mostly) Tekken and sometimes in other FGs.</p>
            <div className="links">
                <li><a className="link" href="https://github.com/Shiorime?tab=repositories">Github</a></li>
                <li><a className="link" href="https://www.twitch.tv/shiorime">Twitch</a></li>
                <li><a className="link" href="https://steamcommunity.com/id/ShizuHeart/">Steam</a></li>
            </div>

            <h3>Videos I've edited with Adobe Premiere:</h3>
            <div className="editedvideos">
                <ul className="list">
                    <li><a className="videolink" href="https://www.youtube.com/watch?v=B8BgMCA2HmU">Favourite Element</a></li>
                    <li><a className="videolink" href="https://www.youtube.com/watch?v=bPYU5BT74Z8">TGR Speedrun</a></li>
                </ul>
            </div>

            <div className="date">
                <pre className="timenow">Time now: {TranslateDateTimeDay(dateTime.getDay())}, {ShowDate(dateTime)}</pre>
                <div className="banner" onClick={setCurrentBannerFormat}>
                    <img className="bannerimage" src={currentBannerImage} alt="" />
                    <pre>{currentBannerName} banner: {CheckIfBannerIsUp(timeLeft, currentFormat)}</pre>
                </div>
                <div className="banner" onClick={setNextBannerFormat}>
                <img className="bannerimage" src={nextBannerImage} alt="" />
                    <pre>{nextBannerName} banner: {CheckIfBannerIsUp(nextTimeLeft, nextFormat)}</pre>
                </div>
            </div>

            <div className="button">
                <button onClick={(incrementCounter)}>Hey! Clicked {counter} times</button>
            </div>
            <pre>Window width = {windowWidth}</pre>
        </>
    )
}
