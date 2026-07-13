import React from 'react'
import { Link } from "react-router";
import './Home.css'
import portraitImg from './assets/portrait.png';
import Consultation from './Consultation';

function Home() {

  return (
    <div className="homepage-container">
      <div className="hero-container">
        <img className="portraitImg" src={portraitImg} alt="A portrait of Murray."></img>
            <div className="text">
            <h2>Ace Yout Test With an IELTS Preparation Expert</h2>
            <a className="subheading">Get personalised IELTS preparation courses; study IELTS with an expert.</a>
            <br></br>
            <Link to='/Consultation' className="consultationLink">Book a Free Consulation</Link>
            </div>
        </div>

<div className="class-overview-container">
          <div className="class-overview-card">
            <h3>1-1 Class</h3>
            <li>A personalised curriculum based on your needs.</li>
            <li>Full speaking and writing feedback and access to model answers.</li>
            <li>The undivided attention of an IELTS expert.</li>
          </div>

          <div className="class-overview-card">
            <h3>Group Class</h3>
            <li>Small groups of up to 5 students.</li>
            <li>A variety of partners to practise your IELTS skills with.</li>
            <li>Personalised speaking and writing feedback during class time.</li>
          </div>
        </div>

        <div className="faq-container">
          
          <div className="faq-cards-container">
            <div className="faq-header-container">
            <h1>Frequently Asked Questions</h1>
            <a>Please reach me at murraymclellanielts@googlemail.com if you cannot find an answer to your question.</a>
          </div>
          <div className="faq-card">
            <h3 className="faq-question">Can you get me my target band?</h3>
            <p className="faq-answer">I can give you all of the knowledge and feedback necessary for you to achieve your target band.</p>
          </div>
           
           <div className="faq-card">
            <h3 className="faq-question">Which coursebook do you use?</h3>
            <p className="faq-answer">All of the things I teach come from official sources, including the official IELTS, IDP, and the British Council websites. I sometimes reference the Cambridge IELTS books, but I primarily produce my own PowerPoints, PDFs, and infographics, based on my knowledge of the exam.</p>
          </div>

          <div className="faq-card">
            <h3 className="faq-question">What is the average group size for an IELTS group class with you?</h3>
            <p className="faq-answer">There will be a maximum of 5 students per speaking class and a maximum of 8 students per writing class. This is to ensure the efficiency of the class for each student.</p>
          </div>

          <div className="faq-card">
            <h3 className="faq-question">Do you offer free resources?</h3>
            <p className="faq-answer">Yes! I’m always working on producing new materials for test-takers to practise with at home</p>
          </div>

          <div className="faq-card">
            <h3 className="faq-question">What can I do if I don’t have a friend to practise speaking with?</h3>
            <p className="faq-answer">Join my IELTS Speaking Discord channel to find a partner for speaking practice. Simply post a message and join a voice channel. Once someone responds, you can use my FREE speaking tests as a list of speaking questions if you like! Here is the link: https://discord.gg/upyymCB3kC</p>
          </div>

          <div className="faq-card">
            <h3 className="faq-question">Can I have a free trial class?</h3>
            <p className="faq-answer">Though I don’t offer free trial classes, I do offer a free consultation before you book any classes. During this consultation, we will discuss your goals, and I will introduce my classes and teaching methods. Furthermore, I will answer any questions you have about my experience, credentials, or courses.</p>
          </div>
        </div>
        <div className="faq-form-container">
          <form className="faq-form" action="mailto:murraymclellan@hotmail.co.uk" method="POST" enctype="text/plain">
            <a>Didn't find what you needed? Submit your question below and I will get back to you via email.</a>
            <a>Name: </a>
            <input type="text" placeholder="Test McTesty "></input>
            <a>Email: </a>
            <input type="text" placeholder="testmctesty@gmai.com"></input>
            <a>Question: </a>
            <input type="text" placeholder="How much are your classes?"></input>
            <input type="submit" placeholder="Submit"></input>
          </form>
        </div>
        </div>

        </div>
  )
}

export default Home