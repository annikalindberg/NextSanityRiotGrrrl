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
      'Open source project for political activism. I work on the frontend with React and TypeScript.',
    icon: React.createElement(RiOpenSourceLine),
    date: '2023 - present',
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
      'Fullstack app containing a API using Express, Node.js and MongoDB and a frontend in React. The purpose of the app is to connect women and non-binary individuals within the tech community, facilitating connections for mentorship, support, and shared experiences.',
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
  {
    title: 'My Code Diary',
    description:
      'A diary app challenge implemented with a focus on scalability and extensibility, featuring Material-UI for the UI components and configured for future API integration. Technologies include React JS, Redux, and Axios.',
    imageUrl: '/images/codeDiary.png',
    tags: ['React JS', 'Redux', 'Node.js', 'API', 'Axios', 'Node.js'],
    githubLink: 'https://github.com/annikalindberg/diary-app',
    LiveDemoLink: 'https://annikasdiary.netlify.app/',
  },
  {
    title: 'Wordgame Swedish Weather',
    description:
      'A creative take on the Hangman game with a theme suitable for learning Swedish or English words, utilizing React JS, Redux for state management, and Axios for API data fetching.',
    imageUrl: '/images/swedishwordsproject.png',
    tags: ['React JS', 'Redux', 'API', 'Axios', 'Node.js'],
    githubLink: 'https://github.com/annikalindberg/Hangman-game',
    LiveDemoLink: 'https://swedishweatherwords.netlify.app/',
  },
  {
    title: 'Rabbit Hole Maze-game',
    description:
      'An Alice in Wonderland-themed labyrinth game leveraging Redux for async actions and reducers, focusing on integrating APIs and creating reusable components. Built with React JS and Redux.',
    imageUrl: '/images/rabbithole.jpg',
    tags: ['React JS', 'Redux', 'API', 'Animation', 'Axios', 'Node.js'],
    githubLink: 'https://github.com/annikalindberg/project-labyrinth',
    LiveDemoLink: 'https://rabbit-hole-labyrinth-annika-fiona.netlify.app/',
  },
  {
    title: 'Happy-Thoughts-Project',
    description:
      'A microblogging platform for sharing joyful moments, supported by a custom Express API and MongoDB for the backend. Incorporates full stack development with React on the frontend.',
    imageUrl: '/images/happythoughts.png',
    tags: [
      'Express',
      'Mongo DB',
      'CSS',
      'JavaScript',
      'React',
      'API',
      'Axios',
      'Fullstack',
      'Node.js',
    ],
    githubLink: 'https://github.com/annikalindberg/project-happy-thoughts',
    LiveDemoLink: 'https://sweet-unicorn-99f547.netlify.app/',
  },
  {
    title: 'To Do App',
    description:
      'A To-Do app emphasizing state management via React and Redux, featuring custom reducers and the createSlice method from Redux Toolkit for a modular approach. Styled with vanilla CSS.',
    imageUrl: '/images/to-do-app.png',
    tags: ['CSS3', 'JavaScript', 'React', 'Redux', 'Node.js'],
    githubLink: 'https://github.com/annikalindberg/project-todos',
    LiveDemoLink: 'https://animated-paletas-c14d00.netlify.app/',
  },
  {
    title: 'Space-Quiz Project',
    description:
      'A collaborative effort to create a quiz application using React and Redux, demonstrating the use of selectors for state access and dispatch for triggering actions. Developed with React JS and Redux.',
    imageUrl: '/images/reduxquiz.png',
    tags: ['CSS3', 'JavaScript', 'React', 'Redux', 'Node.js'],
    githubLink: 'https://github.com/annikalindberg/project-redux-space-quiz',
    LiveDemoLink: 'https://annika-spacequiz.netlify.app/',
  },
  {
    title: 'Movie releases',
    description:
      'A React-based multi-page application showcasing client-side navigation with React Router and asynchronous data fetching from an external API, utilizing hooks for enhanced functionality.',
    imageUrl: '/images/movies.png',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Redux', 'Axios', 'Node.js'],
    githubLink: 'https://github.com/annikalindberg/project-movies',
    LiveDemoLink: 'https://cosmic-daffodil-7c032f.netlify.app/',
  },
  {
    title: 'Backend API for Happy Thoughts',
    description:
      "Developed an Express and MongoDB API featuring endpoints for managing 'Happy Thoughts', including functionality for posting and liking thoughts. Focuses on backend development.",
    imageUrl: '/images/happythoughts.png',
    tags: [
      'Express',
      'Mongo DB',
      'JavaScript',
      'API',
      'Backend',
      'API',
      'Node.js',
    ],
    githubLink: 'https://github.com/annikalindberg/project-happy-thoughts-api ',
    LiveDemoLink: 'https://happy-thoughts-express-api.onrender.com/',
  },
  {
    title: 'Music releases',
    description:
      'A React project showcasing new music releases using the Spotify API, developed through pair programming. Highlights the use of useState hooks for state management.',
    imageUrl: '/images/musicreleases.png',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js'],
    githubLink: 'https://github.com/chas-academy/project-music-releases',
    LiveDemoLink: 'https://anna-annikas.netlify.app/',
  },
  {
    title: 'Weather app',
    description:
      'A weather dashboard application built with vanilla JavaScript, displaying current weather and a 5-day forecast by fetching data from a weather API. Developed through pair programming.',
    imageUrl: '/images/weatherapp.png',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'API'],
    githubLink: 'https://github.com/annikalindberg/project-weather-app',
    LiveDemoLink: 'https://rainbow-rolypoly-c2ce71.netlify.app/',
  },
  {
    title: 'Guess who the game',
    description:
      'A digital version of the classic board game "Guess Who", implemented in vanilla JavaScript. Focuses on utilizing objects, arrays, and DOM manipulation.',
    imageUrl: '/images/guess-who.png',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    githubLink: 'https://github.com/AnnikaLindberg/project-guess-who',
    LiveDemoLink: 'https://comforting-fudge-9d6c21.netlify.app/',
  },
] as const

export const skillsData = [
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
  'UX/UI',
  'Express',
  'APIs',
  'Sanity',
  'Figma',
  'Framer Motion',
] as const
