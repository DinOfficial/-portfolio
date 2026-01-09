import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative bg-hack-panel border border-hack-green/20 hover:border-hack-green transition-all duration-300 overflow-hidden"
    >
      {/* Decorative Corners */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-hack-green opacity-50" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-hack-green opacity-50" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-hack-green opacity-50" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-hack-green opacity-50" />

      {/* Image Container with Glitch Overlay */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-hack-green/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay" />
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 bg-hack-bg/90 px-3 py-1 text-xs font-mono text-hack-neon border-t border-r border-hack-neon/30">
          TYPE: {project.category.toUpperCase()}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-tech text-white mb-2 group-hover:text-hack-green transition-colors flex justify-between items-center">
          {project.title}
          <span className="text-[10px] text-hack-muted border border-hack-muted/30 px-1 rounded opacity-0 group-hover:opacity-100">ID: {project.id}</span>
        </h3>
        
        <p className="text-hack-muted text-sm font-mono mb-4 line-clamp-3 leading-relaxed">
          {project.description}
        </p>
        
        <div className="border-t border-hack-muted/10 pt-4 mt-auto">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="text-[10px] px-2 py-1 bg-hack-bg text-hack-green border border-hack-green/20 uppercase">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Hover Scanline */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-hack-green/10 to-transparent h-[200%] w-full -translate-y-full group-hover:translate-y-full transition-transform duration-1000 ease-in-out pointer-events-none z-20" />
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-hack-bg relative">
      <div className="container mx-auto px-6">
        <div className="mb-16 border-l-4 border-hack-green pl-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-tech font-bold text-white mb-2">PROJECT ARCHIVE</h2>
            <p className="text-hack-neon font-mono text-sm">
              // DECRYPTING PORTFOLIO DATA...
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        <div className="text-center mt-16">
           <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center px-8 py-4 bg-transparent border border-hack-muted hover:border-hack-green text-hack-muted hover:text-white transition-all font-mono text-sm group">
             <span>ACCESS_GITHUB_REPO()</span>
             <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
           </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;