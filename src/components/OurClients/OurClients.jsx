import React from 'react';
import clientimg1 from '../../assets/img/brandlogo/Logo (1).png';
import clientimg2 from '../../assets/img/brandlogo/Logo (2).png';
import clientimg3 from '../../assets/img/brandlogo/Logo (3).png';
import clientimg4 from '../../assets/img/brandlogo/Logo (4).png';
import clientimg5 from '../../assets/img/brandlogo/Logo (5).png';
import clientimg6 from '../../assets/img/brandlogo/Logo (6).png';
import clientimg7 from '../../assets/img/brandlogo/Logo (7).png';

import { ClientsLogos, LogoDiv, MainDIv } from './OurClientStyle';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function OurClients() {
  const { ref: titleRef, inView: titleInView } = useInView({ triggerOnce: true });
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true });
  const { ref: logosRef, inView: logosInView } = useInView({ triggerOnce: true });

  return (
    <MainDIv>
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 50 }}
        animate={titleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <h3>Our Clients</h3>
      </motion.div>
      <motion.div
        ref={textRef}
        initial={{ opacity: 0, y: 50 }}
        animate={textInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p>We have been working with some Fortune 500+ clients</p>
      </motion.div>
      <LogoDiv ref={logosRef}>
        {[clientimg1, clientimg2, clientimg3, clientimg4, clientimg5, clientimg6, clientimg7].map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={logosInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
          >
            <ClientsLogos src={img} alt={`Logo ${index + 1}`} />
          </motion.div>
        ))}
      </LogoDiv>
    </MainDIv>
  );
}

export default OurClients;
