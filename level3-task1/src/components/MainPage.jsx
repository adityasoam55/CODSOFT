import React, { useContext } from 'react';
import AboutHebe from './AboutSection';
import NoticePage from './NoticePage';
import MainVideo from './MainVideo';
import BrandsLogo from './BrandsLogo';
import AsideSecond from './AsideSecond';
import AsideFirst from './AsideFirst';
import MustHavePicks from './MustHavePicks';
import MainImage from './MainImage';
import { Navigate } from 'react-router-dom';
import { withUser } from './withProvider';

function MainPage({ user }) {

  if (!user) {
    return <Navigate to="/login" />
  }

  return (
    <div className='flex flex-col box-border overflow-x-hidden min-h-screen'>
      <MainImage />
      <AboutHebe />
      <MustHavePicks />
      <MainVideo />
      <BrandsLogo />
      <AsideFirst />
      <AsideSecond />
      <NoticePage />
    </div>
  )
}

export default withUser(MainPage);
