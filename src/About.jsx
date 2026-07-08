import React from 'react'
import './App.css'
import cert1 from './assets/certificatePic1.png';
import cert2 from './assets/certificatePic2.png';
import vnFlag from './assets/vietnamese-flag.PNG';
function About() {
    return (
        <div className="about-container">
            <div className="about-paragraph">
            <h1>About Murray</h1>
            <p>My name is Murray. I'm from Stroud, a relatively small city in England(UK) & I have been teaching English since December of 2015. I can speak English (Native) & Vietnamese (C1 - Business Proficiency). I have a passion for languages, video game development, web development, music, and horror movies.</p>
            <p>ABOUT MY TEACHING<br></br>
            I've been teaching since 2015, both online and offline. I have worked for a multitude of institutions as listed below:</p>
            <li>🏫International schools</li>
            <li>🏫English centers</li>
            <li>🏫Private schools</li>
            <li>🏫Public schools</li>
            <li>🏫Online English centers</li>
            <a>✔️I am a British Council and IDP certified IELTS tutor, and I have formal 1-1 training from an ex-IELTS examiner.</a>
            </div>

            <div className="ielts-expert-container">
            <h1 className="ielts-expert-title">IELTS Expert</h1>
            <img className="certificateImg" src={cert1}></img>
            <img className="certificateImg" src={cert2}></img>
            </div>

             <h1>Bilingual</h1>
            <div className="bilingual-description-container">
            <img className="vietnam-flag-png" src={vnFlag}></img>
            <p className="bilingual-description">I have been living in Vietnam since 2018. Due to my assimilation to the culture, my Vietnamese is at a near-native level (C1), so I may be a good fit for Vietnamese learners.</p>
            </div>
        </div>
    )
}

export default About