import React from 'react'
import { CgWorkAlt } from 'react-icons/cg'
import { FaReact } from 'react-icons/fa'
import { LuGraduationCap } from 'react-icons/lu'
import { FaCodeMerge } from 'react-icons/fa6'
import { RiOpenSourceLine } from 'react-icons/ri'

export const links = [
  {
    name: 'Top',
    hash: '#top',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const

export const experiencesData = [
  {
    title: 'Self Studies in Web Development',
    location: 'Udemy, freeCodeCamp, Codecademy, all over the internet',
    description:
      'I started learning web development in 2020. During my parental leave, this was what I did when I got a moment for myself. I took Udemy courses, went freeCodeCamp and Codecademy with a sleeping baby on my cheast I wrote algorithms in Javascript. But most of my learning has been through building projects and reading documentation.',
    icon: React.createElement(FaReact),
    date: '2020 - 2022',
  },
  {
    title: 'Graduated bootcamp',
    location: 'Technigo 26 weeks developer bootcamp',
    description:
      'Fast paced bootcamp with focus on React, Node.js, Express, MongoDB, JavaScript and TypeScript. I also learned about testing, CI/CD, Git, GitHub, and agile methodologies.',
    icon: React.createElement(LuGraduationCap),
    date: '2023',
  },
  {
    title: 'Full Stack Developer',
    location: 'Stockholm, Sweden',
    description:
      'Freelance full stack developer working on various projects. My stack includes React, Next.js, TypeScript, Tailwind, Sanity and MongoDB.',
    icon: React.createElement(CgWorkAlt),
    date: '2023 - present',
  },
  {
    title: 'Developer Intern',
    location: 'DAYA Innovation Team',
    description:
      "As a Frontend Development Intern at Daya Innovation Team, I am actively engaged in the heart of FemTech innovation, contributing technical expertise and coding skills to the creation and development of innovative FemTech solutions and at the same time also supporting the company's mission to foster female entrepreneurship and sustainability through open innovation and deep technology.",
    icon: React.createElement(FaCodeMerge),
    date: '2023',
  },
  {
    title: 'Volonteer Developer',
    location: 'Zetkin Foundation',
    description:
      'Open source project for political activism. I work on the Frontend with React and TypeScript.',
    icon: React.createElement(RiOpenSourceLine),
    date: '2023 - present',
  },
  {
    title: 'Educator in Frontend Development and UX Design',
    location: 'ZoCom AB',
    description:
      'Since the summer of 2024, I’ve had the great honor of teaching JavaScript, TypeScript, and React in the IT professional program. This fall, I’ve also taken on the role of lead instructor in advanced UX design at Chas Academy.',
    icon: React.createElement(LuGraduationCap),
    date: '2024 - present',
  },
] as const

export const projectsData = [
  {
    title: 'Company Web Page for MedMod AB',
    description:
      'MedMod is a consultant company in enterprise architecture, data science, informatics, and terminology. The requirements were simply to create a static MPA build it vanilla HTML5, CSS3 and minimal JavaScript. I enjoyed the challenge returning to the foundational craftspersonship of coding, focusing on creating a lightweight, accessible website with minimal client-side rendering. The project underscored the essence of simplicity, clean code, and optimizing for both performance and accessibility.',
    imageUrl: '/images/medmod.png',
    imageCaption: '',
    tags: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Vanilla',
      'MPA',
      'SEO',
      'WCAG',
      'WAI-ARIA',
    ],
    githubLink: '',
    LiveDemoLink: '',
  },
  {
    title: 'teQueenMatch',
    slug: 'projects/[slug]',
    description:
      'Fullstack webb application created in collaboration with non-profit organization teQueenMatch. The purpose of the app is to connect women and non-binary individuals within the tech community, facilitating connections for mentorship, support, and shared experiences.',
    imageUrl: '/images/teQueenMatch.png',
    imageCaption: 'Mockup of the teQueenMatch app',
    githubLink: 'https://github.com/annikalindberg/teQueenMatch',
    LiveDemoLink: 'https://tequeenmatch.netlify.app/',
    tags: [
      'React JS',
      'Redux',
      'Node.js',
      'Express',
      'MongoDB',
      'API',
      'Axios',
      'React Testing Library',
      'Jest',
      'Google Cloud Platform',
      'Fullstack',
    ],
    notes:
      "Although our ambitions for teQueenMatch exceeded the three- week scope of the Technigo bootcamp, we chose to fully commit to the project during this period and to continue development afterward.This decision was driven partly by our affinity for challenges that push us beyond our limits.We're both dedicated to the learning process and were seeking an engaging project to work on post-bootcamp. However, the primary driver was our strong belief in the idea's merit and its potential value to the community.This commitment led us to invest heavily in the project, even if it meant facing developmental delays.I won't sugarcoat it; the journey was fraught with challenges, but we persevered because we truly believe the platform is essential—not just for us, but for anyone in a similar position. Notes about the project. Currently, our server is deployed on Render. While it serves our needs, we acknowledge that it might not be the most efficient option for our project's demands. We are actively exploring other hosting platforms to enhance server performance.",
    futureImprovements:
      "We're committed to improving TechConnect continuously. Here are some areas we're focusing on: Code Refactoring: We recognize the need for code refactoring and will continue to enhance code quality. User Experience: We plan to implement loaders in appropriate places to enhance the user experience. Middleware Handling: We're working to gracefully handle middleware and ensure smoother operation.",
  },
  {
    title: 'DoulaSkapet Company Web Page',
    description:
      'Developed a comprehensive web presence for DoulaSkapet, utilizing React, React Router, and MUI Material for design and navigation, along with React Helmet for SEO. The site is hosted on Netlify with custom domain setup.',
    tags: [
      'React JS',
      'Node.js',
      'SEO',
      'Google Analytics',
      'SEO',
      'Domain Management',
      'Node.js',
    ],
    imageUrl: '/images/doulaskapet.png',
    imageCaption: '',
    githubLink: 'https://github.com/annikalindberg/DoulaSkapet',
    LiveDemoLink: 'https://doulaskapet.se/',
  },
] as const

/* export const skillsData = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'Mongoose',
  'MongoDB',
  'Redux',
  'jQuery',
  'UX-design',
  'WCAG 2.2',
  'WAI-ARIA',
  'SEO',
  'Google Analytics',
  'Express',
  'APIs',
  'Sanity',
  'Figma',
  'Framer Motion',

] as const */

export const frontendSkills = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Tailwind',
  'Redux',
  'jQuery',
  'Figma',
  'Framer Motion',
] as const

export const backendSkills = [
  'Node.js',
  'Express',
  'Mongoose',
  'MongoDB',
  'APIs',
] as const

export const tillgänglighetSkills = [
  'WCAG 2.2',
  'WAI-ARIA',
  'SEO',
  'Google Analytics',
] as const

export const generalSkills = [
  'Git',
  'Sanity',
  'UX-design',
  'Design Thinking',
  'Agile Methodologies',
  'Jira',
  'Design Sprint Facilitation',
] as const
