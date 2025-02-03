import React from 'react';
import MainImage from './MainImage';
import AboutSection from './AboutSection';
import MainVideo from './MainVideo'
import BrandsLogo from './BrandsLogo';
import NoticePage from './NoticePage';

function MainPage() {
  return (
    <div>
      <MainImage/>
      <AboutSection />
      <MainVideo />
      <BrandsLogo />
      <NoticePage />
    </div>
  )
}

export default MainPage;
