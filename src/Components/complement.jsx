import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";

function Complement() {
    const [isOpen, setIsOpen] = useState(false);

    return <>
        <center>
            <div className="complement-space" />
            <div className="hamburger_complement" id="hamburger" onClick={() => setIsOpen(!isOpen)}>
                Portfolio Highlights<br /><IoIosArrowDown />
            </div>
            <div className={`complement_parent ${isOpen ? 'show' : ''}`}>
                <div className='complement_info'>
                    <center>
                        <font className="complement_font_1">
                            <b>05+ </b>
                            <br className='complement_br' />
                        </font>
                        <font className="complement_font_2">
                            Programming <br className='complement_br' />
                            Projects
                        </font>
                    </center>
                </div>
                <div className='complement_space'>
                    <center>
                        <font className="complement_font_3">|</font>
                    </center>
                </div>
                <div className='complement_info'>
                    <center>
                        <font className="complement_font_1">
                            <b>99+ </b>
                            <br className='complement_br' />
                        </font>
                        <font className="complement_font_2">
                            Professional <br className='complement_br' />
                            Skills
                        </font>
                    </center>
                </div>
                <div className='complement_space'>
                    <center>
                        <font className="complement_font_3">|</font>
                    </center>
                </div>
                <div className='complement_info'>
                    <center>
                        <font className="complement_font_1">
                            <b>10+ </b>
                            <br className='complement_br' />
                        </font>
                        <font className="complement_font_2">
                            Professional <br className='complement_br' />
                            Certificates
                        </font>
                    </center>
                </div>
                <div className='complement_space'>
                    <center>
                        <font className="complement_font_3">|</font>
                    </center>
                </div>
                <div className='complement_info'>
                    <center>
                        <font className="complement_font_1">
                            <b>20+ </b>
                            <br className='complement_br' />
                        </font>
                        <font className="complement_font_2">
                            Professional <br className='complement_br' />
                            Projects
                        </font>
                    </center>
                </div>
            </div>
        </center >
    </>
}

export default Complement;