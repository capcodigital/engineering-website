import React from 'react';
import Wrapper from './styles';

function FooterComponent() {
  return (
    <Wrapper>
      <div data-testid="footer" className="footer-container">
        <div className="footer-circles">
          <div className="footer-circle">1</div>
          <div className="footer-circle">2</div>
          <div className="footer-circle">3</div>
          <div className="footer-circle">4</div>
        </div>
      </div>
    </Wrapper>
  );
}

export default FooterComponent;
