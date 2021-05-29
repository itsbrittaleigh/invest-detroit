import React, { useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { BarChart, Bar, Cell, Label, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import Employment from '../assets/images/employment.png';
import Housing from '../assets/images/housing.png';
import Investment from '../assets/images/investment.png';
import Business from '../assets/images/business.png';
import BarChartMobile from '../assets/images/bar-chart--mobile.svg';
import data from '../data/BarChart';

const ImpactNumbers = () => {
  const [focusBar, setFocusBar] = useState(null);

  const formatNumber = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const renderTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="custom-tooltip__label">{`$${formatNumber(payload[0].value)}`}</p>
        </div>
      );
    }

    return null;
  }

  return (
    <section id="impact-numbers" className="section bg--yellow">
      <div className="wrapper">
        <ScrollAnimation animateIn="fadeIn">
          <div className="section__heading">
            <div className="heading-icon__container heading-icon__container--light">
              <p className="heading-icon is-white">3</p>
            </div>
            <h2 className="color--white">Impact Numbers</h2>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
          <h3 className="color--black weight--bold">Key Metrics (Since 1995)</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
          <div className="statistic statistic--large">
            <p className="statistic__number text--center">$439,632,386</p>
            <p className="statistic__label text--center" style={{ maxWidth: '100%' }}>Dollars deployed</p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
          <div className="bar-chart--mobile">
            <img src={BarChartMobile} alt="" />
          </div>
        </ScrollAnimation>
        <div className="bar-chart--desktop">
          <div style={{ maxWidth: '950px', margin: '48px auto 0' }}>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart
                data={data}
                width={150}
                height={40}
                barCategoryGap={8}
                onMouseMove={(state) => {
                  if (state.isTooltipActive) {
                    setFocusBar(state.activeTooltipIndex);
                  } else {
                    setFocusBar(null);
                  }
                }}
              >
                <XAxis dataKey="name">
                  <Label fill="black" />
                </XAxis>
                <Tooltip content={renderTooltip} />
                <Bar dataKey="dl">
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={focusBar === index ? '#FFFFFF' : '#F1D379'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <ScrollAnimation animateIn="fadeIn">
          <p className="text--center" style={{ marginBottom: '60px' }}>
            * 2020 Deployment total includes COVID Relief efforts and Strategic Neighborhood Fund
            program funding
          </p>
        </ScrollAnimation>
        
        <ScrollAnimation animateIn="fadeIn">
          <h3 className="color--black weight--bold">Key Metrics (2000 - 2020)</h3>
        </ScrollAnimation>
        {/* <p className="text--center" style={{margin: '0 auto 60px', maxWidth: '500px'}}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. In ratione tempora, asperiores
          aspernatur vero numquam vitae provident dolorum officiis rerum molestiae obcaecati dicta
          debitis enim necessitatibus tenetur? At, iusto quod!
        </p> */}
        <ScrollAnimation animateIn="fadeIn">
          <div className="statistic__section center">
            <div className="statistic-image__container">
              <p className="statistic-image__label">Investment</p>
              <img className="statistic-image__image" src={Investment} alt="" />
            </div>
            <div className="statistic">
              <p className="statistic__number large">$2,894,601,873</p>
              <p className="statistic__label large">Dollars Leveraged</p>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
          <div className="statistic__section space">
            <div className="statistic">
              <p className="statistic__number">749</p>
              <p className="statistic__label">Projects, businesses, and companies supported</p>
            </div>
            <div className="statistic-image__container">
              <p className="statistic-image__label">Business</p>
              <img className="statistic-image__image" src={Business} alt="" />
            </div>
            <div className="statistic">
              <p className="statistic__number">6,068,507</p>
              <p className="statistic__label">Total square footage of commercial and retail spaces developed</p>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
          <div className="statistic__section space">
            <div className="statistic-image__container">
              <p className="statistic-image__label">Housing</p>
              <img className="statistic-image__image" src={Housing} alt="" />
            </div>
            <div className="statistic">
              <p className="statistic__number">5,070</p>
              <p className="statistic__label">Housing units created</p>
            </div>
            <div className="statistic">
              <p className="statistic__number">836</p>
              <p className="statistic__label">Affordable housing units created</p>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
          <div className="statistic__section center">
            <div className="statistic-image__container">
              <p className="statistic-image__label">Employment</p>
              <img className="statistic-image__image" src={Employment} alt="" />
            </div>
            <div className="statistic">
              <p className="statistic__number">12,848</p>
              <p className="statistic__label">Jobs created or retained</p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default ImpactNumbers;
