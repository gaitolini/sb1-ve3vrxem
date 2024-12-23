import React from 'react';

interface ProjectTopicsProps {
  topics: string[];
}

export const ProjectTopics: React.FC<ProjectTopicsProps> = ({ topics }) => {
  if (topics.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {topics.map((topic) => (
        <span
          key={topic}
          className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
        >
          {topic}
        </span>
      ))}
    </div>
  );
};