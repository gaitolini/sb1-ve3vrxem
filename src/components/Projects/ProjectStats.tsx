import React from 'react';
import { Star } from 'lucide-react';

interface ProjectStatsProps {
  starCount: number;
  language: string;
}

export const ProjectStats: React.FC<ProjectStatsProps> = ({ starCount, language }) => {
  return (
    <div className="flex items-center space-x-4">
      <span className="flex items-center text-gray-600 dark:text-gray-400">
        <Star className="h-4 w-4 mr-1" />
        {starCount}
      </span>
      {language && (
        <span className="flex items-center text-gray-600 dark:text-gray-400">
          <span className="w-3 h-3 rounded-full bg-blue-500 mr-1"></span>
          {language}
        </span>
      )}
    </div>
  );
};