import React, { useState } from "react";

import { FaLinkedinIn } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

import headMe from './component_images/head_me.jpg';

import Rajat_CV from '../Components/resume/Rajat_CV.pdf';

function Intro() {
    return <>
        <center>
            <div className="intro">
                <div className="intro_info">
                    <br className='intro_info_br' />
                    <br className='intro_info_br' />
                    <table order={1} className="intro_info_table">
                        <tbody>
                            <tr>
                                <td>
                                    <div className="intro_info_table_font_1">
                                        <i><b>Hello, It's me</b></i>
                                    </div>
                                    <div className="intro_info_table_font_2">
                                        <b>Rajat Raj Shah</b>
                                    </div>
                                    <br />
                                    <div className="intro_info_table_font_3">
                                        <i>I am a</i>{" "}
                                        <span className="intro_info_table_font_4">
                                            <span className='data' style={{ "--i": 5 }} data-text="Software Engineer">
                                                Software Engineer </span>
                                            <span className='data' style={{ "--i": 4 }} data-text="Frontend Developer">
                                                Frontend Developer </span>
                                            <span className='data' style={{ "--i": 3 }} data-text="Graphic Designer">
                                                Graphic Designer </span>
                                            <span className='data' style={{ "--i": 2 }} data-text="Project Manager">
                                                Project Manager </span>
                                            <span className='data' style={{ "--i": 1 }} data-text="Tech Researcher">
                                                Tech Researcher </span>
                                        </span>
                                    </div>
                                    <br /><br />
                                    <div>
                                        <a href="https://www.linkedin.com/in/rajat-raj-shah-197aa8304/" className='intro_social_logo'>
                                            <FaLinkedinIn />
                                        </a>
                                        <a href="mailto:rajatrajshah@gmail.com" className='intro_social_logo'>
                                            <MdMailOutline />
                                        </a>
                                        <a href="https://github.com/Rajat101010" className='intro_social_logo'>
                                            <FaGithub />
                                        </a>
                                        <a href="https://x.com/rajat_raj_shah?t=uD-ULr5-cdZGqWGEVp33Cw&s=09" className='intro_social_logo'>
                                            <FaXTwitter />
                                        </a>
                                    </div>
                                    <br /><br />
                                    <a href={Rajat_CV} download='Rajat_CV'>
                                        <button type="button" className="download_resume_button_intro_info">
                                            <font className="download_resume_intro_info_table_font">
                                                <b>Download CV</b>
                                            </font>
                                        </button>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="intro_picture">
                    <div className="home-img">
                        <div className="img-box">
                            <div className="img-item">
                                <img src={headMe} alt="Rajat" className="intro_my_image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </center>


    </>
}

export default Intro;