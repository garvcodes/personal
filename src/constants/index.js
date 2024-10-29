import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  amazon,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Cybersecurity Enthusiast",
    icon: mobile,
  },
  {
    title: "Medtech Researcher",
    icon: backend,
  },
  {
    title: "UC Berkeley Student",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Data Structures Academic Intern",
    company_name: "Berkeley EECS",
    icon: starbucks,
    iconBg: "#383E56",
    date: "June 2023 - August 2023",
    points: [
      "Class Instruction: Delivered comprehensive assistance in instructing students on data structures in Java, offering guidance, and mentorship in understanding complex concepts. Provided hands-on debugging support to students, aiding in identifying, and rectifying errors in their code. Actively engaged in fostering a conducive learning environment by effectively, communicating technical concepts and troubleshooting strategies",
      "Git Debugging: Managed student GitHub accounts, resolving repository errors along with autograder issues"
    ],
  },
  {
    title: "Software Engineering Intern",
    company_name: "Werkerbee",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "April 2023 - Nov 2023",
    points: [
      "MVP Development: Worked in development of a cutting-edge job recruitment web application using Next.js, React,vTailwind, and MongoDB. Actively participated in the implementation of the Minimum Viable Product (MVP), ensuring optimal user experience and seamless functionality",
      "UI/UX Optimization: Recieved feedback from both restaurants and employees and collected data on their percieved usability of app. Adjusted features accordingly to make UI more clear and UX more pleasant",
      "RESTful API Development: Contributed to the design and implementation of a robust RESTful API for WerkerBee, enhancing application functionality",
      "Funding and Customer Acquisition: Played salesman role in effort to recruit both workers and companies to the platform, contributing to foundational growth"
    ],
  },
  {
    title: "Research Intern",
    company_name: "UCSF Medical AI Initiative",
    icon: shopify,
    iconBg: "#383E56",
    date: "Aug 2023 - Present",
    points: [
      "AWS Operations: Handled implementation of IVR (Interactive Voice Response) system using Amazon Connect, AWS Lex, and secure OpenAI API to create AI phone agent able to take patient pre-consultations. Used in research study with goal of cutting physician appointment times.",
      "Microsoft Azure Security: Collaborated with hospital administration as well as Microsoft Azure technical support to use Azure’s secure OpenAI API to ensure patient records were not being used for model training."
    ],
  },
  {
    title: "Software Engineering Intern",
    company_name: "Stealth Startup",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Dec 2023 - Present",
    points: [
      "Spent a gap semester working at Cair Health! A stealth startup working in the health insurance billing space, helping hospitals improve their claims using AI.",
    ],
  },
  {
    title: "Software Development Engineering Intern",
    company_name: "Amazon",
    icon: amazon,
    iconBg: "#E6DEDD",
    date: "May 2024 - August 2024",
    points: [
      "Integration & Load Testing: Created Integration and Load Testing CI/CD frameworks for new FireTV Ad Stack plugins. Used Java to write tests on temporary Lambda compute to validate packages being added to version set.",

     " Validation Pipeline for FireTV Ads Plugins: Worked on validation pipeline to add packages to FireTV's Setu, Amazon's internal tool for ad customization. Programmed system monitoring tool in Java to obtain CPU, memory, and latency metrics during plugin integration testing across FireTV ad stack, only allowing addition of plugin to library if all benchmarks are met.",
      
      "Request Propagation Funnel View: Created Funnel View to visualize request and response loss across ad stack, so engineers could ascertain problem areas.",
    ],
  },
  {
    title: "Student Researcher",
    company_name: "Innovative Genomnics Institute",
    icon: amazon,
    iconBg: "#E6DEDD",
    date: "Septemember 2024 - Present",
    points: [
      "Protein Prediction Models: Utilized advanced protein prediction models, including AlphaFold, BindCraft, and Raygun to filter and minimize protein candidates.",
       "Wet Lab Testing: Conducted experiments in a wet lab to test the functionality and stability of the minimized proteins",
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Scrapbook",
    description:
      "Web-based platform that allows users share memories between each other. Designed for use by patients with Alzheimer's, promoting active memory recall and in turn memory retention.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://devpost.com/software/scrapbook-5h0f4v",
  },

];

export { services, technologies, experiences, testimonials, projects };
