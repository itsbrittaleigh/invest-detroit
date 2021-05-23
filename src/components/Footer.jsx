import React from 'react';
import investDetroitLogo from '../assets/images/logo__invest-detroit--light.svg';
import investDetroitLogoDark from '../assets/images/logo__invest-detroit--dark.svg';
import facebookLogo from '../assets/images/icon__facebook.svg';
import instagramLogo from '../assets/images/icon__instagram.svg';
import twitterLogo from '../assets/images/icon__twitter.svg';
import facebookLogoBlack from '../assets/images/icon__facebook--black.svg';
import instagramLogoBlack from '../assets/images/icon__instagram--black.svg';
import twitterLogoBlack from '../assets/images/icon__twitter--black.svg';

const Footer = ({ className }) => {
  return (
    <footer class={`footer ${className}`}>
      <div className="wrapper">
        <a href="https://investdetroit.com">
          {className !== 'inverted' ? (
            <img className="footer__logo" src={investDetroitLogo} alt="Invest Detroit logo" />
          ) : (
            <img className="footer__logo" src={investDetroitLogoDark} alt="Invest Detroit logo" />
          )}
        </a>
        <div className="contact">
          <div className="flex-wrapper">
            <div className="col-lt">
              <address>
                <span>600 Renaissance Center</span>
                <span>Suite 1710</span>
                <span>Detroit, MI 48243</span>
              </address>
              <a
                href="mailto:info@investdetroit.com"
                rel="noreferrer"
                target="_blank"
              >
                info@investdetroit.com
              </a>
              <a href="tel:+13132596368">313.259.6368</a>
            </div>
            <div className="social-icons">
              <a
                href="https://www.facebook.com/InvestDetroitCDFI/"
                rel="noreferrer"
                target="_blank"
              >
                {className !== 'inverted' ? (
                  <img src={facebookLogo} alt="Facebook logo icon" />
                ) : (
                  <img src={facebookLogoBlack} alt="Facebook logo icon" />
                )}
              </a>
              <a
                href="https://www.instagram.com/investdet/?hl=en"
                rel="noreferrer"
                target="_blank"
              >
                {className !== 'inverted' ? (
                  <img src={instagramLogo} alt="Instagram logo icon" />
                ) : (
                  <img src={instagramLogoBlack} alt="Instagram logo icon" />
                )}
              </a>
              <a
                href="https://twitter.com/investdet?lang=en"
                rel="noreferrer"
                target="_blank"
              >
                {className !== 'inverted' ? (
                  <img src={twitterLogo} alt="Twitter logo icon" />
                ) : (
                  <img src={twitterLogoBlack} alt="Twitter logo icon" />
                )}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
