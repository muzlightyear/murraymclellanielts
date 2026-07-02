import React from 'react'
import './Home.css'
import portraitImg from './assets/portrait.png';

function Home() {

  return (
      <div className="home">
        <img className="portraitImg" src={portraitImg} alt="A portrait of Murray."></img>
            <div className="text">
            <h2>Ace Yout Test With an IELTS Preparation Expert</h2>
            <a>Get personalised IELTS preparation courses; study IELTS with an expert.</a>
            <button>Book a Free Consulation</button>
            </div>
        </div>
  )
}

export default Home