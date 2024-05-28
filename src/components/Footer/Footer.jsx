import React from 'react'
import logo from '../../assets/img/white logo.png'
import social1 from '../../assets/img/socials/facebook.png'
import social2 from '../../assets/img/socials/linkedin (1).png'
import social3 from '../../assets/img/socials/twitter.png'
import social4 from '../../assets/img/socials/youtube.png'
import { ColItem, LeftDiv, LogoImg, MainFlexdiv, RightDiv, SocialImge } from './FooterStyle'



function Footer() {
    return (
        <MainFlexdiv>
            <LeftDiv>
                <div className="logo">
                    <LogoImg src={logo} />
                </div>
                <div className="copy">
                    <div><p>Copyright © 2020 Nexcent ltd.</p></div>
                    <div><p>All rights reserved</p></div>
                </div>
                <div className="social">
                    <SocialImge src={social1} />
                    <SocialImge src={social2} />
                    <SocialImge src={social3} />
                    <SocialImge src={social4} />

                </div>
            </LeftDiv>
            <RightDiv>

                <ColItem>
                    <h3>Company</h3>

                    <ul>
                        <li>About Us</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                        <li>Testimonials</li>
                    </ul>
                </ColItem>


                <ColItem>
                    <h3>Support</h3>

                    <ul>
                        <li>Help Center</li>
                        <li>Terms of service</li>
                        <li>Legal</li>
                        <li>Status</li>
                    </ul>
                </ColItem>


                <ColItem>
                    <h3>Stay up to date</h3>
                    <form action="">
                        <input type="email" name="email" id="" placeholder='Enter Your Email' />
                    </form>
                </ColItem>
            </RightDiv>
        </MainFlexdiv>
    )
}

export default Footer