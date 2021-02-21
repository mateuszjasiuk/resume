export const resume = {
  name: 'Mateusz',
  lastname: 'Jasiuk',
  tagline: 'JavaScript Developer',
  contact: {
    phone: '+48 692083522',
    email: 'mateusz.jasiuk@gmail.com',
    linkedIn: 'https://linkedin.com/in/mateuszjasiuk',
    github: 'https://github.com/mateuszjasiuk',
  },
  history: history(),
  summary: summary(),
  skills: skills(),
  languages: languages(),
  academicBackground: academicBackground()
};

function summary() {
  return `I am a JavaScript developer with more than 6 years of professional experience. I'm currently working as a full-stack engineer with a focus on EventSourcing.`;
}

function skills() {
  return [
    'JavaScript',
    'TypeScript',
    'HTML/CSS',
    'Angular',
    'React',
    'Redux',
    'NestJS / NodeJS',
    'EventSourcing',
    'Vim',
  ];
}

function languages() {
  return ['polish - native', 'english - fluent', 'russian - conversational'];
}

function history() {
  return [
    {
      position: 'JavaScript developer',
      company: 'Instapage and Postclick',
      from: 'December 2016',
      to: 'Present',
      achievements: [
        'Created parts of a front-end and a back-end for a collaboration tool for landing page builder using Angular2, NodeJS',
        'Created a feature for selecting and editing specific blocks in the page builder',
        'Moved main builder toolbar from top to sides, which included refactoring of most of the application dragging, resizing, measuring, snapping features',
        'Created company-wide feature for displaying information about the necessity of upgrading to the new plan. It included collaborating with every dev team in the office',
        'Created NodeJS microservice for blocking simultaneous users interacting with the page builder at the same time',
        'As a part of a two men team, developed an application that processed over 8 million pages and described the most likely data type that was supported by the page builder',
        'Went to the San Francisco office to work with the product team on a prototype of a new product that allows for creating landing pages at scale',
        'Created a PoC of the Automated Layouts backend which is now a base of a Postclick application. It included integrating NestJS CQRS plugin with EventStore',
        'Created parts of Postclick MVP like placeholders feature, block editor, style editor',
        'Introduced needed abstractions for backend like aggregate caching, aggregate cache invalidation, event versioning, persistent event bus',
      ],
    },
    {
      position: 'Front-end developer',
      company: 'Astek / Roche',
      from: 'September 2015',
      to: 'December 2016',
      achievements: [
        'Created the front-end part of two applications using jQuery, HTML, CSS, React, Redux',
        'Bootstrapped and configured the second app using webpack2',
        'Convinced my tech lead to use React with Redux :)',
        'Worked remotely',
      ],
    },
    {
      position: 'Web developer',
      company: 'TangramCare',
      from: 'May 2014',
      to: 'June 2015',
      achievements: [
        'Created the front-end part of two applications using jQuery, HTML, CSS, React, Redux',
        'Managed API of applications written in Spring',
        'Created original grid framework for internal use',
      ],
    },
  ];
}

function academicBackground() {
  return [
    {
      university: 'Białystok University of Technology',
      from: '2010',
      to: '2014',
      major: 'Computer Science',
      degree: 'B.E.',
      description: "Bachelor's Work: Task organizer with a mobile client for Android devices.",
    }
 ] 
}