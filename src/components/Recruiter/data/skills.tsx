import React from 'react';
import { Code2, Database, GitBranch, Brain, Package } from 'lucide-react';
import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    title: "Tecnologias",
    icon: <Code2 className="h-6 w-6" />,
    skills: [
      { name: "Delphi", rating: 5 },
      { name: "SQL", rating: 5 },
      { name: "GO Lang", rating: 3 },
      { name: "Javascript", rating: 4 },
      { name: "Python", rating: 3 },
      { name: "HTML", rating: 4 },
      { name: "CSS", rating: 4 }
    ]
  },
  {
    title: "Componentes Delphi",
    icon: <Package className="h-6 w-6" />,
    skills: [
      { name: "ACBr", rating: 5 },
      { name: "Boss", rating: 5 },
      { name: "Firedac", rating: 5 },
      { name: "Horse", rating: 5 },
      { name: "Indy", rating: 4 },
      { name: "JEDI", rating: 5 },
      { name: "Fortes Report", rating: 4 },
      { name: "Fast Report", rating: 4 },
      { name: "Report Builder", rating: 4 },
      { name: "Datasnap", rating: 5 },
      { name: "Skia4Delphi", rating: 4 },
      { name: "Unidac", rating: 5 },
      { name: "Dev Express", rating: 5 }
    ]
  },
  {
    title: "Metodologias",
    icon: <GitBranch className="h-6 w-6" />,
    skills: [
      { name: "Scrum", rating: 3 },
      { name: "Kanban", rating: 3 },
      { name: "PMBOK", rating: 3 },
      { name: "SOLID", rating: 5 },
      { name: "Clean Code", rating: 5 },
      { name: "Exagonal", rating: 2 }
    ]
  },
  {
    title: "Banco de Dados",
    icon: <Database className="h-6 w-6" />,
    skills: [
      { name: "SQL Server", rating: 5 },
      { name: "Oracle", rating: 5 },
      { name: "PostgreSQL", rating: 4 },
      { name: "Firebase", rating: 3 },
      { name: "SQLite", rating: 5 },
      { name: "DynamoDB", rating: 3 }
    ]
  },
  {
    title: "Soft Skills",
    icon: <Brain className="h-6 w-6" />,
    skills: [
      { name: "Liderança", rating: 3 },
      { name: "Comunicação", rating: 4 },
      { name: "Foco", rating: 4 }
    ]
  }
];