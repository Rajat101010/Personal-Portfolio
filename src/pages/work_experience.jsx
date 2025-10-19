import '../pages_css/work_experience.css';

import NavAbout from '../Components/nav_about';
import '../css/nav.css';

import WorkExperienceContent from '../Components/work_experience_page';

import Footer from '../Components/footer';
import '../css/footer.css';

function WorkExperience() {
    return (
        <main>
            <NavAbout />
            <br />
            <br className='remove_in_mobile_br' />
            <div className='work_experience_page'><WorkExperienceContent /></div>
            <br />
            <div><Footer /></div>
        </main>
    );
}

export default WorkExperience;
