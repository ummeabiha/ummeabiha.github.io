// All site content lives here. Edit this file to update the portfolio.

export const profile = {
  name: 'Syeda Umm E Abiha Rizvi',
  shortName: 'Abiha',
  title: 'Software Developer @ VeriPark',
  roles: ['.NET Developer', 'Angular Developer', 'AI Engineer', 'MS AI @ FAST'],
  tagline: 'I build reliable .NET apps with an AI edge.',
  intro: 'Full-stack engineer crafting scalable enterprise software across fintech, healthcare and retail, and bringing LLMs into real products.',
  location: 'Karachi, Pakistan',
  email: 'syda.ummeabiha@gmail.com',
  phone: '+92 313 2140393',
  resume: 'Syeda-Umm-E-Abiha-Rizvi-Resume.pdf',
  photo: 'profile.png',
  links: {
    linkedin: 'https://www.linkedin.com/in/ummeabiha/',
    github: 'https://github.com/ummeabiha',
    orcid: 'https://orcid.org/0009-0006-8550-6677',
  },
  languages: ['Urdu · Native', 'English · Professional'],
};

export const stats = [
  { value: '2+', label: 'Years Experience', icon: 'briefcase' },
  { value: '10k+', label: 'Daily Transactions', icon: 'activity' },
  { value: '99.9%', label: 'System Availability', icon: 'shield' },
  { value: '2', label: 'Publications', icon: 'book' },
];

export const highlights = [
  { icon: 'server', title: 'Backend & APIs', text: 'ASP.NET Core, microservices, EF Core, Dapper' },
  { icon: 'layout', title: 'Modern Frontends', text: 'Angular, TypeScript, Blazor, .NET MAUI' },
  { icon: 'brain', title: 'Applied AI', text: 'LLMs, NLP, Transformers, Deep Learning' },
];

export interface Tech { name: string; logo: string; invert?: boolean; }
export interface SkillGroup { title: string; icon: string; items: Tech[]; }

export const skillGroups: SkillGroup[] = [
  {
    title: 'Backend', icon: 'server', items: [
      { name: 'C#', logo: 'csharp' }, { name: '.NET Core', logo: 'dotnetcore' },
      { name: 'ASP.NET', logo: 'dot-net' }, { name: 'SQL Server', logo: 'microsoftsqlserver' },
      { name: 'PostgreSQL', logo: 'postgresql' }, { name: 'MongoDB', logo: 'mongodb' },
    ],
  },
  {
    title: 'Frontend', icon: 'layout', items: [
      { name: 'Angular', logo: 'angular' }, { name: 'TypeScript', logo: 'typescript' },
      { name: 'JavaScript', logo: 'javascript' }, { name: 'Blazor', logo: 'blazor' },
      { name: 'React', logo: 'react' }, { name: 'HTML / CSS', logo: 'html5' },
    ],
  },
  {
    title: 'AI & Data', icon: 'brain', items: [
      { name: 'Python', logo: 'python' }, { name: 'PyTorch', logo: 'pytorch' },
      { name: 'TensorFlow', logo: 'tensorflow' }, { name: 'scikit-learn', logo: 'scikitlearn' },
      { name: 'Pandas', logo: 'pandas' }, { name: 'Jupyter', logo: 'jupyter' },
    ],
  },
  {
    title: 'Cloud & Tools', icon: 'cloud', items: [
      { name: 'Azure', logo: 'azure' }, { name: 'Azure DevOps', logo: 'azuredevops' },
      { name: 'AWS', logo: 'amazonwebservices', invert: true }, { name: 'Git', logo: 'git' },
      { name: 'Jira', logo: 'jira' }, { name: 'Bitbucket', logo: 'bitbucket' },
    ],
  },
];

export const concepts = [
  'REST APIs', 'Microservices', 'Onion Architecture', 'Design Patterns', 'EF Core', 'Dapper',
  'LINQ', '.NET MAUI', 'Quartz.NET', 'LLMs', 'NLP', 'Transformers', 'XLM-RoBERTa', 'BERT / BART', 'LSTM', 'SARIMA',
];

export interface Job {
  role: string; company: string; period: string; location: string;
  current?: boolean; points: string[]; tags: string[];
}

export const experience: Job[] = [
  {
    role: 'Software Developer', company: 'VeriPark', period: 'Sep 2026 – Present',
    location: 'London Area, UK', current: true,
    points: ['Building enterprise software for the financial services sector.'],
    tags: ['.NET', 'C#', 'Fintech'],
  },
  {
    role: 'Software Engineer', company: 'Think Digitally', period: 'Aug 2025 – Aug 2026',
    location: 'Karachi, PK',
    points: [
      'Shipped production features for RSS (self-storage) and PEEQ (performance management) platforms.',
      'Root-caused production issues across API and database layers; used LLM-assisted workflows to speed up delivery.',
    ],
    tags: ['ASP.NET MVC', 'EF Core', 'Dapper', 'Sybase', 'SQL Server'],
  },
  {
    role: 'Associate Software Engineer', company: 'Turf Tech', period: 'Aug 2024 – Aug 2025',
    location: 'Karachi, PK',
    points: [
      'Built microservices for Aga Khan University Hospital\'s Admin, POS and Restaurant platforms.',
      'Engineered payment & FBR/SRB reconciliation flows: 10k+ daily transactions at 99.9% availability.',
    ],
    tags: ['ASP.NET Core', 'Microservices', 'EF Core', '.NET MAUI'],
  },
  {
    role: 'Software Engineer Intern', company: 'Virtuosoft', period: 'Mar 2024 – Jun 2024',
    location: 'Karachi, PK',
    points: [
      'Migrated AMAX Insurance Pro from VB.NET to ASP.NET Core with Onion Architecture.',
      'Automated Colgate-Palmolive PSP data processing with Quartz.NET jobs.',
    ],
    tags: ['ASP.NET Core', 'Quartz.NET', 'Jira', 'Bitbucket'],
  },
  {
    role: 'AI Project Collaboration', company: 'Lineax LLC', period: 'Oct 2023 – Jan 2024',
    location: 'Remote',
    points: ['AI recruitment platform ranking & summarising 50+ resumes per batch with BERT and BART.'],
    tags: ['NLP', 'BERT', 'BART', 'Python'],
  },
  {
    role: 'Artificial Intelligence Intern', company: 'National Center of AI (NCAI)', period: 'Feb 2023 – Apr 2023',
    location: 'Karachi, PK',
    points: ['Built SARIMA & LSTM models to forecast Karachi vegetable prices (2019–2023 data).'],
    tags: ['Time Series', 'LSTM', 'SARIMA'],
  },
];

export type ProjectCat = 'AI' | '.NET' | 'Web & Mobile';
export interface Project {
  title: string; blurb: string; cat: ProjectCat; icon: string;
  tags: string[]; metric?: string; link?: string; badge?: string;
}

export const projects: Project[] = [
  {
    title: 'Urdu Sarcasm Detection', cat: 'AI', icon: 'message', badge: 'Featured',
    blurb: 'Benchmarked classical, neural and transformer models on 14.5k Urdu & Roman-Urdu posts, with a tuned ensemble.',
    metric: '0.837 macro-F1 · XLM-R', tags: ['XLM-RoBERTa', 'BiGRU', 'PyTorch', 'NLP'],
    link: 'https://github.com/ummeabiha/UrduSarcasmDetection',
  },
  {
    title: 'ARIAS: AI Hiring Platform', cat: 'AI', icon: 'users', badge: '10Pearls Mentorship',
    blurb: 'LLM-powered resume analysis, candidate ranking, email automation and interview scheduling.',
    metric: 'Final Year Project', tags: ['LLMs', 'ML Pipelines', 'Automation'],
  },
  {
    title: 'AKUH POS & Payments', cat: '.NET', icon: 'card',
    blurb: 'Microservices POS for Aga Khan University Hospital with card readers and tax-authority reconciliation.',
    metric: '10k+ txns/day · 99.9%', tags: ['ASP.NET Core', 'Microservices', '.NET MAUI'],
  },
  {
    title: 'AMAX Insurance Pro Migration', cat: '.NET', icon: 'layers',
    blurb: 'Modernised a legacy VB.NET insurance system to ASP.NET Core using Onion Architecture.',
    tags: ['ASP.NET Core', 'Onion Architecture'],
  },
  {
    title: 'AI Resume Ranker', cat: 'AI', icon: 'file',
    blurb: 'Transformer-based resume parsing, ranking and summarisation for faster screening.',
    metric: '50+ resumes / batch', tags: ['BERT', 'BART', 'NLP'],
  },
  {
    title: 'Vegetable Price Forecasting', cat: 'AI', icon: 'chart', badge: 'IEEE',
    blurb: 'Compared SARIMA and LSTM for forecasting Karachi vegetable prices; published research.',
    tags: ['LSTM', 'SARIMA', 'Time Series'],
  },
  {
    title: 'Crop Classification', cat: 'AI', icon: 'leaf',
    blurb: 'CNN-based crop detection and classification; poster selected for a University of Scotland symposium.',
    tags: ['CNN', 'TensorFlow', 'PyTorch'],
    link: 'https://github.com/ummeabiha/CropClassification',
  },
  {
    title: 'Sehatyaab', cat: 'Web & Mobile', icon: 'heart',
    blurb: 'Telemedicine app connecting remote and underserved communities with healthcare providers.',
    tags: ['Mobile', 'Healthcare'],
    link: 'https://github.com/ummeabiha/Sehatyaab',
  },
];

export const publications = [
  {
    title: 'A Comparative Analysis on the Services Offered by Amazon Web Services and Microsoft Azure',
    venue: 'Wiley · CCPE Journal',
    link: 'https://onlinelibrary.wiley.com/doi/10.1002/cpe.70215',
  },
  {
    title: 'Forecasting the Future: Exploring the Effectiveness of SARIMA and LSTM Models for Vegetable Price Prediction in Karachi, Pakistan',
    venue: 'IEEE Xplore',
    link: 'https://ieeexplore.ieee.org/document/11308789',
  },
];

export const awards = [
  { icon: 'trophy', title: 'Winner, Codesphere\'23', text: 'Data Science domain' },
  { icon: 'rocket', title: '10Pearls Mentorship', text: 'FYP ARIAS accepted' },
  { icon: 'presentation', title: 'University of Scotland', text: 'Research poster selected for symposium' },
  { icon: 'lightbulb', title: 'National Business Competition', text: 'Idea selected, University of Multan' },
  { icon: 'medal', title: '30 Days of Code', text: 'Gold badge' },
];

export const certifications = [
  'Angular Deep Dive: Beginner to Advanced',
  'Python for Data Science, AI & Development',
  'Fundamentals of C# · 10Pearls University',
  'Advanced OOP Analysis · 10Pearls University',
  'Intro to Front-End Development · Meta',
  'HTML, CSS & JavaScript · Johns Hopkins',
  'Version Control · Meta',
];

export const education = [
  {
    school: 'FAST-NUCES', full: 'National University of Computer & Emerging Sciences',
    degree: 'MS, Artificial Intelligence', period: '2026 – 2028', note: 'In progress', current: true,
  },
  {
    school: 'NED University', full: 'NED University of Engineering & Technology',
    degree: 'BE, Software Engineering', period: '2021 – 2025', note: 'CGPA 3.787 / 4.00',
  },
];
