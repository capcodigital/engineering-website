import React from 'react';
import ContentComponent from '../../components/ContentComponent';
import roleData from '../data/data';
import Wrapper from '../styles';

function OpenRoleSection() {
  return (
    <Wrapper>
      <div className="openroles-container">
        <div className="openroles-image">
          Image goes here
        </div>
        <div className="openroles-text">
          { roleData.map(({ subtitle, content }) => (
            <ContentComponent subtitle={subtitle} content={content} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

export default OpenRoleSection;
