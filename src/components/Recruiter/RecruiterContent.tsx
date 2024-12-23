import React from 'react';
import RecruiterHero from './RecruiterHero';
import ProfessionalSummary from './ProfessionalSummary';
import VideoSection from './VideoSection';
import Timeline from './Timeline';
import Skills from './Skills';
import Education from './Education';
import FeaturedProject from './FeaturedProject';
import ResumeDownload from './ResumeDownload';

const RecruiterContent: React.FC = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 transition-colors">
      <RecruiterHero />
      <ProfessionalSummary />
      <VideoSection />
      <Timeline />
      <Skills />
      <Education />
      <FeaturedProject />
      <ResumeDownload />
    </div>
  );
};

export default RecruiterContent;