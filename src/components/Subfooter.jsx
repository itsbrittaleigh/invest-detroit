import React, { useState } from 'react';
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import useInterval from '../hooks/useInterval';
import twitterIcon from '../assets/images/icon__twitter--black.svg';
import facebookIcon from '../assets/images/icon__facebook--black.svg';
import copyIcon from '../assets/images/icon__copy.svg';

const Subfooter = () => {
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

  const copyLink = () => {
    navigator.clipboard.writeText('https://25.investdetroit.com');
  }

  return (
    <section className="hero hero__subfooter">
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
      <div className="wrapper">
        <h1 className="hero__title">
          25 years of
          <br />
          <span className="hero__subtitle-container" id="hero_text_scroller">
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
        <div className="social-sharing">
          <div>
            <FacebookShareButton
              quote="In 2020, Invest Detroit celebrated 25 years of commitment to sparking economic growth in Detroit. Learn more here!"
              url="https://25.investdetroit.com"
            >
              <img src={facebookIcon} alt="Facebook logo icon" />
              <p>Share on Facebook</p>
            </FacebookShareButton>
          </div>
          <div>
            <TwitterShareButton
              title="In 2020, Invest Detroit celebrated 25 years of commitment to sparking economic growth in Detroit. Learn more here!"
              url="https://25.investdetroit.com"
            >
              <img src={twitterIcon} alt="Twitter logo icon" />
              <p>Share on Twitter</p>
            </TwitterShareButton>
          </div>
          <div role="button">
            <button
              aria-label="copy link"
              style={{ backgroundColor: 'transparent', border: 'medium none', padding: '0px', font: 'inherit', color: 'inherit', cursor: 'pointer',}}
              onClick={copyLink}
              onKeyPress={copyLink}
            >
              <img src={copyIcon} alt="Link icon" />
              <p>Copy Website link</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subfooter;
