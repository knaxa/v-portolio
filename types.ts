
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  imageUrl?: string;
  videoUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  category: 'AI/ML' | 'Backend' | 'Infrastructure';
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  publishDate: string;
  url: string;
  readingTime: string;
}

export interface HostedLink {
  id: string;
  name: string;
  description: string;
  url: string;
  status: 'online' | 'beta' | 'maintenance';
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  url?: string;
  location: string;
  duration: string;
  description: string[];
  skills: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  url?: string;
  year: string;
  details: string;
}