import React from 'react'
import shanti from './assets/shanti.jpg'
import './Feedback.css'

function Feedback() {
    return (
        <div className="feedback-container">
            <a>Structure: Img + Description.</a>
        <img src={shanti}></img>
        <p>“You explained everything in detail and it was easy to understand, and because I am used to listening to Indonesian teachers and this is my first time having a native speaker’s tutor, I sometimes found it hard. But after all, you are my hero, and I got my goal score in just a few days.” Shanti – Aim: IELTS Speaking Band 6.5</p>
        </div>
    )
}

export default Feedback