import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link, Element } from 'react-scroll';
import Members from '../../data/RecognizedMembers';

const Recognition = () => (
  <section id="recognition" className="section">
    <div className="wrapper">
      <ScrollAnimation animateOnce={true} animateIn="fadeIn">
        <div className="section__heading">
          <div className="heading-icon__container heading-icon__container--light">
            <p className="heading-icon">2</p>
          </div>
          <h2>Recognition</h2>
        </div>
      </ScrollAnimation>
      <div style={{ display: 'flex' }}>
        <nav className="sticky-side-nav">
          <ul>
            <li>
              <Link activeClass="is-active" to="board" spy smooth offset={-100} duration={500}>
                Board
              </Link>
            </li>
            <li>
              <Link activeClass="is-active" to="staff" spy smooth offset={-100} duration={500}>
                Staff
              </Link>
            </li>
            <li>
              <Link activeClass="is-active" to="cde-board" spy smooth offset={-100} duration={500}>
                CDE Board Members
              </Link>
            </li>
            <li>
              <Link activeClass="is-active" to="investment" spy smooth offset={-100} duration={500}>
                Investment Committee
              </Link>
            </li>
            <li>
              <Link activeClass="is-active" to="oversight" spy smooth offset={-100} duration={500}>
                Oversight Committee
              </Link>
            </li>
            <li>
              <Link activeClass="is-active" to="advisory" spy smooth offset={-100} duration={500}>
                Advisory Committee
              </Link>
            </li>
            <li>
              <Link activeClass="is-active" to="capital" spy smooth offset={-100} duration={500}>
                First Capital Fund Committee
              </Link>
            </li>
            <li>
              <Link activeClass="is-active" to="innovate" spy smooth offset={-100} duration={500}>
                Detroit Innovate Committee
              </Link>
            </li>
            <li>
              <Link activeClass="is-active" to="donor" spy smooth offset={-100} duration={500}>
                Donor List
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <Element name="board">
            <div className="recognition-section" style={{ paddingTop: '0' }}>
              <ScrollAnimation animateOnce={true} animateIn="fadeIn">
                <h3>Invest Detroit Board</h3>
              </ScrollAnimation>
              <ScrollAnimation animateOnce={true} animateIn="fadeIn">
                <ul>
                  {Members.Board.map((member) => (
                    <li>
                      <span className="member__name">{member.name}</span>
                      {member.title && (
                        <span className="member__title">{member.title}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </ScrollAnimation>
            </div>
          </Element>
          <Element name="staff">
            <div className="recognition-section">
              <ScrollAnimation animateOnce={true} animateIn="fadeIn">
                <h3>Invest Detroit Staff</h3>
              </ScrollAnimation>
              <ScrollAnimation animateOnce={true} animateIn="fadeIn">
                <ul>
                  {Members.Staff.map((member) => (
                    <li>
                      <span className="member__name">{member.name}</span>
                      {member.title && (
                        <span className="member__title">{member.title}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </ScrollAnimation>
            </div>
          </Element>
          <Element name="cde-board">
            <div className="recognition-section">
              <ScrollAnimation animateOnce={true} animateIn="fadeIn">
                <h3>CDE Board Members</h3>
              </ScrollAnimation>
              <ScrollAnimation animateOnce={true} animateIn="fadeIn">
                <ul>
                  {Members.CDE.map((member) => (
                    <li>
                      <span className="member__name">{member.name}</span>
                      {member.title && (
                        <span className="member__title">{member.title}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </ScrollAnimation>
            </div>
          </Element>
          <Element name="investment">
            <div className="recognition-section">
              <ScrollAnimation animateOnce={true} animateIn="fadeIn">
                <h3>Investment Committee</h3>
              </ScrollAnimation>
              <ScrollAnimation animateOnce={true} animateIn="fadeIn">
                <ul>
                  {Members.Investment.map((member) => (
                    <li>
                      <span className="member__name">{member.name}</span>
                      {member.title && (
                        <span className="member__title">{member.title}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </ScrollAnimation>
            </div>
          </Element>
          <Element name="oversight">
            <div className="recognition-section">
              <ScrollAnimation animateOnce={true} animateIn="fadeIn">
                <h3>Oversight Committee</h3>
              </ScrollAnimation>
              <ScrollAnimation animateOnce={true} animateIn="fadeIn">
                <ul>
                  {Members.Oversight.map((member) => (
                    <li>
                      <span className="member__name">{member.name}</span>
                      {member.title && (
                        <span className="member__title">{member.title}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </ScrollAnimation>
            </div>
          </Element>
          <Element name="advisory">
            <div className="recognition-section">
              <ScrollAnimation animateOnce={true} animateIn="fadeIn">
                <h3>Advisory Committee</h3>
              </ScrollAnimation>
              <ScrollAnimation animateOnce={true} animateIn="fadeIn">
                <ul>
                  {Members.Advisory.map((member) => (
                    <li>
                      <span className="member__name">{member.name}</span>
                      {member.title && (
                        <span className="member__title">{member.title}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </ScrollAnimation>
            </div>
          </Element>
          <Element name="capital">
            <div className="recognition-section">
              <ScrollAnimation animateOnce={true} animateIn="fadeIn">
                <h3>First Capital Fund Committee</h3>
              </ScrollAnimation>
              <ScrollAnimation animateOnce={true} animateIn="fadeIn">
                <ul>
                  {Members.Capital.map((member) => (
                    <li>
                      <span className="member__name">{member.name}</span>
                      {member.title && (
                        <span className="member__title">{member.title}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </ScrollAnimation>
            </div>
          </Element>
          <Element name="innovate">
            <div className="recognition-section">
              <ScrollAnimation animateOnce={true} animateIn="fadeIn">
                <h3>Detroit Innovate Committee</h3>
              </ScrollAnimation>
              <ScrollAnimation animateOnce={true} animateIn="fadeIn">
                <ul>
                  {Members.Innovate.map((member) => (
                    <li>
                      <span className="member__name">{member.name}</span>
                      {member.title && (
                        <span className="member__title">{member.title}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </ScrollAnimation>
            </div>
          </Element>
          <Element name="donor">
            <div className="recognition-section">
              <ScrollAnimation animateOnce={true} animateIn="fadeIn">
                <h3>Donor List</h3>
              </ScrollAnimation>
              <ScrollAnimation animateOnce={true} animateIn="fadeIn">
                <p>Special thanks to our community of philanthropic supporters who make this critical work possible.</p>
              </ScrollAnimation>
              <ScrollAnimation animateOnce={true} animateIn="fadeIn">
                <ul style={{ borderBottom: 'none' }}>
                  {Members.Donor.map((member) => (
                    <li>
                      <span className="member__name">{member.name}</span>
                      {member.title && (
                        <span className="member__title">{member.title}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </ScrollAnimation>
            </div>
          </Element>
        </div>
      </div>
    </div>
  </section>
);

export default Recognition;
