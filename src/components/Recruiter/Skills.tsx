import React from 'react';
import { skillCategories } from './data/skills';
import { Skill } from './types';

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <span className="text-yellow-400">
      {'⭐'.repeat(rating)}
    </span>
  );
};

const SkillItem: React.FC<{ skill: Skill }> = ({ skill }) => {
  return (
    <div className="flex items-center">
      <span className="text-gray-700 dark:text-gray-300 w-32">{skill.name}</span>
      <StarRating rating={skill.rating} />
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Principais Competências
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-blue-600 dark:text-blue-400">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill, kidx) => (
                  <SkillItem key={kidx} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;