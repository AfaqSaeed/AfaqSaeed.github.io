import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../types';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link 
      to={`/project/${project.id}`}
      className="group relative bg-white/5 border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:-translate-y-2 hover:bg-white/10 hover:border-neon-green/40 hover:shadow-[0_0_30px_rgba(212,255,85,0.15)] block"
    >
      {/* Image Preview */}
      {project.imageUrl && (
        <div className="h-48 w-full overflow-hidden border-b border-white/10">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
            referrerPolicy="no-referrer"
          />
        </div>
      )}

      <div className="p-6 space-y-4">
        {/* Robotic Corner Effect */}
        <div className="absolute top-0 left-0 w-6 h-6 border-t-[3px] border-l-[3px] border-neon-green rounded-tl-md opacity-60 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-glow" />
        
        <h3 className="text-xl font-bold text-gray-100 group-hover:text-neon-green transition-colors leading-tight">
          {project.title}
        </h3>
        
        <p className="text-gray-400 leading-relaxed text-sm line-clamp-3">
          {project.description}
        </p>
        
        {/* Tech stack tags */}
        {project.technologies && (
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map(tech => (
              <span key={tech} className="text-[10px] font-mono text-neon-green/80 border border-neon-green/20 px-2 py-0.5 rounded uppercase tracking-wider">
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-[10px] font-mono text-gray-500 px-1 py-0.5">+{project.technologies.length - 3}</span>
            )}
          </div>
        )}

        <div className="pt-2 flex items-center gap-2 text-neon-green text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
          View Details <ArrowRight size={16} />
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;