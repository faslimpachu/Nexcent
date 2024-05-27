import React, { useState } from 'react';
import Navlogo from '../../assets/img/Logo.png';
import hamburger from '../../assets/img/hamburger.png';
import { ButtonItem, Buttondiv, DivUl, FlexDiv, HamburgerImg, ItemLi, Navimg, MobileMenu } from './Navbarstyle';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <FlexDiv>
                <Navimg src={Navlogo} alt='image' />
                <DivUl className={menuOpen ? 'open' : ''}>
                    <ItemLi>Home</ItemLi>
                    <ItemLi>Service</ItemLi>
                    <ItemLi>Features</ItemLi>
                    <ItemLi>Product</ItemLi>
                    <ItemLi>Testimonial</ItemLi>
                    <ItemLi>FAQ</ItemLi>
                </DivUl>
                <HamburgerImg src={hamburger} onClick={toggleMenu} />
                <Buttondiv className={menuOpen ? 'open' : ''}>
                    <ButtonItem>Login</ButtonItem>
                    <ButtonItem primary>Sign Up</ButtonItem>
                </Buttondiv>
            </FlexDiv>
            {menuOpen && (
                <MobileMenu>
                    <ItemLi>Home</ItemLi>
                    <ItemLi>Service</ItemLi>
                    <ItemLi>Features</ItemLi>
                    <ItemLi>Product</ItemLi>
                    <ItemLi>Testimonial</ItemLi>
                    <ItemLi>FAQ</ItemLi>
                    <ButtonItem>Login</ButtonItem>
                    <ButtonItem primary>Sign Up</ButtonItem>
                </MobileMenu>
            )}
        </>
    );
}

export default Navbar;
