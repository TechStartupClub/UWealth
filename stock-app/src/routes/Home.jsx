import React from 'react';
//import SearchBar from '../components/SearchBar'
import style from './style/home.module.css';
import BigHeader from '../components/BigHeader';
import GLPanel from '../components/GainerLoser';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer'

/**
 * This is the main home component, rendering the main layout.
 * Home contains sections: a navigation bar, a main header, a "Top Gainers and Losers" section, etc.
 * No direct interaction with the AlphaVantage API
 */

const appName = "Universal Wealth";

const Home = () => {

    /**
     * Hierarchy:
     *  Nav bar + search and sign in
     *  Main header
     *  Top Gainers and Losers (Stocks to watch, not watchlist)
     *  Market news
     *  About us blerb
     */
    return (
        <>
            <NavBar />
            <MainHeader />
            <AboutBlerb />
            <Footer />
        </>
    )
}

const MainHeader = () => {
    const headText = appName;
    const headSubtext = "A historical screener in your browser for free.";
    const bgUrl = "https://wallpapers.com/images/featured/stock-market-pd5zksxr07t7a4xu.jpg";
    const bgGradient = "true";
    const btnText = "Login";
    const btnClass = "header-button";
    const btnHref = "/login";
    return (
        <BigHeader
            headText={headText}
            headSubtext={headSubtext}
            bgUrl={bgUrl}
            bgGradient={bgGradient}
            btnText={btnText}
            btnHref={btnHref}
            btnClass={btnClass}
        />
    );
}

const AboutBlerb = () => {
    return (
        <section>
            <h2 className="center">About Us</h2>
            <p className={style.aboutParagraph}>
                At Universal Wealth, we aim to connect users with the latest
                stock market moves and news in a simple to use interface. This 
                app formed as part of a project by the Tech Startup Club 
                at the University of Washington.
            </p>
        </section>
    );
}

export default Home