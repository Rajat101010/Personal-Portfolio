import '../pages_css/about.css';

import NavAbout from '../Components/nav_about';
import '../css/nav.css';

import LaptopAboutPageContent from '../Components/laptop_about_page_content';
import '../css/laptop_about_page_content.css';
import MobileAboutPageContent from '../Components/mobile_about_page_content';
import '../css/mobile_about_page_content.css';

import Footer from '../Components/footer';
import '../css/footer.css';

function About() {
    return (
        <main>
            <NavAbout />
            <br />
            <br className='remove_in_mobile_br' />
            <div className='laptop_about_page'><LaptopAboutPageContent /></div>
            <div className='mobile_about_page'><MobileAboutPageContent /></div>
            <br />
            <div><Footer /></div>
        </main>
    );
}

export default About;
