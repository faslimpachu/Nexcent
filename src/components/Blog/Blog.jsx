import React from 'react';
import blog1 from '../../assets/img/news (1).png';
import blog2 from '../../assets/img/news (2).png';
import blog3 from '../../assets/img/news (3).png';
import { BlogImage, Button, DivCard, FlexDiv, MainDiv, MainDivText, PtagDiv, SUbDiv } from './BlogStyle';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Blog() {
    const { ref: card1Ref, inView: card1InView } = useInView({ triggerOnce: true });
    const { ref: card2Ref, inView: card2InView } = useInView({ triggerOnce: true });
    const { ref: card3Ref, inView: card3InView } = useInView({ triggerOnce: true });

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
                    <motion.div
                        ref={card1Ref}
                        initial={{ opacity: 0, y: 50 }}
                        animate={card1InView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                    >
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
                    </motion.div>
                    <motion.div
                        ref={card2Ref}
                        initial={{ opacity: 0, y: 50 }}
                        animate={card2InView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                    >
                        <DivCard>
                            <BlogImage src={blog2} alt='image' />
                            <MainDivText>
                                <PtagDiv>
                                    <p>Creating Streamlined Safeguarding Processes with OneRen</p>
                                </PtagDiv>
                                <div className="buttondiv">
                                    <Button>read more</Button>
                                </div>
                            </MainDivText>
                        </DivCard>
                    </motion.div>
                    <motion.div
                        ref={card3Ref}
                        initial={{ opacity: 0, y: 50 }}
                        animate={card3InView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                    >
                        <DivCard>
                            <BlogImage src={blog3} alt='image' />
                            <MainDivText>
                                <PtagDiv>
                                    <p>Creating Streamlined Safeguarding Processes with OneRen</p>
                                </PtagDiv>
                                <div className="buttondiv">
                                    <Button>read more</Button>
                                </div>
                            </MainDivText>
                        </DivCard>
                    </motion.div>
                </FlexDiv>
            </SUbDiv>
        </MainDiv>
    )
}

export default Blog;
