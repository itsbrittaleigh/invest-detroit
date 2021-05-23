import React from 'react';

const TimelineItem = ({ item }) => (
  <li className={`timeline-item timeline-item--${item.type} ${item.className ? item.className : ''}`}>
    <span className="timeline-item__subtitle">{item.subtitle}</span>
    <span className="timeline-item__title">{item.title}</span>
    {item.partners && (
      <>
        <span>Partners</span>
        <ul>
          {item.partners.map((partner) => (
            <li key={partner}>{partner}</li>
          ))}
        </ul>
      </>
    )}
    {item.image && (
      <img className="timeline-item__image" src={item.image.src} alt={item.image.alt} />
    )}
  </li>
);

export default TimelineItem;
