import { TbFileCv } from "react-icons/tb";

import { AiFillHome } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { IoMdInformationCircle } from "react-icons/io";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { AiFillProject } from "react-icons/ai";
import { AiOutlineProject } from "react-icons/ai";


import Rajat_CV from '../Components/resume/Rajat_CV.pdf';

function NavAbout() {
  return <>
    <div>
          <div className='Nav_for_all_page_laptop'>
            <div className='rajat_text_for_nav'>
              <a href="/">
                Rajat
              </a>
            </div>
            <div className='space_between_nav'>
            </div>
            <div>
              <ul className='nav_actial_part_ul_laptop'>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about" className='active_page'>About</a>
                </li>
                <li>
                  <a href="/portfolio">Portfolio</a>
                </li>
                <li>
                  <a href={Rajat_CV} download='Rajat_CV'>Resume</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='Nav_for_all_page_mobile'>
            <div className='rajat_text_for_nav'>
              <a href="/">
                Rajat
              </a>
            </div>
            <div className='space_between_nav'>
            </div>
            <div>
              <ul className='nav_actial_part_ul_mobile'>
                <li>
                  <a href="/"><AiOutlineHome /></a>
                </li>
                <li>
                  <a href="/about"><IoMdInformationCircle /></a>
                </li>
                <li>
                  <a href="/portfolio"><AiOutlineProject /></a>
                </li>
                <li>
                  <a href={Rajat_CV} download='Rajat_CV'><TbFileCv /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
  </>
}

export default NavAbout;
