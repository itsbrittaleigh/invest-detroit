import React, { useState } from 'react';
import useInterval from '../hooks/useInterval';
import Adapting from '../assets/images/hero/adapting.jpg';
import Catalyzing from '../assets/images/hero/catalyzing.jpg';
import Collaboration from '../assets/images/hero/collaborating.jpg';
import Funding from '../assets/images/hero/funding.jpg';
import Growing from '../assets/images/hero/growing.jpg';
import Investing from '../assets/images/hero/investing.jpg';
import Learning from '../assets/images/hero/learning.jpg';
import Loving from '../assets/images/hero/loving-detroit.jpg';
import Partnership from '../assets/images/hero/partnering.jpg';

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const heroTextItems = [
    {
      text: 'Partnering',
      image: Partnership,
      imageAlt: 'People standing in an empty dirt lot with shovels and hard hats',
    },
    {
      text: 'Learning',
      image: Learning,
      imageAlt: 'Two people making crafts',
    },
    {
      text: 'Collaborating',
      image: Collaboration,
      imageAlt: 'Many people sitting around tables listening to a presenter',
    },
    {
      text: 'Funding',
      image: Funding,
      imageAlt: 'Top of the David Whitney building in downtown Detroit',
    },
    {
      text: 'Adapting',
      image: Adapting,
      imageAlt: 'Capital city fund 2.0',
    },
    {
      text: 'Catalyzing',
      image: Catalyzing,
      imageAlt: 'People standing with cleaning supplies and paint brushes in hallway with cages',
    },
    {
      text: 'Growing',
      image: Growing,
      imageAlt: 'Squares of headshots of many people',
    },
    {
      text: 'Investing',
      image: Investing,
      imageAlt: 'People on a stage smiling and posing with large checks',
    },
    {
      text: 'Loving Detroit',
      image: Loving,
      imageAlt: 'People smiling at the camera, posing in front of a stairwell',
    },
  ];

  useInterval(() => {
    const newActiveIndex = (activeIndex + 1 < heroTextItems.length) ? activeIndex + 1 : 0;
    setActiveIndex(newActiveIndex);
  }, 3500);

  return (
    <section id="hero" className="hero">
      <div id="hero_image_scroller">
        {heroTextItems.map((item, idx) => (
          <img
            alt={item.imageAlt}
            className={`hero__img ${idx === activeIndex ? 'is-active' : ''}`}
            key={item.text}
            src={item.image}
          />
        ))}
      </div>
      <div className="wrapper">
        <h1 className="hero__title">
          25 years of
          <br />
          <span className="hero__subtitle-container" id="hero_text_scroller">
            {heroTextItems.map((item, idx) => (
              <span
                className={`hero__subtitle ${idx === activeIndex ? 'is-active' : ''}`}
                key={item.text}
              >
                {item.text}
              </span>
            ))}
          </span>
        </h1>
      </div>
      <div className="pagination">
        {heroTextItems.map((item, idx) => (
          <span
            className={`pagination__dot${idx === activeIndex ? ' pagination__dot--active' : ''}`}
            key={item.text}
            onClick={() => setActiveIndex(idx)}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;
