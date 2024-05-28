import React from 'react'
import tesla from '../../assets/img/tesla.png'
import image from '../../assets/img/Frame 10 (1).png'

import { DivRight, FlexDiv, LogoImg, RightFlexDiv, Svgitem, TeslaImg } from './teslaStyle'

function Tesla() {
    return (
        <FlexDiv>
            <div className='left'>
                <TeslaImg src={tesla} alt="image" />
            </div>
            <DivRight>
                <div className="text">
                    <div className="ptag">
                        <p>Maecenas dignissim justo eget nulla rutrum molestie.
                            Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper.
                            Proin eu enim metus. Vivamus sed libero ornare, tristique quam in,
                            gravida enim. Nullam ut molestie arcu, at hendrerit elit.
                            Morbi laoreet elit at ligula molestie, nec molestie mi blandit.
                            Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales.
                            Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
                            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
                            Quisque vulputate odio neque, eget efficitur libero condimentum id.
                            Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                    </div>
                    <div className="name"><h2>Tim Smith</h2></div>
                    <div className="nameptag"><p>British Dragon Boat Racing Association</p></div>
                </div>
                <RightFlexDiv>
                    <div className="logo">
                        <LogoImg src={image} alt='image' />
                    </div>
                    <div className="logo-text">
                        <h3>Meet all customers</h3>
                    </div>
                    
                </RightFlexDiv>
            </DivRight>
        </FlexDiv>
    )
}

export default Tesla