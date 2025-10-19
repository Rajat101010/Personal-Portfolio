import React, { useState } from 'react';
import { FiExternalLink } from "react-icons/fi";

import Me from './component_images/me.jpg'

import Reactt from './component_images/reactt.jpg';
import JavaScript from './component_images/javascript.jpg';
import Canva from './component_images/canva.jpg';
import Figma from './component_images/figma.jpg';

import Aorta from './component_images/aorta.jpg';

import KIIT from './component_images/kiit.jpg';

import { IoIosArrowDown } from "react-icons/io";

const MobileAboutPageContent = () => {
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
                        <div className="mobile_about_page_div1" onClick={() => toggleSection("one")}>
                            <br />
                            <table order={1} className="mobile_about_me_about_me_table">
                                <tbody>
                                    <tr>
                                        <td width="36%" align="right">
                                            <img src={Me} alt="Rajat" className="mobile_about_me_me" />
                                        </td>
                                        <td width="2%" />
                                        <td width="62%">
                                            <font className="mobile_about_me_about_me_font_1">
                                                <b>
                                                    About
                                                    <font className="mobile_about_me_about_me_font_2"> Me</font>
                                                </b>
                                            </font>
                                            <br />
                                            <font className="mobile_about_me_about_me_font_3">
                                                <b>Rajat Raj Shah</b>
                                            </font>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={3}>
                                            <center>
                                                <font className="mobile_about_me_about_me_font_1">
                                                    <IoIosArrowDown />
                                                </font>
                                            </center>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {openSections.one && (
                            <div className="mobile_about_page_mobile-row">
                                <div className="mobile_about_page_div2">
                                    <font className="mobile_about_me_about_me_font_4">
                                        In my role as a Computer Science Engineering (CSE) student, I utilize academic coursework in real world
                                        project applications. I am dedicated to developing a robust portfolio and acquiring practical industry
                                        experience. I also actively delve into Sales and Marketing aspects for broader professional growth.
                                    </font>
                                </div>
                                <div className="mobile_about_page_div3">
                                    <br />
                                    <a href="/about-me">
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
                        <div className="mobile_about_page_div4" onClick={() => toggleSection("two")}>
                            <br />
                            <font className="mobile_about_me_about_me_font_1">
                                <b>
                                    Work
                                    <font className="mobile_about_me_about_me_font_2"> Experience</font>
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
                                    <img src={Aorta} alt="c" className="mobile_my_slill_icons" />
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
                                <div className="mobile_about_page_div6">
                                    <br />
                                    <a href="/work-experience">
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
                                    Educatoional
                                    <font className="mobile_about_me_about_me_font_2"> Qualification</font>
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
                                    <img src={KIIT} alt="c" className="mobile_my_slill_icons" />
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
                                <div className="mobile_about_page_div9">
                                    <br />
                                    <a href="/educational-qualification">
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
                        <div className="mobile_about_page_div10" onClick={() => toggleSection("four")}>
                            <br />
                            <font className="mobile_about_me_about_me_font_1">
                                <b>
                                    My
                                    <font className="mobile_about_me_about_me_font_2"> Skills</font>
                                </b>
                            </font>
                            <br />
                            <font className="mobile_about_me_about_me_font_1">
                                <IoIosArrowDown />
                            </font>
                            <br />
                        </div>
                        {openSections.four && (
                            <div className="mobile_about_page_mobile-row">
                                <div className='mobile_about_page_sample'>
                                    <div className="mobile_about_page_div11">
                                        <img src={Reactt} alt="c" className="mobile_my_slill_icons" />
                                    </div>
                                    <div className="mobile_about_page_div12">
                                        <img src={JavaScript} alt="c" className="mobile_my_slill_icons" />
                                    </div>
                                </div>
                                <div className='mobile_about_page_sample'>
                                    <div className="mobile_about_page_div11">
                                        <img src={Canva} alt="c" className="mobile_my_slill_icons" />
                                    </div>
                                    <div className="mobile_about_page_div12">
                                        <img src={Figma} alt="c" className="mobile_my_slill_icons" />
                                    </div>
                                </div>
                                <div className="mobile_about_page_div13">
                                    <br />
                                    <a href="/my-skills">
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

export default MobileAboutPageContent;