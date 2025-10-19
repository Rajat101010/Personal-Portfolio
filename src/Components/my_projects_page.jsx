import React, { useState } from "react";

import PersonalWebsite from './component_images/project_personal_website.jpg';
import FlyHighAirline from './component_images/project_fly_high_airline.jpg';
import AnishBarber from './component_images/project_anish_barber.jpg';
import BarberShop from './component_images/project_barber_shop.jpg';

function MyProjectsContent() {
    return <>
        <center>
            <div className="work_experience_page_parent">
                <div className="work_experience_page_div1">
                    <font className="about_me_page_font_1">
                        <b>
                            My
                            <font className="about_me_page_font_2"> Projects</font>
                        </b>
                    </font>
                    <br /><br />
                </div>
                <div className="work_experience_page_div2">
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
                <div className="work_experience_page_div3">
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
                <div className="work_experience_page_div4">
                    <br />
                    <img src={AnishBarber} alt="c" className="projects_icons" />
                    <br /><br />
                    <font className='laptop_about_me_about_me_font_5'>
                        <b>Anish Barber</b>
                    </font>
                    <br />
                    <font className="laptop_about_me_about_me_font_4">React | CSS</font>
                    <br /><br />
                    <a href="">
                        <button type="button" class="projects_button_view_page">
                            <font className="projects_view_page">
                                View Page
                            </font>
                        </button>
                    </a>
                    <br /><br />
                </div>
                <div className="work_experience_page_div4">
                    <br />
                    <img src={BarberShop} alt="c" className="projects_icons" />
                    <br /><br />
                    <font className='laptop_about_me_about_me_font_5'>
                        <b>Barber Shop</b>
                    </font>
                    <br />
                    <font className="laptop_about_me_about_me_font_4">HTML | CSS | JavaScript</font>
                    <br /><br />
                    <a href="https://rajat101010.github.io/Anish-Barber/">
                        <button type="button" class="projects_button_view_page">
                            <font className="projects_view_page">
                                View Page
                            </font>
                        </button>
                    </a>
                    <br /><br />
                </div>
                <br />
            </div>
            <br className='remove_in_mobile_br' />
            <br className='remove_in_mobile_br' />
        </center>
    </>
}

export default MyProjectsContent;