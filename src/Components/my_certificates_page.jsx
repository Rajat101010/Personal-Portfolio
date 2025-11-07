import React, { useState } from "react";

import Semrush from './component_images/01.jpg';
import Simplilearn from './component_images/02.jpg';
import GreatLearning from './component_images/03.jpg';
import GoogleDigitalGarage from './component_images/04.jpg';
import ITTrainingNepal from './component_images/05.jpg';

function MyCertificatesContent() {
    return <>
        <center>
            <div className="work_experience_page_parent">
                <div className="work_experience_page_div1">
                    <font className="about_me_page_font_1">
                        <b>
                            My
                            <font className="about_me_page_font_2"> Certificates</font>
                        </b>
                    </font>
                    <br /><br />
                </div>
                <div className="work_experience_page_div2">
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
                <div className="work_experience_page_div3">
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
                <div className="work_experience_page_div4">
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
                <div className="work_experience_page_div2">
                    <img src={GreatLearning} alt="c" className="my_skill_page_icons_all" />
                    <br />
                    <font className='laptop_about_me_about_me_font_5'>
                        <b>Excel Regression Analysis</b>
                    </font>
                    <br />
                    <font className="laptop_about_me_about_me_font_4">by Great Learning</font>
                    <br />
                    <font className="laptop_about_me_about_me_font_5">July 2024</font>
                    <br /><br />
                </div>
                <div className="work_experience_page_div3">
                    <img src={GreatLearning} alt="c" className="my_skill_page_icons_all" />
                    <br />
                    <font className='laptop_about_me_about_me_font_5'>
                        <b>Introduction to Digital Marketing</b>
                    </font>
                    <br />
                    <font className="laptop_about_me_about_me_font_4">by Great Learning</font>
                    <br />
                    <font className="laptop_about_me_about_me_font_5">July 2024</font>
                    <br /><br />
                </div>
                <div className="work_experience_page_div4">
                    <img src={GoogleDigitalGarage} alt="c" className="my_skill_page_icons_all" />
                    <br />
                    <font className='laptop_about_me_about_me_font_5'>
                        <b>	Fundamental of Digital Marketing</b>
                    </font>
                    <br />
                    <font className="laptop_about_me_about_me_font_4">by Google Digital Garage</font>
                    <br />
                    <font className="laptop_about_me_about_me_font_5">July 2024</font>
                    <br /><br />
                </div>
                <div className="work_experience_page_div4">
                    <img src={ITTrainingNepal} alt="c" className="my_skill_page_icons_all" />
                    <br />
                    <font className='laptop_about_me_about_me_font_5'>
                        <b>Python and Django</b>
                    </font>
                    <br />
                    <font className="laptop_about_me_about_me_font_4">by IT Training Nepal Pvt. Ltd.</font>
                    <br />
                    <font className="laptop_about_me_about_me_font_5">June 2024</font>
                    <br /><br />
                </div>
                <br />
            </div>
            <br className='remove_in_mobile_br' />
            <br className='remove_in_mobile_br' />
        </center>
    </>
}

export default MyCertificatesContent;