import React from 'react';

const Graphic = () => {
  return (
    <div className="skills_content">
        <h3 className="skills_title">Graphic Designer</h3>

        <div className="skills_box">
            <div className="skills_group">
                <div className="skills_data">
                    <i className="fa-solid fa-circle-check"></i>
                    <div>
                        <h3 className="skills_name">Illustrator</h3>
                        <span className="skills_level">Advanced</span>
                    </div>
                </div>

                <div className="skills_data">
                    <i className="fa-solid fa-circle-check"></i>
                    <div>
                        <h3 className="skills_name">Photoshop</h3>
                        <span className="skills_level">Advanced</span>
                    </div>
                </div>

                <div className="skills_data">
                    <i className="fa-solid fa-circle-check"></i>
                    <div>
                        <h3 className="skills_name">Logo Design</h3>
                        <span className="skills_level">intermediate</span>
                    </div>
                </div>
            </div>

            <div className="skills_group">
                <div className="skills_data">
                    <i className="fa-solid fa-circle-check"></i>
                    <div>
                        <h3 className="skills_name">Brand Design</h3>
                        <span className="skills_level">Advanced</span>
                    </div>
                </div>

                <div className="skills_data">
                    <i className="fa-solid fa-circle-check"></i>
                    <div>
                        <h3 className="skills_name">Marketing</h3>
                        <span className="skills_level">Basic</span>
                    </div>
                </div>

                {/* <div className="skills_data">
                    <i class="fa-solid fa-circle-check"></i>
                    <div>
                        <h3 className="skills_name">Marketing</h3>
                        <span className="skills_level">Basic</span>
                    </div>
                </div> */}

            </div>
        </div>
    </div>
    )
}

export default Graphic;