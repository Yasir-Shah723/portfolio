import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiBootstrap,
  SiGit,
  SiGithub,
  SiVite,
  SiTailwindcss,
  SiFigma,
} from 'react-icons/si';
import { FaCode } from 'react-icons/fa';

export const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: SiReact,
    color: '#00f0ff',
    skills: [
      { name: 'HTML5', icon: SiHtml5, level: 92, color: '#e34f26' },
      { name: 'CSS3', icon: SiCss, level: 90, color: '#1572b6' },
      { name: 'JavaScript', icon: SiJavascript, level: 88, color: '#f7df1e' },
      { name: 'React', icon: SiReact, level: 85, color: '#61dafb' },
      { name: 'Bootstrap', icon: SiBootstrap, level: 82, color: '#7952b3' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 80, color: '#38bdf8' },
    ],
  },
  {
    id: 'programming',
    title: 'Programming',
    icon: FaCode,
    color: '#7c3aed',
    skills: [
      { name: 'C++', icon: FaCode, level: 75, color: '#00599c' },
      { name: 'JavaScript ES6+', icon: SiJavascript, level: 88, color: '#f7df1e' },
      { name: 'React Patterns', icon: SiReact, level: 82, color: '#61dafb' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    icon: SiGithub,
    color: '#ff2d95',
    skills: [
      { name: 'Git & GitHub', icon: SiGithub, level: 85, color: '#ffffff' },
      { name: 'Vite', icon: SiVite, level: 80, color: '#646cff' },
      { name: 'Figma', icon: SiFigma, level: 70, color: '#f24e1e' },
      { name: 'VS Code', icon: SiGithub, level: 90, color: '#007acc' },
    ],
  },
];

export const highlightTech = ['React', 'C++'];
