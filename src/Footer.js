import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-box">
    <div class="container">
        <div>
            <div className="social">
                <a href=""><i class="fa-brands fa-instagram social-icon-me"></i></a>
                <a href=""><i class="fa-brands fa-twitter social-icon-me"></i></a>
                <a href=""><i class="fa-brands fa-linkedin social-icon-me"></i></a>
                <a href=""><i class="fa-brands fa-github social-icon-me"></i></a>
            </div>
        </div>
        <div>
        <p className="copytext" >&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
        </div>
    </div>
    </footer>
    
  );
}


export default Footer;
