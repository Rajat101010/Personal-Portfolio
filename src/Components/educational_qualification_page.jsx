import React, { useState } from "react";
import { FiExternalLink } from "react-icons/fi";

import MIS from './component_images/mis.jpg';
import KIIT from './component_images/kiit.jpg';

function EducationalQualificationContent() {
    return <>
        <center>
            <div className="educational_qualification_page_parent">
                <div className="educational_qualification_page_div1">
                    <font className="about_me_page_font_1">
                        <b>
                            Educational
                            <font className="about_me_page_font_2"> Qualification</font>
                        </b>
                    </font>
                    <br /><br />
                </div>
                <div className="educational_qualification_page_div2">
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
                <div className="educational_qualification_page_div3">
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
                <br />
            </div>
        </center>
    </>
}

export default EducationalQualificationContent;