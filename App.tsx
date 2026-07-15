import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ParticleBackground from './components/ParticleBackground';
import Section from './components/Section';
import ProjectCard from './components/ProjectCard';
import ChatBot from './components/ChatBot';
import { PROFILE, PROJECTS, EXPERIENCE, SOCIALS, THESES } from './constants';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import ProjectDetail from './components/ProjectDetail';
import { LanguageProvider, LanguageSwitch, useLanguage } from './i18n';
import { DE_EXPERIENCE, DE_PROFILE, DE_PROJECTS, DE_THESES } from './content.de';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const PortfolioHome = () => {
  const { language, t } = useLanguage();
  const profile = language === 'de' ? DE_PROFILE : PROFILE;
  const projects = language === 'de' ? DE_PROJECTS : PROJECTS;
  const experience = language === 'de' ? DE_EXPERIENCE : EXPERIENCE;
  const theses = language === 'de' ? DE_THESES : THESES;
  const [activeSection, setActiveSection] = useState('home');
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  // Monitor online status
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Simple scroll spy to update active section in header
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'thesis', 'projects', 'experience', 'contact'];
      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < 300) {
            setActiveSection(sec);
            break;
          }
        }
      }
      if (window.scrollY < 100) setActiveSection('home');
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen text-gray-200 font-sans selection:bg-neon-green selection:text-black">
      <ParticleBackground />

      {/* Offline Banner */}
      {!isOnline && (
        <div className="fixed top-0 left-0 w-full bg-red-600/90 text-white text-center py-2 z-[60] text-sm font-bold backdrop-blur-sm animate-pulse">
          ⚠ {language === 'de' ? 'Sie sind derzeit offline. Der KI-Assistent und einige Inhalte sind eventuell nicht verfügbar.' : 'You are currently offline. The AI Assistant and some assets may not be available.'}
        </div>
      )}
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full bg-dark-bg/80 backdrop-blur-md border-b border-white/10 z-40 transition-all duration-300 ${!isOnline ? 'mt-9' : 'mt-0'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-xl font-bold tracking-tighter text-neon-green cursor-pointer hover:text-white transition-colors"
          >
            AFAQ.<span className="text-white">AI</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            {['About', 'Thesis', 'Projects', 'Experience', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className={`hover:text-neon-green transition-colors ${activeSection === item.toLowerCase() ? 'text-neon-green' : 'text-gray-400'}`}
              >
                {t(item)}
              </button>
            ))}
            <LanguageSwitch />
          </div>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="relative pt-40 pb-20 px-6 flex flex-col items-center justify-center text-center z-10">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            <span className="block text-white mb-2">Muhammad Afaq Saeed</span>
            <span className="bg-gradient-to-r from-neon-green to-emerald-400 bg-clip-text text-transparent">
              {profile.title}
            </span>
          </h1>
          <div className="h-1 w-24 bg-neon-green mx-auto rounded-full mb-8 shadow-[0_0_15px_rgba(212,255,85,0.6)]"></div>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
             <button onClick={() => scrollTo('projects')} className="bg-neon-green text-black px-6 py-3 rounded-lg font-bold shadow-[0_0_20px_rgba(212,255,85,0.4)] hover:shadow-[0_0_30px_rgba(212,255,85,0.6)] hover:-translate-y-1 transition-all duration-300">
               {t('View Projects')}
             </button>
             <button onClick={() => scrollTo('contact')} className="border border-neon-green text-neon-green px-6 py-3 rounded-lg font-bold hover:bg-neon-green/10 hover:-translate-y-1 transition-all duration-300">
               {t('Contact Me')}
             </button>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-6xl mx-auto px-6 space-y-32 pb-32">
        
        {/* About Section */}
        <Section id="about" className="space-y-6">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold text-gray-100">{t('About Me')}</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gray-700 to-transparent"></div>
          </div>
          <div className="grid md:grid-cols-1 gap-8 text-lg text-gray-300 leading-relaxed border-l-4 border-gray-600 pl-6 bg-white/5 p-6 rounded-r-xl">
             {profile.about.map((paragraph, idx) => (
               <p key={idx}>{paragraph}</p>
             ))}
          </div>
        </Section>

        {/* Thesis Section */}
        <Section id="thesis">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-100">{t('Thesis Work')}</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gray-700 to-transparent"></div>
          </div>
          <div className="space-y-24">
            {theses.map((thesis, index) => (
              <div key={thesis.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                <Link to={`/project/${thesis.id}`} className="w-full lg:w-1/2 relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-neon-green to-emerald-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative bg-dark-bg rounded-2xl overflow-hidden border border-white/10">
                    <img 
                      src={thesis.imageUrl} 
                      alt={thesis.title} 
                      className="w-full h-auto object-cover aspect-video group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    {thesis.logoUrl && (
                      <div className="absolute top-4 right-4 bg-white p-2 rounded-lg shadow-xl">
                        <img src={thesis.logoUrl} alt={t('Institution Logo')} className="h-8 w-auto object-contain" referrerPolicy="no-referrer" />
                      </div>
                    )}
                  </div>
                </Link>
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="inline-block px-3 py-1 rounded-full bg-neon-green/10 border border-neon-green/20 text-neon-green text-xs font-bold uppercase tracking-wider">
                    {t(`${thesis.type} Thesis`)}
                  </div>
                  <Link to={`/project/${thesis.id}`} className="block group">
                    <h3 className="text-2xl font-bold text-white leading-tight group-hover:text-neon-green transition-colors">{thesis.title}</h3>
                  </Link>
                  <div className="flex items-center gap-3 text-gray-400 font-medium">
                    <span>{thesis.institution}</span>
                    <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                    <span className="text-neon-green/80 font-mono text-sm">{thesis.period}</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{thesis.description}</p>
                  <ul className="space-y-3">
                    {thesis.keyContributions?.map((contribution, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neon-green shrink-0"></span>
                        {contribution}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Projects Section */}
        <Section id="projects">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-100">{t('Featured Projects')}</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gray-700 to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Section key={project.id} delay={index * 100}>
                <ProjectCard project={project} />
              </Section>
            ))}
          </div>
        </Section>

        {/* Experience Section */}
        <Section id="experience">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-100">{t('Experience')}</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gray-700 to-transparent"></div>
          </div>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-neon-green/50 before:to-transparent">
            {experience.map((job, index) => (
              <div key={job.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                
                {/* Timeline Dot */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#1e1e1e] bg-neon-green shadow-[0_0_10px_#d4ff55] absolute left-0 md:static shrink-0 md:mx-auto z-10"></div>
                
                {/* Content */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 border border-white/10 p-6 rounded-xl shadow-lg hover:border-neon-green/30 transition-colors duration-300">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                    <h3 className="font-bold text-lg text-white">{job.role}</h3>
                    <span className="text-neon-green text-sm font-mono bg-neon-green/10 px-2 py-1 rounded">{job.period}</span>
                  </div>
                  <h4 className="text-gray-400 font-medium mb-3">{job.company}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Contact Section */}
        <Section id="contact" className="text-center">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-10 rounded-2xl border border-gray-700 shadow-2xl relative overflow-hidden">
            {/* Decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-neon-green/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <h2 className="text-3xl font-bold mb-8 text-white">{t('Get In Touch')}</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {SOCIALS.map((link) => (
                <a 
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white/5 border border-white/10 rounded-lg hover:bg-neon-green hover:text-black hover:border-neon-green transition-all duration-300 font-semibold group"
                >
                  {t(link.label)} <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </a>
              ))}
            </div>
            
            <p className="mt-10 text-gray-500 text-sm">
              © {new Date().getFullYear()} {profile.name}. {t('All rights reserved.')}
            </p>
          </div>
        </Section>
      </main>

      {/* Floating Chat Bot */}
      <ChatBot />
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<PortfolioHome />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
