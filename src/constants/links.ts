import { Github, Linkedin, Instagram } from 'lucide-react';

export const SOCIAL_LINKS = [
  {
    icon: Github,
    href: 'https://github.com/gaitolini',
    label: 'GitHub'
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/andersongaitolini/',
    label: 'LinkedIn'
  },
  {
    icon: Instagram,
    href: 'https://www.instagram.com/gaitolini/',
    label: 'Instagram'
  }
] as const;