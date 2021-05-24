import React from 'react';
// import Financials from '../components/annual-report/Financials';
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
      <KeyMetrics />
      <Recognition />
      {/* <Financials /> */}
      <Footer className="inverted" />
    </>
  );
}

export default AnnualReport;
