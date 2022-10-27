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
                        <i className="fa-solid fa-utensils services_icon"></i>
                        <h3 className="services_title">Steak House <br />Website Design</h3>
                    </div>

                    <span className="services_button" onClick={() => toggleTab(1)}>See More
                        <i className="fa-solid fa-arrow-right services_button-icon"></i>
                    </span>

                    <div className={toggleState === 1 ? "services_modal active-modal" : "services_modal"}>
                        <div className="portfolio_modal-content">

                            <i onClick={() => toggleTab(0)} className="fa-regular fa-circle-xmark services_modal-close"></i>
                            
                            <h3 className="services_modal-title">- Steak House -</h3>
                            <div className="portfolio_image"></div>
                            
                        </div>
                    </div>
                </div>

                <div className="services_content">
                    <div>
                        <i className="fa-solid fa-headphones services_icon"></i>
                        <h3 className="services_title">Headphones <br /> Website Design</h3>
                    </div>

                    <span onClick={() => toggleTab(2)} className="services_button">See More
                        <i className="fa-solid fa-arrow-right services_button-icon"></i>
                    </span>

                    <div className={toggleState === 2 ? "services_modal active-modal" : "services_modal"}>
                        <div className="portfolio_modal-content">

                            <i onClick={() => toggleTab(0)} className="fa-regular fa-circle-xmark services_modal-close"></i>
                            <h3 className="services_modal-title">- HeadPhones -</h3>
                            
                            <div className="portfolio_image2"></div>
                        </div>
                    </div>
                </div>

                <div className="services_content">
                    <div>
                        <i className="fa-solid fa-book services_icon"></i>
                        <h3 className="services_title">Blog <br /> Website Design</h3>
                    </div>

                    <span onClick={() => toggleTab(3)} className="services_button">See More
                        <i className="fa-solid fa-arrow-right services_button-icon"></i>
                    </span>

                    <div className={toggleState === 3 ? "services_modal active-modal" : "services_modal"}>
                        <div className="portfolio_modal-content">

                            <i onClick={() => toggleTab(0)} className="fa-regular fa-circle-xmark services_modal-close"></i>
                            <h3 className="services_modal-title">- Blog -</h3>
                            
                            <div className="portfolio_image3"></div>
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