import React from 'react';
import style from './style/privacyPolicy.module.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
//https://x.com/en/privacy twitters privacy policy is a good template for everyday users. 
const PrivacyPolicy = () => {
    return (
        <>
            <NavBar />
            <div className={style.privacyPolicySection}>
                <h1>Privacy Poicy</h1>
                <p>
                At TSC, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our services.
                </p>
                
            </div>
            <div className={style.mayCollectSection}>
                <p>
                    We may collect the following types of information:
                    <li>Personal Information: Name, email address, and other details you provide when creating an account or contacting us.</li>
                    <li>Usage Data: Information about how you use our website, including IP addresses, browser type, and pages visited.</li>
                    <li>Cookies and Tracking Technologies: Data collected through cookies and other tracking technologies to improve user experience.</li>
                </p>
            </div>
            <Footer />
        </>
    )
}

export default PrivacyPolicy