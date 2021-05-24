import React from 'react';
import { Link, Element } from 'react-scroll';
import Members from '../../data/RecognizedMembers';

const Recognition = () => (
  <section id="about" className="section">
    <div className="wrapper">
      <div className="section__heading">
        <div className="heading-icon__container heading-icon__container--light">
          <img src="https://placekitten.com/50/50" alt="Kitten" className="heading-icon" />
        </div>
        <h2>Recognition</h2>
      </div>
      <div style={{ display: 'flex' }}>
        <nav className="sticky-side-nav">
          <ul>
            <li>
              <Link activeClass="is-active" to="board" spy smooth offset={-100} duration={500}>
                Board
              </Link>
            </li>
            <li>
              <Link activeClass="is-active" to="staff" spy smooth duration={500}>
                Staff
              </Link>
            </li>
            <li>
              <Link activeClass="is-active" to="cde-board" spy smooth duration={500}>
                CDE Board Members
              </Link>
            </li>
            <li>
              <Link activeClass="is-active" to="investment" spy smooth duration={500}>
                Investment Committee
              </Link>
            </li>
            <li>
              <Link activeClass="is-active" to="oversight" spy smooth duration={500}>
                Oversight Committee
              </Link>
            </li>
            <li>
              <Link activeClass="is-active" to="advisory" spy smooth duration={500}>
                Advisory Committee
              </Link>
            </li>
            <li>
              <Link activeClass="is-active" to="capital" spy smooth duration={500}>
                First Capital Fund Committee
              </Link>
            </li>
            <li>
              <Link activeClass="is-active" to="innovate" spy smooth duration={500}>
                Detroit Innovate Committee
              </Link>
            </li>
            <li>
              <Link activeClass="is-active" to="donor" spy smooth duration={500}>
                Donor List
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <Element name="board">
            <div className="recognition-section" style={{ paddingTop: '0' }}>
              <h3>Invest Detroit Board</h3>
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
            </div>
          </Element>
          <Element name="staff">
            <div className="recognition-section">
              <h3>Invest Detroit Staff</h3>
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
            </div>
          </Element>
          <Element name="cde-board">
            <div className="recognition-section">
              <h3>CDE Board Members</h3>
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
            </div>
          </Element>
          <Element name="investment">
            <div className="recognition-section">
              <h3>Investment Committee</h3>
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
            </div>
          </Element>
          <Element name="oversight">
            <div className="recognition-section">
              <h3>Oversight Committee</h3>
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
            </div>
          </Element>
          <Element name="advisory">
            <div className="recognition-section">
              <h3>Advisory Committee</h3>
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
            </div>
          </Element>
          <Element name="capital">
            <div className="recognition-section">
              <h3>First Capital Fund Committee</h3>
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
            </div>
          </Element>
          <Element name="innovate">
            <div className="recognition-section">
              <h3>Detroit Innovate Committee</h3>
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
            </div>
          </Element>
          <Element name="donor">
            <div className="recognition-section">
              <h3>Donor List</h3>
              <p>Special thanks to our community of philanthropic supporters who make this critical work possible.</p>
              <ul>
                {Members.Donor.map((member) => (
                  <li>
                    <span className="member__name">{member.name}</span>
                    {member.title && (
                      <span className="member__title">{member.title}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </Element>
        </div>
      </div>
    </div>
  </section>
);

export default Recognition;
