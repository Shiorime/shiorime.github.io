import React from 'react'
import "./styles.css"

export default function About() {
    return (
        <>
            <div className="container">
                <p className="title">Programming Languages:</p>
                <ul className="list">
                    <li><p>C</p></li>
                    <li><p>C++</p></li>
                    <li><p>C#</p></li>
                    <li><p>Python</p></li>
                    <li><p></p></li>
                </ul>

                <p className="title">Currently Learning:</p>
                <ul className="list">
                    <li><p>HTML</p></li>
                    <li><p>CSS</p></li>
                    <li><p>React</p></li>
                    <li><p>PHP</p></li>
                    <li><p></p></li>
                </ul>

                <p className="title">Fighting Games I play:</p>
                <ul className="list">
                    <li><p>Tekken 8</p></li>
                    <li><p>Guilty Gear Strive</p></li>
                </ul>

                <p className="title">Gacha Games I play:</p>
                <ul className="list">
                    <li><p>Genshin Impact</p></li>
                    <li><p>Honkai: Star Rail</p></li>
                    <li><p>Wuthering Waves</p></li>
                </ul>
            </div>
        </>
    )
}
