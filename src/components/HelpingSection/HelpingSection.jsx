import React from 'react'
import icon1 from '../../assets/img/helping-icon-(1).png'
import icon2 from '../../assets/img/helping-icon- (2).png'
import icon3 from '../../assets/img/helping-icon- (3).png'
import icon4 from '../../assets/img/helping-icon- (4).png'
import { Iconsimage, MainFlex, MainFlexDiv, TextDiv } from './HelpingSectionStyle'



function HelpingSection() {
    return (
        <>
            <MainFlex>
                <TextDiv>
                    <div>
                        <h1>Helping a local <br /> <span>business reinvent itself</span></h1>
                    </div>
                    <div>
                        <p>We reached here with our hard work and dedication</p>
                    </div>
                </TextDiv>
                <MainFlexDiv>
                    <div>
                        <div>
                            <div><Iconsimage src={icon1} /></div>
                            <div>
                                <div>
                                    <h1>2,245,341</h1>
                                    <p>Members</p>
                                </div>
                            </div>

                        </div>
                        <div></div>
                    </div>

                    <div>
                        <div>
                            <div><Iconsimage src={icon2} /></div>
                            <div>
                                <div>
                                    <h1>46,328</h1>
                                    <p>Clubs</p>
                                </div>
                            </div>

                        </div>
                        <div></div>
                    </div>

                    <div>
                        <div>
                            <div><Iconsimage src={icon3} /></div>
                            <div>
                                <div>
                                    <h1>828,867</h1>
                                    <p>Event Booking</p>
                                </div>
                            </div>

                        </div>
                        <div></div>
                    </div>

                    <div>
                        <div>
                            <div><Iconsimage src={icon4} /></div>
                            <div>
                                <div>
                                    <h1>1,926,436</h1>
                                    <p>ayments</p>
                                </div>
                            </div>

                        </div>
                        <div></div>
                    </div>
                </MainFlexDiv>

            </MainFlex>



        </>
    )
}

export default HelpingSection