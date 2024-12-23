import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import HomeAssistantPage from '../components/HomeAssistant/HomeAssistantPage';
import RecruiterPage from '../pages/RecruiterPage';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home-assistant" element={<HomeAssistantPage />} />
      <Route path="/recruiter" element={<RecruiterPage />} />
    </Routes>
  );
};

export default AppRoutes;