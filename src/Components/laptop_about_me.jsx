
import React, { useState } from "react";
import { FiExternalLink } from "react-icons/fi";

import Me from './component_images/me.jpg';

function LaptopAboutMe() {
    return <>
        <center>
            <div className="laptop_about_me_parent">
                <div className="laptop_about_me_div1">
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
                </div>
                <div className="laptop_about_me_div2">
                    <font className="laptop_about_me_about_me_font_4">
                        In my role as a Computer Science Engineering (CSE) student, I utilize academic coursework in real world
                        project applications. I am dedicated to developing a robust portfolio and acquiring practical industry
                        experience. I also actively delve into Sales and Marketing aspects for broader professional growth.
                    </font>
                </div>
                <div className="laptop_about_me_div3">
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
                </div>
                <div className="laptop_about_me_div4">
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
                </div>
                <div className="laptop_about_me_div5">
                    <a href="/about-me">
                        <button type="button" class="laptop_about_me_button_view_more_about_me">
                            <font className="laptop_about_me_view_more_about_me">
                                View More
                            </font>
                        </button>
                    </a>
                </div>
            </div>
        </center>
    </>
}

export default LaptopAboutMe;
