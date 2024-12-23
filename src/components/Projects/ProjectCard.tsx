import React from 'react';
import { GitHubRepo } from '../../types/github';
import { Star, GitFork, ExternalLink } from 'lucide-react';
import { ProjectStats } from './ProjectStats';
import { ProjectTopics } from './ProjectTopics';
import { ProjectLinks } from './ProjectLinks';

interface ProjectCardProps {
  project: GitHubRepo;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 flex flex-col h-full">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {project.name}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
        {project.description}
      </p>
      <div className="space-y-4">
        <ProjectTopics topics={project.topics} />
        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
          <ProjectStats 
            starCount={project.stargazers_count} 
            language={project.language} 
          />
          <ProjectLinks 
            githubUrl={project.html_url} 
            homepageUrl={project.homepage} 
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;