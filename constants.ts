import { Project, Skill, Testimonial } from './types';

// In a real implementation with Netlify CMS, this data would be fetched from .md files via a service.
// For this SPA structure, we simulate the "production" content here.

export const PERSONAL_INFO = {
  name: "Mohammad",
  title: "Flutter & App Developer",
  tagline: "Building beautiful, high-performance mobile experiences.",
  email: "contact@mohammad.dev",
  about: "I am a passionate Flutter developer with a strong foundation in Dart and mobile architecture. I specialize in building scalable, user-friendly applications that solve real-world problems. With experience in REST API integration, state management, and modern UI implementation, I turn complex requirements into smooth, functional apps.",
};

export const SKILLS: Skill[] = [
  { name: "Flutter", level: 95, category: "Core" },
  { name: "Dart", level: 90, category: "Core" },
  { name: "Provider / Riverpod", level: 85, category: "Core" },
  { name: "REST API Integration", level: 90, category: "Backend/API" },
  { name: "Firebase (Auth/Firestore)", level: 80, category: "Backend/API" },
  { name: "Next.js Basics", level: 60, category: "Tools" },
  { name: "Git & GitHub", level: 85, category: "Tools" },
  { name: "Clean Architecture", level: 80, category: "Core" },
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Global News App",
    description: "A comprehensive news aggregator built with Flutter. Features live news updates via REST API, category filtering, and offline reading capabilities using local caching.",
    tags: ["Flutter", "REST API", "CachedNetworkImage", "Provider"],
    imageUrl: "https://picsum.photos/800/600?random=1",
    category: "Mobile",
  },
  {
    id: "2",
    title: "SkyWatch Weather",
    description: "Real-time weather application providing accurate forecasts, location-based detection, and detailed meteorological data visualization.",
    tags: ["Flutter", "Geolocator", "OpenWeatherMap API", "Charts"],
    imageUrl: "https://picsum.photos/800/600?random=2",
    category: "Mobile",
  },
  {
    id: "3",
    title: "EduTest Manager",
    description: "A secure testing platform for educational institutions. Includes secure student authentication, timed exams, and automatic grading logic.",
    tags: ["Flutter", "Firebase Auth", "Secure Storage", "State Management"],
    imageUrl: "https://picsum.photos/800/600?random=3",
    category: "Utility",
  },
  {
    id: "4",
    title: "QuickInvoice",
    description: "Business utility for generating professional PDF invoices and receipts on the fly. Supports tax calculation, client management, and export features.",
    tags: ["Flutter", "PDF Generation", "SQLite", "File System"],
    imageUrl: "https://picsum.photos/800/600?random=4",
    category: "Utility",
  },
  {
    id: "5",
    title: "ProfitCalc Pro",
    description: "A profit and margin calculator designed for small business owners to track utility costs and revenue margins efficiently.",
    tags: ["Flutter", "Math Logic", "Data Visualization", "Local Storage"],
    imageUrl: "https://picsum.photos/800/600?random=5",
    category: "Utility",
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Sarah Johnson",
    role: "Product Manager at TechFlow",
    text: "Mohammad delivered the News App ahead of schedule. The UI is silky smooth and the code structure is easy for our team to maintain.",
  },
  {
    id: "t2",
    name: "Ahmed Al-Farsi",
    role: "Startup Founder",
    text: "The Invoice app revolutionized how we handle field sales. Mohammad understood our business logic perfectly.",
  },
  {
    id: "t3",
    name: "Emily Chen",
    role: "Lead Designer",
    text: "Rare to find a developer with such a good eye for design. He implemented my Figma designs pixel-perfectly in Flutter.",
  }
];