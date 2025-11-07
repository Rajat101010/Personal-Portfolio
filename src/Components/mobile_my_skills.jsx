import React, { useState } from "react";

import C from './component_images/c.jpg';
import HTML from './component_images/html.jpg';
import Reactt from './component_images/reactt.jpg';
import CSS from './component_images/css.jpg';
import JavaScript from './component_images/javascript.jpg';

import Git from './component_images/git.jpg';
import Github from './component_images/github.jpg';
import VSCode from './component_images/vscode.jpg';
import Vercel from './component_images/vercel.jpg';
import Cloudflare from './component_images/cloudflare.jpg';

import MicrosoftOffice from './component_images/microsoft_office.jpg';
import GoogleWorkspace from './component_images/04.jpg';
import ZohoWorkspace from './component_images/zoho_workspace.jpg';

import Canva from './component_images/canva.jpg';
import Figma from './component_images/figma.jpg';
import Pixellab from './component_images/pixellab.jpg';


function MobileMySkills() {
    return <>
        <center>
            <div className="sample_mobile_my_skills_div_grand_parent">
                <font className='mobile_my_skills_font_1'>
                    <b>My</b>
                </font>
                <font className='mobile_my_skills_font_2'> <b>Skills</b>
                </font>
                <div className="sample_mobile_my_skills_parent">
                    <div className="sample_mobile_my_skills_parent_div1">
                        <br />
                        <font className='mobile_my_skills_font_3'>
                            <b>Programming Languages</b>
                        </font>
                        <div className="sample_mobile_my_skills_sub_parent">
                            <div className="sample_laptop_my_skills_sub_div1">
                                <img src={Reactt} alt="c" className="my_skill_page_icons_all_mobile" />
                            </div>
                            <div className="sample_laptop_my_skills_sub_div2">
                                <img src={C} alt="c" className="my_skill_page_icons_all_mobile" />
                            </div>
                            <div className="sample_laptop_my_skills_sub_div4">
                                <img src={CSS} alt="c" className="my_skill_page_icons_all_mobile" />
                            </div>
                            <div className="sample_laptop_my_skills_sub_div5">
                                <img src={JavaScript} alt="c" className="my_skill_page_icons_all_mobile" />
                            </div>
                        </div>
                    </div>
                    <div className="sample_mobile_my_skills_parent_div2">
                        <br />
                        <font className='mobile_my_skills_font_3'>
                            <b>Developer Tools</b>
                        </font>
                        <div className="sample_mobile_my_skills_sub_parent">
                            <div className="sample_laptop_my_skills_sub_div1">
                                <img src={Git} alt="c" className="my_skill_page_icons_all_mobile" />
                            </div>
                            <div className="sample_laptop_my_skills_sub_div2">
                                <img src={Github} alt="c" className="my_skill_page_icons_all_mobile" />
                            </div>
                            <div className="sample_laptop_my_skills_sub_div4">
                                <img src={Vercel} alt="c" className="my_skill_page_icons_all_mobile" />
                            </div>
                            <div className="sample_laptop_my_skills_sub_div5">
                                <img src={Cloudflare} alt="c" className="my_skill_page_icons_all_mobile" />
                            </div>
                        </div>
                    </div>
                    <div className="sample_mobile_my_skills_parent_div3">
                        <br />
                        <font className='mobile_my_skills_font_3'>
                            <b>Office Tools</b>
                        </font>
                        <div className="sample_mobile_my_skills_sub_parent">
                            <div className="sample_laptop_my_skills_sub_div1">
                                <img src={MicrosoftOffice} alt="c" className="my_skill_page_icons_all_mobile" />
                            </div>
                            <div className="sample_laptop_my_skills_sub_div2">
                                <img src={GoogleWorkspace} alt="c" className="my_skill_page_icons_all_mobile" />
                            </div>
                            <div className="sample_laptop_my_skills_sub_div3">
                                <img src={ZohoWorkspace} alt="c" className="my_skill_page_icons_all_mobile" />
                            </div>
                        </div>
                    </div>
                    <div className="sample_mobile_my_skills_parent_div4">
                        <br />
                        <font className='mobile_my_skills_font_3'>
                            <b>Graphic Designing Tools</b>
                        </font>
                        <div className="sample_mobile_my_skills_sub_parent">
                            <div className="sample_laptop_my_skills_sub_div1">
                                <img src={Figma} alt="c" className="my_skill_page_icons_all_mobile" />
                            </div>
                            <div className="sample_laptop_my_skills_sub_div2">
                                <img src={Canva} alt="c" className="my_skill_page_icons_all_mobile" />
                            </div>
                            <div className="sample_laptop_my_skills_sub_div3">
                                <img src={Pixellab} alt="c" className="my_skill_page_icons_all_mobile" />
                            </div>
                        </div>
                    </div>
                    <div className="sample_mobile_my_skills_parent_div5">
                        <a href="/my-skills">
                            <button type="button" class="mobile_my_slill_button_view_more">
                                <font className="mobile_my_slill_view_more">
                                    View More
                                </font>
                            </button>
                        </a>
                    </div>
                </div>
                <br />
            </div>
        </center>

    </>
}

export default MobileMySkills;