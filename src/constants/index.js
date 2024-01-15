import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  unkjd,
  abra,
  travelsuit,
  propmtopia,
  summarizer,
  askStudent,
  playgrounds,
  threejs,
  python,
  c,
  expressjs,
  nextjs,
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
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Android Developer",
    icon: mobile,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
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
    name: "Express JS",
    icon: expressjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "UNKJD",
    icon: unkjd,
    iconBg: "#383E56",
    date: "November 2022 - May 2023",
    points: [
      "Building web and mobile landing pages from scratch using React.js and TypeScript.",
      "Engineered an efficient internal administrative system using React.js, Next.js, and the Solana blockchain API.",
      "Managing deployment processes seamlessly with Vercel and ArgoCD (Kubernetes).",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Abra R&D Solutions (formerly Devalore)",
    icon: abra,
    iconBg: "#E6DEDD",
    date: "June 2021 - November 2022",
    points: [
      "Implemented migration infrastructure to transition website implementation into client website format using Typescript, Node.js, and Express.js. Also developed scraping flows using Selenium.",
      "Performed DevOps operations, involving the creation of Docker images and the establishment of a messaging system using Kafka.",
      "Contributed to the high-level design of a cloud migration project by providing support in documentation, diagram creation, and mapping out flows.",
      "Continuously managing code maintenance tasks, including monitoring, bug fixing, and quality assurance.",
    ],
  },
  {
    title: "Manual QA",
    company_name: "TravelSuit",
    icon: travelsuit,
    iconBg: "#383E56",
    date: "January 2018 - January 2019",
    points: [
      "Automated manual testing processes for client-side searching and fault detection using Python and Selenium.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Delivered exemplary customer technical support, ensuring seamless communication and swift resolution of technical queries, contributing to overall customer satisfaction.",
      "Proficiently managed bugs and efficiently utilized Jira for meticulous ticketing, facilitating streamlined communication and collaboration with R&D teams to ensure prompt issue resolution.",
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
    name: "Promptopia",
    description:
      "A Web-based platform that allows users to search for AI-Powered prompts by tag or username.",
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
      {
        name: "nextjs",
        color: "yellow-text-gradient",
      },
    ],
    image: propmtopia,
    source_code_link: "https://github.com/bar2693lis/Promptopia",
    link_to_project: "https://promptopia-8fn2ct9ew-barlis-projects.vercel.app/",
  },
  {
    name: "OpenAi Article Summarizer",
    description:
      "Effortlessly summarize any article with our GPT-4-powered website by entering the URL.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
      {
        name: "vite",
        color: "yellow-text-gradient",
      },
    ],
    image: summarizer,
    source_code_link: "https://github.com/bar2693lis/OpenAiArticleSummarizer",
    link_to_project: "https://lucent-twilight-4efbfb.netlify.app/",
  },
  {
    name: "Ask Student",
    description:
      "This Android project facilitates student collaboration by enabling help requests and fostering communication through a chat feature. Users can customize profiles and share portfolios for seamless networking.",
    tags: [
      {
        name: "android",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "retrofit",
        color: "pink-text-gradient",
      },
      {
        name: "locationServices",
        color: "yellow-text-gradient",
      },
    ],
    image: askStudent,
    source_code_link: "https://github.com/",
    link_to_project: "",
  },
  {
    name: "Playgrounds in Holon",
    description:
      "Developed in partnership with the Holon Municipality, this project enables users to seamlessly explore Holon's playgrounds, categorizing them by features such as sandboxes, slides, fountains, and parking lots.",
    tags: [
      {
        name: "js",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "yellow-text-gradient",
      },
    ],
    image: playgrounds,
    source_code_link: "https://github.com/bar2693lis/Playgrounds_in_Holon",
    link_to_project: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
