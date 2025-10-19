
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

import Me from './component_images/me.jpg';

function MobileAboutMe() {
    const [isOpen, setIsOpen] = useState(false);
    return <>

        <div className={`mobile_about_me_parent ${isOpen ? 'show' : ''}`}>
            <div className="mobile_about_me_div1" onClick={() => setIsOpen(!isOpen)}>
                <table order={1} className="mobile_about_me_about_me_table">
                    <tbody>
                        <tr>
                            <td width="36%" align="right">
                                <img src={Me} alt="Rajat" className="mobile_about_me_me" />
                            </td>
                            <td width="2%" />
                            <td width="62%">
                                <font className="mobile_about_me_about_me_font_1">
                                    <b>
                                        About
                                        <font className="mobile_about_me_about_me_font_2"> Me</font>
                                    </b>
                                </font>
                                <br />
                                <font className="mobile_about_me_about_me_font_3">
                                    <b>Rajat Raj Shah</b>
                                </font>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={3}>
                                <center>
                                    <font className="mobile_about_me_about_me_font_1">
                                        <IoIosArrowDown />
                                    </font>
                                </center>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="mobile_about_me_div2">
                <font className="mobile_about_me_about_me_font_4">
                    In my role as a Computer Science Engineering (CSE) student, I utilize academic coursework in real world
                    project applications. I am dedicated to developing a robust portfolio and acquiring practical industry
                    experience. I also actively delve into Sales and Marketing aspects for broader professional growth.
                </font>
            </div>
            <div class="mobile_about_me_div3">
                <a href="/about-me">
                    <button type="button" class="mobile_about_me_button_view_more_about_me">
                        <font className="mobile_about_me_view_more_about_me">
                            View More
                        </font>
                    </button>
                </a>
            </div>
        </div>

    </>
}

export default MobileAboutMe;
