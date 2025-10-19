import React, { useState } from 'react';
import { FiExternalLink } from "react-icons/fi";

import Me from './component_images/me.jpg'

import Reactt from './component_images/reactt.jpg';
import JavaScript from './component_images/javascript.jpg';
import MicrosoftOffice from './component_images/microsoft_office.jpg';
import GoogleWorkspace from './component_images/google_workspace.jpg';
import Canva from './component_images/canva.jpg';
import Figma from './component_images/figma.jpg';

import Aorta from './component_images/aorta.jpg';
import SR from './component_images/sr.jpg';
import Upwork from './component_images/up.jpg';

import MIS from './component_images/mis.jpg';
import KIIT from './component_images/kiit.jpg';

function LaptopAboutPageContent() {
    return <>
        <center>
            <div className="laptop_about_page_parent">
                <div className='laptop_about_page_content_parent_div'>
                    <div className="laptop_about_page_content_div1">
                        <br />
                        <table order={1} className="laptop_about_me_about_me_table">
                            <tbody>
                                <tr>
                                    <td width="44%" align="right">
                                        <img src={Me} alt="Rajat" className="laptop_about_me_me" />
                                    </td>
                                    <td width="2%" />
                                    <td width="59%">
                                        <font className="laptop_about_me_about_me_font_1">
                                            <b>
                                                About
                                                <font className="laptop_about_me_about_me_font_2"> Me</font>
                                            </b>
                                        </font>
                                        <br />
                                        <font className="laptop_about_me_about_me_font_3">
                                            <b>Rajat Raj Shah</b>
                                        </font>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <br />
                    </div>
                    <div className="laptop_about_page_content_div2">
                        <font className="laptop_about_me_about_me_font_4">
                            In my role as a Computer Science Engineering (CSE) student, I utilize academic coursework in real world
                            project applications. I am dedicated to developing a robust portfolio and acquiring practical industry
                            experience. I also actively delve into Sales and Marketing aspects for broader professional growth.
                        </font>
                        <br /><br />
                    </div>
                    <div className="laptop_about_page_content_div3">
                        <font className="laptop_about_me_about_me_font_3">
                            <b>Work Experience</b>
                        </font>
                        <br /><br />
                        <table order={1} className="laptop_about_me_about_me_work_experience_table">
                            <tbody>
                                <tr>
                                    <td>
                                        <font className='laptop_about_me_about_me_font_5'>
                                            <b>Marketing Intern</b> at
                                        </font>
                                        <a className="laptop_about_me_about_me_external_link" href="https://www.aortarooms.com/">
                                            <font className='laptop_about_me_about_me_font_6'> Aorta Rooms <FiExternalLink /></font>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <font className='laptop_about_me_about_me_font_5'>
                                            <b>HR Intern</b> at
                                        </font>
                                        <a className="laptop_about_me_about_me_external_link" href="https://srcapitals.in/">
                                            <font className='laptop_about_me_about_me_font_6'> Sr Capitals <FiExternalLink /></font>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <font className='laptop_about_me_about_me_font_5'>
                                            <b>Freelancer</b> at
                                        </font>
                                        <a className="laptop_about_me_about_me_external_link" href="https://www.upwork.com/">
                                            <font className='laptop_about_me_about_me_font_6'> Upwork <FiExternalLink /></font>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <br /><br />
                    </div>
                    <div className="laptop_about_page_content_div4">
                        <font className="laptop_about_me_about_me_font_3">
                            <b>Educational Qualification</b>
                        </font>
                        <br /><br />
                        <table order={1} className="laptop_about_me_about_me_educational_qualification_table">
                            <tbody>
                                <tr>
                                    <td>
                                        <font className='laptop_about_me_about_me_font_5'>
                                            <b>B-Tech (CSE)</b> at
                                        </font>
                                        <a className="laptop_about_me_about_me_external_link" href="https://kiit.ac.in/">
                                            <font className='laptop_about_me_about_me_font_6'> KIIT <FiExternalLink /></font>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <font className='laptop_about_me_about_me_font_5'>
                                            <b>High School</b> at
                                        </font>
                                        <a className="laptop_about_me_about_me_external_link" href="https://misktm.edu.np/">
                                            <font className='laptop_about_me_about_me_font_6'> MIS <FiExternalLink /></font>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <br /><br />
                    </div>
                    <div className="laptop_about_page_content_div5">
                        <a href="/about-me">
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
                                Work
                                <font className="laptop_about_me_about_me_font_2"> Experience</font>
                            </b>
                        </font>
                    </div>
                    <div className="laptop_about_page_content_div7">
                        <img src={Aorta} alt="c" className="laptop_my_slill_icons" />
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
                    <div className="laptop_about_page_content_div8">
                        <img src={SR} alt="c" className="laptop_my_slill_icons" />
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
                    <div className="laptop_about_page_content_div9">
                        <img src={Upwork} alt="c" className="laptop_my_slill_icons" />
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
                    <div className="laptop_about_page_content_div10">
                        <a href="/work-experience">
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
                    <div className="laptop_about_page_content_div11">
                        <br />
                        <font className="laptop_about_me_about_me_font_1">
                            <b>
                                Educatoional
                                <font className="laptop_about_me_about_me_font_2"> Qualification</font>
                            </b>
                        </font>
                    </div>
                    <div className="laptop_about_page_content_div12">
                        <img src={KIIT} alt="c" className="laptop_my_slill_icons" />
                        <br />
                        <font className='laptop_about_me_about_me_font_5'>
                            <b>B-Tech (CSE)</b> at
                        </font>
                        <a className="laptop_about_me_about_me_external_link" href="https://kiit.ac.in/">
                            <font className='laptop_about_me_about_me_font_6'> KIIT <FiExternalLink /></font>
                        </a>
                        <br />
                        <font className="laptop_about_me_about_me_font_4">Bhubaneswar, Odisha, India</font>
                        <br />
                        <font className="laptop_about_me_about_me_font_5">Aug 2024 - Present</font>
                        <br /><br />
                    </div>
                    <div className="laptop_about_page_content_div13">
                        <img src={MIS} alt="c" className="laptop_my_slill_icons" />
                        <br />
                        <font className='laptop_about_me_about_me_font_5'>
                            <b>Hign School</b> at
                        </font>
                        <a className="laptop_about_me_about_me_external_link" href="https://misktm.edu.np/">
                            <font className='laptop_about_me_about_me_font_6'> MIS <FiExternalLink /></font>
                        </a>
                        <br />
                        <font className="laptop_about_me_about_me_font_4">Chobhar, Kathmandu, Nepal</font>
                        <br />
                        <font className="laptop_about_me_about_me_font_5">jun 2022 - Apr 2024</font>
                        <br /><br />
                    </div>
                    <div className="laptop_about_page_content_div15">
                        <a href="/educational-qualification">
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
                    <div className="laptop_about_page_content_div16">
                        <br />
                        <font className="laptop_about_me_about_me_font_1">
                            <b>
                                My
                                <font className="laptop_about_me_about_me_font_2"> Skills</font>
                            </b>
                        </font>
                    </div>
                    <div className="laptop_about_page_content_div17">
                        <img src={GoogleWorkspace} alt="c" className="laptop_my_slill_icons" />
                        <br />
                        <font className='laptop_my_skills_font_4'>
                            Google Workspace
                        </font>
                        <br /><br />
                    </div>
                    <div className="laptop_about_page_content_div18">
                        <img src={Canva} alt="c" className="laptop_my_slill_icons" />
                        <br />
                        <font className='laptop_my_skills_font_4'>
                            Canva
                        </font>
                        <br /><br />
                    </div>
                    <div className="laptop_about_page_content_div19">
                        <img src={Reactt} alt="c" className="laptop_my_slill_icons" />
                        <br />
                        <font className='laptop_my_skills_font_4'>
                            React
                        </font>
                        <br /><br />
                    </div>
                    <div className="laptop_about_page_content_div20">
                        <img src={JavaScript} alt="c" className="laptop_my_slill_icons" />
                        <br />
                        <font className='laptop_my_skills_font_4'>
                            JavaScript
                        </font>
                        <br /><br />
                    </div>
                    <div className="laptop_about_page_content_div21">
                        <img src={Figma} alt="c" className="laptop_my_slill_icons" />
                        <br />
                        <font className='laptop_my_skills_font_4'>
                            Figma
                        </font>
                        <br /><br />
                    </div>
                    <div className="laptop_about_page_content_div22">
                        <img src={MicrosoftOffice} alt="c" className="laptop_my_slill_icons" />
                        <br />
                        <font className='laptop_my_skills_font_4'>
                            Microsoft Office
                        </font>
                        <br /><br />
                    </div>
                    <div className="laptop_about_page_content_div23">
                        <a href="/my-skills">
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

export default LaptopAboutPageContent;
