import React from 'react'
import { Link } from "react-router";
import './Home.css'
import portraitImg from './assets/portrait.png';
import Consultation from './Consultation';

function Home() {

  return (
      <div className="home">
        <img className="portraitImg" src={portraitImg} alt="A portrait of Murray."></img>
            <div className="text">
            <h2>Ace Yout Test With an IELTS Preparation Expert</h2>
            <a className="subheading">Get personalised IELTS preparation courses; study IELTS with an expert.</a>
            <br></br>
            <Link to='/Consultation' className="consultationLink">Book a Free Consulation</Link>
            </div>
        </div>
  )
}

export default Home