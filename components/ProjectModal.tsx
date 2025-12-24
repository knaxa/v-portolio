
import React from 'react';
import { X, Github, ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Helper to ensure video URLs are in embed format
  const getEmbedUrl = (url: string) => {
    if (!url) return '';
    
    // YouTube
    const ytMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/))([\w-]{11})/);
    if (ytMatch && ytMatch[1]) {
      return `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1&mute=1`;
    }

    // Vimeo
    const vimeoMatch = url.match(/(?:vimeo\.com\/|player\.vimeo\.com\/video\/)(\d+)/);
    if (vimeoMatch && vimeoMatch[1]) {
      return `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1&muted=1`;
    }

    return url;
  };

  const embedUrl = project.videoUrl ? getEmbedUrl(project.videoUrl) : null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-md animate-in fade-in duration-300"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-5xl max-h-[90vh] glass rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col animate-in fade-in zoom-in duration-300">
        {/* Header/Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-[110] p-2 glass rounded-full hover:bg-white/10 transition-colors shadow-lg"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className="flex-1 overflow-y-auto">
          {/* Media Header */}
          <div className="w-full bg-black aspect-video relative group">
            {embedUrl ? (
              <iframe 
                src={embedUrl}
                title={project.title}
                className="w-full h-full border-none"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              />
            ) : (
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" 
              />
            )}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-10 lg:p-12">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 pb-10 border-b border-white/5">
              <div className="space-y-4">
                <span className="inline-flex px-3 py-1 rounded-md bg-blue-500/10 text-blue-400 text-[10px] mono font-bold uppercase tracking-[0.2em] border border-blue-500/20">
                  {project.category}
                </span>
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white">
                  {project.title.toUpperCase()}
                </h2>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-xl glass border-white/10 hover:bg-white/5 transition-all font-bold text-sm mono"
                  >
                    <Github size={18} /> SRC_CODE
                  </a>
                )}
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-500 transition-all font-bold text-sm mono shadow-lg shadow-blue-900/40"
                  >
                    <ExternalLink size={18} /> LIVE_DEMO
                  </a>
                )}
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h3 className="text-xs font-black uppercase tracking-widest text-blue-500 mono mb-4 flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-blue-500"></span> Technical Overview
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg font-medium italic">
                    {project.description}
                  </p>
                </div>
                <div>
                  <h3 className="text-xs font-black uppercase tracking-widest text-blue-500 mono mb-4 flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-blue-500"></span> Architecture & Implementation
                  </h3>
                  <div className="text-gray-400 leading-relaxed space-y-4">
                    {project.longDescription.split('\n').map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-10">
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-6 mono">Core Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-gray-400 hover:text-white hover:border-blue-500/30 transition-all cursor-default">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="px-6">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-2 mono">Primary Role</h4>
                  <p className="text-sm text-blue-400 font-bold mono">LEAD_SYSTEMS_ARCHITECT</p>
                </div>

                <div className="px-6">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-2 mono">Status</h4>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                    <span className="text-sm text-gray-300 mono uppercase">Production Ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
