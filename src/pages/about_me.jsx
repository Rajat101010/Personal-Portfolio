import '../pages_css/about_me.css';

import NavAbout from '../Components/nav_about';
import '../css/nav.css';

import AboutMeContent from '../Components/about_me_page';

import Footer from '../Components/footer';
import '../css/footer.css';

function AboutMe() {
    return (
        <main>
            <NavAbout />
            <br />
            <br className='remove_in_mobile_br' />
            <div className='about_me_page'><AboutMeContent /></div>
            <br />
            <div><Footer /></div>
        </main>
    );
}

export default AboutMe;
