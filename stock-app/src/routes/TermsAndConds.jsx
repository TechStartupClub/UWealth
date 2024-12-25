import React from 'react';
import style from './style/termsandconds.module.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const TermsAndConditions = () => {
    return (
        <>
            <NavBar />
            <div className={style.termsAndConditionSection}>
                <h1>Terms and Conditions</h1>
                <p>
                Your Use of This Website is Governed By These Terms & Conditions
                </p>
                
            </div>
            <div className={style.welcome}>
                <p>
                Welcome to TSC. These Terms & Conditions apply to the TSC website located at www.TSC.com and all other sites, mobile sites, services, applications, platforms and tools where these Terms & Conditions appear or are linked (collectively, the "Site"). As used in these Terms & Conditions, "TCS", "us" or "we" refers to TCS and its subsidiaries and affiliates.
                </p>
            </div>
            <div className={style.please}>
                <p>
                Please read the following Terms & Conditions carefully as they affect your legal rights. These Terms & Conditions contain an arbitration agreement that requires the use of arbitration on an individual basis to resolve disputes rather than jury or any other court proceedings, or class actions of any kind. The arbitration agreement is set forth in the “Arbitration Agreement” section below.
                </p>
            </div>

            <Footer />
        </>
    )
}

export default TermsAndConditions