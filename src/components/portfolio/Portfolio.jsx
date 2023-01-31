import React, { useState } from 'react';
import "./portfolio.css";

const Portfolio = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <section className="services section" id="portfolio">
            <h2 className="section_title">Portfolio</h2>
            <span className="section_subtitle">- What I CREATE -</span>

            <div className="services_container container grid">

                <div className="services_content">
                    <div>
                        <i class="fa-solid fa-paintbrush services_icon"></i>
                        <h3 className="services_title">Illustration <br/> ArtWork</h3>
                    </div>

                    <span className="services_button" onClick={() => toggleTab(1)}>See More
                        <i className="fa-solid fa-arrow-right services_button-icon"></i>
                    </span>

                    <div className={toggleState === 1 ? "services_modal active-modal" : "services_modal"}>
                        <div className="portfolio_modal-content">

                            <i onClick={() => toggleTab(0)} className="fa-regular fa-circle-xmark services_modal-close"></i>
                            
                            <h3 className="services_modal-title">- Illustration -</h3>
                            <div className="portfolio_image"></div>
                            
                        </div>
                    </div>
                </div>

                <div className="services_content">
                    <div>
                        <i class="fa-solid fa-pencil services_icon"></i>
                        <h3 className="services_title">Character <br/>Design</h3>
                    </div>

                    <span onClick={() => toggleTab(2)} className="services_button">See More
                        <i className="fa-solid fa-arrow-right services_button-icon"></i>
                    </span>

                    <div className={toggleState === 2 ? "services_modal active-modal" : "services_modal"}>
                        <div className="portfolio_modal-content">

                            <i onClick={() => toggleTab(0)} className="fa-regular fa-circle-xmark services_modal-close"></i>
                            <h3 className="services_modal-title">- Character Design -</h3>
                            
                            <div className="portfolio_image2"></div>
                        </div>
                    </div>
                </div>

                <div className="services_content">
                    <div>
                        <i className="fa-solid fa-book services_icon"></i>
                        <h3 className="services_title"> Website <br /> Design</h3>
                    </div>

                    <span onClick={() => toggleTab(3)} className="services_button">See More
                        <i className="fa-solid fa-arrow-right services_button-icon"></i>
                    </span>

                    <div className={toggleState === 3 ? "services_modal active-modal" : "services_modal"}>
                        <div className="portfolio_modal-content">

                            <i onClick={() => toggleTab(0)} className="fa-regular fa-circle-xmark services_modal-close"></i>
                            <h3 className="services_modal-title">- BlogRSA -</h3>
                            <div className="portfolio_link">
                            {/* <p>Visit and see!</p> */}
                            <a href="https://blog-rsa-gulnihalcengiz.vercel.app">BlogRSA / Gulnihal Cengiz</a>
                            <p>Powered by Vercel. <br /> 2023 </p>
                            
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="services_content">
                    <div>
                        <i className="fa-solid fa-code services_icon"></i>
                        <h3 className="services_title">Recipe <br />App Design</h3>
                    </div>

                    <span className="services_button" onClick={() => toggleTab(1)}>View More
                        <i className="fa-solid fa-arrow-right services_button-icon"></i>
                    </span>

                    <div className={toggleState === 1 ? "services_modal active-modal" : "services_modal"}>
                        <div className="portfolio_modal-content">

                            <i onClick={() => toggleTab(0)} className="fa-regular fa-circle-xmark services_modal-close"></i>
                            <h3 className="services_modal-title">Web Designer</h3>
                            
                            <div className="portfolio_image4"></div>
                        </div>
                    </div>
                </div>

                <div className="services_content">
                    <div>
                        <i className="fa-solid fa-code services_icon"></i>
                        <h3 className="services_title">Recipe <br />App Design</h3>
                    </div>

                    <span className="services_button" onClick={() => toggleTab(1)}>View More
                        <i className="fa-solid fa-arrow-right services_button-icon"></i>
                    </span>

                    <div className={toggleState === 1 ? "services_modal active-modal" : "services_modal"}>
                        <div className="portfolio_modal-content">

                            <i onClick={() => toggleTab(0)} className="fa-regular fa-circle-xmark services_modal-close"></i>
                            <h3 className="services_modal-title">Web Designer</h3>
                            
                            <div className="portfolio_image5"></div>
                        </div>
                    </div>
                </div>

                <div className="services_content">
                    <div>
                        <i className="fa-solid fa-code services_icon"></i>
                        <h3 className="services_title">Recipe <br />App Design</h3>
                    </div>

                    <span className="services_button" onClick={() => toggleTab(1)}>View More
                        <i className="fa-solid fa-arrow-right services_button-icon"></i>
                    </span>

                    <div className={toggleState === 1 ? "services_modal active-modal" : "services_modal"}>
                        <div className="portfolio_modal-content">

                            <i onClick={() => toggleTab(0)} className="fa-regular fa-circle-xmark services_modal-close"></i>
                            <h3 className="services_modal-title">Web Designer</h3>
                            <div className="portfolio_image"></div>
                        </div>
                    </div>
                </div> */}

            </div>
    </section>
    )
}

export default Portfolio;