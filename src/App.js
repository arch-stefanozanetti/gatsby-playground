import React from 'react';
import './App.scss';
import Header from './sections/header';
import SliderSection from "./sections/SliderSection";
import CardSection from './sections/CardSection';
import BannerSection from './sections/BannerSection';
import TabSection from './sections/TabSection';
import FormSection from './sections/FormSection';
import Footer from './sections/Footer';
import BannerCookies from './common/BannerCookies';
import NavAndBanners from './data/NavAndBanners.json'

function App() {
  return (
    <>
      <Header data={NavAndBanners} />
      <SliderSection />
      <CardSection />
      <BannerSection data={NavAndBanners} />
      <TabSection />
      <FormSection />
      <Footer data={NavAndBanners} />
      <BannerCookies />
    </>
  );
}

export default App;
