import React from 'react';
import clientimg1 from '../../assets/img/brandlogo/Logo (1).png';
import clientimg2 from '../../assets/img/brandlogo/Logo (2).png';
import clientimg3 from '../../assets/img/brandlogo/Logo (3).png';
import clientimg4 from '../../assets/img/brandlogo/Logo (4).png';
import clientimg5 from '../../assets/img/brandlogo/Logo (5).png';
import clientimg6 from '../../assets/img/brandlogo/Logo (6).png';
import clientimg7 from '../../assets/img/brandlogo/Logo (7).png';

import { ClientsLogos, LogoDiv, MainDIv } from './OurClientStyle';

function OurClients() {
  return (
    <MainDIv>
      <div>
        <h3>Our Clients</h3>
      </div>
      <div>
        <p>We have been working with some Fortune 500+ clients</p>
      </div>
      <LogoDiv>
        <ClientsLogos src={clientimg1} alt='Logo 1' />
        <ClientsLogos src={clientimg2} alt='Logo 2' />
        <ClientsLogos src={clientimg3} alt='Logo 3' />
        <ClientsLogos src={clientimg4} alt='Logo 4' />
        <ClientsLogos src={clientimg5} alt='Logo 5' />
        <ClientsLogos src={clientimg6} alt='Logo 6' />
        <ClientsLogos src={clientimg7} alt='Logo 7' />
     
   
      </LogoDiv>
    </MainDIv>
  );
}

export default OurClients;
