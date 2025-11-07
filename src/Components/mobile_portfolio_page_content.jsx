import React, { useState } from 'react';

import FlyHighAirline from './component_images/project_fly_high_airline.jpg';
import Simplilearn from './component_images/02.jpg';

import { IoIosArrowDown } from "react-icons/io";

const MobilePortfolioPageContent = () => {
    const [openSections, setOpenSections] = useState({
        one: false,
        two: false,
        three: false,
        four: false,
    });

    const toggleSection = (section) => {
        setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
    };

    return (
        <>
            <center>
                <div className="mobile_about_page_parent">
                    <div className='mobile_about_page_parent_div'>
                        <div className="mobile_about_page_div4" onClick={() => toggleSection("two")}>
                            <br />
                            <font className="mobile_about_me_about_me_font_1">
                                <b>
                                    My
                                    <font className="mobile_about_me_about_me_font_2"> Projects</font>
                                </b>
                            </font>
                            <br />
                            <font className="mobile_about_me_about_me_font_1">
                                <IoIosArrowDown />
                            </font>
                            <br />
                        </div>
                        {openSections.two && (
                            <div className="mobile_about_page_mobile-row">
                                <div className="mobile_about_page_div5">
                                    <br />
                                    <img src={FlyHighAirline} alt="c" className="projects_icons" />
                                    <br /><br />
                                    <font className='laptop_about_me_about_me_font_5'>
                                        <b>Fly High Airline</b>
                                    </font>
                                    <br />
                                    <font className="laptop_about_me_about_me_font_4">HTML | CSS | JavaScript</font>
                                    <br /><br />
                                    <a href="https://rajat101010.github.io/Fly-High-Airline/">
                                        <button type="button" class="projects_button_view_page">
                                            <font className="projects_view_page">
                                                View Page
                                            </font>
                                        </button>
                                    </a>
                                    <br /><br />
                                </div>
                                <div className="mobile_about_page_div6">
                                    <br />
                                    <a href="/my-projects">
                                        <button type="button" class="mobile_about_me_button_view_more_about_me">
                                            <font className="mobile_about_me_view_more_about_me">
                                                View More
                                            </font>
                                        </button>
                                    </a>
                                    <br /><br />
                                </div>
                            </div>
                        )}
                    </div>

                    <div className='mobile_about_page_parent_div'>
                        <div className="mobile_about_page_div7" onClick={() => toggleSection("three")}>
                            <br />
                            <font className="mobile_about_me_about_me_font_1">
                                <b>
                                    My
                                    <font className="mobile_about_me_about_me_font_2"> Certificates</font>
                                </b>
                            </font>
                            <br />
                            <font className="mobile_about_me_about_me_font_1">
                                <IoIosArrowDown />
                            </font>
                            <br />
                        </div>
                        {openSections.three && (
                            <div className="mobile_about_page_mobile-row">
                                <div className="mobile_about_page_div8">
                                    <img src={Simplilearn} alt="c" className="my_skill_page_icons_all" />
                                    <br />
                                    <font className='laptop_about_me_about_me_font_5'>
                                        <b>Introduction to Tableau</b>
                                    </font>
                                    <br />
                                    <font className="laptop_about_me_about_me_font_4">by Simplilearn</font>
                                    <br />
                                    <font className="laptop_about_me_about_me_font_5">January 2025</font>
                                    <br /><br />
                                </div>
                                <div className="mobile_about_page_div9">
                                    <br />
                                    <a href="/my-certificates">
                                        <button type="button" class="mobile_about_me_button_view_more_about_me">
                                            <font className="mobile_about_me_view_more_about_me">
                                                View More
                                            </font>
                                        </button>
                                    </a>
                                    <br /><br />
                                </div>
                            </div>
                        )}
                    </div>


                </div>
            </center>
        </>
    );
};

export default MobilePortfolioPageContent;