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


function MobileMySkills() {
    return <>
        <center>
            <div className="mobile_my_skills_parent">
                <div className="mobile_my_skills_div1">
                    <font className='mobile_my_skills_font_1'>
                        <b>My</b>
                    </font>
                    <font className='mobile_my_skills_font_2'> <b>Skills</b>
                    </font>
                </div>
                <div className="mobile_my_skills_prpgramming_div">
                    <div className="mobile_my_skills_div2">
                        <font className='mobile_my_skills_font_3'>
                            <b>Programming and Development</b>
                        </font>
                    </div>
                    <div className="mobile_my_skills_div3">
                        <img src={JavaScript} alt="c" className="mobile_my_slill_icons" />
                    </div>
                    <div className="mobile_my_skills_div4">
                        <img src={Reactt} alt="c" className="mobile_my_slill_icons" />
                    </div>
                    <div className="mobile_my_skills_div5">
                        <img src={CSS} alt="c" className="mobile_my_slill_icons" />
                    </div>
                </div>
                <div className="mobile_my_skills_office_tools_div">
                    <div className="mobile_my_skills_div6">
                        <font className='mobile_my_skills_font_3'>
                            <b>Office Tools</b>
                        </font>
                    </div>
                    <div className="mobile_my_skills_div7">
                        <img src={GoogleWorkspace} alt="c" className="mobile_my_slill_icons_2" />
                    </div>
                    <div className="mobile_my_skills_div8">
                        <img src={MicrosoftOffice} alt="c" className="mobile_my_slill_icons_2" />
                    </div>
                    <div className="mobile_my_skills_div9">
                        <img src={ZohoWorkspace} alt="c" className="mobile_my_slill_icons_2" />
                    </div>
                </div>
                <div className="mobile_my_skills_designing_div">
                    <div className="mobile_my_skills_div10">
                        <font className='mobile_my_skills_font_3'>
                            <b>Graphic Designing Tools</b>
                        </font>
                    </div>
                    <div className="mobile_my_skills_div11">
                        <img src={Canva} alt="c" className="mobile_my_slill_icons" />
                    </div>
                    <div className="mobile_my_skills_div12">
                        <img src={Figma} alt="c" className="mobile_my_slill_icons" />
                    </div>
                    <div className="mobile_my_skills_div13">
                        <img src={Pixellab} alt="c" className="mobile_my_slill_icons" />
                    </div>
                </div>
                <div className="mobile_my_skills_div14">
                    <a href="/my-skills">
                        <button type="button" class="mobile_my_slill_button_view_more">
                            <font className="mobile_my_slill_view_more">
                                View More
                            </font>
                        </button>
                    </a>
                </div>
            </div>
        </center>

    </>
}

export default MobileMySkills;