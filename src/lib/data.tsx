import LogoJavascript from "/public/images/logos/icon-javascript.svg";
import LogoTypescript from "/public/images/logos/icon-typescript.svg";
import LogoReact from "/public/images/logos/icon-react.svg";
import LogoNextjs from "/public/images/logos/icon-nextjs.svg";
import LogoNodejs from "/public/images/logos/icon-nodejs.svg";
import LogoSocket from "/public/images/logos/icon-socket.svg";
import LogoSocketLight from "/public/images/logos/icon-socket-light.svg";
import LogoSass from "/public/images/logos/icon-sass.svg";
import LogoTailwindcss from "/public/images/logos/icon-tailwindcss.svg";
import LogoFigma from "/public/images/logos/icon-figma.svg";
import LogoGit from "/public/images/logos/icon-git.svg";
import LogoVite from "/public/images/logos/logo-vite.png";

import LogoUpwork from "/public/images/logos/logo-upwork.svg";
import LogoGreenApex from "/public/images/logos/logo-greenapex.svg";
import LogoGreenApexLight from "/public/images/logos/logo-greenapex-light.svg";
import LogoDotnpixel from "/public/images/logos/logo-dotnpixel.svg";
import LogoDotnpixelLight from "/public/images/logos/logo-dotnpixel-light.svg";
import LogoMetanesia from "/public/images/experience/metanesia-logo.png";
import LogoSmarteye from "/public/images/experience/logo-wordmark-light.svg";
import LogoTelkom from "/public/images/experience/1594108255409_compress_logo telkom indonesia.png";

import ProjectWetap from "/public/images/work/wetap.png";
import ProjectAMGV from "/public/images/work/amgv.png";

// import ProjectWingie from "/public/images/project-wingie.png";
// import ProjectPepehousing from "/public/images/project-pepehousing.png";

// import AvatarKrisztian from "/public/images/avatar-krisztian.png";
// import AvatarEugen from "/public/images/avatar-eugen.png";
// import AvatarDummy from "/public/images/avatar-dummy.svg";

import {
  ExperienceDetailsType,
  ProjectDetails,
  TechDetailsType,
  TestimonialDetails,
} from "@/lib/types";

export const NAV_LINKS = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const TECHNOLOGIES: TechDetailsType[] = [
  {
    label: "Javascript",
    logo: LogoJavascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    label: "Typescript",
    logo: LogoTypescript,
    url: "https://www.typescriptlang.org/",
  },
  {
    label: "React",
    logo: LogoReact,
    url: "https://react.dev/",
  },
  {
    label: "Next.js",
    logo: LogoNextjs,
    url: "https://nextjs.org/",
  },
  {
    label: "Vite",
    logo: LogoVite,
    url: "https://vitejs.dev/",
  },
  {
    label: "Socket.io",
    logo: LogoSocket,
    darkModeLogo: LogoSocketLight,
    url: "https://socket.io/",
  },
  {
    label: "Sass/Scss",
    logo: LogoSass,
    url: "https://sass-lang.com/",
  },
  {
    label: "Tailwindcss",
    logo: LogoTailwindcss,
    url: "https://tailwindcss.com/",
  },
  {
    label: "Figma",
    logo: LogoFigma,
    url: "https://www.figma.com/",
  },
  {
    label: "Git",
    logo: LogoGit,
    url: "https://git-scm.com/",
  },
];

export const EXPERIENCES: ExperienceDetailsType[] = [
  {
    logo: LogoMetanesia,
    logoAlt: "MetaNesia",
    position: "Frontend Developer",
    startDate: "January 2023",
    endDate: "Present",
    summary: [
      "Developing an attractive and intuitive user interface for the Metanesia application, focusing on the CMS project, and collaborating with the backend team to integrate the frontend with the existing CMS system.",
    ],
  },
  {
    logo: LogoSmarteye,
    logoAlt: "Smarteye",
    position: "Frontend Developer",
    startDate: "March",
    endDate: "December 2022",
    summary: [
      "Working as a frontend developer and working closely with a team of UI/UX designers, Backend, QA in developing various projects",
      "Developed and maintaining the webinar platform at smarteye.id.",
      "Integrated Realtime API with Socket.io to provide real-time experiences to users.",
    ],
  },
  {
    logo: LogoTelkom,
    logoAlt: "Telkom Indonesia",
    position: "Developer",
    startDate: "September 2021",
    endDate: "February 2022",
    summary: [
      "Internship Participant at Program Internship DDB Telkom Batch Match Up September 2021",
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: "AMGV Expo Nusa",
    description:
      "A digital exhibition held to showcase and demonstrate products or services provided by event participants",
    url: "private",
    previewImage: ProjectAMGV,
    technologies: ["Javascript", "CSS", "Tailwind"],
  },
  {
    name: "We-Tap",
    description:
      "A platform for creating customizable digital business cards that cater to users' preferences and can generate QR codes.",
    url: "private",
    previewImage: ProjectWetap,
    technologies: ["Javascript", "CSS", "Bootstrap"],
  },
];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: "Jhon doe Gyuris",
    // personAvatar: Jhon doe,
    title: "Freelancer",
    testimonial:
      "Lorem ipsum dolor sit amet,re ipsam nihil aut reiciendis voluptates aliquid eveniet sit corrupti sed id quam inventore deleniti tenetur veritatis dignissimos libero itaque! Rerum, voluptatem exercitationem. Numquam, pariatur. Optio pariatur labore facere expedita aliquam enim, nobis iste!",
  },
  {
    personName: "Jhon doe",
    // personAvatar: Jhon doe,
    title: "Freelancer",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi minus reprehenderit dicta molestiae officia quibusdam est magni asperiores omnis enim aspernatur quas, deleniti unde harum laudantium nobis dolorum in! Minima.",
  },
  {
    personName: "Jhon doe",
    // personAvatar: Jhon doe,
    title: "Freelancer",
    testimonial:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur libero nam quibusdam molestias accusantium porro quam delectus aliquam hic. Dolores eligendi voluptatem et quo consectetur?",
  },
];
