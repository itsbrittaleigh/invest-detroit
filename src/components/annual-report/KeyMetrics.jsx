import React, { useState } from 'react';
import dollarsDeployedIcon from '../../assets/images/icon__dollars-deployed.svg';
import dollarsLeveragedIcon from '../../assets/images/icon__dollars-leveraged.svg';
import projectsSupportedIcon from '../../assets/images/icon__projects-supported.svg';
import jobsCreatedIcon from '../../assets/images/icon__jobs-created.svg';
import dollarsDeployedIconRed from '../../assets/images/icon__dollars-deployed--red.svg';
import dollarsLeveragedIconRed from '../../assets/images/icon__dollars-leveraged--red.svg';
import projectsSupportedIconRed from '../../assets/images/icon__projects-supported--red.svg';
import jobsCreatedIconRed from '../../assets/images/icon__jobs-created--red.svg';
import dollarsDeployedIconBlue from '../../assets/images/icon__dollars-deployed--blue.svg';
import dollarsLeveragedIconBlue from '../../assets/images/icon__dollars-leveraged--blue.svg';
import projectsSupportedIconBlue from '../../assets/images/icon__projects-supported--blue.svg';
import jobsCreatedIconBlue from '../../assets/images/icon__jobs-created--blue.svg';
import dollarsDeployedIconTeal from '../../assets/images/icon__dollars-deployed--teal.svg';
import dollarsLeveragedIconTeal from '../../assets/images/icon__dollars-leveraged--teal.svg';
import projectsSupportedIconTeal from '../../assets/images/icon__projects-supported--teal.svg';
import jobsCreatedIconTeal from '../../assets/images/icon__jobs-created--teal.svg';

const KeyMetrics = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="about" className="section bg--black">
      <div className="wrapper">
        <div className="section__heading">
          <div className="heading-icon__container heading-icon__container--light">
            <img src="https://placekitten.com/50/50" alt="Kitten" className="heading-icon" />
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
                <span class="info-scroller__item-marker">1</span>
                Real Estate
              </li>
              <li
                className={`info-scroller__item-2 ${activeIndex === 1 ? 'is-active' : ''}`}
                onClick={() => setActiveIndex(1)}
              >
                <span class="info-scroller__item-marker">2</span>
                Small Business
              </li>
              <li
                className={`info-scroller__item-3 ${activeIndex === 2 ? 'is-active' : ''}`}
                onClick={() => setActiveIndex(2)}
              >
                <span class="info-scroller__item-marker">3</span>
                Commercial & Industrial
              </li>
              <li
                className={`info-scroller__item-4 ${activeIndex === 3 ? 'is-active' : ''}`}
                onClick={() => setActiveIndex(3)}
              >
                <span class="info-scroller__item-marker">4</span>
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
                  <p className="key-metrics-statistic__number color--yellow">$7,357,348</p>
                </div>
                <div className="key-metrics-statistic">
                  <img src={dollarsLeveragedIcon} alt="Stacks of cash" />
                  <p className="key-metrics-statistic__label color--white">Dollars Leveraged</p>
                  <p className="key-metrics-statistic__number color--yellow">$50,301,943</p>
                </div>
                <div className="key-metrics-statistic">
                  <img src={projectsSupportedIcon} alt="Two skyscraper buildings" />
                  <p className="key-metrics-statistic__label color--white">Projects Supported</p>
                  <p className="key-metrics-statistic__number color--yellow">12</p>
                </div>
                <div className="key-metrics-statistic">
                  <img src={jobsCreatedIcon} alt="Two people" />
                  <p className="key-metrics-statistic__label color--white">Jobs Created</p>
                  <p className="key-metrics-statistic__number color--yellow">92</p>
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
                  <p className="key-metrics-statistic__number color--red">$7,357,348</p>
                </div>
                <div className="key-metrics-statistic">
                  <img src={dollarsLeveragedIconRed} alt="Stacks of cash" />
                  <p className="key-metrics-statistic__label color--white">Dollars Leveraged</p>
                  <p className="key-metrics-statistic__number color--red">$50,301,943</p>
                </div>
                <div className="key-metrics-statistic">
                  <img src={projectsSupportedIconRed} alt="Two skyscraper buildings" />
                  <p className="key-metrics-statistic__label color--white">Projects Supported</p>
                  <p className="key-metrics-statistic__number color--red">12</p>
                </div>
                <div className="key-metrics-statistic">
                  <img src={jobsCreatedIconRed} alt="Two people" />
                  <p className="key-metrics-statistic__label color--white">Jobs Created</p>
                  <p className="key-metrics-statistic__number color--red">92</p>
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
                  <p className="key-metrics-statistic__number color--blue">$7,357,348</p>
                </div>
                <div className="key-metrics-statistic">
                  <img src={dollarsLeveragedIconBlue} alt="Stacks of cash" />
                  <p className="key-metrics-statistic__label color--white">Dollars Leveraged</p>
                  <p className="key-metrics-statistic__number color--blue">$50,301,943</p>
                </div>
                <div className="key-metrics-statistic">
                  <img src={projectsSupportedIconBlue} alt="Two skyscraper buildings" />
                  <p className="key-metrics-statistic__label color--white">Projects Supported</p>
                  <p className="key-metrics-statistic__number color--blue">12</p>
                </div>
                <div className="key-metrics-statistic">
                  <img src={jobsCreatedIconBlue} alt="Two people" />
                  <p className="key-metrics-statistic__label color--white">Jobs Created</p>
                  <p className="key-metrics-statistic__number color--blue">92</p>
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
                <p className="key-metrics-statistic__number color--teal">$7,357,348</p>
              </div>
              <div className="key-metrics-statistic">
                <img src={dollarsLeveragedIconTeal} alt="Stacks of cash" />
                <p className="key-metrics-statistic__label color--white">Dollars Leveraged</p>
                <p className="key-metrics-statistic__number color--teal">$50,301,943</p>
              </div>
              <div className="key-metrics-statistic">
                <img src={projectsSupportedIconTeal} alt="Two skyscraper buildings" />
                <p className="key-metrics-statistic__label color--white">Projects Supported</p>
                <p className="key-metrics-statistic__number color--teal">12</p>
              </div>
              <div className="key-metrics-statistic">
                <img src={jobsCreatedIconTeal} alt="Two people" />
                <p className="key-metrics-statistic__label color--white">Jobs Created</p>
                <p className="key-metrics-statistic__number color--teal">92</p>
              </div>
            </div>
          </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default KeyMetrics;