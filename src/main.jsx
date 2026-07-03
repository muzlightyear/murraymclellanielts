import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import Navbar from './Navbar.jsx'
import App from './App.jsx'
import Blog from './Blog.jsx'
import About from './About.jsx'
import Consultation from './Consultation.jsx'
import ISpeaking from './IELTSSpeaking.jsx'
import Feedback from './Feedback.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/About" element={<About />} />
      <Route path="/Consultation" element={<Consultation />} />
      <Route path="/ISpeaking" element={<ISpeaking />} />
      <Route path="/Feedback" element={<Feedback />} />
    </Routes>
    
  </BrowserRouter>,
)
