import React from 'react'

import loginimg from '../../assets/img/login.png'
import { Button, FlexDiv, LoginImage, TextDiv } from './DesignSiteStyle'

function DesignSite() {
    return (
        <FlexDiv>
            <div>
                <LoginImage src={loginimg} />
            </div>
            <div>
                <TextDiv>
                    <div><h1>How to design your site footer like we did</h1></div>
                    <div><p>Donec a eros justo. Fusce egestas tristique ultrices.
                         Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, 
                         at scelerisque elit erat a magna. Donec quis erat at libero ultrices 
                         mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at
                          porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, 
                          non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
                           efficitur quis massa. Praesent felis est,
                         finibus et nisi ac, hendrerit venenatis libero. Donec consectetur 
                         faucibus ipsum id gravida.</p></div>
                </TextDiv>

                <div>
                    <Button>Learn More</Button>
                </div>
            </div>
        </FlexDiv>
    )
}

export default DesignSite