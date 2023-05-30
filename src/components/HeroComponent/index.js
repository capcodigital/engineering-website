import React from 'react';
import Wrapper from './styles';

function HeroComponent() {
  return (
    <Wrapper>
      <div data-testid="hero-container" className="hero-container">
        <div>
          Hero img goes here
        </div>
      </div>
    </Wrapper>
  );
}

export default HeroComponent;
