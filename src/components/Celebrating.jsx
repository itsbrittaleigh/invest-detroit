import React from 'react';

const Celebrating = () => (
  <section id="celebrating-25-years" className="section section--dark">
    <div className="wrapper wrapper--flex">
      <div className="col--lt indented">
        <div className="section__heading section__heading--with-bar">
          <div className="heading-icon__container">
            <p className="heading-icon" style={{ marginLeft: '0' }}>1</p>
          </div>
          <h2>Celebrating 25 Years</h2>
        </div>
        <div style={{ maxWidth: '670px' }}>
          <p className="lead">
            In 2020, Invest Detroit celebrated 25 years of commitment to sparking economic growth in
            Detroit.
          </p>
          <p className="arial color--gray text--small">
            It has been a journey of relationship-building, learning, refining, and expanding our
            team, our work, and our impact. From Downtown and the surrounding area to 10 neighborhoods
            across the city, the key to these 25 years has been partnership—working with other investors,
            developers, small business owners, and entrepreneurs from all backgrounds; our philanthropic
            and corporate community; and government agencies. Together, we have learned how to bring
            each other’s strengths to each project to ensure that these opportunities are not only successful,
            but inclusive, equitable, and supportive of the residents who call our city home.
          </p>
          <p className="arial color--gray text--small">
            Last year was a challenging year for all of us, and this spirit of partnership at the heart of our
            mission has never more important. As we look forward to a new year with hope and optimism,
            we believe it also important to reflect on our past and remember the projects and people that
            have helped form a strong foundation from which to build. Now moving into a phase of recovery,
            we still have our eyes on growth.
          </p>
          <p className="arial color--yellow text--small weight--bold">
            And with the support of our partners and community over
            these past 25 years, we know we can’t fail.
          </p>
        </div>
      </div>
      <div className="col--rt">
        <div className="section-icon__container">
          <img src="https://placekitten.com/100/100" alt="Kitten" className="section-icon" />
        </div>
      </div>
    </div>
  </section>
);

export default Celebrating;
