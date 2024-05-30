import React from 'react';
import heroimg from '../../assets/img/Illustration.png';
import { HeroImg, MainContainer } from './HeroSectionStyle';
import { motion } from 'framer-motion';

function HeroSection() {
  return (
    <MainContainer>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>
          Lessons and insights <br /><span>from 8 years</span>
        </h1>
        <p>Where to grow your business as a photographer: site or social media?</p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          Register
        </motion.button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <HeroImg src={heroimg} alt='image' />
      </motion.div>
    </MainContainer>
  );
}

export default HeroSection;
