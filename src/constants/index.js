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
    title: "FullStack Developer",
    company_name: "Inetum",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Octuber 2023 - January 2024",
    points: [
      "Developing and web applications using JavaScript, ABAP and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Data Analyst & Back-end Developer",
    company_name: "ICTS Alliant",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Oct 2022 - Ago 2023",
    points: [
      "Data analysis and order processing.",
      "Collaborating with cross-functional teams including, product managers, and others to create high-quality products and risk reduction.",
      "Creation of reports and dashboards for maintenance with JavaScript and PHP",
    ],
  },
  {
    title: "Data Analyst",
    company_name: "Altice USA / World IT",
    icon: shopify,
    iconBg: "#383E56",
    date: "Ago 2022 - Set 2022",
    points: [
      "Maintaining and repairing raw data for project compilation",
      "Responding to internal calls for recovering sensitive data and changes to the Database.",
      "Implementing callbacks and ensuring cross-browser compatibility.",
      "Participating in data reviews and providing constructive feedback to other analysts.",
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "Freelance and professional courses",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Feb 2021 - Ago 2022",
    points: [
      "Developing and maintaining web applications using HTML, CSS, JS & React and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Creation of exclusive layouts.",
      "constant improvement of skills and search for new technologies.",
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
    source_code_link: "https://github.com/",
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
    source_code_link: "https://github.com/",
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
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };