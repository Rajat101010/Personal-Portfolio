import '../pages_css/portfolio.css';

import NavPortfolio from '../Components/nav_portfolio';
import '../css/nav.css';

import LaptopPortfolioPageContent from '../Components/laptop_portfolio_page_content';
import MobilePortfolioPageContent from '../Components/mobile_portfolio_page_content';

import Footer from '../Components/footer';
import '../css/footer.css';

function Portfolio() {
    return (
        <main>
            <NavPortfolio />
            <br />
            <br className='remove_in_mobile_br' />
            <div className='laptop_about_page'><LaptopPortfolioPageContent /></div>
            <div className='mobile_portfolio_page'><MobilePortfolioPageContent /></div>
            <br />
            <div><Footer /></div>
        </main>
    );
}

export default Portfolio;
