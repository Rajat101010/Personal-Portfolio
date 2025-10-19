import React, { useState } from "react";
import { FiExternalLink } from "react-icons/fi";

import Me from './component_images/me.jpg';

function AboutMeContent() {
    return <>
        <center>
            <div className="about_me_page_parent">
                <div className="about_me_page_div1">
                    <font className="about_me_page_font_1">
                        <b>
                            About
                            <font className="about_me_page_font_2"> Me</font>
                        </b>
                    </font>
                </div>
                <div className="about_me_page_div2">
                    <br />
                    <img src={Me} alt="Rajat" className="about_me_page_about_me_me" />
                    <br /><br />
                </div>
                <div className="about_me_page_div3">
                    <font className="about_me_page_font_4">
                        In my role as a Computer Science Engineering (CSE) student, I utilize academic coursework in real world
                        project applications. I am dedicated to developing a robust portfolio and acquiring practical industry
                        experience. I also actively delve into Sales and Marketing aspects for broader professional growth.
                    </font>
                    <br /><br />
                </div>
                <div className="about_me_page_div4">
                    <font className="about_me_page_font_3">
                        <b>Work Experience</b>
                    </font>
                    <br />
                    <br className='remove_in_mobile_br' />
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
                    <br />
                </div>
                <div className="about_me_page_div5">
                    <font className="about_me_page_font_3">
                        <b>Educational Qualification</b>
                    </font>
                    <br />
                    <br className='remove_in_mobile_br' />
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
                    <br />
                </div>
            </div>
        </center>

    </>
}

export default AboutMeContent;