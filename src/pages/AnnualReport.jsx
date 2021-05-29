import React from 'react';
import { Element } from 'react-scroll';
import Financials from '../components/annual-report/Financials';
import Header from '../components/annual-report/Header';
import Hero from '../components/annual-report/Hero';
import KeyMetrics from '../components/annual-report/KeyMetrics';
import Recognition from '../components/annual-report/Recognition';
import Footer from '../components/Footer';

const AnnualReport = () => {
  return (
    <>
      <Header />
      <Hero />
      <Element name="key-metrics">
        <KeyMetrics />
      </Element>
      <Element name="recognition">
        <Recognition />
      </Element>
      <Element name="financials">
        <Financials />
      </Element>
      <Footer className="inverted" />
    </>
  );
}

export default AnnualReport;
