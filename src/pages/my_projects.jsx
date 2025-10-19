import '../pages_css/my_projects.css';

import NavPortfolio from '../Components/nav_portfolio';
import '../css/nav.css';

import MyProjectsContent from '../Components/my_projects_page';

import Footer from '../Components/footer';
import '../css/footer.css';

function MyProjects() {
    return (
        <main>
            <NavPortfolio />
            <br />
            <br className='remove_in_mobile_br' />
            <div className='my_projects_page'><MyProjectsContent /></div>
            <br />
            <div><Footer /></div>
        </main>
    );
}

export default MyProjects;
