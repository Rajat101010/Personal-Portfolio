import '../pages_css/home.css';

import NavHome from '../Components/nav_home';
import '../css/nav.css';

import Intro from '../Components/intro';
import '../css/intro.css';

import Complement from '../Components/complement';
import '../css/complement.css'

import LaptopAboutMe from '../Components/laptop_about_me';
import '../css/laptop_about_me.css';
import MobileAboutMe from '../Components/mobile_about_me';
import '../css/mobile_about_me.css';

import LaptopMySkills from '../Components/laptop_my_skills';
import '../css/laptop_my_skills.css';
import MobileMySkills from '../Components/mobile_my_skills';
import '../css/mobile_my_skills.css';

import Projects from '../Components/projects';
import '../css/projects.css';

import ContactMe from '../Components/contact_me';
import '../css/contact_me.css';

import Footer from '../Components/footer';
import '../css/footer.css';

import SwipePage from "../SwipePage";

function Home() {
  return (
    <SwipePage>
      <main>
        <NavHome />
        <br /><br />
        <div><Intro /></div>
        <br /><br />
        <div><Complement /></div>
        <br />
        <br className='remove_in_mobile_br' />
        <br className='remove_in_mobile_br' />
        <div className='laptop_about_me'><LaptopAboutMe /></div>
        <div className='mobile_about_me'><MobileAboutMe /></div>
        <br />
        <br />
        <div className='laptop_my_skills'><LaptopMySkills /></div>
        <div className='mobile_my_skills'><MobileMySkills /></div>
        <br /><br />
        <div><Projects /></div>
        <br /><br />
        <div><ContactMe /></div>
        <br /><br />
        <div><Footer /></div>
      </main>
    </SwipePage>
  );
}

export default Home;
