import React, { useState } from "react";
import { FiExternalLink } from "react-icons/fi";

import Aorta from './component_images/aorta.jpg';
import SR from './component_images/sr.jpg';
import Upwork from './component_images/up.jpg';

function WorkExperienceContent() {
    return <>
        <center>
            <div className="work_experience_page_parent">
                <div className="work_experience_page_div1">
                    <font className="about_me_page_font_1">
                        <b>
                            Work
                            <font className="about_me_page_font_2"> Experience</font>
                        </b>
                    </font>
                    <br /><br />
                </div>
                <div className="work_experience_page_div2">
                    <img src={Aorta} alt="c" className="my_skill_page_icons_all" />
                    <br />
                    <font className='laptop_about_me_about_me_font_5'>
                        <b>Marketing Intern</b> at
                    </font>
                    <a className="laptop_about_me_about_me_external_link" href="https://www.aortarooms.com/">
                        <font className='laptop_about_me_about_me_font_6'> Aorta Rooms <FiExternalLink /></font>
                    </a>
                    <br />
                    <font className="laptop_about_me_about_me_font_4">Cuttak, Odisha, India</font>
                    <br />
                    <font className="laptop_about_me_about_me_font_5">May 2024 - Aug 2025</font>
                    <br /><br />
                </div>
                <div className="work_experience_page_div3">
                    <img src={SR} alt="c" className="my_skill_page_icons_all" />
                    <br />
                    <font className='laptop_about_me_about_me_font_5'>
                        <b>HR Intern</b> at
                    </font>
                    <a className="laptop_about_me_about_me_external_link" href="https://srcapitals.in/">
                        <font className='laptop_about_me_about_me_font_6'> SR Capitals <FiExternalLink /></font>
                    </a>
                    <br />
                    <font className="laptop_about_me_about_me_font_4">New Delhi, Delhi, India</font>
                    <br />
                    <font className="laptop_about_me_about_me_font_5">Aug 2024 - Sept 2024</font>
                    <br /><br />
                </div>
                <div className="work_experience_page_div4">
                    <img src={Upwork} alt="c" className="my_skill_page_icons_all" />
                    <br />
                    <font className='laptop_about_me_about_me_font_5'>
                        <b>Freelancer</b> at
                    </font>
                    <a className="laptop_about_me_about_me_external_link" href="https://www.upwork.com/">
                        <font className='laptop_about_me_about_me_font_6'> Upwork <FiExternalLink /></font>
                    </a>
                    <br />
                    <font className="laptop_about_me_about_me_font_4">San Francisco, California</font>
                    <br />
                    <font className="laptop_about_me_about_me_font_5">Mar 2024 - Aug 2024</font>
                    <br /><br />
                </div>
                <br />
            </div>
        </center>

    </>
}

export default WorkExperienceContent;