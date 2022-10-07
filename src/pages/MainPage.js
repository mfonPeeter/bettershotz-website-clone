import { Fragment } from 'react';

import MainNavigation from '../components/Layout/MainNavigation';
import HeroSection from '../components/Layout/HeroSection';
import ComparisonSlider from '../components/Layout/ComparisonSlider';
import ShowDemoButton from '../components/Layout/ShowDemoButton';
import Features from '../components/Layout/Features';

const MainPage = () => {
  return (
    <Fragment>
      <MainNavigation />
      <HeroSection />
      <ComparisonSlider />
      <ShowDemoButton />
      <Features />
    </Fragment>
  );
};

export default MainPage;
