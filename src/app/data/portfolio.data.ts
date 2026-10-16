// All site content lives here. Edit this file to update the portfolio.

export const profile = {
  name: 'Syeda Umm E Abiha Rizvi',
  shortName: 'Abiha',
  title: 'Software Developer @ VeriPark',
  roles: ['Software Engineer', '.NET Developer', 'Angular Developer', 'AI Engineer', 'MS AI Student @ FAST', 'BE SE Graduate @ NED'],
  tagline: 'I build reliable .NET apps with an AI edge.',
  intro: 'Full-stack engineer crafting scalable enterprise software across fintech, healthcare and retail, and exploring how LLMs and AI agents can make real products smarter.',
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
  { value: '2+', label: 'Years of Engineering', icon: 'briefcase' },
  { value: '10+', label: 'Projects Delivered', icon: 'code' },
  { value: '3+', label: 'Industry Domains', icon: 'layers' },
  { value: '2', label: 'Research Papers', icon: 'book' },
];

export const highlights = [
  { icon: 'server', title: 'Backend & APIs', text: '.NET Core 6/8, ASP.NET Core, Web API, EF Core, SQL, Dapper, Microservices' },
  { icon: 'layout', title: 'Modern Frontends', text: 'Angular, React, JavaScript, TypeScript, Blazor, .NET MAUI' },
  { icon: 'brain', title: 'Applied AI', text: 'LLMs, NLP, Transformers, Deep Learning, Neural Networks' },
];

export interface Tech { name: string; logo: string; invert?: boolean; }
export interface SkillGroup { title: string; icon: string; items: Tech[]; }

export const skillGroups: SkillGroup[] = [
  {
    title: 'Backend & Databases', icon: 'server', items: [
      { name: 'C#', logo: 'csharp' }, { name: '.NET Core 6/8', logo: 'dotnetcore' },
      { name: 'ASP.NET Core', logo: 'dot-net' }, { name: 'SQL Server', logo: 'microsoftsqlserver' },
      { name: 'PostgreSQL', logo: 'postgresql' }, { name: 'MySQL', logo: 'mysql' },
      { name: 'SQLite', logo: 'sqlite' }, { name: 'MongoDB', logo: 'mongodb' },
    ],
  },
  {
    title: 'Frontend', icon: 'layout', items: [
      { name: 'Angular', logo: 'angular' }, { name: 'TypeScript', logo: 'typescript' },
      { name: 'JavaScript', logo: 'javascript' }, { name: 'React', logo: 'react' },
      { name: 'Blazor WASM', logo: 'blazor' }, { name: 'jQuery', logo: 'jquery' },
      { name: 'HTML5', logo: 'html5' }, { name: 'CSS3', logo: 'css3' },
    ],
  },
  {
    title: 'AI & Data', icon: 'brain', items: [
      { name: 'Python', logo: 'python' }, { name: 'PyTorch', logo: 'pytorch' },
      { name: 'TensorFlow', logo: 'tensorflow' }, { name: 'scikit-learn', logo: 'scikitlearn' },
      { name: 'Pandas', logo: 'pandas' }, { name: 'NumPy', logo: 'numpy' },
      { name: 'Jupyter', logo: 'jupyter' }, { name: 'Google Colab', logo: 'googlecolab' },
    ],
  },
  {
    title: 'Cloud & DevOps', icon: 'cloud', items: [
      { name: 'Azure', logo: 'azure' }, { name: 'Azure DevOps', logo: 'azuredevops' },
      { name: 'AWS', logo: 'amazonwebservices', invert: true }, { name: 'Git', logo: 'git' },
      { name: 'GitHub', logo: 'github', invert: true }, { name: 'Bitbucket', logo: 'bitbucket' },
      { name: 'Jira', logo: 'jira' }, { name: '.NET MAUI', logo: 'dot-net' },
    ],
  },
];

export const concepts = [
  'Web API', 'REST APIs', 'Microservices', 'MVC', 'Onion Architecture', 'Layered Architecture',
  'Design Patterns', 'SDLC', 'EF Core', 'Dapper', 'ADO.NET', 'LINQ', 'T-SQL', 'Sybase', 'Quartz.NET',
  'Azure Key Vault', 'Azure Blob Storage', 'AWS S3', 'LLMs', 'AI Agents', 'NLP', 'Text Classification',
  'Transformers', 'XLM-RoBERTa', 'BERT / BART', 'CNNs', 'LSTM', 'SARIMA',
];

export interface Job {
  role: string; company: string; period: string; location: string;
  current?: boolean; points: string[]; tags: string[];
}

export const experience: Job[] = [
  {
    role: 'Software Developer', company: 'VeriPark', period: 'Sep 2026 – Present',
    location: 'Karachi, PK', current: true,
    points: ['Building enterprise software for the financial services sector.'],
    tags: ['.NET', 'C#', 'AngularJS', 'MVC', 'Microservices', 'Fintech'],
  },
  {
    role: 'Software Engineer', company: 'Think Digitally', period: 'Aug 2025 – Aug 2026',
    location: 'Karachi, PK',
    points: [
      'Delivered production features for RSS (self-storage) and PEEQ (performance management) across the full SDLC.',
      'Resolved production issues across API and database layers through root-cause analysis.',
      'Used LLM-assisted workflows to speed up debugging, code comprehension and feature delivery.',
    ],
    tags: ['ASP.NET MVC', 'EF Core', 'Dapper', 'Sybase', 'SQL Server'],
  },
  {
    role: 'Associate Software Engineer', company: 'Turf Tech', period: 'Aug 2024 – Aug 2025',
    location: 'Karachi, PK',
    points: [
      'Built microservices for Aga Khan University Hospital\'s ERP: Admin, POS and Restaurant modules.',
      'Engineered payment & FBR/SRB reconciliation flows: 10k+ daily transactions at 99.9% availability.',
      'Optimised LINQ and EF Core queries and integrated POS card readers for real-time payments.',
    ],
    tags: ['ASP.NET Core', 'Microservices', 'EF Core', '.NET MAUI'],
  },
  {
    role: 'Software Engineer Intern', company: 'Virtuosoft', period: 'Mar 2024 – Jun 2024',
    location: 'Karachi, PK',
    points: [
      'Migrated AMAX Insurance Pro from VB.NET to ASP.NET Core with Onion Architecture.',
      'Automated Colgate-Palmolive PSP data processing with Quartz.NET scheduled jobs.',
      'Built desktop installers and managed tasks with Jira and Bitbucket.',
    ],
    tags: ['ASP.NET Core', 'Quartz.NET', 'Jira', 'Bitbucket'],
  },
  {
    role: 'Project Collaboration / Internship', company: 'Lineax LLC', period: 'Oct 2023 – Jan 2024',
    location: 'Remote',
    points: [
      'Built an AI recruitment platform that ranks & summarises 50+ resumes per batch with BERT and BART.',
      'Parsed resumes with NLP tools, pyresparser and regex; authored the proposal, SRS and SDD.',
    ],
    tags: ['NLP', 'BERT', 'BART', 'Python'],
  },
  {
    role: 'Artificial Intelligence Intern', company: 'National Center of AI (NCAI)', period: 'Feb 2023 – Apr 2023',
    location: 'Karachi, PK',
    points: ['Collected and cleaned 2019–2023 vegetable price data and compared SARIMA vs LSTM forecasting models.'],
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
    metric: 'Final Year Project', tags: ['PERN Stack', 'JavaScript', 'LLMs', 'ML Pipelines'],
  },
  {
    title: 'ERA: Easy Retail Access', cat: '.NET', icon: 'card',
    blurb: 'Microservices ERP for Aga Khan University Hospital: Admin, POS and Restaurant modules with card payments and FBR/SRB reconciliation.',
    metric: '10k+ txns/day · 99.9%', tags: ['ASP.NET Core', 'Microservices', '.NET MAUI'],
  },
  {
    title: 'RSS: Ready Steady Store', cat: '.NET', icon: 'layers',
    blurb: 'Self-storage management platform; shipped production features and resolved API and database issues.',
    tags: ['ASP.NET MVC', 'EF Core', 'Dapper', 'Sybase'],
  },
  {
    title: 'AMAX Insurance Pro', cat: '.NET', icon: 'shield',
    blurb: 'Modernised a legacy VB.NET insurance system to ASP.NET Core using Onion Architecture.',
    tags: ['ASP.NET Core', 'Onion Architecture'],
  },
  {
    title: 'Karachi\'s Vegetable Price Forecasting using Time Series', cat: 'AI', icon: 'activity', badge: 'IEEE',
    blurb: 'Compared SARIMA and LSTM for forecasting Karachi vegetable prices; published research.',
    tags: ['LSTM', 'SARIMA', 'Time Series'],
  },
  {
    title: 'ByteBazaar', cat: 'Web & Mobile', icon: 'layout',
    blurb: 'E-commerce web application for browsing products and placing orders online.',
    tags: ['E-Commerce', 'Web'],
    link: 'https://github.com/ummeabiha/Byte-Bazaar-Backend',
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
  'Angular Deep Dive: Beginner to Advanced (Angular 22)',
  'Python for Data Science, AI & Development',
  'Fundamentals of C# · 10Pearls University',
  'Advanced OOP Analysis · 10Pearls University',
  'Introduction to Front-End Development · Meta',
  'HTML, CSS & JavaScript for Web Developers · Johns Hopkins',
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
  {
    school: 'BAMM PECHS', full: 'BAMM PECHS Govt. College for Women, Karachi',
    degree: 'Intermediate, Pre-Engineering', period: '2019 – 2021', note: 'HSC',
  },
  {
    school: 'Shaheen Public School', full: 'Shaheen Public School, Karachi',
    degree: 'Matriculation, Science', period: '2019', note: 'SSC',
  },
];
