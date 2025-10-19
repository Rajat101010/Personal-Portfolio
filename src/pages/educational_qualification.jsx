import '../pages_css/educational_qualificational.css';

import NavAbout from '../Components/nav_about';
import '../css/nav.css';

import EducationalQualificationalContent from '../Components/educational_qualification_page';

import Footer from '../Components/footer';
import '../css/footer.css';

function EducationalQualificational() {
    return (
        <main>
            <NavAbout />
            <br />
            <br className='remove_in_mobile_br' />
            <div className='educational_qualificational_page'><EducationalQualificationalContent /></div>
            <br />
            <div><Footer /></div>
        </main>
    );
}

export default EducationalQualificational;
