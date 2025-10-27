import React, { useState } from "react";

import AnishBarber from './component_images/project_anish_barber.jpg';
import BarberShop from './component_images/project_barber_shop.jpg';
import FlyHighAirline from './component_images/project_fly_high_airline.jpg';
import PersonalWebsite from './component_images/project_personal_website.jpg';

function Projects() {
    return <>
        <center>
            <div className="project_parent">
                <div className="project_div1">
                    <font className='project_font_1'>
                        <b>My</b>
                    </font>
                    <font className='project_font_2'> <b>Projects</b>
                    </font>
                </div>
                <div className="project_div2">
                    <img src={PersonalWebsite} alt="c" className="projects_icons" />
                </div>
                <div className="project_div3">
                    <font className='project_font_3'>
                        Personal Portfolio
                        <br />
                        <a href="https://rajatrajshah.com.np">
                            <button type="button" class="projects_button_view_page">
                                <font className="projects_view_page">
                                    View Page
                                </font>
                            </button>
                        </a>
                    </font>
                </div>
                <div className="project_div4">
                    <img src={FlyHighAirline} alt="c" className="projects_icons" />
                </div>
                <div className="project_div5">
                    <font className='project_font_3'>
                        Fly High Airline
                        <br />
                        <a href="https://rajat101010.github.io/Fly-High-Airline/">
                            <button type="button" class="projects_button_view_page">
                                <font className="projects_view_page">
                                    View Page
                                </font>
                            </button>
                        </a>
                    </font>
                </div>
                <div className="project_div6">
                    <img src={AnishBarber} alt="c" className="projects_icons" />
                </div>
                <div className="project_div7">
                    <font className='project_font_3'>
                        Anish Barber
                        <br />
                        <a href="https://anish-peach.vercel.app/">
                            <button type="button" class="projects_button_view_page">
                                <font className="projects_view_page">
                                    View Page
                                </font>
                            </button>
                        </a>
                    </font>
                </div>
                <div className="project_div8">
                    <img src={BarberShop} alt="c" className="projects_icons" />
                </div>
                <div className="project_div9">
                    <font className='project_font_3'>
                        Barber Shop
                        <br />
                        <a href="https://rajat101010.github.io/Anish-Barber/">
                            <button type="button" class="projects_button_view_page">
                                <font className="projects_view_page">
                                    View Page
                                </font>
                            </button>
                        </a>
                    </font>
                </div>
                <div className="project_div10">
                    <a href="/my-projects">
                        <button type="button" class="projects_button_view_more">
                            <font className="projects_view_more">
                                View More
                            </font>
                        </button>
                    </a>
                </div>
            </div>

        </center>
    </>
}

export default Projects;