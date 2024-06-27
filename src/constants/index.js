import {
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
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
    title: "React Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "Redux Toolkit",
    icon: redux,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Engineer",
    company_name: "NNOVAX",
    icon: starbucks,
    iconBg: "#383E56",
    date: "February 2024 - currently running",
    points: [
      "Participation in the team and development of a system called OmniGesture that will have the function of controlling its users' actions through eyes and gestures",
      "Develoment a Content Management Systems to control a content-heavy website build with React & Maven",
      "Development of new frontend features and pages for the main page of the company and clients using React.JS, CSS, Styled Components e.t.c",
      "Development of tests using tools as Jest and Cypress for the frontend",
      "Development the software DLP using React, Redux, TailwindCSS and Java on backend",
      "Database maintenance with MySQL & MongoDB"
    ],
  },
  {
    title: "Full Stack Engineer",
    company_name: "Inetum",
    icon: starbucks,
    iconBg: "#383E56",
    date: "September 2023 - February 2024",
    points: [
      "Participation in the construction of the remote management flow of the Portuguese company EDP and development of an interface to control its employees in the field using React & Python ",
      "Development of systems for controlling application services using Javascript, Node.JS, Postgre and Java Spring Boot.",
      "Development of new backend features for APIs, using ABAP & Javascript",
      "Structuring algorithms for implementation in code, improving logical reasoning and problem solving skills", 
    ],
  },
  {
    title: "Software Engineer",
    company_name: "ICTS Alliant",
    icon: shopify,
    iconBg: "#383E56",
    date: "November 2022 - September 2023",
    points: [
      "Member of the team responsible for creating and implementing a user data traffic system, with the aim of mapping the performance level of the company's central system, using Java & Javascript",
      "Active participation as a member responsible for launching new versions of the code.",
      "Development of systems to control data entered through APIs, using Python, Node.JS and Microsoft Services",
      "Creation of dashboards through data manipulation, using MySQL, Maven and linking to the frontend through javascript",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "OneBitCode",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "August 2021 - Octuber 2022",
    points: [
      "Website maintenance to deal with high data flow and access, using Javascript",
      "Handling APIs for login section development",
      "Development of new page sections, using Javascript, Node.JS, CSS, SQL",
      "Maintenance and refactoring of codes written in JavaScript",
      "Introduction to Java development, knowledge of relational and non-relational databases",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Caique proved me wrong.",
    name: "Julia Duarte",
    designation: "Satisfied Customer",
    company: "AcessStage Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Caique does.",
    name: "João Dias",
    designation: "Satisfied Customer",
    company: "Firenzi Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Caique optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Danniella Giovanna",
    designation: "Satisfied Customer",
    company: "Zanchetta Foods",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
    source_code_link: "https://github.com/devCaiquedePaula",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/devCaiquedePaula",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/devCaiquedePaula",
  },
];

export { services, technologies, experiences, testimonials, projects };