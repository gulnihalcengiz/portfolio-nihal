import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer_container container">
            <h1 className="footer_title">- Nihal -</h1>

            <ul className="footer_list">
                <li>
                    <a href="#about" className="footer_link">about</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer_link">projects</a>
                </li>
            </ul>

            <div className="footer_social">
               <a href="https://instagram.com/zerone.artdsgn" className="footer_social-icon" target="_blank">
               <i className="fa-brands fa-instagram"></i>
               </a>

               <a href="https://twitter.com/gulnihalcengiz1" className="footer_social-icon" target="_blank">
               <i className="fa-brands fa-twitter"></i>
               </a>

               <a href="https://facebook.com/GulnihalCengizz" className="footer_social-icon" target="_blank">
               <i className="fa-brands fa-facebook"></i>
               </a>
            </div>

            <span className='footer_copy'>
                &#169; Gulnihal Cengiz. All rights reserved.
            </span>
        </div>
    </footer>
  )
}

export default Footer;