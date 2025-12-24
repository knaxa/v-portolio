
import { Project, Article, HostedLink, Experience, Education } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Diabetes Prediction Application',
    description: 'Machine learning web application that predicts diabetes risk using health metrics with an automated retrainable backend.',
    longDescription: 'Built an end-to-end diabetes prediction system using Support Vector Machine (SVM). Features include FastAPI backend, PostgreSQL database, automated model retraining pipeline, input data validation, and secure data deletion to ensure accuracy',
    tags: ['SVM', 'FastAPI', 'PostgreSQL', 'Python', 'Scikit-learn'],
    imageUrl: 'https://github.com/KyushMaske/Diabetes/blob/main/templates/Sample.png?raw=true',
    videoUrl: 'https://www.youtube.com/watch?v=UmeuebK39U8',
    category: 'AI/ML',
    githubUrl: '',
    liveUrl: ''
  },
  {
    id: '2',
    title: 'Text-to-Video',
    description: 'Automated pipeline that converts text input into complete videos by extracting keywords, fetching visuals, generating narration.',
    longDescription: 'Developed a backend system that: 1) extracts key concepts from input text, 2) searches and retrieves relevant images, 3) generates voice-over audio, and 4) combines everything into polished videos using FFmpeg and MoviePy. Achieves fully automated content creation from plain sentences.',
    tags: ['KeyBERT', 'FFmpeg', 'MoviePy', 'Sentence Transformers', 'Python'],
    imageUrl: 'https://github.com/knaxa/images/blob/main/Screenshot%202025-12-24%20142646.png?raw=true',
    category: 'Backend',
    videoUrl:'https://www.youtube.com/watch?v=I86wk21nLi8',
    githubUrl: '',
    liveUrl: ''
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 'e1',
    role: 'GEO AI Engineer',
    company: 'Naxa',
    location: 'Kathmandu, Nepal',
    duration: 'Jan 2025 - Present',
    url: 'https://naxa.com.np/',
    description: [
      'Transformed digitized road data into masks for model training and conducted comparative analysis of EfficientNet-B3,EfficientNet-B5 ,Mask R-CNN and UNET,',
      'Developed AI agent to interpret user requirement and automatically generates CV in World Bank formats,powered by FastAPI and a responsive React frontend for seamless user interaction',
      'Developed backend AI agent and a user interface that accepts input through a chatbox for generating and displaying infographics',
      'Crafted AI-driven application powered by Amazon Bedrock, leveraging forecast weather data for real-time predictions and delivering suggestions tailored to dynamic weather conditions to enhance user decision-making and preparedness',
      'Developed RAG powered AI agent with seamless geospatial integratioon'

    ],
    skills: ['AWS Bedrock', 'GenAI', 'Computer Vision', 'GeoSpatial', 'Django', 'OSM', 'PostgreSQL', 'Docker']
  },
  {
    id: 'e2',
    role: 'AI/ML Engineer',
    company: 'Icebrke,A virtly Company',
    location: 'Kathmandu, Nepal',
    duration: 'March 2024 - Nov 2024',
    url: '',
    description: [
      'Experienced in full model fine-tuning of Seq2Seq language models for supervised tasks like text summarization, leveraging tokenization, AdamW optimization.',
      'For task prioritization, designed algorithms to resolve conflicts by optimizing scheduling times and leveraging Phi-3 for efficient task management based on urgency and resource availability',
      'Created synthetic data samples to expand training datasets, addressing limited data availability in certain conversation scenarios'
    ],
    skills: ['LLM', 'GenAI', 'NLP', 'FastAPI', 'Docker']
  },
  {
    id: 'e3',
    role: 'Software Engineer',
    company: 'Smart Tech Solutions Pvt Ltd',
    location: 'Kathmandu, Nepal',
    duration: 'April 2023 - Feb 2024',
    url: 'https://smarttech.com.np/',
    description: [
      'Utilized Django Rest Framework (DRF) to expedite API development, enhancing efficient data communication between websites and Odoo ERP',
      'Designed and developed the overall architecture of a task management system, including database integration and API creation for scalable and efficient task handling',
      'Enhanced and adapted an existing portal system for a new market using FastAPI, optimizing API performance and ensuring compliance with local requirements'
    ],
    skills: ['Django-DRF', 'Odoo', 'PostgreSQL', 'Docker','Django-Templates']
  },
  {
    id: 'e4',
    role: 'Intern - AI ML Engineer',
    company: 'Eydean INC',
    location: 'Kathmandu, Nepal',
    duration: 'August 2022 - NOV 2022',
    url: '',
    description: [
      'Conducted comprehensive EDA to uncover patterns, outliers, and insights, optimizing data for further analysis and model training.',
      'Contributed to Adeyelta’s AutoML pipeline, automating data preprocessing, visualization, and predictiv modeling, improving efficiency and accuracy in forecasting and analysis.',
    ],
    skills: ['EDA', 'LSTM', 'Data Visualization']
  }
];

export const EDUCATION: Education[] = [
  {
    id: 'ed1',
    degree: 'Master Degree in AI- Distance learning ',
    institution: 'University of Lubeck',
    year: '2024-Present',
    url: 'https://www.uni-luebeck.de/en/university/university.html',
    details: ''
  },
  {
    id: 'ed2',
    degree: 'Bachelor’s Degree in Computer Engineering',
    institution: 'Kathford International College of Engineering and Management',
    year: '2018-2023',
    url: 'https://kathford.edu.np/',
    details: ''
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'a1',
    title: 'Hyperparameter Tuning with Optuna: A Smarter Approach : Part 2',
    excerpt: 'Optuna is a Python library that automates hyperparameter tuning for machine learning models.It efficiently explores the hyperparameter space by learning from past trials and focusing on areas likely to yield better performance',
    publishDate: 'Oct 9, 2024',
    url: 'https://medium.com/@mkyush/hyperparameter-tuning-with-optuna-a-smarter-approach-part-2-652024f67430',
    readingTime: '2 min read'
  },
  {
    id: 'a2',
    title: 'Geocoding: The Magic Behind Pinpointing Addresses on Maps',
    excerpt: 'Geocoding is the art of turning a street address into a latitude-longitude pair that a map can understand, Geocoding bridges this gap, converting addresses into coordinates that slot perfectly into systems like GPS',
    publishDate: 'Jul 3, 2025',
    url: 'https://medium.com/@mkyush/geocoding-the-magic-behind-pinpointing-addresses-on-maps-ad2b0f139f47',
    readingTime: '4 min read'
  }
];

export const HOSTED_LINKS: HostedLink[] = [
  {
    id: 'h1',
    name: 'GeoJson Viewer',
    description: 'Internal tool for Viewing GeoJson files ',
    url: 'https://knaxa.github.io/geojson_viewer/',
    status: 'online'
  },
  {
    id: 'h2',
    name: 'Environmental Comparer',
    description: 'A simple and effective tool to compare the content of multiple text boxes in real-time. It\'s particularly useful for comparing configuration files like .env files, where keeping track of differences is crucial.',
    url: 'https://kyushmaske.github.io/env_comparea/',
    status: 'online'
  }
];

export const NAV_LINKS = [
  { name: 'Path', href: '#experience' },
  { name: 'Archive', href: '#projects' },
  { name: 'Live', href: '#deployments' },
  { name: 'Logs', href: '#articles' },
  { name: 'Core', href: '#education' }
];
