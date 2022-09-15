import { Fragment } from 'react';

import MainNavigation from '../components/layout/MainNavigation';
import HeroSection from '../components/layout/HeroSection';

const MainPage = () => {
  return (
    <Fragment>
      <MainNavigation />
      <HeroSection />
    </Fragment>
  );
};

export default MainPage;
