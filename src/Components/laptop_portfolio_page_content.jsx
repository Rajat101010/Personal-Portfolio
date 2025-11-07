import React, { useState } from 'react';
import { FiExternalLink } from "react-icons/fi";

import Semrush from './component_images/01.jpg';
import Simplilearn from './component_images/02.jpg';

import PersonalWebsite from './component_images/project_personal_website.jpg';
import FlyHighAirline from './component_images/project_fly_high_airline.jpg';
import AnishBarber from './component_images/project_anish_barber.jpg';

function LaptopPortfolioPageContent() {
    return <>
        <center>
            <div className="laptop_about_page_parent">
                <div className='laptop_about_page_content_parent_div'>
                    <div className="laptop_about_page_content_div1">
                        <br />
                        <font className="laptop_about_me_about_me_font_1">
                            <b>
                                My
                                <font className="laptop_about_me_about_me_font_2"> Projects</font>
                            </b>
                        </font>
                    </div>
                    <div className="laptop_about_page_content_div7">
                        <br />
                        <img src={PersonalWebsite} alt="c" className="projects_icons" />
                        <br /><br />
                        <font className='laptop_about_me_about_me_font_5'>
                            <b>Personal Portfolio Website</b>
                        </font>
                        <br />
                        <font className="laptop_about_me_about_me_font_4">React | CSS</font>
                        <br /><br />
                        <a href="https://rajatrajshah.com.np">
                            <button type="button" class="projects_button_view_page">
                                <font className="projects_view_page">
                                    View Page
                                </font>
                            </button>
                        </a>
                        <br /><br />
                    </div>
                    <div className="laptop_about_page_content_div8">
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
                    <div className="laptop_about_page_content_div9">
                        <br />
                        <img src={AnishBarber} alt="c" className="projects_icons" />
                       <br /><br />
                        <font className='laptop_about_me_about_me_font_5'>
                            <b>Anish Barber</b>
                        </font>
                        <br />
                        <font className="laptop_about_me_about_me_font_4">React | CSS</font>
                        <br /><br />
                        <a href="https://anish-peach.vercel.app/">
                            <button type="button" class="projects_button_view_page">
                                <font className="projects_view_page">
                                    View Page
                                </font>
                            </button>
                        </a>
                        <br /><br />
                    </div>
                    <div className="laptop_about_page_content_div5">
                        <a href="/my-projects">
                            <button type="button" class="laptop_about_me_button_view_more_about_me">
                                <font className="laptop_about_me_view_more_about_me">
                                    View More
                                </font>
                            </button>
                            <br /><br />
                        </a>
                    </div>
                </div>
                <div className='laptop_about_page_content_parent_div'>
                    <div className="laptop_about_page_content_div6">
                        <br />
                        <font className="laptop_about_me_about_me_font_1">
                            <b>
                                My
                                <font className="laptop_about_me_about_me_font_2"> Certificates</font>
                            </b>
                        </font>
                    </div>
                    <div className="laptop_about_page_content_div7">
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
                    <div className="laptop_about_page_content_div8">
                        <img src={Semrush} alt="c" className="my_skill_page_icons_all" />
                        <br />
                        <font className='laptop_about_me_about_me_font_5'>
                            <b>Digital Advertising</b>
                        </font>
                        <br />
                        <font className="laptop_about_me_about_me_font_4">by Semrush</font>
                        <br />
                        <font className="laptop_about_me_about_me_font_5">July 2024</font>
                        <br /><br />
                    </div>
                    <div className="laptop_about_page_content_div9">
                        <img src={Simplilearn} alt="c" className="my_skill_page_icons_all" />
                        <br />
                        <font className='laptop_about_me_about_me_font_5'>
                            <b>Digital Marketing Strategy</b>
                        </font>
                        <br />
                        <font className="laptop_about_me_about_me_font_4">by Simplilearn</font>
                        <br />
                        <font className="laptop_about_me_about_me_font_5">July 2024</font>
                        <br /><br />
                    </div>
                    <div className="laptop_about_page_content_div10">
                        <a href="/my-certificates">
                            <button type="button" class="laptop_about_me_button_view_more_about_me">
                                <font className="laptop_about_me_view_more_about_me">
                                    View More
                                </font>
                            </button>
                            <br /><br />
                        </a>
                    </div>
                </div>
            </div>

        </center>
    </>
}

export default LaptopPortfolioPageContent;
