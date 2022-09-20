import React from 'react';
import NavBar from '../../components/NavBar';
import HeroComponent from '../../components/HeroComponent';
import ExploreSection from '../ExploreSection';
import OpenRoleSection from '../OpenRoleSection';
import EventSection from '../EventsSection';
import CultureSection from '../CultureSection';
import ContactSection from '../ContactSection';
import FooterComponent from '../../components/FooterComponent';

function Home() {
  return (
    <div>
        <NavBar />
        <HeroComponent />
        <ExploreSection />
        <OpenRoleSection/>
        <EventSection/>
        <CultureSection />
        <ContactSection />
        <FooterComponent />
    </div>
  )
}

export default Home