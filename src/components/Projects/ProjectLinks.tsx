import React from 'react';
import { GitFork, ExternalLink } from 'lucide-react';

interface ProjectLinksProps {
  githubUrl: string;
  homepageUrl?: string;
}

export const ProjectLinks: React.FC<ProjectLinksProps> = ({ githubUrl, homepageUrl }) => {
  return (
    <div className="flex space-x-2">
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
      >
        <GitFork className="h-5 w-5" />
      </a>
      {homepageUrl && (
        <a
          href={homepageUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
        >
          <ExternalLink className="h-5 w-5" />
        </a>
      )}
    </div>
  );
};