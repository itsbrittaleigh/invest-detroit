import React, { useState } from 'react';
import dollarsDeployedIcon from '../../assets/images/icon__dollars-deployed.svg';
import dollarsLeveragedIcon from '../../assets/images/icon__dollars-leveraged.svg';
import dollarsDeployedIconRed from '../../assets/images/icon__dollars-deployed--red.svg';
import dollarsLeveragedIconRed from '../../assets/images/icon__dollars-leveraged--red.svg';
import dollarsDeployedIconBlue from '../../assets/images/icon__dollars-deployed--blue.svg';
import dollarsLeveragedIconBlue from '../../assets/images/icon__dollars-leveraged--blue.svg';
import dollarsDeployedIconTeal from '../../assets/images/icon__dollars-deployed--teal.svg';
import dollarsLeveragedIconTeal from '../../assets/images/icon__dollars-leveraged--teal.svg';
import heartIcon from '../../assets/images/icon__heart.svg';
import CovidRelief from '../../assets/images/covid-relief.svg';
import DollarsLeveraged from '../../assets/images/dollars-leveraged.svg';
import Deployment from '../../assets/images/program-deployment.svg';

const KeyMetrics = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="about" className="section bg--black">
      <div className="wrapper">
        <div className="section__heading">
          <div className="heading-icon__container">
            <p className="heading-icon">1</p>
          </div>
          <h2 className="color--white">Key Metrics</h2>
        </div>
        <div className="info-scroller annual-report">
          <nav className="info-scroller__navigation">
            <ul className="swiper-pagination" id="swiper__focus-pagination">
              <li
                className={`info-scroller__item-1 ${activeIndex === 0 ? 'is-active' : ''}`}
                onClick={() => setActiveIndex(0)}
              >
                <span className="info-scroller__item-marker">1</span>
                Real Estate
              </li>
              <li
                className={`info-scroller__item-2 ${activeIndex === 1 ? 'is-active' : ''}`}
                onClick={() => setActiveIndex(1)}
              >
                <span className="info-scroller__item-marker">2</span>
                Small Business
              </li>
              <li
                className={`info-scroller__item-3 ${activeIndex === 2 ? 'is-active' : ''}`}
                onClick={() => setActiveIndex(2)}
              >
                <span className="info-scroller__item-marker">3</span>
                Commercial & Industrial
              </li>
              <li
                className={`info-scroller__item-4 ${activeIndex === 3 ? 'is-active' : ''}`}
                onClick={() => setActiveIndex(3)}
              >
                <span className="info-scroller__item-marker">4</span>
                Venture Investments
              </li>
            </ul>
          </nav>
          {activeIndex === 0 && (
            <div className="info-scroller__content annual-report">
              <div className="key-metrics-statistic__wrapper">
                <div className="key-metrics-statistic">
                  <img src={dollarsDeployedIcon} alt="Arrow facing up and right on bar graph" />
                  <p className="key-metrics-statistic__label color--white">Dollars Deployed</p>
                  <p className="key-metrics-statistic__number color--yellow">$20,280,756</p>
                </div>
                <div className="key-metrics-statistic">
                  <img src={dollarsLeveragedIcon} alt="Stacks of cash" />
                  <p className="key-metrics-statistic__label color--white">Dollars Leveraged</p>
                  <p className="key-metrics-statistic__number color--yellow">$70,238,274</p>
                </div>
              </div>
            </div>
          )}
          {activeIndex === 1 && (
            <div className="info-scroller__content annual-report">
              <div className="key-metrics-statistic__wrapper">
                <div className="key-metrics-statistic">
                  <img src={dollarsDeployedIconRed} alt="Arrow facing up and right on bar graph" />
                  <p className="key-metrics-statistic__label color--white">Dollars Deployed</p>
                  <p className="key-metrics-statistic__number color--red">$1,605,000</p>
                </div>
                <div className="key-metrics-statistic">
                  <img src={dollarsLeveragedIconRed} alt="Stacks of cash" />
                  <p className="key-metrics-statistic__label color--white">Dollars Leveraged</p>
                  <p className="key-metrics-statistic__number color--red">$1,643,614</p>
                </div>
              </div>
            </div>
          )}
          {activeIndex === 2 && (
            <div className="info-scroller__content annual-report">
              <div className="key-metrics-statistic__wrapper">
                <div className="key-metrics-statistic">
                  <img src={dollarsDeployedIconBlue} alt="Arrow facing up and right on bar graph" />
                  <p className="key-metrics-statistic__label color--white">Dollars Deployed</p>
                  <p className="key-metrics-statistic__number color--blue">$2,659,250</p>
                </div>
                <div className="key-metrics-statistic">
                  <img src={dollarsLeveragedIconBlue} alt="Stacks of cash" />
                  <p className="key-metrics-statistic__label color--white">Dollars Leveraged</p>
                  <p className="key-metrics-statistic__number color--blue">$218,250</p>
                </div>
              </div>
            </div>
          )}
          {activeIndex === 3 && (
            <div className="info-scroller__content annual-report">
            <div className="key-metrics-statistic__wrapper">
              <div className="key-metrics-statistic">
                <img src={dollarsDeployedIconTeal} alt="Arrow facing up and right on bar graph" />
                <p className="key-metrics-statistic__label color--white">Dollars Deployed</p>
                <p className="key-metrics-statistic__number color--teal">$5,810,231</p>
              </div>
              <div className="key-metrics-statistic">
                <img src={dollarsLeveragedIconTeal} alt="Stacks of cash" />
                <p className="key-metrics-statistic__label color--white">Dollars Leveraged</p>
                <p className="key-metrics-statistic__number color--teal">$122,000,000</p>
              </div>
            </div>
          </div>
          )}
        </div>
        <div className="pie-chart__section">
          <div className="key-metrics-statistic">
            <img className="key-metrics-statistic__image" src={dollarsDeployedIcon} alt="Two people" />
            <p className="key-metrics-statistic__label color--white">Dollars Deployed</p>
            <p className="key-metrics-statistic__number color--white">$49,048,984</p>
          </div>
          <img className="pie-chart__image" src={Deployment} alt="" />
        </div>
        <div className="pie-chart__section">
          <div className="key-metrics-statistic">
            <img className="key-metrics-statistic__image" src={dollarsLeveragedIcon} alt="Two people" />
            <p className="key-metrics-statistic__label color--white">Dollars Leveraged</p>
            <p className="key-metrics-statistic__number color--white">$272,595,214</p>
          </div>
          <img className="pie-chart__image" src={DollarsLeveraged} alt="" />
        </div>
        <div className="pie-chart__section">
          <div className="key-metrics-statistic">
            <img className="key-metrics-statistic__image" src={heartIcon} alt="Two people" />
            <p className="key-metrics-statistic__label color--white">COVID Relief</p>
            <p className="key-metrics-statistic__number color--white">2,000</p>
          </div>
          <img className="pie-chart__image" src={CovidRelief} alt="" />
        </div>
      </div>
    </section>
  );
};

export default KeyMetrics;
