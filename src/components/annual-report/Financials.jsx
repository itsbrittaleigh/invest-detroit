import React from 'react';
import PortfolioComp from '../../assets/images/portfolio-comp.svg';

const Financials = () => {
  return (
    <section id="financials" className="section bg--black">
      <div className="wrapper">
        <div className="section__heading">
          <div className="heading-icon__container heading-icon__container--light">
            <p className="heading-icon">3</p>
          </div>
          <h2 className="color--white">2020 Financials</h2>
        </div>
        <div className="pie-chart__section pie-chart__section--financials" style={{ borderTop: 'none' }}>
          <p className="pie-section__label">Invest Detroit Consolidated</p>
          <div className="key-metrics--multiple">
            <div className="key-metrics-statistic">
              <p className="key-metrics-statistic__label">Total Assets</p>
              <p className="key-metrics-statistic__number color--white">$193,877,792</p>
            </div>
            <div className="key-metrics-statistic">
              <p className="key-metrics-statistic__label">Portfolio Investments</p>
              <p className="key-metrics-statistic__number color--white">$110,967,310</p>
            </div>
            <div className="key-metrics-statistic">
              <p className="key-metrics-statistic__label">Net Assets and Partners' Equity</p>
              <p className="key-metrics-statistic__number color--white">$164,395,257</p>
            </div>
            <div className="key-metrics-statistic">
              <p className="key-metrics-statistic__label">2020 Net Income</p>
              <p className="key-metrics-statistic__number color--white">$35,917,466</p>
            </div>
          </div>
        </div>
        <div className="pie-chart__section pie-chart__section--financials">
          <p className="pie-section__label">Operational Highlights</p>
          <div className="key-metrics--multiple">
            <div className="key-metrics-statistic">
              <p className="key-metrics-statistic__label">Deployment</p>
              <p className="key-metrics-statistic__number color--white">$36M</p>
            </div>
            <div className="key-metrics-statistic">
              <p className="key-metrics-statistic__label">New Staff Hires</p>
              <p className="key-metrics-statistic__number color--white">6</p>
            </div>
            <div className="key-metrics-statistic">
              <p className="key-metrics-statistic__label">Fundraising</p>
              <p className="key-metrics-statistic__number color--white">$40M</p>
            </div>
          </div>
        </div>
        <div className="pie-chart__section pie-chart__section--financials">
          <div className="col-lt">
            <p className="pie-section__label">Combined Portfolio Composition</p>
            <div className="key-metrics-statistic">
              <p className="key-metrics-statistic__label color--white">Total Portfolio</p>
              <p className="key-metrics-statistic__number color--white">$110,967,310</p>
            </div>
          </div>
          <img className="pie-chart__image" src={PortfolioComp} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Financials;
