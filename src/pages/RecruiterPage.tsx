import React from 'react';
import MainLayout from '../layouts/MainLayout';
import RecruiterContent from '../components/Recruiter/RecruiterContent';

const RecruiterPage: React.FC = () => {
  return (
    <MainLayout>
      <RecruiterContent />
    </MainLayout>
  );
};

export default RecruiterPage;