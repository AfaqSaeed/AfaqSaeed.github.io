import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { PROJECTS, THESES } from '../constants';
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, Youtube, Cpu, Calendar, Building } from 'lucide-react';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Find project or thesis
  const project = PROJECTS.find(p => p.id === id);
  const thesis = THESES.find(t => t.id === id);
  const data = project || thesis;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!data) {
    return (
      <div className="min-h-screen bg-dark-bg flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-3xl font-bold mb-4 text-white">Project Not Found</h2>
        <button 
          onClick={() => navigate('/')}
          className="text-neon-green hover:underline flex items-center gap-2"
        >
          <ArrowLeft size={20} /> Back to Home
        </button>
      </div>
    );
  }

  const isThesis = 'type' in data;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-dark-bg text-gray-200 pb-20"
    >
      {/* Header */}
      <nav className="fixed top-0 left-0 w-full bg-dark-bg/80 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold tracking-tighter text-neon-green hover:text-white transition-colors">
            AFAQ.<span className="text-white">AI</span>
          </Link>
          <Link to="/" className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-neon-green transition-colors">
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>
        </div>
      </nav>

      <main className="pt-32 max-w-5xl mx-auto px-6">
        <div className="space-y-12">
          {/* Title & Meta */}
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-4">
              {isThesis ? (
                <span className="px-3 py-1 rounded-full bg-neon-green/10 border border-neon-green/20 text-neon-green text-xs font-bold uppercase tracking-wider">
                  {data.type} Thesis
                </span>
              ) : (
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-bold uppercase tracking-wider">
                  Project
                </span>
              )}
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {data.title}
            </h1>
            
            <div className="flex flex-wrap gap-6 text-gray-400">
              {isThesis && (
                <div className="flex items-center gap-2">
                  <Building size={18} className="text-neon-green" />
                  <span>{data.institution}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-neon-green" />
                <span>{'period' in data ? data.period : 'Completed'}</span>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* Image */}
              <div className="relative group rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src={data.imageUrl} 
                  alt={data.title} 
                  className="w-full h-auto object-cover aspect-video"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Description */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">Overview</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {data.description}
                </p>
              </div>

              {/* Video Embedding */}
              {data.videoUrl && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Youtube className="text-red-500" size={24} />
                    <h2 className="text-2xl font-bold text-white">Video Presentation</h2>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-video">
                    <iframe 
                      src={data.videoUrl}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    ></iframe>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Technologies */}
              {'technologies' in data && data.technologies && (
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-4">
                  <div className="flex items-center gap-2 text-white font-bold">
                    <Cpu size={20} className="text-neon-green" />
                    <h3>Technologies</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {data.technologies.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-dark-bg border border-white/10 rounded-lg text-xs font-mono text-gray-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Contributions (for Thesis) */}
              {isThesis && data.keyContributions && (
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-4">
                  <h3 className="text-white font-bold">Key Contributions</h3>
                  <ul className="space-y-3">
                    {data.keyContributions.map((c, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neon-green shrink-0"></span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Action */}
              <div className="space-y-4">
                <button className="w-full bg-neon-green text-black py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(212,255,85,0.4)] transition-all">
                  Request Full Report <ExternalLink size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  );
};

export default ProjectDetail;
