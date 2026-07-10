import React from 'react'
import './App.css'
import bccert from './assets/bccert.png';
import idp2021 from './assets/idp2021cert.png';
import idp2024 from './assets/idp2024cert.png'
import premiercert from './assets/premierteflcert.jpg'
import vnFlag from './assets/vietnamese-flag.PNG';
import enFlag from './assets/ukFlag.jpg';
import meBC from './assets/meAtBC.jpg';
import meIDP from './assets/meAtIDP.jpg';
function About() {
    return (
        <div className="about-container">
            <div className="about-section">
            <div className="about-paragraph">
            <p>My name is Murray. I'm from Stroud, a relatively small city in England(UK) & I have been teaching English since December of 2015. I can speak English (Native) & Vietnamese (C1 - Business Proficiency). I have a passion for languages, video game development, web development, music, and horror movies.</p>
            <br></br>
            <p>ABOUT MY TEACHING<br></br>
            I have worked for a multitude of institutions as listed below:</p>
            <li>International schools</li>
            <li>Universities</li>
            <li>English centers</li>
            <li>Private schools</li>
            <li>Public schools</li>
            <li>Online English centers</li>
            <a>I am a British Council and IDP certified IELTS tutor, and I have had formal 1-1 training from an ex-IELTS examiner.</a>
            </div>
            <img src={meBC}></img>
            </div>
            
            <div className='middleSection'>
                <img className ="filler-image" src={meIDP}></img>

            <div className="ielts-expert-container">
                <h1 className="ielts-expert-title">IELTS Expert</h1>
                    <div className="ielts-expert-images">
                <img className="certificateImg" src={bccert}></img>
                <img className="certificateImg" src={idp2024}></img>
                <img className="certificateImg" src={idp2021}></img>
                <img className="certificateImg" src={premiercert}></img>
                </div>
            </div>
            </div>

            
            <div className="bilingual-description-container">
            <h1>Bilingual</h1>
                <div className="bilingual-description">
                <img className="flag-png" src={vnFlag}></img>
                    <div className="bilingual-description-text-overlay">
                    <p className="bilingual-description-text">I have been living in Vietnam since 2018 and my Vietnamese is at a near-native level (C1), so I may be a good fit for Vietnamese learners.</p>
                    </div>
                </div>
                <div className="bilingual-description">
                <img className="flag-png" src={enFlag}></img>
                    <div className="bilingual-description-text-overlay">
                    <p className="bilingual-description-text">I am from the UK. I was born in Manchester, but I grew up in Stroud—a beautiful town in South-West England.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About