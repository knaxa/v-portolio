
import { Project, Article, HostedLink, Experience, Education } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Diabetes Prediction Application',
    description: 'The Diabetes Prediction Application is a machine learning-based solution that predicts the likelihood of diabetes in individuals based on specific health metrics',
    longDescription: 'Developed a predictive model using SVM, FastAPI, and PostgreSQL for diabetes risk assessment.Integrated features for automated model retraining, data validation, and data deletion to ensure accuracy',
    tags: ['SVM', 'FastAPI', 'PostgreSQL'],
    imageUrl: 'https://github.com/KyushMaske/Diabetes/blob/main/templates/Sample.png?raw=true',
    videoUrl: 'https://www.youtube.com/watch?v=UmeuebK39U8',
    category: 'AI/ML',
    githubUrl: '',
    liveUrl: ''
  },
  {
    id: '2',
    title: 'Text to Video',
    description: 'Backend service for financial fraud detection with sub-10ms latency.',
    longDescription: 'Developed a system that extracts keywords from sentences, fetches relevant images, generates audio, and combines these elements into cohesive video clips, ultimately producing a full-length video.',
    tags: ['keybert', 'ffmeg', 'movidepy', 'sentence'],
    imageUrl: 'https://github.com/knaxa/images/blob/main/Screenshot%202025-12-24%20142646.png?raw=true',
    category: 'Backend',
    videoUrl:'https://www.youtube.com/watch?v=I86wk21nLi8',
    githubUrl: '',
    liveUrl: ''
  },
  {
    id: '3',
    title: 'Detection of Fundus Glaucoma',
    description: 'Developed classifiers using ResNet50 and Xception on the Standardized Fundus Glaucoma Dataset(SMDG)',
    longDescription: 'Implemented GradCAM (Gradient-weighted Class Activation Mapping) to visualize and highlight critical image regions for classification ',
    tags: ['ResNet50', 'Xception', 'TensorFlow', 'GradCAM', 'ROS2'],
    imageUrl: 'https://github.com/knaxa/images/blob/main/Screenshot%202025-12-24%20143025.png?raw=true',
    videoUrl: 'https://www.youtube.com/watch?v=YQOqSrCvNvY',
    category: 'AI/ML',
    githubUrl: ''
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
    url: 'https://example.com/datastream',
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
    year: '2024',
    url: 'https://www.uni-luebeck.de/en/university/university.html',
    details: ''
  },
  {
    id: 'ed2',
    degree: 'Bachelor’s Degree in Computer Engineering',
    institution: 'Kathford International College of Engineering and Management',
    year: '2018',
    url: 'https://kathford.edu.np/',
    details: ''
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'a1',
    title: 'Scaling ML Models in Production: The Hidden Challenges',
    excerpt: 'Deployment is just the beginning. Learn about observability, data drift, and model decay in enterprise environments.',
    publishDate: 'Oct 12, 2024',
    url: 'https://medium.com',
    readingTime: '8 min read'
  },
  {
    id: 'a2',
    title: 'Why I Switched from Python to Go for ML Infrastructure',
    excerpt: 'The case for type safety and concurrency when building the plumbing for your AI models.',
    publishDate: 'Sep 25, 2024',
    url: 'https://medium.com',
    readingTime: '6 min read'
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
