import React from 'react'
import blog1 from '../../assets/img/news (1).png'
import blog2 from '../../assets/img/news (2).png'
import blog3 from '../../assets/img/news (3).png'
import { BlogImage, Button, DivCard, FlexDiv, MainDiv, MainDivText, PtagDiv, SUbDiv } from './BlogStyle'

function Blog() {
    return (
        <MainDiv>
            <SUbDiv>
                <div className="top">
                    <div className="heading">
                        <h1>Caring is the new marketing</h1>
                    </div>
                    <PtagDiv>
                        <p>The Nexcent blog is the best place to read about the latest membership
                            insights, trends and more. See who's joining the community, read about how our
                            community are increasing their membership income and lot's more.​</p>
                    </PtagDiv>
                </div>
                <FlexDiv>
                    <DivCard>
                        <BlogImage src={blog1} alt='image' />
                        <MainDivText>
                            <PtagDiv>
                                <p>Creating Streamlined Safeguarding Processes with OneRen</p>
                            </PtagDiv>
                            <div className="buttondiv">
                                <Button>read more</Button>
                            </div>
                        </MainDivText>

                    </DivCard>
                    <DivCard>
                        <BlogImage src={blog1} alt='image' />
                        <div>
                            <PtagDiv>
                                <p>Creating Streamlined Safeguarding Processes with OneRen</p>
                            </PtagDiv>
                            <div className="buttondiv">
                                <Button>read more</Button>
                            </div>
                        </div>

                    </DivCard>
                    <DivCard>
                        <BlogImage src={blog1} alt='image' />
                        <div>
                            <PtagDiv>
                                <p>Creating Streamlined Safeguarding Processes with OneRen</p>
                            </PtagDiv>
                            <div className="buttondiv">
                                <Button>read more</Button>
                            </div>
                        </div>

                    </DivCard>
                </FlexDiv>
            </SUbDiv>
        </MainDiv>
    )
}

export default Blog