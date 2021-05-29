import React from 'react';
import HeroImg from '../../assets/images/hero__2020.jpg';

const Hero = () => (
  <section id="hero" className="hero">
    <img
      alt=""
      class="hero__img is-active"
      src={HeroImg}
    />
    <div className="wrapper">
      <h1 className="hero__title">2020 Annual Report</h1>
      {/* <p className="lead text--center" style={{ maxWidth: '600px', margin: '0 auto' }}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, magnam laudantium tempora
        et nulla quisquam! Eius rem at eaque similique deserunt facilis, temporibus amet sunt
        accusantium quisquam? Dicta, natus est.
      </p> */}
    </div>
  </section>
);

export default Hero;
