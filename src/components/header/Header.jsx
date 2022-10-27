import React, {useState} from 'react';
import "./header.css";

const Header = () => {
                       // Change backgrund header
        window.addEventListener("scroll", function () {
            const header = document.querySelector(".header");
            if(this.scrollY >= 80) header.classList.add("show-header");
            else header.classList.remove("show-header");
        });

                        // Toggle Menu
    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");

  return (
    <header className="header">
        <nav className="nav container">
            <p className="nav_logo">Nihal</p>

            <div className={Toggle ? "nav_menu show-menu" : "nav-menu"}>
                <ul className="nav_list grid">
                    {/* <li className="nav_item">
                        <a href="#home" onClick={() => setActiveNav ('#home')} className={activeNav === "#home" ? "nav_link active-link" 
                        : "nav_link"}>
                        <i className="fa-solid fa-house nav_icon"></i> home
                        </a>
                    </li> */}

                    <li className="nav_item">
                        <a href="#about" 
                            onClick={() => setActiveNav ('#about')} className={
                            activeNav === "#about" ? "nav_link active-link" 
                            : "nav_link"}>

                            {/* <i className="fa-solid fa-user nav_icon"></i>  */}
                            about
                        </a>
                    </li>

                    <li className="nav_item">
                        <a href="#portfolio" 
                            onClick={() => setActiveNav ('#portfolio')} className={
                            activeNav === "#portfolio" ? "nav_link active-link" 
                            : "nav_link"}>

                            {/* <i className="fa-solid fa-palette nav_icon"></i> */}
                             portfolio
                        </a>
                    </li>

                    <li className="nav_item">
                        <a href="#skills" 
                            onClick={() => setActiveNav ('#skills')} className={
                            activeNav === "#skills" ? "nav_link active-link" 
                            : "nav_link"}>
                        
                            {/* <i className="fa-solid fa-file-circle-check nav_icon"></i>  */}
                            skills
                        </a>
                    </li>

                    <li className="nav_item">
                        <a href="#services" 
                            onClick={() => setActiveNav ('#services')} className={
                            activeNav === "#services" ? "nav_link active-link" 
                            : "nav_link"}>
                        
                            {/* <i className="fa-solid fa-business-time nav_icon"></i>  */}
                            services
                        </a>
                    </li>  

                    <li className="nav_item">
                        <a href="#contact" 
                            onClick={() => setActiveNav ('#contact')} className={
                            activeNav === "#contact" ? "nav_link active-link" 
                            : "nav_link"}>

                            {/* <i className="fa-solid fa-envelope nav_icon"></i>  */}
                            contact
                        </a>
                    </li>
                </ul>

                {/* <i className="fa-solid fa-circle-xmark nav_close" onClick={() => showMenu(!Toggle)}></i> */}
            </div>

            {/* <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>
              <i className="fa-solid fa-circle-chevron-down"></i>
            </div> */}
        </nav>
    </header>
  )
}

export default Header;