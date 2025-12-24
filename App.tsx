
import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, ArrowRight, Terminal, Hash, Coffee, Sparkles, Globe, Filter, Box,GraduationCap,BookOpen } from 'lucide-react';
import { PROJECTS, ARTICLES, HOSTED_LINKS, NAV_LINKS, EXPERIENCE, EDUCATION } from './constants';
import { Project } from './types';
import ProjectModal from './components/ProjectModal';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeFilter, setActiveFilter] = useState<'All' | 'AI/ML' | 'Backend' | 'Infrastructure'>('All');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const filteredProjects = activeFilter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen relative selection:bg-blue-500/30">
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-[60] transition-all duration-300 ${scrolled ? 'glass py-3' : 'py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-900/20">
              <Terminal size={20} className="text-white" />
            </div>
            <div>
              <span className="mono font-bold text-lg block leading-none text-white tracking-tight">Kyush Maskey</span>
              <span className="text-[10px] mono text-blue-400 uppercase tracking-widest font-bold">Personal Workspace</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <a key={link.name} href={link.href} className="text-xs mono font-bold text-gray-400 hover:text-white transition-all hover:translate-y-[-1px]">
                {link.name.toUpperCase()}
              </a>
            ))}
            <a href="mailto:kyushmaskey123@gmail.com" className="bg-white text-black px-6 py-2 rounded-lg text-xs font-black mono hover:bg-blue-400 transition-all">
              CONTACT
            </a>
          </div>

          <button className="md:hidden text-white p-2 glass rounded-lg border-white/10 relative z-[70]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[55] md:hidden transition-all duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/95 backdrop-blur-xl bg-grid"></div>
        <div className="relative h-full flex flex-col justify-center items-center p-6 space-y-8">
          {NAV_LINKS.map((link, idx) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMenuOpen(false)}
              className={`text-4xl font-black mono tracking-tighter text-white hover:text-blue-500 transition-all transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <span className="text-blue-500/50 mr-4">0{idx + 1}</span>
              {link.name.toUpperCase()}
            </a>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-green-500/10 text-green-400 text-[10px] mono border border-green-500/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                STATUS: Open to Work
              </div>
              {/*
              <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter">
                I build <span className="text-blue-500 italic">fast</span> <br /> 
                systems for <br />
                <span className="gradient-text underline decoration-2 underline-offset-8 decoration-white/10">smart data.</span>
              </h1>Hero Section */}
              
              <p className="text-xl text-gray-400 max-w-xl leading-relaxed font-medium">
                 AI Engineer helping businesses turn data and ideas into reliable, real-world AI products. I build scalable systems that ship.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a href="#projects" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-black mono text-sm flex items-center gap-2 transition-all">
                  PROJECTS.EXE <ArrowRight size={16} />
                </a>
                <div className="flex items-center gap-6 px-4">
                  <a href="https://github.com/KyushMaske" className="text-gray-500 hover:text-white transition-colors"><Github size={22} /></a>
                  <a href="https://www.linkedin.com/in/kyush-maskey/" className="text-gray-500 hover:text-white transition-colors"><Linkedin size={22} /></a>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-[450px] shrink-0">
              <div className="glass rounded-2xl overflow-hidden shadow-2xl border border-white/5">
                <div className="terminal-header">
                  <div className="dot bg-red-500/50"></div>
                  <div className="dot bg-yellow-500/50"></div>
                  <div className="dot bg-green-500/50"></div>
                  <span className="text-[10px] mono text-gray-500 ml-2">sys_info.sh — 80×24</span>
                </div>
                <div className="p-6 mono text-sm space-y-4">
                  <div className="text-blue-400">$ whoami</div>
                  <div className="text-gray-300">Name: Kyush Maskey<br/>Role: AI/ML & Backend Eng<br/>Focus: GenAI & ML Ops</div>
                  
                  <div className="text-blue-400">$ ls core_stack/</div>
                  <div className="grid grid-cols-2 gap-2 text-gray-400">
                    <span className="flex items-center gap-2 text-xs"><Hash size={12} className="text-blue-500"/> GenAI</span>
                    <span className="flex items-center gap-2 text-xs"><Hash size={12} className="text-blue-500"/> LLM</span>
                    <span className="flex items-center gap-2 text-xs"><Hash size={12} className="text-blue-500"/> NLP</span>
                    <span className="flex items-center gap-2 text-xs"><Hash size={12} className="text-blue-500"/> Computer Vision</span>
                    <span className="flex items-center gap-2 text-xs"><Hash size={12} className="text-blue-500"/> FastAPI</span>
                    <span className="flex items-center gap-2 text-xs"><Hash size={12} className="text-blue-500"/> Django</span>
                    <span className="flex items-center gap-2 text-xs"><Hash size={12} className="text-blue-500"/> CUDA</span>
                    <span className="flex items-center gap-2 text-xs"><Hash size={12} className="text-blue-500"/> Docker</span>
                  </div>
                  <div className="pt-2 animate-pulse text-white">█</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 border-y border-white/[0.03]">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl font-black text-white mono tracking-tighter uppercase">/ Experience</h2>
            <div className="h-px flex-1 bg-white/5"></div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-4">
                <div className="p-6 glass rounded-2xl border-blue-500/20">
                  <Coffee className="text-blue-500 mb-4" size={32} />
                  <h3 className="text-xl font-bold text-white mb-2">Technical Path</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Summarizing experiences and skills across AI and backend ecosystems.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-8 space-y-8">
              {EXPERIENCE.map((exp) => (
                <div key={exp.id} className="group relative glass p-8 rounded-3xl border-transparent hover:border-blue-500/30 hover:bg-white/[0.02] transition-all">
                  <h3 className="text-2xl font-black text-white">{exp.role}</h3>
                  <div className="flex flex-wrap items-center gap-3 mt-1 mb-6">
                    <span className="text-blue-400 font-bold mono text-xs uppercase">{exp.company}</span>
                    <span className="text-gray-600">•</span>
                    <span className="text-gray-500 text-xs mono">{exp.duration}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-400 text-sm flex items-start gap-3">
                        <span className="mt-1.5 w-1 h-1 bg-blue-500 shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map(skill => (
                      <span key={skill} className="text-[10px] mono font-bold px-2 py-1 rounded bg-white/5 text-gray-500 group-hover:text-blue-300 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Section */}
      <section id="projects" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
            <div className="flex items-center gap-4 flex-1">
              <h2 className="text-3xl font-black text-white mono tracking-tighter uppercase whitespace-nowrap">/ Projects</h2>
              <div className="h-px flex-1 bg-white/5"></div>
            </div>
            
            {/* 
            <div className="flex items-center gap-2 p-1.5 glass rounded-xl border-white/5">
              {(['All', 'AI/ML', 'Backend', 'Infrastructure'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-2 rounded-lg text-[10px] mono font-black uppercase transition-all ${
                    activeFilter === cat ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/40' : 'text-gray-500 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>Filter Bar */}
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-500">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="group glass rounded-2xl overflow-hidden cursor-pointer flex flex-col h-full border-white/5 hover:border-blue-500/30 transition-all duration-300"
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-[16/10] relative overflow-hidden bg-black/40">
                  <img src={project.imageUrl} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" />
                  <div className="absolute inset-0 bg-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-2 py-1 rounded bg-black/60 backdrop-blur text-[8px] mono font-bold text-blue-400 border border-white/10 uppercase">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-black text-white mb-2 leading-tight group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed mb-6 flex-1 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="text-[10px] mono text-gray-500 group-hover:text-gray-300">#{tag.toLowerCase()}</span>
                    ))}
                    {project.tags.length > 3 && <span className="text-[10px] mono text-gray-600">+{project.tags.length - 3} more</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployments Section */}
      <section id="deployments" className="py-24 px-6 bg-blue-500/[0.01]">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl font-black text-white mono tracking-tighter uppercase">/ Live Systems</h2>
            <div className="h-px flex-1 bg-white/5"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {HOSTED_LINKS.map((link) => (
              <a key={link.id} href={link.url} className="group glass p-8 rounded-2xl border-transparent hover:border-blue-500/30 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400"><Globe size={18} /></div>
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{link.name}</h3>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                      <span className={`w-2 h-2 rounded-full ${link.status === 'online' ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]' : 'bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.6)]'}`}></span>
                      <span className="text-[10px] mono font-bold text-gray-400 uppercase tracking-tighter">{link.status}</span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">{link.description}</p>
                </div>
                <div className="flex items-center gap-2 text-[10px] mono text-blue-500 font-bold tracking-widest group-hover:gap-4 transition-all uppercase">
                  Explore Hub <ArrowRight size={14} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section id="articles" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl font-black text-white mono tracking-tighter uppercase">/ Internal Logs</h2>
            <div className="h-px flex-1 bg-white/5"></div>
          </div>
          <div className="space-y-4">
            {ARTICLES.map((article) => (
              <a key={article.id} href={article.url} className="flex flex-col md:flex-row items-start md:items-center justify-between p-8 glass rounded-2xl border-transparent hover:border-white/10 group transition-all">
                <div className="flex-1">
                  <div className="flex items-center gap-4 text-[10px] mono text-gray-500 mb-2">
                    <span>{article.publishDate}</span>
                    <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
                    <span>{article.readingTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{article.title}</h3>
                </div>
                <ArrowRight className="mt-4 md:mt-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all text-blue-500" size={24} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-6 border-t border-white/[0.03]">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl font-black text-white mono tracking-tighter uppercase">/ Academic Core</h2>
            <div className="h-px flex-1 bg-white/5"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {EDUCATION.map((edu) => (
              <div key={edu.id} className="group glass p-8 rounded-3xl border-transparent hover:border-blue-500/20 hover:bg-white/[0.01] transition-all relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <GraduationCap size={80} />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 text-blue-500 mb-6">
                    <BookOpen size={20} />
                    <span className="text-[10px] mono font-black uppercase tracking-widest">{edu.year}</span>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-2 leading-tight">{edu.degree}</h3>
                  <p className="text-blue-400 font-bold mono text-xs uppercase mb-6">{edu.institution}</p>
                  <p className="text-gray-400 text-sm leading-relaxed border-l-2 border-white/5 pl-4 py-1 italic">
                    {edu.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 border-t border-white/5 bg-black">
        <div className="container mx-auto max-w-6xl text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div>
              <div className="flex items-center gap-3 justify-center md:justify-start mb-6">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                  <Terminal size={20} className="text-black" />
                </div>
                
              </div>
              
              
            </div>
            <div className="flex gap-12 text-sm mono">
              <div className="space-y-4">
                <h4 className="text-blue-500 font-black text-[10px]">SOCIAL</h4>
                <div className="flex flex-col gap-2">
                  <a href="https://github.com/KyushMaske" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
                  <a href="https://www.linkedin.com/in/kyush-maskey/" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </div>
  );
};

export default App;
