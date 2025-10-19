import React, { useState } from "react";

import C from './component_images/c.jpg';
import HTML from './component_images/html.jpg';
import Reactt from './component_images/reactt.jpg';
import CSS from './component_images/css.jpg';
import JavaScript from './component_images/javascript.jpg';

import MicrosoftOffice from './component_images/microsoft_office.jpg';
import GoogleWorkspace from './component_images/google_workspace.jpg';
import ZohoWorkspace from './component_images/zoho_workspace.jpg';

import Canva from './component_images/canva.jpg';
import Figma from './component_images/figma.jpg';
import Pixellab from './component_images/pixellab.jpg';


function LaptopMySkills() {
    return <>
        <center>
            <div className="laptop_my_skills_div_parent">
                <div className="laptop_my_skills_div1">
                    <font className='laptop_my_skills_font_1'>
                        <b>My</b>
                    </font>
                    <font className='laptop_my_skills_font_2'> <b>Skills</b>
                    </font>
                </div>
                <div className="laptop_my_skills_prpgramming_div">
                    <div className="laptop_my_skills_div2">
                        <font className='laptop_my_skills_font_3'>
                            <b>Programming and Development</b>
                        </font>
                    </div>
                    <div className="laptop_my_skills_div3">
                        <img src={C} alt="c" className="laptop_my_slill_icons" />
                        <br />
                        <font className='laptop_my_skills_font_4'>
                            C Programming
                        </font>
                        <br /><br />
                    </div>
                    <div className="laptop_my_skills_div4">
                        <img src={HTML} alt="c" className="laptop_my_slill_icons" />
                        <br />
                        <font className='laptop_my_skills_font_4'>
                            HTML
                        </font>
                        <br /><br />
                    </div>
                    <div className="laptop_my_skills_div5">
                        <img src={Reactt} alt="c" className="laptop_my_slill_icons" />
                        <br />
                        <font className='laptop_my_skills_font_4'>
                            React
                        </font>
                        <br /><br />
                    </div>
                    <div className="laptop_my_skills_div6">
                        <img src={CSS} alt="c" className="laptop_my_slill_icons" />
                        <br />
                        <font className='laptop_my_skills_font_4'>
                            CSS
                        </font>
                        <br /><br />
                    </div>
                    <div className="laptop_my_skills_div7">
                        <img src={JavaScript} alt="c" className="laptop_my_slill_icons" />
                        <br />
                        <font className='laptop_my_skills_font_4'>
                            JavaScript
                        </font>
                        <br /><br />
                    </div>
                </div>
                <div className="laptop_my_skills_office_tools_div">
                    <div className="laptop_my_skills_div8">
                        <font className='laptop_my_skills_font_3'>
                            <b>Office Tools</b>
                        </font>
                    </div>
                    <div className="laptop_my_skills_div9">
                        <img src={GoogleWorkspace} alt="c" className="laptop_my_slill_icons" />
                        <br />
                        <font className='laptop_my_skills_font_4'>
                            Google Workspace
                        </font>
                        <br /><br />
                    </div>
                    <div className="laptop_my_skills_div10">
                        <img src={MicrosoftOffice} alt="c" className="laptop_my_slill_icons" />
                        <br />
                        <font className='laptop_my_skills_font_4'>
                            Microsoft Office
                        </font>
                        <br /><br />
                    </div>
                    <div className="laptop_my_skills_div11">
                        <img src={ZohoWorkspace} alt="c" className="laptop_my_slill_icons" />
                        <br />
                        <font className='laptop_my_skills_font_4'>
                            Zoho Workspace
                        </font>
                        <br /><br />
                    </div>
                </div>
                <div className="laptop_my_skills_designing_div">
                    <div className="laptop_my_skills_div12">
                        <font className='laptop_my_skills_font_3'>
                            <b>Graphic Desiging Tools</b>
                        </font>
                    </div>
                    <div className="laptop_my_skills_div13">
                        <img src={Canva} alt="c" className="laptop_my_slill_icons" />
                        <br />
                        <font className='laptop_my_skills_font_4'>
                            Canva
                        </font>
                        <br /><br />
                    </div>
                    <div className="laptop_my_skills_div14">
                        <img src={Figma} alt="c" className="laptop_my_slill_icons" />
                        <br />
                        <font className='laptop_my_skills_font_4'>
                            Figma
                        </font>
                        <br /><br />
                    </div>
                    <div className="laptop_my_skills_div15">
                        <img src={Pixellab} alt="c" className="laptop_my_slill_icons" />
                        <br />
                        <font className='laptop_my_skills_font_4'>
                            Pixellab
                        </font>
                        <br /><br />
                    </div>
                </div>
                <div className="laptop_my_skills_div16">
                    <a href="/my-skills">
                        <button type="button" class="laptop_my_skills_button_view_more">
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

export default LaptopMySkills;