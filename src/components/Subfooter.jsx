import React, { useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import useInterval from '../hooks/useInterval';
import twitterIcon from '../assets/images/icon__twitter--black.svg';
import facebookIcon from '../assets/images/icon__facebook--black.svg';
import copyIcon from '../assets/images/icon__copy.svg';
import Adapting from '../assets/images/hero/adapting.jpg';
import Catalyzing from '../assets/images/hero/catalyzing.jpg';
import Collaboration from '../assets/images/hero/collaborating.jpg';
import Funding from '../assets/images/hero/funding.jpg';
import Growing from '../assets/images/hero/growing.jpg';
import Investing from '../assets/images/hero/investing.jpg';
import Learning from '../assets/images/hero/learning.jpg';
import Loving from '../assets/images/hero/loving-detroit.jpg';
import Partnership from '../assets/images/hero/partnering.jpg';

const Subfooter = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const heroTextItems = [
    {
      text: 'Partnering',
      image: Partnership,
      imageAlt: 'Kitten',
    },
    {
      text: 'Learning',
      image: Learning,
      imageAlt: 'Kitten',
    },
    {
      text: 'Collaborating',
      image: Collaboration,
      imageAlt: 'Kitten',
    },
    {
      text: 'Funding',
      image: Funding,
      imageAlt: 'Kitten',
    },
    {
      text: 'Adapting',
      image: Adapting,
      imageAlt: 'Kitten',
    },
    {
      text: 'Catalyzing',
      image: Catalyzing,
      imageAlt: 'Kitten',
    },
    {
      text: 'Growing',
      image: Growing,
      imageAlt: 'Kitten',
    },
    {
      text: 'Investing',
      image: Investing,
      imageAlt: 'Kitten',
    },
    {
      text: 'Loving Detroit',
      image: Loving,
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
        <div className="social-sharing">
          <ScrollAnimation animateOnce={true} animateIn="fadeIn">
            <div>
              <FacebookShareButton
                quote="In 2020, Invest Detroit celebrated 25 years of commitment to sparking economic growth in Detroit. Learn more here!"
                url="https://25.investdetroit.com"
              >
                <img src={facebookIcon} alt="Facebook logo icon" />
                <p>Share on Facebook</p>
              </FacebookShareButton>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateOnce={true} animateIn="fadeIn">
            <div>
              <TwitterShareButton
                title="In 2020, Invest Detroit celebrated 25 years of commitment to sparking economic growth in Detroit. Learn more here!"
                url="https://25.investdetroit.com"
              >
                <img src={twitterIcon} alt="Twitter logo icon" />
                <p>Share on Twitter</p>
              </TwitterShareButton>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateOnce={true} animateIn="fadeIn">
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
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Subfooter;
