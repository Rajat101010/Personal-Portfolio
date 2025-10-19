import { FaLinkedinIn } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";

import Rajat_CV from '../Components/resume/Rajat_CV.pdf';

function Footer() {
    return <>
        <div className="footer">

            <br />
            <center>
                <table order={1} className="footer_headline">
                    <tbody>
                        <tr>
                            <td align="center">
                                <b>Software Engineer</b>
                            </td>
                            <td align="center">
                                <b>Frontend Developer</b>
                            </td>
                            <td align="center">
                                <b>Graphic Designer</b>
                            </td>
                            <td align="center">
                                <b>Project Manager</b>
                            </td>
                            <td align="center">
                                <b>Tech Researcher</b>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </center>
            <hr className="footer_hr" />
            <br />
            <div className="footer_main">
                <div className="social">
                    <br className="social_br" />
                    <center>
                        <font className="social_logo">
                            <a href="https://www.linkedin.com/in/rajat-raj-shah-197aa8304/">
                                <FaLinkedinIn />
                            </a>
                        </font>
                        <font className="social_logo">
                            <a href="mailto: rajatrajshah@gmail.com">
                                <MdMailOutline />
                            </a>
                        </font>
                        <font className="social_logo">
                            <a href="https://github.com/Rajat101010">
                                <FaGithub />
                            </a>
                        </font>
                        <font className="social_logo">
                            <a href="https://x.com/rajat_raj_shah?t=uD-ULr5-cdZGqWGEVp33Cw&s=09">
                                <FaXTwitter />
                            </a>
                        </font>
                    </center>
                </div>
                <div className="external_link_col_1">
                    <font className="page_link_font">
                        <table order={1} className="external_link_table">
                            <tbody>
                                <tr>
                                    <td>
                                        <a href="/about-me">
                                            <FiExternalLink /> About Me
                                            <br />
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="/work-experience">
                                            <FiExternalLink /> Work Experience
                                            <br />
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="/educational-qualification">
                                            <FiExternalLink /> Educational Qualification
                                            <br />
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </font>
                </div>
                <div className="external_link_col_2">
                    <font className="page_link_font">
                        <table order={1} className="external_link_table">
                            <tbody>
                                <tr>
                                    <td>
                                        <a href="/my-skills">
                                            <FiExternalLink /> My Skills
                                            <br />
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="/my-projects">
                                            <FiExternalLink /> My Projects
                                            <br />
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="/my-certificates">
                                            <FiExternalLink /> My Certificates
                                            <br />
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </font>
                </div>
                <div className="download_cv">

                    <center>
                        <a href={Rajat_CV} download='Rajat_CV'>
                            <button
                                type="button"
                                className="download_resume_footer"
                            >
                                <font className="download_resume_font">
                                    <b>Download CV</b>
                                </font>
                                <br />

                            </button>
                        </a>
                    </center>
                </div>
                <div className="right">
                </div>
            </div>
            <br />
            <hr className="footer_hr" />
            <center>
                <font className="copyright_message">Copyright © 2026 Rajat Raj Shah</font>
                <br />
                <br />
            </center>
        </div >
    </>
}

export default Footer;