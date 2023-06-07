/* eslint-disable react/button-has-type */
import React from 'react';
import Wrapper from '../styles';

function ContactSection() {
  return (
    <Wrapper>
      <div className="contact-container">
        <p className="contact-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
        <div className="contact-buttons">
          <button className="contact-button contact-button--join">Join Today</button>
          <button className="contact-button contact-button--contact">Contact Us</button>
        </div>
      </div>
    </Wrapper>
  );
}

export default ContactSection;
