import React from 'react'
import { Link } from "react-router";
import './Navbar.css'
import logo from './assets/logo.png'
import Home from './Home.jsx'
import Blog from './Blog.jsx'
import About from './About.jsx'
import Consultation from './Consultation.jsx'
import ISpeaking from './IELTSSpeaking.jsx'
import Feedback from './Feedback.jsx'

function Navbar() {
    return (
        <div className="navbar">
            <img className="logo" src={logo} alt="Murray Mclellan IELTS logo."></img>
                <div className="navbar-content">
                <Link to="/" className="nav-link">Home</Link >
                <Link to="/blog" className="nav-link">IELTS Blog</Link>
                <Link to="/About" className="nav-link">About The Teacher</Link>
                <Link to="/Consultation" className="nav-link">Consultation</Link>
                <Link to="/ISpeaking" className="nav-link">IELTS Speaking</Link>
                <Link to="/Feedback" className="nav-link">Student Feedback</Link>
            </div>
        </div>
    )
}

export default Navbar