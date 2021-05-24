import React, { useState } from 'react';

const About = () => {
  const [activeFocusIndex, setActiveFocusIndex] = useState(0);
  const [activeGoalIndex, setActiveGoalIndex] = useState(0);

  return (
    <section id="about" className="section">
      <div className="wrapper">
        <div className="section__heading">
          <div className="heading-icon__container heading-icon__container--light">
            <img src="https://placekitten.com/50/50" alt="Kitten" className="heading-icon" />
          </div>
          <h2>About Invest Detroit</h2>
        </div>
        <h3>
          A Stronger Detroit through
          <br />
          <strong>4 Areas of Focus</strong>
        </h3>
        <div className="info-scroller">
          <nav className="info-scroller__navigation">
            <ul className="swiper-pagination" id="swiper__focus-pagination">
              <li
                className={`info-scroller__item-1 ${activeFocusIndex === 0 ? 'is-active' : ''}`}
                onClick={() => setActiveFocusIndex(0)}
              >
                <span className="info-scroller__item-marker">1</span>
                Real Estate
              </li>
              <li
                className={`info-scroller__item-2 ${activeFocusIndex === 1 ? 'is-active' : ''}`}
                onClick={() => setActiveFocusIndex(1)}
              >
                <span className="info-scroller__item-marker">2</span>
                Small Business
              </li>
              <li
                className={`info-scroller__item-3 ${activeFocusIndex === 2 ? 'is-active' : ''}`}
                onClick={() => setActiveFocusIndex(2)}
              >
                <span className="info-scroller__item-marker">3</span>
                Commercial & Industrial
              </li>
              <li
                className={`info-scroller__item-4 ${activeFocusIndex === 3 ? 'is-active' : ''}`}
                onClick={() => setActiveFocusIndex(3)}
              >
                <span className="info-scroller__item-marker">4</span>
                Venture Investments
              </li>
            </ul>
          </nav>
          {activeFocusIndex === 0 && (
            <div className="info-scroller__content">
              <img className="info-scroller__image" src="https://placekitten.com/200/200" alt="" />
              <div>
                <h4 className="info-scroller__heading color--yellow">Real Estate</h4>
                <p>
                  Our real estate program supports both new construction and renovation projects
                  and encompasses our Strategic Neighborhood Fund (SNF) investment. While we
                  continue to support projects in the Greater Downtown, it is through SNF that we
                  expand our tools to mixed-use buildings in neighborhood catalytic commercial
                  corridors. We support both large projects led by experienced developers that will
                  bring affordable housing to a neighborhood, as well as projects led by emerging,
                  local developers looking to build their portfolio—helping to ensure equitable
                  opportunity for neighborhood development.
                </p>
              </div>
            </div>
          )}
          {activeFocusIndex === 1 && (
            <div className="info-scroller__content">
              <img className="info-scroller__image" src="https://placekitten.com/200/200" alt="" />
              <div>
                <h4 className="info-scroller__heading color--red">Small Business</h4>
                <p>
                  Invest Detroit’s small business program is committed to supporting both new and
                  existing locally-owned businesses with loans that support operational and
                  property needs. Our small business team is deeply embedded in Detroit’s small
                  business ecosystem and dedicates an enormous number of hours each year to provide
                  ongoing technical assistance to help our small business owners refine their plans
                  and achieve their business goals.
                </p>
              </div>
            </div>
          )}
          {activeFocusIndex === 2 && (
            <div className="info-scroller__content">
              <img className="info-scroller__image" src="https://placekitten.com/200/200" alt="" />
              <div>
                <h4 className="info-scroller__heading color--blue">Commercial & Industrial</h4>
                <p>
                  Invest Detroit’s Commercial and Industrial program supports larger businesses
                  with the potential to provide a significant number of jobs for Detroit residents.
                  We continue to work with the City of Detroit, Detroit Economic Growth
                  Corporation, and other partners to a create a strategy to better attract these
                  large job-creators.
                </p>
              </div>
            </div>
          )}
          {activeFocusIndex === 3 && (
            <div className="info-scroller__content">
              <img className="info-scroller__image" src="https://placekitten.com/200/200" alt="" />
              <div>
                <h4 className="info-scroller__heading color--teal">Venture Investments</h4>
                <p>
                  ID Ventures scales promising early-stage ventures into thriving companies that
                  help support the state’s economy, provide jobs to local talent, and bolster
                  Michigan’s growing startup community.
                </p>
              </div>
            </div>
          )}
        </div>
    
        <div className="info-scroller">
          <h3>
            Working Together to Achieve
            <br />
            <strong>4 Primary Goals</strong>
          </h3>
          <nav className="info-scroller__navigation">
            <ul className="swiper-pagination" id="swiper__goal-pagination">
              <li
                className={`info-scroller__item-1 ${activeGoalIndex === 0 ? 'is-active' : ''}`}
                onClick={() => setActiveGoalIndex(0)}
              >
                <span className="info-scroller__item-marker">1</span>
                Strengthen Neighborhoods
              </li>
              <li
                className={`info-scroller__item-2 ${activeGoalIndex === 1 ? 'is-active' : ''}`}
                onClick={() => setActiveGoalIndex(1)}
              >
                <span className="info-scroller__item-marker">2</span>
                Increase Density
              </li>
              <li
                className={`info-scroller__item-3 ${activeGoalIndex === 2 ? 'is-active' : ''}`}
                onClick={() => setActiveGoalIndex(2)}
              >
                <span className="info-scroller__item-marker">3</span>
                Grow Job Opportunities
              </li>
              <li
                className={`info-scroller__item-4 ${activeGoalIndex === 3 ? 'is-active' : ''}`}
                onClick={() => setActiveGoalIndex(3)}
              >
                <span className="info-scroller__item-marker">4</span>
                Support Inclusivity
              </li>
            </ul>
          </nav>
          {activeGoalIndex === 0 && (
            <div className="info-scroller__content">
              <img className="info-scroller__image" src="https://placekitten.com/200/200" alt="" />
              <div>
                <h4 className="info-scroller__heading color--yellow">Strengthen Neighborhoods</h4>
                <p>
                  Our neighborhoods approach focuses our lending tools, relationships, and
                  expertise on targeted neighborhood locations that will catalyze and inspire
                  further growth in surrounding areas.  We work with residents to identify
                  priorities and developers who are community-minded. Partnering with the City of
                  Detroit, neighborhood leaders and associations, among others, we are working to
                  bring proven tools into ten targeted neighborhoods through the Strategic
                  Neighborhood Fund.
                </p>
              </div>
            </div>
          )}
          {activeGoalIndex === 1 && (
            <div className="info-scroller__content">
              <img className="info-scroller__image" src="https://placekitten.com/200/200" alt="" />
              <div>
                <h4 className="info-scroller__heading color--red">Increase Density</h4>
                <p>
                  Increasing the population of Detroit by attracting and retaining residents means
                  less vacant buildings, safer neighborhoods, and a stronger local economy. We
                  prioritize mixed-use projects that provide affordable housing so that residents
                  at all income levels have a place to call home.
                </p>
              </div>
            </div>
          )}
          {activeGoalIndex === 2 && (
            <div className="info-scroller__content">
              <img className="info-scroller__image" src="https://placekitten.com/200/200" alt="" />
              <div>
                <h4 className="info-scroller__heading color--blue">Grow Job Opportunities</h4>
                <p>
                  Supporting businesses over a range of sectors helps to create a wide range of
                  opportunities for Detroit residents at all stages of their education or career
                  paths. Local businesses can provide jobs to residents without cars, cut down on
                  commute times for busy parents, promote walkable neighborhoods, and improve the
                  local economy.  Our programs work together to support local entrepreneurs who are
                  creating new jobs or retaining existing jobs within the city.
                </p>
              </div>
            </div>
          )}
          {activeGoalIndex === 3 && (
            <div className="info-scroller__content">
              <img className="info-scroller__image" src="https://placekitten.com/200/200" alt="" />
              <div>
                <h4 className="info-scroller__heading color--teal">Support Inclusivity</h4>
                <p>
                  Equitable access is a thread that runs through all of our programs and goals. Our
                  vision is a Detroit for everyone with multi-ethnic and mixed-income neighborhoods
                  where all residents feel safe and welcome and have access to resources and
                  opportunities. Through our real estate work we ensure that we maintain
                  percentages of affordable units in multi-family housing, and we work to identify
                  and support developers of color.  In our small business and venture investment
                  work, we actively seek out entrepreneurs that are persons of color, immigrants,
                  female, or Detroit residents.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
