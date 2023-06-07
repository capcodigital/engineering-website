import React from 'react';
import NavBar from '../../components/NavBar';
import HeroComponent from '../../components/HeroComponent';
import ExploreSection from '../../ExploreSection/container';
import OpenRoleSection from '../../OpenRoleSection/container';
import EventSection from '../../EventsSection/container';
import CultureSection from '../../CultureSection/container';
import ContactSection from '../../ContactSection/container';
import FooterComponent from '../../components/FooterComponent';

function Home() {
  return (
    <div>
      <NavBar />
      <HeroComponent />
      <ExploreSection />
      <OpenRoleSection />
      <EventSection />
      <CultureSection />
      <ContactSection />
      <FooterComponent />
    </div>
  );
}

export default Home;
