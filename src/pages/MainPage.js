import { Fragment } from 'react';

import MainNavigation from '../components/layout/MainNavigation';
import HeroSection from '../components/layout/HeroSection';
import ComparisonSlider from '../components/layout/ComparisonSlider';

const MainPage = () => {
  return (
    <Fragment>
      <MainNavigation />
      <HeroSection />
      <ComparisonSlider />
    </Fragment>
  );
};

export default MainPage;
