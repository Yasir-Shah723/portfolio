import { MdDevices, MdWeb, MdDesignServices, MdRocketLaunch } from 'react-icons/md';

export const services = [
  {
    id: 1,
    title: 'Responsive Web Design',
    description:
      'Mobile-first layouts that adapt flawlessly across phones, tablets, and desktops — with performance and accessibility baked in.',
    icon: MdDevices,
    gradient: 'from-cyan-500/20 to-blue-600/10',
    accent: '#00f0ff',
  },
  {
    id: 2,
    title: 'React Frontend Development',
    description:
      'Scalable component-driven UIs with React, hooks, and modern patterns — clean state management and reusable architecture.',
    icon: MdWeb,
    gradient: 'from-violet-500/20 to-purple-600/10',
    accent: '#7c3aed',
  },
  {
    id: 3,
    title: 'UI/UX Focused Interfaces',
    description:
      'Interfaces that feel premium: thoughtful typography, micro-interactions, glassmorphism, and visual hierarchy that guides users.',
    icon: MdDesignServices,
    gradient: 'from-pink-500/20 to-rose-600/10',
    accent: '#ff2d95',
  },
  {
    id: 4,
    title: 'Modern Landing Pages',
    description:
      'High-converting hero sections, animated CTAs, and brand-forward storytelling — built to impress recruiters and clients alike.',
    icon: MdRocketLaunch,
    gradient: 'from-emerald-500/20 to-teal-600/10',
    accent: '#10b981',
  },
];
