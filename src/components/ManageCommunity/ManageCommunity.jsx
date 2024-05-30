import React from 'react';
import icon1 from '../../assets/img/membership-icon-1.png';
import icon2 from '../../assets/img/membership-icon-2.png';
import icon3 from '../../assets/img/membership-icon-3.png';
import { DivCrad, DivmainText, IconImage, MainDiv } from './ManageCommunityStyle';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function ManageCommunity() {
    const { ref: titleRef, inView: titleInView } = useInView({ triggerOnce: true });
    const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true });
    const { ref: cardsRef, inView: cardsInView } = useInView({ triggerOnce: true });

    return (
        <div>
            <DivmainText>
                <motion.div
                    ref={titleRef}
                    initial={{ opacity: 0, y: 50 }}
                    animate={titleInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    <h2>Manage your entire community <br /> in a single system</h2>
                </motion.div>
                <motion.div
                    ref={textRef}
                    initial={{ opacity: 0, y: 50 }}
                    animate={textInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <p>Who is Nextcent suitable for?</p>
                </motion.div>
            </DivmainText>
            <MainDiv ref={cardsRef}>
                {[{ icon: icon1, title: 'Membership Organisations', text: 'Our membership management software provides full automation of membership renewals and payments' },
                  { icon: icon2, title: 'National Associations', text: 'Our membership management software provides full automation of membership renewals and payments' },
                  { icon: icon3, title: 'Clubs And Groups', text: 'Our membership management software provides full automation of membership renewals and payments' }
                ].map((card, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={cardsInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                    >
                        <DivCrad>
                            <div>
                                <IconImage src={card.icon} alt='icon' />
                                <h2>{card.title}</h2>
                            </div>
                            <div>
                                <p>{card.text}</p>
                            </div>
                        </DivCrad>
                    </motion.div>
                ))}
            </MainDiv>
        </div>
    );
}

export default ManageCommunity;
