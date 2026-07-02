import React from 'react'
import './Navbar.css'
import logo from './assets/logo.png'
import Home from './Home.jsx'
function Navbar() {
    return (
        <div className="navbar">
            <img className="logo" src={logo} alt="Murray Mclellan IELTS logo."></img>
                <div className="navbar-content">
                <button onClick={() => setPage('home')}>Home</button>
                <button>IELTS Blog</button>
                <button>About The Teacher</button>
                <button>Book button Consultancy</button>
                <button>IELTS Speaking</button>
                <button>Student Feedback</button>
            </div>
        </div>
    )
}

export default Navbar