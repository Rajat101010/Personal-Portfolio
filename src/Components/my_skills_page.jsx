import React, { useState } from "react";

import C from './component_images/c.jpg';
import HTML from './component_images/html.jpg';
import Reactt from './component_images/reactt.jpg';
import CSS from './component_images/css.jpg';
import JavaScript from './component_images/javascript.jpg';
import SQL from './component_images/mysql.jpg';
import Latex from './component_images/latex.jpg';
import Python from './component_images/python.jpg';

import Git from './component_images/git.jpg';
import Github from './component_images/github.jpg';
import VSCode from './component_images/vscode.jpg';
import Vercel from './component_images/vercel.jpg';
import Cloudflare from './component_images/cloudflare.jpg';
import Overleaf from './component_images/overleaf.jpg';

import MicrosoftOffice from './component_images/microsoft_office.jpg';
import GoogleWorkspace from './component_images/04.jpg';
import ZohoWorkspace from './component_images/zoho_workspace.jpg';

import Canva from './component_images/canva.jpg';
import Figma from './component_images/figma.jpg';
import Pixellab from './component_images/pixellab.jpg';

import AutoCad from './component_images/autocad.jpg';
import LiveHome3D from './component_images/lh3d.jpg';

import Capcut from './component_images/capcut.jpg';
import Kinemaster from './component_images/kinemaster.jpg';

function MySkillsContent() {
    return <>
        <center>
            <font className="about_me_page_font_1">
                <b>
                    My
                    <font className="about_me_page_font_2"> Skills</font>
                </b>
            </font>
            <br /><br />
            <div className="sample_about_my_skills_parent">
                <div className="sample_about_my_skills_div1">
                    <div className="title_for_skills_spaces">
                        <font className="about_me_page_font_3">
                            <b>Programming Languages</b>
                        </font>
                    </div>
                    <div className="sub_div_for_individua_parent">
                        <div className="sub_div_for_individua">
                            <img src={Reactt} alt="c" className="my_skill_page_icons_all" />
                        </div>
                        <div className="sub_div_for_individua">
                            <img src={C} alt="c" className="my_skill_page_icons_all" />
                        </div>
                        <div className="sub_div_for_individua">
                            <img src={Python} alt="c" className="my_skill_page_icons_all" />
                        </div>
                        <div className="sub_div_for_individua">
                            <img src={JavaScript} alt="c" className="my_skill_page_icons_all" />
                        </div>
                        <div className="sub_div_for_individua">
                            <img src={CSS} alt="c" className="my_skill_page_icons_all" />
                        </div>
                        <div className="sub_div_for_individua">
                            <img src={HTML} alt="c" className="my_skill_page_icons_all" />
                        </div>
                        <div className="sub_div_for_individua">
                            <img src={SQL} alt="c" className="my_skill_page_icons_all" />
                        </div>
                        <div className="sub_div_for_individua">
                            <img src={Latex} alt="c" className="my_skill_page_icons_all" />
                        </div>
                    </div>
                </div>
                <div className="sample_about_my_skills_div2">
                    <div className="title_for_skills_spaces">
                        <font className="about_me_page_font_3">
                            <b>Developer Tools</b>
                        </font>
                    </div>
                    <div className="sub_div_for_individua_parent">
                        <div className="sub_div_for_individua">
                            <img src={Git} alt="c" className="my_skill_page_icons_all" />
                        </div>
                        <div className="sub_div_for_individua">
                            <img src={Github} alt="c" className="my_skill_page_icons_all" />
                        </div>
                        <div className="sub_div_for_individua">
                            <img src={Cloudflare} alt="c" className="my_skill_page_icons_all" />
                        </div>
                        <div className="sub_div_for_individua">
                            <img src={VSCode} alt="c" className="my_skill_page_icons_all" />
                        </div>
                        <div className="sub_div_for_individua">
                            <img src={Vercel} alt="c" className="my_skill_page_icons_all" />
                        </div>
                        <div className="sub_div_for_individua">
                            <img src={Overleaf} alt="c" className="my_skill_page_icons_all" />
                        </div>
                    </div>
                </div>
                <div className="sample_about_my_skills_div3">
                    <div className="title_for_skills_spaces">
                        <font className="about_me_page_font_3">
                            <b>Graphic Designing Tools</b>
                        </font>
                    </div>
                    <div className="sub_div_for_individua_parent">
                        <div className="sub_div_for_individua">
                            <img src={Figma} alt="c" className="my_skill_page_icons_all" />
                        </div>
                        <div className="sub_div_for_individua">
                            <img src={Canva} alt="c" className="my_skill_page_icons_all" />
                        </div>
                        <div className="sub_div_for_individua">
                            <img src={Pixellab} alt="c" className="my_skill_page_icons_all" />
                        </div>
                    </div>
                </div>
                <div className="sample_about_my_skills_div4">
                    <div className="title_for_skills_spaces">
                        <font className="about_me_page_font_3">
                            <b>Other Designing Tools</b>
                        </font>
                    </div>
                    <div className="sub_div_for_individua_parent">
                        <div className="sub_div_for_individua">
                            <img src={AutoCad} alt="c" className="my_skill_page_icons_all" />
                        </div>
                        <div className="sub_div_for_individua">
                            <img src={LiveHome3D} alt="c" className="my_skill_page_icons_all" />
                        </div>
                    </div>
                </div>
                <div className="sample_about_my_skills_div5">
                    <div className="title_for_skills_spaces">
                        <font className="about_me_page_font_3">
                            <b>Video Editing Tools</b>
                        </font>
                    </div>
                    <div className="sub_div_for_individua_parent">
                        <div className="sub_div_for_individua">
                            <img src={Capcut} alt="c" className="my_skill_page_icons_all" />
                        </div>
                        <div className="sub_div_for_individua">
                            <img src={Kinemaster} alt="c" className="my_skill_page_icons_all" />
                        </div>
                    </div>
                </div>
                <div className="sample_about_my_skills_div6">
                    <div className="title_for_skills_spaces">
                        <font className="about_me_page_font_3">
                            <b>Office Tools</b>
                        </font>
                    </div>
                    <div className="sub_div_for_individua_parent">
                        <div className="sub_div_for_individua">
                            <img src={MicrosoftOffice} alt="c" className="my_skill_page_icons_all" />
                        </div>
                        <div className="sub_div_for_individua">
                            <img src={GoogleWorkspace} alt="c" className="my_skill_page_icons_all" />
                        </div>
                        <div className="sub_div_for_individua">
                            <img src={ZohoWorkspace} alt="c" className="my_skill_page_icons_all" />
                        </div>
                    </div>
                </div>
            </div>
            <br />
        </center>
    </>
}

export default MySkillsContent;