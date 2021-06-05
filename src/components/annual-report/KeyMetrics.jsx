import React, { useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
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
import Business from '../../assets/images/km-business.png';
import Employment from '../../assets/images/km0employment.png';
import Housing from '../../assets/images/km-housing.png';

const KeyMetrics = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="key-metrics" className="section bg--black">
      <div className="wrapper">
        <ScrollAnimation animateOnce={true} animateIn="fadeIn">
          <div className="section__heading">
            <div className="heading-icon__container">
              <p className="heading-icon">1</p>
            </div>
            <h2 className="color--white">2020 Key Metrics</h2>
          </div>
        </ScrollAnimation>
        <div className="info-scroller annual-report">
          <ScrollAnimation animateOnce={true} animateIn="fadeIn">
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
          </ScrollAnimation>
          <ScrollAnimation animateOnce={true} animateIn="fadeIn">
            <div className={`info-scroller__content annual-report ${activeIndex === 0 ? 'is-active' : ''}`}>
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
            <div className={`info-scroller__content annual-report ${activeIndex === 1 ? 'is-active' : ''}`}>
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
            <div className={`info-scroller__content annual-report ${activeIndex === 2 ? 'is-active' : ''}`}>
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
            <div className={`info-scroller__content annual-report ${activeIndex === 3 ? 'is-active' : ''}`}>
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
          </ScrollAnimation>
        </div>
        <ScrollAnimation animateOnce={true} animateIn="fadeIn">
          <div className="pie-chart__section">
            <div className="key-metrics-statistic">
              <img className="key-metrics-statistic__image" src={dollarsDeployedIcon} alt="Two people" />
              <p className="key-metrics-statistic__label color--white">Dollars Deployed</p>
              <p className="key-metrics-statistic__number color--white">$30,355,237</p>
            </div>
            <img className="pie-chart__image" src={Deployment} alt="Pie chart of dollars deployed; 66.8% real estate; 19.1% venture investments; 8.8% commercial and industrial; 5.3% small" />
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateOnce={true} animateIn="fadeIn">
          <div className="pie-chart__section">
            <div className="key-metrics-statistic">
              <img className="key-metrics-statistic__image" src={dollarsLeveragedIcon} alt="Two people" />
              <p className="key-metrics-statistic__label color--white">Dollars Leveraged</p>
              <p className="key-metrics-statistic__number color--white">$194,100,138</p>
            </div>
            <img className="pie-chart__image" src={DollarsLeveraged} alt="Pie chart of dollars leveraged; 36.2% real estate; 62.9% venture investments; 0.8% small business; 0.1% commercial and industrial" />
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateOnce={true} animateIn="fadeIn">
          <div className="pie-chart__section" style={{ borderBottom: '1px solid #626366' }}>
            <div className="key-metrics-statistic">
              <img className="key-metrics-statistic__image" src={heartIcon} alt="Hearts" style={{ height: '25px' }} />
              <p className="key-metrics-statistic__label color--white">COVID Relief</p>
              <p className="key-metrics-statistic__number color--white">$3,906,601</p>
            </div>
            <img className="pie-chart__image" src={CovidRelief} alt="Pie chart of covid relief; 23.2% property owner rental relief fund; 9% small business loan relief; 67.8% tech startup stabilization fund" />
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateOnce={true} animateIn="fadeIn">
          <div className="statistic__section space" style={{ borderColor: '#626366'}}>
            <div className="statistic">
              <p className="statistic__number">370</p>
              <p className="statistic__label">Projects, businesses, and companies supported</p>
            </div>
            <div className="statistic-image__container">
              <p className="statistic-image__label bg--yellow color--black">Business</p>
              <img className="statistic-image__image" src={Business} alt="Three people smiling at camera in front of building" />
            </div>
            <div className="statistic">
              <p className="statistic__number">446,382</p>
              <p className="statistic__label">Total square footage of commercial and retail spaces developed</p>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateOnce={true} animateIn="fadeIn">
          <div className="statistic__section space" style={{ borderColor: '#626366'}}>
            <div className="statistic-image__container">
              <p className="statistic-image__label color--black bg--yellow">Housing</p>
              <img className="statistic-image__image" src={Housing} alt="Apartment building" />
            </div>
            <div className="statistic">
              <p className="statistic__number">84</p>
              <p className="statistic__label">Housing units created</p>
            </div>
            <div className="statistic">
              <p className="statistic__number">38</p>
              <p className="statistic__label">Affordable housing units created</p>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateOnce={true} animateIn="fadeIn">
          <div className="statistic__section space" style={{ border: 'none' }}>
            <div className="statistic">
              <p className="statistic__number">1,866</p>
              <p className="statistic__label">Jobs created or retained</p>
            </div>
            <div className="statistic">
              <p className="statistic__number">65%</p>
              <p className="statistic__label">Projects supported that are led by people of color, women, or Detroit residents</p>
            </div>
            <div className="statistic-image__container">
              <p className="statistic-image__label color--black bg--yellow">Employment</p>
              <img className="statistic-image__image" src={Employment} alt="Woman smiling at camera in front of computers" />
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default KeyMetrics;
