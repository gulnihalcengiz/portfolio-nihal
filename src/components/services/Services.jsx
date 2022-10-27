import React, { useState } from 'react';
import "./services.css"

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <section className="services section" id="services">
            <h2 className="section_title">Services</h2>
            <span className="section_subtitle">- What I OFFER -</span>

            <div className="services_container container grid">

                <div className="services_content">
                    <div>
                        <i className="fa-solid fa-code services_icon"></i>
                        <h3 className="services_title">Web <br /> Designer</h3>
                    </div>

                    <span className="services_button" onClick={() => toggleTab(1)}>View More
                        <i className="fa-solid fa-arrow-right services_button-icon"></i>
                    </span>

                    <div className={toggleState === 1 ? "services_modal active-modal" : "services_modal"}>
                        <div className="services_modal-content">

                            <i onClick={() => toggleTab(0)} className="fa-regular fa-circle-xmark services_modal-close"></i>
                            <h3 className="services_modal-title">Web Designer</h3>
                            {/* <p className="services_modal-description">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, quis!
                            </p> */}

                            <ul className="services_modal-services grid">
                                <li className="services_modal-service">
                                    <i className="fa-solid fa-circle-check services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        I develop the user interface.
                                    </p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="fa-solid fa-circle-check services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        Web page development.
                                    </p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="fa-solid fa-circle-check services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        I design logo & character.
                                    </p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="fa-solid fa-circle-check services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        Design & mock-ups of products for companies.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services_content">
                    <div>
                        <i className="fa-solid fa-palette services_icon"></i>
                        <h3 className="services_title">Graphic <br /> Designer</h3>
                    </div>

                    <span onClick={() => toggleTab(2)} className="services_button">View More
                        <i className="fa-solid fa-arrow-right services_button-icon"></i>
                    </span>

                    <div className={toggleState === 2 ? "services_modal active-modal" : "services_modal"}>
                        <div className="services_modal-content">

                            <i onClick={() => toggleTab(0)} className="fa-regular fa-circle-xmark services_modal-close"></i>
                            <h3 className="services_modal-title">Graphic Designer</h3>
                            {/* <p className="services_modal-description">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, quis!
                            </p> */}

                            <ul className="services_modal-services grid">
                                <li className="services_modal-service">
                                    <i className="fa-solid fa-circle-check services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        I develop the user interface.
                                    </p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="fa-solid fa-circle-check services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        Web page development.
                                    </p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="fa-solid fa-circle-check services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        I design logo & character.
                                    </p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="fa-solid fa-circle-check services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        Design & mock-ups of products for companies.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services_content">
                    <div>
                        <i className="fa-solid fa-eye services_icon"></i>
                        <h3 className="services_title">Visual <br /> Designer</h3>
                    </div>

                    <span onClick={() => toggleTab(3)} className="services_button">View More
                        <i className="fa-solid fa-arrow-right services_button-icon"></i>
                    </span>

                    <div className={toggleState === 3 ? "services_modal active-modal" : "services_modal"}>
                        <div className="services_modal-content">

                            <i onClick={() => toggleTab(0)} className="fa-regular fa-circle-xmark services_modal-close"></i>
                            <h3 className="services_modal-title">Visual Desginer</h3>
                            {/* <p className="services_modal-description">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, quis!
                            </p> */}

                            <ul className="services_modal-services grid">
                                <li className="services_modal-service">
                                    <i className="fa-solid fa-circle-check services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        I develop the user interface.
                                    </p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="fa-solid fa-circle-check services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        Web page development.
                                    </p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="fa-solid fa-circle-check services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        I design logo & character.
                                    </p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="fa-solid fa-circle-check services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        Design & mock-ups of products for companies.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    </section>
    )
}

export default Services;