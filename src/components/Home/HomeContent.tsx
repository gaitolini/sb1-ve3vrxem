import React from 'react';
import Hero from './Hero';
import About from './About';
import ProjectsSection from '../Projects/ProjectsSection';
import ServicesSection from '../Services/ServicesSection';
import ContactSection from '../Contact/ContactSection';

const HomeContent: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <ProjectsSection />
      <ServicesSection />
      <ContactSection />
    </>
  );
};

export default HomeContent;