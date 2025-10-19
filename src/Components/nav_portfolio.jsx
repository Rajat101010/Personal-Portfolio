import React, { useState } from 'react';
import { TbHome } from "react-icons/tb";
import { FiInfo } from "react-icons/fi";
import { MdOutlineCardTravel } from "react-icons/md";
import { TbFileCv } from "react-icons/tb";

import Rajat_CV from '../Components/resume/Rajat_CV.pdf';

function NavHome(props) {
  const [isOpen, setIsOpen] = useState(false);

  return <>
    <nav className="nav_for_all_pages">
      <div className="nav_nav_for_mobile">
        <div className="rajat_text">
          <b>Rajat</b>
        </div>
        <div className="nav-space" />
        <div className="hamburger" id="hamburger" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>
      </div>
      <ul className={`nav-links ${isOpen ? 'show' : ''}`} id="nav-links">
        <li>
          <a href="/">
            <div className='nav_icons'>
              <TbHome />
            </div>
            <div className='nav_word'>
              Home
            </div>
          </a>
        </li>
        <li>
          <a href="/about">
            <div className='nav_icons'>
              <FiInfo />
            </div>
            <div className='nav_word'>
              About
            </div>
          </a>
        </li>
        <li>
          <a href="/portfolio">
            <div className='nav_icons , active'>
              <MdOutlineCardTravel />
            </div>
            <div className='nav_word , active'>
              Portfolio
            </div>
          </a>
        </li>
        <li>
          <a href={Rajat_CV} download='Rajat_CV'>
            <div className='nav_icons'>
              <TbFileCv />
            </div>
            <div className='nav_word'>
              Resume
            </div>
          </a>
        </li>
      </ul>
    </nav>
    {props.children}
  </>
}

export default NavHome;
