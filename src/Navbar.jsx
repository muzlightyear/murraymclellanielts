import React from 'react'
import './Navbar.css'
import logo from './assets/logo.png'
function Navbar() {
    return (
        <div className="navbar">
            <img className="logo" src={logo} alt="Murray Mclellan IELTS logo."></img>
            <li>Home</li>
            <li>IELTS Blog</li>
            <li>About The Teacher</li>
            <li>Book A Consultancy</li>
            <li>IELTS Speaking</li>
            <li>Student Feedback</li>
        </div>
    )
}

export default Navbar