import React, { useState } from 'react';
import useInterval from '../hooks/useInterval';

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const heroTextItems = [
    {
      text: 'Partnering',
      image: 'https://placekitten.com/500/500',
      imageAlt: 'Kitten',
    },
    {
      text: 'Learning',
      image: 'https://placekitten.com/600/600',
      imageAlt: 'Kitten',
    },
    {
      text: 'Collaborating',
      image: 'https://placekitten.com/700/700',
      imageAlt: 'Kitten',
    },
    {
      text: 'Funding',
      image: 'https://placekitten.com/800/800',
      imageAlt: 'Kitten',
    },
    {
      text: 'Adapting',
      image: 'https://placekitten.com/900/900',
      imageAlt: 'Kitten',
    },
    {
      text: 'Catalyzing',
      image: 'https://placekitten.com/1000/1000',
      imageAlt: 'Kitten',
    },
    {
      text: 'Growing',
      image: 'https://placekitten.com/1100/1100',
      imageAlt: 'Kitten',
    },
    {
      text: 'Investing',
      image: 'https://placekitten.com/1200/1200',
      imageAlt: 'Kitten',
    },
    {
      text: 'Loving Detroit',
      image: 'https://placekitten.com/1300/1300',
      imageAlt: 'Kitten',
    },
  ];

  useInterval(() => {
    const newActiveIndex = (activeIndex + 1 < heroTextItems.length) ? activeIndex + 1 : 0;
    setActiveIndex(newActiveIndex);
  }, 3500);

  return (
    <section id="hero" class="hero">
      <div id="hero_image_scroller">
        {heroTextItems.map((item, idx) => (
          <img
            alt={item.imageAlt}
            class={`hero__img ${idx === activeIndex ? 'is-active' : ''}`}
            key={item.text}
            src={item.image}
          />
        ))}
      </div>
      <div class="wrapper">
        <h1 class="hero__title">
          25 years of
          <br />
          <span class="hero__subtitle-container" id="hero_text_scroller">
            {heroTextItems.map((item, idx) => (
              <span
                class={`hero__subtitle ${idx === activeIndex ? 'is-active' : ''}`}
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
