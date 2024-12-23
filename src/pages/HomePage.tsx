import React from 'react';
import MainLayout from '../layouts/MainLayout';
import HomeContent from '../components/Home/HomeContent';

const HomePage: React.FC = () => {
  return (
    <MainLayout>
      <HomeContent />
    </MainLayout>
  );
};

export default HomePage;