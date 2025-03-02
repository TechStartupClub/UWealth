import React from "react"


const Outline = () => {

    return (
        <>
        <section class="header">
            <nav>
                {/* <!-- Logo linking back to home page --> */}
                <a href="index.html"><img src="images/logo.png" alt="Logo" /></a>
                
                {/* <!-- Navigation links with toggle icons for mobile view --> */}
                <div class="nav-links" id="navLinks">
                    {/* <!-- Close icon to hide menu --> */}
                    <i class="fa fa-times" onclick="hideMenu()"></i>
                    <ul>
                        <li><a href="">SIGN IN</a></li>
                        <li><a href="#info">INFO</a></li>
                        <li><a href="#ctct">CONTACT</a></li>
                    </ul>
                </div>
                {/* <!-- Menu icon to show navigation links --> */}
                <i class="fa fa-bars" onclick="showMenu()"></i>
            </nav>
            
            {/* <!-- Text box with main header and description --> */}
            <div class="text-box">
                <h1>Universal Wealth</h1>
                <p>Place holder text <br />blah blah blah blah</p>
                <a href="https://i.gifer.com/origin/7a/7a47d1014b0ac74e8db76bb7e2253e01_w200.gif" class="hero-btn">BUTTON THAT DOES THING</a>
            </div>
        </section>
        
        {/* <!-- Information Section --> */}
        <section class="campus" id="info">
            <h1>Information</h1>
            <p></p>
            <div class="row">
                {/* <!-- Campus section with placeholders --> */}
                <div class="campus-col">
                    <a href="#spot">
                        <img src="images/london.png" alt="London Placeholder" />
                        <div class="layer">
                            <h3>PLACEHOLDER 1</h3>
                        </div>
                    </a>
                </div>
                <div class="campus-col">
                    <a href="link here">
                        <img src="images/newyork.png" alt="New York Placeholder" />
                        <div class="layer">
                            <h3>PLACEHOLDER 2</h3>
                        </div>
                    </a>
                </div>
                <div class="campus-col">
                    <a href="#ctct">
                        <img src="images/washington.png" alt="Washington Placeholder" />
                        <div class="layer">
                            <h3>PLACEHOLDER 3</h3>
                        </div>
                    </a>
                </div>
            </div>
        </section>

        {/* <!-- About Me Sections --> */}
    <section class="about-me" id="about">
        <h1>Our Team</h1>
        <div class="about-content">
            {/* <!-- Profile 1 --> */}
            <div class="profile">
                <a href="https://www.linkedin.com/in/celestinryf/">
                    <img src="https://media.licdn.com/dms/image/v2/D5603AQHqAnsehj3lCg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718679152645?e=1735171200&v=beta&t=0IeDwIT_97mIyrhH2nlEppNgdlhKtKofrvVZzhTzCLE" alt="Profile Photo 1" class="about-image"/>
                </a>
                    <h2>First Last</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
                
            </div>
            {/* <!-- Profile 2 --> */}
            <div class="profile">
                <img src="https://media.licdn.com/dms/image/v2/D5603AQHW9Flzg4BZag/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1710719005551?e=1735171200&v=beta&t=Gsw7MMjjMxFZEGbeE23zq0GYvrmIq3Gz0uj1YxT3Z7c" alt="Profile Photo 2" class="about-image"/>
                <h2>First Last</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
            </div>
            {/* <!-- Profile 3 --> */}
            <div class="profile">
                <img src="https://media.licdn.com/dms/image/v2/D5635AQGIrr02IPTvZQ/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1710392386148?e=1730350800&v=beta&t=pV6LU9ffrMsi0SzB9L3qMB6DM8-lUPnbE7YqkHT2O34" alt="Profile Photo 3" class="about-image"/>
                <h2>First Last</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
            </div>
            {/* <!-- Profile 4 --> */}
            <div class="profile">
                <img src="https://media.licdn.com/dms/image/v2/D5603AQFo_tRTADnUEA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1727495861805?e=1735171200&v=beta&t=XYRJ2SU8cXen6aOpE4RAXGDXrlz6Eo4p6agDYswGnqI" alt="Profile Photo 1" class="about-image"/>
                <h2>First Last</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
            </div>
            {/* <!-- Profile 5 --> */}
            <div class="profile">
                <img src="https://media.licdn.com/dms/image/v2/D4E03AQERALaRvEgu3Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1727758085989?e=1735171200&v=beta&t=WKN5lHgBVsbwDxks-0K42XWXEPTzVLOtUoWNlVAV68c" alt="Profile Photo 1" class="about-image"/>
                <h2>First Last</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
            </div>
            {/* <!-- Profile 6 --> */}
            <div class="profile">
                <img src="https://media.licdn.com/dms/image/v2/D5603AQGNKTUGAmEjJw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1729118540245?e=1735171200&v=beta&t=-EtmJZk7mHF0TZBXqJtHocLbcntKQLzwLD_AZocpCPo" alt="Profile Photo 1" class="about-image"/>
                <h2>First Last</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
            </div>
            
        </div>
    </section>
    </>
)
}

export default Outline;


