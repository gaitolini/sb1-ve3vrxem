export interface Education {
  period: string;
  institution: string;
  degree: string;
  details?: string;
  type: 'academic' | 'certification';
}

export interface Experience {
  period: string;
  company: string;
  role: string;
  description: string;
  keywords: string[];
}

export interface Skill {
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
}

export interface SkillCategory {
  title: string;
  icon: JSX.Element;
  skills: Skill[];
}