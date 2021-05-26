import React from 'react';

const WhatsNext = () => (
  <section id="whats-next" className="section bg--light-gray">
    <div className="wrapper wrapper--flex">
      <div className="col--lt indented">
        <div className="section__heading section__heading--with-bar">
          <div className="heading-icon__container heading-icon__container--light">
            <p className="heading-icon" style={{ marginLeft: '0' }}>5</p>
          </div>
          <h2>What's Next</h2>
        </div>
        <div style={{ maxWidth: '670px' }}>
          <p className="lead color--dark-gray">
            As we expand our tools to help support the short-term economic recovery of our small
            businesses and startups, we continue to maintain our focus on long-term growth and programs
            strategies that support sustainability.
          </p>
          <p className="arial text--small color--dark-gray">
            Our four lines of business—real estate, small business,
            commercial and industrial, and venture investment—have proven to be an effective group of
            tools that support catalytic growth, as well as job creation and increased density. Our goal in the
            coming years is to further expand our work to identify and fill critical gaps in support, to increase
            equitable opportunity in Detroit’s growth, and to influence public policy in support of these
            efforts.
          </p>
          <p className="arial text--small color--dark-gray weight--bold">
            Invest Detroit is built on a history of learning, adapting, and collaborating, and it is this
            spirit that will also drive our future.
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

export default WhatsNext;
