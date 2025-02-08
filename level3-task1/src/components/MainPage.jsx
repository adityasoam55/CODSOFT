import React from 'react';
import MainImage from './MainImage';
import AboutSection from './AboutSection';
import MainVideo from './MainVideo'
import BrandsLogo from './BrandsLogo';
import NoticePage from './NoticePage';
import AsideFirst from './AsideFirst';
import AsideSecond from './AsideSecond';
import MustHavePicks from './MustHavePicks';

function MainPage() {
  return (
    <div className='overflow-x-hidden'>
      <MainImage/>
      <AboutSection />
      <MustHavePicks />
      <MainVideo />
      <BrandsLogo />
      <AsideFirst />
      <AsideSecond />
      <NoticePage />
    </div>
  )
}

export default MainPage;
