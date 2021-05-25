import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, Element } from 'react-scroll';
import TimelineItem from './TimelineItem';
import TimelineItems from '../data/TimelineItems';

const Timeline = () => (
  <section id="timeline" className="section" style={{ backgroundColor: '#F5F5F5', paddingBottom: '0' }}>
    <div className="wrapper">
      <div className="section__heading">
        <div className="heading-icon__container heading-icon__container--light">
          <img src="https://placekitten.com/50/50" alt="Kitten" className="heading-icon" />
        </div>
        <h2>Through the Years</h2>
      </div>
      <div className="indented-section" style={{ maxWidth: '600px' }}>
        <p className="lead">
          From a single fund to a dynamic organization with numerous proven strategies and programs,
          follow Invest Detroit’s evolution through some of the projects, milestones, and key partnerships
          along our 25-year history.
        </p>
        <nav className="timeline-nav">
          <ul>
            <li className="color--yellow">Funds and Loans</li>
            <li className="color--blue">Partnerships</li>
            <li className="color--teal">Project Completions</li>
            <li className="color--dark-gray">Organization Milestones</li>
            <li className="color--red">ID Ventures Highlights</li>
          </ul>
        </nav>
      </div>
    </div>

    <div style={{ position: 'relative' }}>
      <nav className="sticky-side-nav sticky-side-nav--timeline">
        <ul>
          <li>
            <ScrollLink activeClass="is-active" to="2020" spy smooth offset={-100} duration={500}>
              2020
            </ScrollLink>
          </li>
          <li>
            <ScrollLink activeClass="is-active" to="2019" spy smooth offset={-100} duration={500}>
              2019
            </ScrollLink>
          </li>
          <li>
            <ScrollLink activeClass="is-active" to="2018" spy smooth offset={-100} duration={500}>
              2108
            </ScrollLink>
          </li>
          <li>
            <ScrollLink activeClass="is-active" to="2017" spy smooth offset={-100} duration={500}>
              2017
            </ScrollLink>
          </li>
          <li>
            <ScrollLink activeClass="is-active" to="2016" spy smooth offset={-100} duration={500}>
              2016
            </ScrollLink>
          </li>
          <li>
            <ScrollLink activeClass="is-active" to="2014" spy smooth offset={-100} duration={500}>
              2014
            </ScrollLink>
          </li>
          <li>
            <ScrollLink activeClass="is-active" to="2013" spy smooth offset={-100} duration={500}>
              2013
            </ScrollLink>
          </li>
          <li>
            <ScrollLink activeClass="is-active" to="2012" spy smooth offset={-100} duration={500}>
              2012
            </ScrollLink>
          </li>
          <li>
            <ScrollLink activeClass="is-active" to="2011" spy smooth offset={-100} duration={500}>
              2011
            </ScrollLink>
          </li>
          <li>
            <ScrollLink activeClass="is-active" to="2010" spy smooth offset={-100} duration={500}>
              2010
            </ScrollLink>
          </li>
          <li>
            <ScrollLink activeClass="is-active" to="2009" spy smooth offset={-100} duration={500}>
              2009
            </ScrollLink>
          </li>
          <li>
            <ScrollLink activeClass="is-active" to="2008" spy smooth offset={-100} duration={500}>
              2008
            </ScrollLink>
          </li>
          <li>
            <ScrollLink activeClass="is-active" to="2005" spy smooth offset={-100} duration={500}>
              2005
            </ScrollLink>
          </li>
          <li>
            <ScrollLink activeClass="is-active" to="2003" spy smooth offset={-100} duration={500}>
              2003
            </ScrollLink>
          </li>
          <li>
            <ScrollLink activeClass="is-active" to="2001" spy smooth offset={-100} duration={500}>
              2001
            </ScrollLink>
          </li>
          <li>
            <ScrollLink activeClass="is-active" to="1997" spy smooth offset={-100} duration={500}>
              1997
            </ScrollLink>
          </li>
          <li>
            <ScrollLink activeClass="is-active" to="1996" spy smooth offset={-100} duration={500}>
              1996
            </ScrollLink>
          </li>
          <li>
            <ScrollLink activeClass="is-active" to="1995" spy smooth offset={-100} duration={500}>
              1995
            </ScrollLink>
          </li>
        </ul>
      </nav>

      <div className="years">
        <Element name="2020" className="section timeline-section">
            <div className="wrapper">
              <p className="subtitle timeline__subtitle text--center">25th Year</p>
              <h3 className="timeline__year">2020</h3>
              <div className="timeline-item--annual-report">
                <Link to="/2020-annual-report">
                  <span>
                    2020
                    <strong>Annual Report</strong>
                    <span>Key Metrics, Recognition, and Financials</span>
                  </span>
                </Link>
              </div>
              <ul className="timeline">
                {TimelineItems[2020].map((item) => (
                  <TimelineItem item={item} />
                ))}
              </ul>
            </div>
        </Element>
        
        <Element name="2019" className="section timeline-section">
            <div className="wrapper">
              <p className="subtitle timeline__subtitle text--center">24th Year</p>
              <h3 className="timeline__year">2019</h3>
              <ul className="timeline">
                {TimelineItems[2019].map((item) => (
                  <TimelineItem item={item} />
                ))}
              </ul>
            </div>
        </Element>

        <Element name="2018" className="section timeline-section">
            <div className="wrapper">
              <p className="subtitle timeline__subtitle text--center">23rd Year</p>
              <h3 className="timeline__year">2018</h3>
              <ul className="timeline">
                {TimelineItems[2018].map((item) => (
                  <TimelineItem item={item} />
                ))}
              </ul>
            </div>
        </Element>

        <Element name="2017" className="section timeline-section">
            <div className="wrapper">
              <p className="subtitle timeline__subtitle text--center">22nd Year</p>
              <h3 className="timeline__year">2017</h3>
              <ul className="timeline">
                {TimelineItems[2017].map((item) => (
                  <TimelineItem item={item} />
                ))}
              </ul>
            </div>
        </Element>

        <Element name="2016" className="section timeline-section">
            <div className="wrapper">
              <p className="subtitle timeline__subtitle text--center">21st Year</p>
              <h3 className="timeline__year">2016</h3>
              <ul className="timeline">
                {TimelineItems[2016].map((item) => (
                  <TimelineItem item={item} />
                ))}
              </ul>
            </div>
        </Element>

        <Element name="2014" className="section timeline-section">
            <div className="wrapper">
              <p className="subtitle timeline__subtitle text--center">19th Year</p>
              <h3 className="timeline__year">2014</h3>
              <ul className="timeline">
                {TimelineItems[2014].map((item) => (
                  <TimelineItem item={item} />
                ))}
              </ul>
            </div>
        </Element>

        <Element name="2013" className="section timeline-section">
            <div className="wrapper">
              <p className="subtitle timeline__subtitle text--center">18th Year</p>
              <h3 className="timeline__year">2013</h3>
              <ul className="timeline">
                {TimelineItems[2013].map((item) => (
                  <TimelineItem item={item} />
                ))}
                <span className="timeline__break-fix" />
                <span className="timeline__break-fix" />
              </ul>
            </div>
        </Element>

        <Element name="2012" className="section timeline-section">
            <div className="wrapper">
              <p className="subtitle timeline__subtitle text--center">17th Year</p>
              <h3 className="timeline__year">2012</h3>
              <ul className="timeline">
                {TimelineItems[2012].map((item) => (
                  <TimelineItem item={item} />
                ))}
              </ul>
            </div>
        </Element>

        <Element name="2011" className="section timeline-section">
            <div className="wrapper">
              <p className="subtitle timeline__subtitle text--center">16th Year</p>
              <h3 className="timeline__year">2011</h3>
              <ul className="timeline">
                {TimelineItems[2011].map((item) => (
                  <TimelineItem item={item} />
                ))}
              </ul>
            </div>
        </Element>

        <Element name="2010" className="section timeline-section">
            <div className="wrapper">
              <p className="subtitle timeline__subtitle text--center">15th Year</p>
              <h3 className="timeline__year">2010</h3>
              <ul className="timeline">
                {TimelineItems[2010].map((item) => (
                  <TimelineItem item={item} />
                ))}
              </ul>
            </div>
        </Element>

        <Element name="2009" className="section timeline-section">
            <div className="wrapper">
              <p className="subtitle timeline__subtitle text--center">14th Year</p>
              <h3 className="timeline__year">2009</h3>
              <ul className="timeline">
                {TimelineItems[2009].map((item) => (
                  <TimelineItem item={item} />
                ))}
              </ul>
            </div>
        </Element>

        <Element name="2008" className="section timeline-section">
            <div className="wrapper">
              <p className="subtitle timeline__subtitle text--center">13th Year</p>
              <h3 className="timeline__year">2008</h3>
              <ul className="timeline">
                {TimelineItems[2008].map((item) => (
                  <TimelineItem item={item} />
                ))}
                <span className="timeline__break-fix" />
              </ul>
            </div>
        </Element>

        <Element name="2005" className="section timeline-section">
            <div className="wrapper">
              <p className="subtitle timeline__subtitle text--center">10th Year</p>
              <h3 className="timeline__year">2005</h3>
              <ul className="timeline">
                {TimelineItems[2005].map((item) => (
                  <TimelineItem item={item} />
                ))}
              </ul>
            </div>
        </Element>

        <Element name="2003" className="section timeline-section">
            <div className="wrapper">
              <p className="subtitle timeline__subtitle text--center">8th Year</p>
              <h3 className="timeline__year">2003</h3>
              <ul className="timeline">
                {TimelineItems[2003].map((item) => (
                  <TimelineItem item={item} />
                ))}
              </ul>
            </div>
        </Element>

        <Element name="2001" className="section timeline-section">
            <div className="wrapper">
              <p className="subtitle timeline__subtitle text--center">6th Year</p>
              <h3 className="timeline__year">2001</h3>
              <ul className="timeline">
                {TimelineItems[2001].map((item) => (
                  <TimelineItem item={item} />
                ))}
              </ul>
            </div>
        </Element>

        <Element name="1997" className="section timeline-section">
            <div className="wrapper">
              <p className="subtitle timeline__subtitle text--center">3rd Year</p>
              <h3 className="timeline__year">1997</h3>
              <ul className="timeline">
                {TimelineItems[1997].map((item) => (
                  <TimelineItem item={item} />
                ))}
                <span className="timeline__break-fix" />
              </ul>
            </div>
        </Element>

        <Element name="1996" className="section timeline-section">
            <div className="wrapper">
              <p className="subtitle timeline__subtitle text--center">2nd Year</p>
              <h3 className="timeline__year">1996</h3>
              <ul className="timeline">
                {TimelineItems[1996].map((item) => (
                  <TimelineItem item={item} />
                ))}
                <span className="timeline__break-fix" />
              </ul>
            </div>
        </Element>

        <Element name="1995" className="section timeline-section">
          <div className="wrapper">
            <p className="subtitle timeline__subtitle text--center">1st Year</p>
            <h3 className="timeline__year">1995</h3>
            <ul className="timeline">
              {TimelineItems[1995].map((item) => (
                <TimelineItem item={item} />
              ))}
            </ul>
          </div>
        </Element>
      </div>
    </div>
  </section>
);

export default Timeline;
