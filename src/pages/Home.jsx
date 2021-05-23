import React from 'react';
import { Element } from 'react-scroll';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Celebrating from '../components/Celebrating';
import About from '../components/About';
import ImpactNumbers from '../components/ImpactNumbers';
import Timeline from '../components/Timeline';
import WhatsNext from '../components/WhatsNext';
import Subfooter from '../components/Subfooter';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Element name="celebrating-25-years">
        <Celebrating />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="impact-numbers">
        {/* <ImpactNumbers /> */}
      </Element>
      <Element name="timeline">
        <Timeline />
      </Element>
      <Element name="whats-next">
        <WhatsNext />
      </Element>
      <Subfooter />
      <Footer />
    </>
  );
}

export default Home;