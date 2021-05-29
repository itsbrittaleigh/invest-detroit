import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import PortfolioComp from '../../assets/images/portfolio-comp.svg';

const Financials = () => {
  return (
    <section id="financials" className="section bg--black">
      <div className="wrapper">
        <ScrollAnimation animateIn="fadeIn">
          <div className="section__heading">
            <div className="heading-icon__container">
              <p className="heading-icon">3</p>
            </div>
            <h2 className="color--white">2020 Financials</h2>
          </div>
        </ScrollAnimation>
        <div className="pie-chart__section pie-chart__section--financials" style={{ borderTop: 'none' }}>
          <ScrollAnimation animateIn="fadeIn">
            <p className="pie-section__label">Invest Detroit Consolidated</p>
          </ScrollAnimation>
          <div className="key-metrics--multiple">
            <ScrollAnimation animateIn="fadeIn">
              <div className="key-metrics-statistic">
                <p className="key-metrics-statistic__label">Total Assets</p>
                <p className="key-metrics-statistic__number color--white">$193,877,792</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn">
              <div className="key-metrics-statistic">
                <p className="key-metrics-statistic__label">Portfolio Investments</p>
                <p className="key-metrics-statistic__number color--white">$110,967,310</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn">
              <div className="key-metrics-statistic">
                <p className="key-metrics-statistic__label">Net Assets and Partners' Equity</p>
                <p className="key-metrics-statistic__number color--white">$164,395,257</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn">
              <div className="key-metrics-statistic">
                <p className="key-metrics-statistic__label">2020 Net Income</p>
                <p className="key-metrics-statistic__number color--white">$35,917,466</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
        <div className="pie-chart__section pie-chart__section--financials">
          <ScrollAnimation animateIn="fadeIn">
            <p className="pie-section__label">Operational Highlights</p>
          </ScrollAnimation>
          <div className="key-metrics--multiple">
            <ScrollAnimation animateIn="fadeIn">
              <div className="key-metrics-statistic">
                <p className="key-metrics-statistic__label">Deployment</p>
                <p className="key-metrics-statistic__number color--white">$36M</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn">
              <div className="key-metrics-statistic">
                <p className="key-metrics-statistic__label">New Staff Hires</p>
                <p className="key-metrics-statistic__number color--white">6</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn">
              <div className="key-metrics-statistic">
                <p className="key-metrics-statistic__label">Fundraising</p>
                <p className="key-metrics-statistic__number color--white">$40M</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
        <div className="pie-chart__section pie-chart__section--financials">
          <div className="col-lt">
            <ScrollAnimation animateIn="fadeIn">
              <p className="pie-section__label">Combined Portfolio Composition</p>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn">
              <div className="key-metrics-statistic">
                <p className="key-metrics-statistic__label color--white">Total Portfolio</p>
                <p className="key-metrics-statistic__number color--white">$110,967,310</p>
              </div>
            </ScrollAnimation>
          </div>
          <img className="pie-chart__image" src={PortfolioComp} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Financials;
