import React from 'react';
import MainImage from './MainImage';
import AboutSection from './AboutSection';
import MainVideo from './MainVideo'
import BrandsLogo from './BrandsLogo';

function MainPage() {
  return (
    <div>
      <MainImage/>
      <AboutSection />
      <MainVideo />
      <BrandsLogo />
    </div>
  )
}

export default MainPage;
