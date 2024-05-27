import React from 'react'

import icon1 from '../../assets/img/membership-icon-1.png'
import icon2 from '../../assets/img/membership-icon-2.png'
import icon3 from '../../assets/img/membership-icon-3.png'
import { DivCrad, DivmainText, IconImage, MainDiv } from './ManageCommunityStyle'

function ManageCommunity() {
    return (
        <div>
            <DivmainText>
                <div>
                    <h2>Manage your entire community <br/> in a single system</h2>
                </div>
                <div>
                    <p>Who is Nextcent suitable for?</p>
                </div>
            </DivmainText>
            <MainDiv>
                <div>
                    <DivCrad>
                        <div>
                            <IconImage src={icon1} alt='icon' />
                            <h2>Membership Organisations</h2>

                        </div>
                        <div>
                            <p>Our membership management software provides full
                                automation of membership renewals and payments</p>
                        </div>
                    </DivCrad>
                </div>

                <div>
                    <DivCrad>
                        <div>
                            <IconImage src={icon2} alt='icon' />
                            <h2>National Associations</h2>

                        </div>
                        <div>
                            <p>Our membership management software provides full automation
                                 of membership renewals and payments</p>
                        </div>
                    </DivCrad>
                </div>

                <div>
                    <DivCrad>
                        <div>
                            <IconImage src={icon3} alt='icon' />
                            <h2>Clubs And Groups</h2>

                        </div>
                        <div>
                            <p>Our membership management software provides full 
                                automation of membership renewals and payments</p>
                        </div>
                    </DivCrad>
                </div>
            </MainDiv>
        </div>
    )
}

export default ManageCommunity