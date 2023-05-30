import React from 'react';
import ContentComponent from '../../components/ContentComponent';
import Wrapper from './styles';
import { data } from '../../data/data';

function ExploreSection() {
  return (
    <Wrapper>
      <div className="explore-container">
        <p className="explore-title">Explore Capco Engineering</p>
        <div className="explore-content">
          {data.map(({ subtitle, content }) => (
            <div className="explore-item">
              <ContentComponent subtitle={subtitle} content={content} />
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

export default ExploreSection;
