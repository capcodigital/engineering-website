import React from 'react';
import ContentComponent from '../../components/ContentComponent';
import { eventData } from '../../data/data';
import Wrapper from './styles';

function EventSection() {
  return (
    <Wrapper>
      <div className="events-container">
        <div className="events-text">
          { eventData.map(({ subtitle, content }) => (
            <ContentComponent subtitle={subtitle} content={content} color="black" noBtn />
          ))}
        </div>
        <div className="events-image">
          Image goes here
        </div>
      </div>
    </Wrapper>
  );
}

export default EventSection;
