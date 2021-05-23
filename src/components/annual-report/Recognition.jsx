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
                    <span className="member__title">{member.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Element>
          <Element name="staff">
            <div className="recognition-section">
              <h3>Invest Detroit Staff</h3>
              <ul>
                {Members.Board.map((member) => (
                  <li>
                    <span className="member__name">{member.name}</span>
                    <span className="member__title">{member.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Element>
          <Element name="cde-board">
            <div className="recognition-section">
              <h3>CDE Board Members</h3>
              <ul>
                {Members.Board.map((member) => (
                  <li>
                    <span className="member__name">{member.name}</span>
                    <span className="member__title">{member.title}</span>
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
