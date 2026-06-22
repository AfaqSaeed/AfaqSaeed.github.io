import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { PROJECTS, THESES } from '../constants';
import { Project, Thesis } from '../types';
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, Youtube, Cpu, Calendar, Building, Mail, FileText, Github } from 'lucide-react';

type DetailData = Project | Thesis;

interface ActionLink {
  label: string;
  url: string;
  kind: 'github' | 'video' | 'report' | 'publication' | 'contact';
  external: boolean;
}

const isThesisData = (data: DetailData): data is Thesis => 'type' in data;

const toYoutubeWatchUrl = (url: string) => {
  const embedMatch = url.match(/(?:youtube\.com|youtube-nocookie\.com)\/embed\/([^?&/]+)/);
  const shortMatch = url.match(/youtu\.be\/([^?&/]+)/);

  if (embedMatch?.[1]) {
    return `https://www.youtube.com/watch?v=${embedMatch[1]}`;
  }

  if (shortMatch?.[1]) {
    return `https://www.youtube.com/watch?v=${shortMatch[1]}`;
  }

  return url;
};

const contactUrlFor = (title: string) =>
  `mailto:afaqsaeed60@gmail.com?subject=${encodeURIComponent(`Question about ${title}`)}`;

const buildActions = (data: DetailData): ActionLink[] => {
  const actions: ActionLink[] = [];

  if (data.githubUrl) {
    actions.push({
      label: 'View GitHub Repository',
      url: data.githubUrl,
      kind: 'github',
      external: true,
    });
  }

  if (data.videoUrl) {
    actions.push({
      label: 'Watch Project Demo',
      url: toYoutubeWatchUrl(data.videoUrl),
      kind: 'video',
      external: true,
    });
  }

  if (data.reportUrl) {
    actions.push({
      label: 'Read Technical Report',
      url: data.reportUrl,
      kind: 'report',
      external: true,
    });
  }

  if (data.publicationUrl) {
    actions.push({
      label: 'View Publication',
      url: data.publicationUrl,
      kind: 'publication',
      external: true,
    });
  }

  if (!actions.length) {
    actions.push({
      label: 'Ask About This Project',
      url: contactUrlFor(data.title),
      kind: 'contact',
      external: false,
    });
  }

  return actions;
};

const renderActionIcon = (kind: ActionLink['kind']) => {
  switch (kind) {
    case 'github':
      return <Github size={18} />;
    case 'video':
      return <Youtube size={18} />;
    case 'report':
    case 'publication':
      return <FileText size={18} />;
    case 'contact':
      return <Mail size={18} />;
    default:
      return <ExternalLink size={18} />;
  }
};

const DetailSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="space-y-4">
    <h2 className="text-2xl font-bold text-white">{title}</h2>
    {children}
  </section>
);

const BulletList: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="space-y-3">
    {items.map((item, index) => (
      <li key={index} className="flex items-start gap-3 text-gray-300 leading-relaxed">
        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-neon-green shrink-0"></span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

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

  const isThesis = isThesisData(data);
  const overview = isThesis ? data.description : data.overview;
  const organization = isThesis ? data.institution : data.organization;
  const period = data.period;
  const contributions = isThesis ? data.keyContributions : data.myRole;
  const actions = buildActions(data);

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
            
            {(organization || period) && (
              <div className="flex flex-wrap gap-6 text-gray-400">
                {organization && (
                  <div className="flex items-center gap-2">
                    <Building size={18} className="text-neon-green" />
                    <span>{organization}</span>
                  </div>
                )}
                {period && (
                  <div className="flex items-center gap-2">
                    <Calendar size={18} className="text-neon-green" />
                    <span>{period}</span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* Image */}
              <div className="relative group rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                {data.imageUrl ? (
                  <img 
                    src={data.imageUrl} 
                    alt={data.title} 
                    className="w-full h-auto object-cover aspect-video"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="aspect-video bg-white/5 flex items-center justify-center px-6 text-center">
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-gray-500">
                      Project visual unavailable
                    </span>
                  </div>
                )}
              </div>

              <DetailSection title="Overview">
                <p className="text-lg text-gray-300 leading-relaxed">{overview}</p>
              </DetailSection>

              {!isThesis && data.problem && (
                <DetailSection title="Problem">
                  <p className="text-lg text-gray-300 leading-relaxed">{data.problem}</p>
                </DetailSection>
              )}

              {contributions && contributions.length > 0 && (
                <DetailSection title={isThesis ? 'Key Contributions' : 'My Contribution'}>
                  <BulletList items={contributions} />
                </DetailSection>
              )}

              {!isThesis && data.approach && data.approach.length > 0 && (
                <DetailSection title="Technical Approach">
                  <BulletList items={data.approach} />
                </DetailSection>
              )}

              {!isThesis && data.results && data.results.length > 0 && (
                <DetailSection title="Results">
                  <BulletList items={data.results} />
                </DetailSection>
              )}

              {/* Video Embedding */}
              {data.videoUrl && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Youtube className="text-red-500" size={24} />
                    <h2 className="text-2xl font-bold text-white">Project Demo</h2>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-video">
                    <iframe 
                      src={data.videoUrl}
                      title={`${data.title} video`}
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
              {(organization || period) && (
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-4">
                  <h3 className="text-white font-bold">Organization and Period</h3>
                  <div className="space-y-3 text-sm text-gray-400">
                    {organization && (
                      <div>
                        <div className="text-xs uppercase tracking-wider text-neon-green/80 mb-1">Organization</div>
                        <div>{organization}</div>
                      </div>
                    )}
                    {period && (
                      <div>
                        <div className="text-xs uppercase tracking-wider text-neon-green/80 mb-1">Period</div>
                        <div>{period}</div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Technologies */}
              {!isThesis && data.technologies && data.technologies.length > 0 && (
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

              {/* Actions */}
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-4">
                <h3 className="text-white font-bold">Project Evidence</h3>
                <div className="space-y-3">
                  {actions.map(action => (
                    <a
                      key={`${action.kind}-${action.url}`}
                      href={action.url}
                      target={action.external ? '_blank' : undefined}
                      rel={action.external ? 'noopener noreferrer' : undefined}
                      className="w-full bg-neon-green text-black px-4 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(212,255,85,0.4)] transition-all text-sm"
                    >
                      {action.label}
                      {renderActionIcon(action.kind)}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  );
};

export default ProjectDetail;
