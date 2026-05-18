import { lazy, Suspense } from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';

const Skills = lazy(() => import('../components/sections/Skills'));
const Services = lazy(() => import('../components/sections/Services'));
const Projects = lazy(() => import('../components/sections/Projects'));
const Resume = lazy(() => import('../components/sections/Resume'));
const Contact = lazy(() => import('../components/sections/Contact'));

function SectionFallback() {
  return <div className="section-padding section-container h-32 animate-pulse glass rounded-2xl opacity-30" />;
}

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Suspense fallback={<SectionFallback />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Services />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Resume />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Contact />
      </Suspense>
    </main>
  );
}
