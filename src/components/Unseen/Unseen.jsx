import React from 'react'
import { FlexDiv, LeftDiv, RightDiv, UnseenImg } from './UnseenStyle'
import img1 from '../../assets/img/unscen-img.png'

function Unseen() {
    return (
        <FlexDiv>
            <LeftDiv>
                <UnseenImg src={img1} alt='image' />
            </LeftDiv>
            <RightDiv>
                <div>
                    <h1>The unseen of spending three years at Pixelgrade</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
                        Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis.
                        Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar,
                        aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                </div>
                <div>
                    <button >Learn More</button>
                </div>
            </RightDiv>
        </FlexDiv>
    )
}

export default Unseen