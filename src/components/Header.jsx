import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { animateScroll } from 'react-scroll';
import investDetroitLogo from '../assets/images/logo__invest-detroit--dark.svg';

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    const body = document.querySelector('body');
    if (!menuIsOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'visible';
    }
    setMenuIsOpen(!menuIsOpen);
  };

  const navigateAndClose = (id) => {
    const body = document.querySelector('body');
    const scrollEl = document.getElementById(id);
    body.style.overflow = 'visible';
    setMenuIsOpen(false);
    if (id !== 'celebrating-25-years') {
      animateScroll.scrollTo(scrollEl.offsetTop - 54);
    } else {
      animateScroll.scrollTo(scrollEl.offsetTop);
    }
  }

  window.onscroll = function() {
    const headerEl = document.querySelector('header');
    const offset = window.screen.width >= 980 ? 875 : 558;
    if (document.body.scrollTop > offset || document.documentElement.scrollTop > offset) {
      headerEl.classList.add('is-shrunk');
    } else {
      headerEl.classList.remove('is-shrunk');
    }
  }

  return (
    <header className="header">
      <nav className={`main-navigation ${menuIsOpen ? 'is-active' : ''}`} id="main-navigation">
        <div className="wrapper">
          <a className="main-navigation__logo" href="https://investdetroit.com/" target="_blank" rel="noreferrer">
            <img src={investDetroitLogo} alt="Invest Detroit logo" />
          </a>
          <ul className="main-navigation__list">
            <span className="wrapper">
              <li className="main-navigation__list-item">
                <span
                  className="main-navigation__list-item-link"
                  onClick={() => navigateAndClose('celebrating-25-years')}
                  role="link"
                >
                  Celebrating 25 Years
                </span>
              </li>
              <li className="main-navigation__list-item">
                <span
                  className="main-navigation__list-item-link"
                  onClick={() => navigateAndClose('about')}
                  role="link"
                >
                  About
                </span>
              </li>
              <li className="main-navigation__list-item">
                <span
                  className="main-navigation__list-item-link"
                  onClick={() => navigateAndClose('impact-numbers')}
                  role="link"
                >
                  Impact Numbers
                </span>
              </li>
              <li className="main-navigation__list-item">
                <span
                  className="main-navigation__list-item-link"
                  onClick={() => navigateAndClose('timeline')}
                  role="link"
                >
                  Timeline
                </span>
              </li>
              <li className="main-navigation__list-item">
                <span
                  className="main-navigation__list-item-link"
                  onClick={() => navigateAndClose('whats-next')}
                  role="link"
                >
                  What's Next
                </span>
              </li>
              <li className="main-navigation__list-item main-navigation__list-item--special">
                <Link to="/2020-annual-report" className="main-navigation__list-item-link">
                  <span className="list-item__title">2020 Annual Report</span>
                  <span className="list-item__subtitle">Key Metrics, Recognition, and Financials</span>
                </Link>
              </li>
            </span>
          </ul>
          <button className="main-navigation__burger" id="burger-button" onClick={toggleMenu}>
            <span className="main-navigation__burger-box">
              <span className="main-navigation__burger-box--inner"></span>
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
