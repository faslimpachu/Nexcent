import React from 'react';
import icon1 from '../../assets/img/helping-icon-(1).png';
import icon2 from '../../assets/img/helping-icon- (2).png';
import icon3 from '../../assets/img/helping-icon- (3).png';
import icon4 from '../../assets/img/helping-icon- (4).png';
import { Iconsimage, MainFlex, MainFlexDiv, TextDiv } from './HelpingSectionStyle';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

function HelpingSection() {
    const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true });
    const { ref: iconsRef, inView: iconsInView } = useInView({ triggerOnce: true });

    return (
        <>
            <MainFlex>
                <TextDiv>
                    <motion.div
                        ref={textRef}
                        initial={{ opacity: 0, y: 50 }}
                        animate={textInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                    >
                        <h1>Helping a local <br /> <span>business reinvent itself</span></h1>
                        <p>We reached here with our hard work and dedication</p>
                    </motion.div>
                </TextDiv>
                <MainFlexDiv ref={iconsRef}>
                    {[{
                        icon: icon1,
                        count: 2245341,
                        label: 'Members'
                    }, {
                        icon: icon2,
                        count: 46328,
                        label: 'Clubs'
                    }, {
                        icon: icon3,
                        count: 828867,
                        label: 'Event Booking'
                    }, {
                        icon: icon4,
                        count: 1926436,
                        label: 'Payments'
                    }].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={iconsInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                        >
                            <div>
                                <div>
                                    <div><Iconsimage src={item.icon} /></div>
                                    <div>
                                        <div>
                                            <h1>
                                                <CountUp
                                                    start={0}
                                                    end={iconsInView ? item.count : 0}
                                                    duration={2}
                                                    delay={0.3 + index * 0.1}
                                                />
                                            </h1>
                                            <p>{item.label}</p>
                                        </div>
                                    </div>
                                </div>
                                <div></div>
                            </div>
                        </motion.div>
                    ))}
                </MainFlexDiv>
            </MainFlex>
        </>
    );
}

export default HelpingSection;
