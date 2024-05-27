import React from 'react'
import heroimg from '../../assets/img/Illustration.png'
import { HeroImg, MainContainer } from './HeroSectionStyle'

function HeroSection() {
  return (
    <MainContainer>
      <div>
        <h1>Lessons and insights <br /><span>from 8 years</span> </h1>
        <p>Where to grow your business as a photographer: site or social media?</p>
        <button>Register</button>
      </div>
      <div>
        <HeroImg src={heroimg} alt='image' />
      </div>
    </MainContainer>
  )
}

export default HeroSection