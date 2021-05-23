import React from 'react';

const ImpactNumbers = () => (
  <section id="impact-numbers" class="section bg--yellow">
    <div class="wrapper">
      <div class="section__heading">
        <div class="heading-icon__container heading-icon__container--light">
          <img src="https://placekitten.com/50/50" alt="Kitten" class="heading-icon" />
        </div>
        <h2 class="color--white">Impact Numbers</h2>
      </div>
      <h3 class="color--black weight--bold">Key Metrics (Since 1995)</h3>
      <div class="statistic statistic--large">
        <p class="statistic__number text--center">$409,325,034</p>
        <p class="statistic__label text--center">Dollars deployed</p>
      </div>
      <canvas id="bar-chart"></canvas>
  
      <h3 class="color--black weight--bold">Key Metrics (2000 - 2020)</h3>
      <p class="text--center" style={{margin: '0 auto', maxWidth: '500px'}}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. In ratione tempora, asperiores
        aspernatur vero numquam vitae provident dolorum officiis rerum molestiae obcaecati dicta
        debitis enim necessitatibus tenetur? At, iusto quod!
      </p>
      <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '30px', margin: '30px 0', borderBottom: '1px solid white' }}>
        <div class="statistic-image__container">
          <p class="statistic-image__label" style={{top: '10px', left: '-10px'}}>Investment</p>
          <img class="statistic-image__image" src="https://placekitten.com/200/200" alt="" />
        </div>
        <div class="statistic" style={{margin: '-20px 0 0 -30px'}}>
          <p class="statistic__number">$2,699,231,244</p>
          <p class="statistic__label">Dollars Leveraged</p>
        </div>
      </div>
      <div>
        <div class="statistic statistic--large" style={{ marginLeft: '25%' }}>
          <p class="statistic__number">406</p>
          <p class="statistic__label">Projects, businesses, and companies supported</p>
        </div>
        <img src="https://placekitten.com/200/200" alt="" />
        <div>
          <p>5,622,125</p>
          <p>Total square footage of commercial and retail spaces developed</p>
        </div>
      </div>
      <div>
        <img src="https://placekitten.com/200/200" alt="" />
        <div>
          <p>4,986</p>
          <p>Housing units created</p>
        </div>
        <div>
          <p>798</p>
          <p>Affordable housing units created</p>
        </div>
      </div>
      <div>
        <img src="https://placekitten.com/200/200" alt="" />
        <div>
          <p>10,982</p>
          <p>Jobs created or retained</p>
        </div>
      </div>
    </div>
  </section>
);

export default ImpactNumbers;
