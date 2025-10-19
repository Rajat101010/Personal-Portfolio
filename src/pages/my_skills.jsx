import '../pages_css/my_skills.css';

import NavAbout from '../Components/nav_about';
import '../css/nav.css';

import MySkillsContent from '../Components/my_skills_page';

import Footer from '../Components/footer';
import '../css/footer.css';

function MySkills() {
    return (
        <main>
            <NavAbout />
            <br />
            <br className='remove_in_mobile_br' />
            <div className='my_skills_page'><MySkillsContent /></div>
            <br />
            <div><Footer /></div>
        </main>
    );
}

export default MySkills;
