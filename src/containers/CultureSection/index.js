/* eslint-disable global-require */
import React from 'react';
import Wrapper from './styles';

function CultureSection() {
  return (
    <Wrapper>
      <div className="culture-container">
        <p className="culture-title">You’re in good company</p>
        <p className="culture-subtitle">Meet some of the team that help to create our team culture and ...</p>
        <div className="culture-employees">
          <div className="culture-employee">
            <img
              className="employee-image"
              src={require('../../images/default-team-member.jpg')}
              alt="team member"
            />
          </div>
          <div className="culture-employee">
            <img
              className="employee-image"
              src={require('../../images/default-team-member.jpg')}
              alt="team member"
            />
          </div>
          <div className="culture-employee">
            <img
              className="employee-image"
              src={require('../../images/default-team-member.jpg')}
              alt="team member"
            />
          </div>
          <div className="culture-employee">
            <img
              className="employee-image"
              src={require('../../images/default-team-member.jpg')}
              alt="team member"
            />
          </div>
          <div className="culture-employee">
            <img
              className="employee-image"
              src={require('../../images/default-team-member.jpg')}
              alt="team member"
            />
          </div>
          <div className="culture-employee">
            <img
              className="employee-image"
              src={require('../../images/default-team-member.jpg')}
              alt="team member"
            />
          </div>
          <div className="culture-employee">
            <img
              className="employee-image"
              src={require('../../images/default-team-member.jpg')}
              alt="team member"
            />
          </div>
          <div className="culture-employee">
            <img
              className="employee-image"
              src={require('../../images/default-team-member.jpg')}
              alt="team member"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default CultureSection;
