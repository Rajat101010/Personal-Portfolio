import React, { useState } from "react";

import C from './component_images/c.jpg';
import HTML from './component_images/html.jpg';
import Reactt from './component_images/reactt.jpg';
import CSS from './component_images/css.jpg';
import JavaScript from './component_images/javascript.jpg';
import SQL from './component_images/mysql.jpg';
import Latex from './component_images/latex.jpg';
import Python from './component_images/python.jpg';

import MicrosoftOffice from './component_images/microsoft_office.jpg';
import GoogleWorkspace from './component_images/google_workspace.jpg';
import ZohoWorkspace from './component_images/zoho_workspace.jpg';

import Canva from './component_images/canva.jpg';
import Figma from './component_images/figma.jpg';
import Pixellab from './component_images/pixellab.jpg';
import AutoCad from './component_images/autocad.jpg';
import LiveHome3D from './component_images/lh3d.jpg';

function MySkillsContent() {
    return <>
        <center>
            <div className="my_skill_page_parent">
                <div className="my_skill_page_div1">
                    <font className="about_me_page_font_1">
                        <b>
                            My
                            <font className="about_me_page_font_2"> Skills</font>
                        </b>
                    </font>
                    <br /><br />
                </div>
                <div className="my_skill_page_div_section">
                    <div className="my_skill_page_div2">
                        <font className="about_me_page_font_3">
                            <b>Programming and Development</b>
                        </font>
                    </div>
                    <div className="my_skill_page_div3">
                        <img src={Python} alt="c" className="my_skill_page_icons" />
                        <br />
                        <font className='my_skill_page_font_4'>
                            Python
                        </font>
                        <br /><br />
                    </div>
                    <div className="my_skill_page_div4">
                        <img src={C} alt="c" className="my_skill_page_icons" />
                        <br />
                        <font className='my_skill_page_font_4'>
                            C Programming
                        </font>
                        <br /><br />
                    </div>
                    <div className="my_skill_page_div5">
                        <img src={Reactt} alt="c" className="my_skill_page_icons" />
                        <br />
                        <font className='my_skill_page_font_4'>
                            React
                        </font>
                        <br /><br />
                    </div>
                    <div className="my_skill_page_div6">
                        <img src={JavaScript} alt="c" className="my_skill_page_icons" />
                        <br />
                        <font className='my_skill_page_font_4'>
                            JavaScript
                        </font>
                        <br /><br />
                    </div>
                    <div className="my_skill_page_div7">
                        <img src={CSS} alt="c" className="my_skill_page_icons" />
                        <br />
                        <font className='my_skill_page_font_4'>
                            CSS
                        </font>
                        <br /><br />
                    </div>
                    <div className="my_skill_page_div8">
                        <img src={HTML} alt="c" className="my_skill_page_icons" />
                        <br />
                        <font className='my_skill_page_font_4'>
                            HTML
                        </font>
                        <br /><br />
                    </div>
                    <div className="my_skill_page_div9">
                        <img src={SQL} alt="c" className="my_skill_page_icons" />
                        <br />
                        <font className='my_skill_page_font_4'>
                            MySQL
                        </font>
                        <br /><br />
                    </div>
                    <div className="my_skill_page_div10">
                        <img src={Latex} alt="c" className="my_skill_page_icons" />
                        <br />
                        <font className='my_skill_page_font_4'>
                            Latex
                        </font>
                        <br /><br />
                    </div>
                </div>
                <br />
                <div className="my_skill_page_div_section">
                    <div className="my_skill_page_div11">
                        <font className="about_me_page_font_3">
                            <b>Designing Tools</b>
                        </font>
                    </div>
                    <div className="my_skill_page_div12">
                        <img src={Canva} alt="c" className="my_skill_page_icons" />
                        <br />
                        <font className='my_skill_page_font_4'>
                            Canva
                        </font>
                        <br /><br />
                    </div>
                    <div className="my_skill_page_div13">
                        <img src={Figma} alt="c" className="my_skill_page_icons" />
                        <br />
                        <font className='my_skill_page_font_4'>
                            Figma
                        </font>
                        <br /><br />
                    </div>
                    <div className="my_skill_page_div14">
                        <img src={Pixellab} alt="c" className="my_skill_page_icons" />
                        <br />
                        <font className='my_skill_page_font_4'>
                            Pixellab
                        </font>
                        <br /><br />
                    </div>
                    <div className="my_skill_page_div15">
                        <img src={AutoCad} alt="c" className="my_skill_page_icons" />
                        <br />
                        <font className='my_skill_page_font_4'>
                            Auto Cad
                        </font>
                        <br /><br />
                    </div>
                    <div className="my_skill_page_div16">
                        <img src={LiveHome3D} alt="c" className="my_skill_page_icons" />
                        <br />
                        <font className='my_skill_page_font_4'>
                            Live Home 3D
                        </font>
                        <br /><br />
                    </div>
                </div>
            </div>
            <br />
            <div className="my_skill_page_half_parent">
                <div className="my_skill_page_half_div1">
                    <font className="about_me_page_font_3">
                        <b>Office Tools</b>
                    </font>
                </div>
                <div className="my_skill_page_half_div2">
                    <img src={GoogleWorkspace} alt="c" className="my_skill_page_icons_2" />
                    <br />
                    <font className='my_skill_page_font_4'>
                        Google Workspace
                    </font>
                    <br /><br />
                </div>
                <div className="my_skill_page_half_div3">
                    <img src={MicrosoftOffice} alt="c" className="my_skill_page_icons_2" />
                    <br />
                    <font className='my_skill_page_font_4'>
                        Microsoft Office
                    </font>
                    <br /><br />
                </div>
                <div className="my_skill_page_half_div4">
                    <img src={ZohoWorkspace} alt="c" className="my_skill_page_icons_2" />
                    <br />
                    <font className='my_skill_page_font_4'>
                        Zoho Workspace
                    </font>
                    <br /><br />
                </div>
            </div>

        </center>
    </>
}

export default MySkillsContent;