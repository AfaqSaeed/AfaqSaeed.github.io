import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative bg-white/5 border border-white/10 p-6 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)]">
      {/* Robotic Corner Effect using pseudo-element logic in a real div for animation control */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-[3px] border-l-[3px] border-neon-green rounded-tl-md opacity-60 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-glow" />
      
      {/* Decorative corner bottom right */}
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-[2px] border-r-[2px] border-gray-500 rounded-br-md opacity-30 group-hover:opacity-60 transition-opacity duration-300" />

      <h3 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-neon-green transition-colors">
        {project.title}
      </h3>
      <p className="text-gray-300 leading-relaxed text-sm md:text-base">
        {project.description}
      </p>
      
      {/* Tech stack tags if they existed (optional extension) */}
      {project.technologies && (
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map(tech => (
            <span key={tech} className="text-xs font-mono text-neon-green border border-neon-green/30 px-2 py-0.5 rounded">
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
