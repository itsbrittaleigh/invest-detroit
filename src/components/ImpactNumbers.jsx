import React from 'react';
import { BarChart, Bar, ResponsiveContainer, Tooltip } from 'recharts';
import data from '../data/BarChart';

const ImpactNumbers = () => {
  const renderTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="custom-tooltip__label">{`${label + 1995}: $${payload[0].value}`}</p>
        </div>
      );
    }

    return null;
  }

  return (
    <section id="impact-numbers" className="section bg--yellow">
      <div className="wrapper">
        <div className="section__heading">
          <div className="heading-icon__container heading-icon__container--light">
            <img src="https://placekitten.com/50/50" alt="Kitten" className="heading-icon" />
          </div>
          <h2 className="color--white">Impact Numbers</h2>
        </div>
        <h3 className="color--black weight--bold">Key Metrics (Since 1995)</h3>
        <div className="statistic statistic--large">
          <p className="statistic__number text--center">$409,325,034</p>
          <p className="statistic__label text--center">Dollars deployed</p>
        </div>
        <div style={{ maxWidth: '700px', margin: '48px auto' }}>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data} width={150} height={40}>
              <Tooltip content={renderTooltip} cursor={false} />
              <Bar dataKey="dl" fill="#F1D379" />
            </BarChart>
          </ResponsiveContainer>
        </div>
    
        <h3 className="color--black weight--bold">Key Metrics (2000 - 2020)</h3>
        <p className="text--center" style={{margin: '0 auto 60px', maxWidth: '500px'}}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. In ratione tempora, asperiores
          aspernatur vero numquam vitae provident dolorum officiis rerum molestiae obcaecati dicta
          debitis enim necessitatibus tenetur? At, iusto quod!
        </p>
        <div className="statistic__section center">
          <div className="statistic-image__container">
            <p className="statistic-image__label">Investment</p>
            <img className="statistic-image__image" src="https://placekitten.com/200/200" alt="" />
          </div>
          <div className="statistic">
            <p className="statistic__number large">$2,699,231,244</p>
            <p className="statistic__label large">Dollars Leveraged</p>
          </div>
        </div>
        <div className="statistic__section space">
          <div className="statistic">
            <p className="statistic__number">406</p>
            <p className="statistic__label">Projects, businesses, and companies supported</p>
          </div>
          <div className="statistic-image__container">
            <p className="statistic-image__label">Business</p>
            <img className="statistic-image__image" src="https://placekitten.com/200/200" alt="" />
          </div>
          <div className="statistic">
            <p className="statistic__number">5,622,125</p>
            <p className="statistic__label">Total square footage of commercial and retail spaces developed</p>
          </div>
        </div>
        <div className="statistic__section space">
          <div className="statistic-image__container">
            <p className="statistic-image__label">Housing</p>
            <img className="statistic-image__image" src="https://placekitten.com/200/200" alt="" />
          </div>
          <div className="statistic">
            <p className="statistic__number">4,986</p>
            <p className="statistic__label">Housing units created</p>
          </div>
          <div className="statistic">
            <p className="statistic__number">798</p>
            <p className="statistic__label">Affordable housing units created</p>
          </div>
        </div>
        <div className="statistic__section center">
          <div className="statistic-image__container">
            <p className="statistic-image__label">Employment</p>
            <img className="statistic-image__image" src="https://placekitten.com/200/200" alt="" />
          </div>
          <div className="statistic">
            <p className="statistic__number">10,982</p>
            <p className="statistic__label">Jobs created or retained</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactNumbers;
