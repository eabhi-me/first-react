import React from 'react';
import './Navbar.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; 
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
function Navbar() {
    const toggleMenu = () => {
        const menu = document.getElementById("menu");
        menu.classList.toggle("active");
    };
    return(
        <Router>
        <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Responsive Navbar</title>
        <div className="navbar">
          <a href="./home" className="logo">
            MySite
          </a>
          <a href="javascript:void(0);" id="toggle-icon" className="icon" onclick="toggleMenu()">
            ☰
          </a>
          <ul id="menu">
            <li>
              <a href="./">Home</a>
            </li>
            <li>
              <a href="./about">About</a>
            </li>
            <li>
              <a href="./service">Service</a>
            </li>
            <li>
              <a href="./Contact">Contact</a>
            </li>
          </ul>
        </div>
        <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/home" element={<Home />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>


      </Routes>
      </>
      </Router>
    );
}
export default Navbar;