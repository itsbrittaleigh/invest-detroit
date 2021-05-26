import React from 'react';
import PortfolioComp from '../../assets/images/portfolio-comp.svg';

const Financials = () => {
  return (
    <section id="about" className="section bg--black">
      <div className="wrapper">
        <div className="section__heading">
          <div className="heading-icon__container heading-icon__container--light">
            <img src="https://placekitten.com/50/50" alt="Kitten" className="heading-icon" />
          </div>
          <h2 className="color--white">2020 Financials</h2>
        </div>
        <div className="pie-chart__section pie-chart__section--financials">
          <p className="pie-section__label">Invest Detroit Consolidated</p>
          <div className="key-metrics--multiple">
            <div className="key-metrics-statistic">
              <p className="key-metrics-statistic__label color--white">Total Assets</p>
              <p className="key-metrics-statistic__number color--white">$167,320,592</p>
            </div>
            <div className="key-metrics-statistic">
              <p className="key-metrics-statistic__label color--white">Portfolio Investments</p>
              <p className="key-metrics-statistic__number color--white">$92,320,513</p>
            </div>
            <div className="key-metrics-statistic">
              <p className="key-metrics-statistic__label color--white">Net Assets and Partners' Equity</p>
              <p className="key-metrics-statistic__number color--white">$138,568,263</p>
            </div>
            <div className="key-metrics-statistic">
              <p className="key-metrics-statistic__label color--white">2019 Net Income</p>
              <p className="key-metrics-statistic__number color--white">$20,183,023</p>
            </div>
          </div>
        </div>
        <div className="pie-chart__section pie-chart__section--financials">
          <p className="pie-section__label">Operational Highlights</p>
          <div className="key-metrics--multiple">
            <div className="key-metrics-statistic">
              <p className="key-metrics-statistic__label color--white">Deployment</p>
              <p className="key-metrics-statistic__number color--white">$43,394,476</p>
            </div>
            <div className="key-metrics-statistic">
              <p className="key-metrics-statistic__label color--white">New Staff Hires</p>
              <p className="key-metrics-statistic__number color--white">5</p>
            </div>
            <div className="key-metrics-statistic">
              <p className="key-metrics-statistic__label color--white">Fundraising</p>
              <p className="key-metrics-statistic__number color--white">$33,000,000</p>
            </div>
          </div>
        </div>
        <div className="pie-chart__section pie-chart__section--financials">
          <div className="col-lt">
            <p className="pie-section__label">Combined Portfolio Composition</p>
            <div className="key-metrics-statistic">
              <p className="key-metrics-statistic__label color--white">Total Portfolio</p>
              <p className="key-metrics-statistic__number color--white">$92,212,605</p>
            </div>
          </div>
          <img className="pie-chart__image" src={PortfolioComp} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Financials;
