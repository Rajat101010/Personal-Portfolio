import '../pages_css/my_certificates.css';

import NavPortfolio from '../Components/nav_portfolio';
import '../css/nav.css';

import MyCertificatesContent from '../Components/my_certificates_page';

import Footer from '../Components/footer';
import '../css/footer.css';

function MyCertificates() {
    return (
        <main>
            <NavPortfolio />
            <br />
            <br className='remove_in_mobile_br' />
            <div className='my_certificates_page'><MyCertificatesContent /></div>
            <br />
            <div><Footer /></div>
        </main>
    );
}

export default MyCertificates;
