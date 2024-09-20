import Image from "next/image";
import { useEffect, useRef } from "react";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";

import ProjectCard from "@/components/ProjectCard";
import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";

// import tizz from "public/projects/tizz.png";
import concave from "public/projects/concave.png";
// import ubranmix from "public/projects/ubranmix.png";
import bonfida from "public/projects/bonfida.png";
import blast from "public/projects/blast.png";
import bonzo from "public/projects/bonzo.png";
import lattis from "public/projects/lattis.png";
import amera from "public/projects/amera.png";
import botbot from "public/projects/botbot.png";
import pricevault from "public/projects/pricevault.jpg";

const ProjectSection: React.FC = () => {
  const { theme } = useTheme();

  const sectionRef = useRef<HTMLDivElement>(null);

  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);

  // Set active link for project section
  const projectSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();
  useEffect(() => {
    projectSection && onSectionChange!("projects");
  }, [onSectionChange, projectSection]);

  return (
    <section ref={sectionRef} id="projects" className="section">
      <div className="project-title text-center">
        <RoughNotation
          type="underline"
          color={`${theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"}`}
          strokeWidth={2}
          order={1}
          show={isOnScreen}
        >
          <h2 className="section-heading">Successful Projects</h2>
        </RoughNotation>
      </div>
      <span className="project-desc text-center block mb-4" ref={elementRef}>
        “Amazing and Successful Projects" <br />
        These are for you. You can choose simillar.
      </span>
      <div className="flex flex-wrap">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} index={index} project={project} />
        ))}
      </div>
      <div className="others text-center mb-16">
        Just ask for us, then Your will be been solved with light speed.
        {/* <a
          href="https://github.com/powerwebs"
          target="_blank"
          rel="noreferrer"
          className="font-medium underline link-outline text-marrsgreen dark:text-carrigreen whitespace-nowrap"
        >
          my github profile
        </a> */}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Concave",
    type: "Full stack",
    image: (
      <Image
        src={concave}
        sizes="100vw"
        fill
        alt="AstroPaper"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Here at Concave, we see ourselves as the smooth-talking spooning type. This is why we went ahead and created our own suite of products that feed into each other to create a seamless experience when interacting with Concave.",
    tags: ["Solana", "Rust", "React", "TailwindCSS", "Anchor", "Next"],
    liveUrl: "https://concave.lol/",
    codeUrl: "https://github.com/powerwebs/astro-paper",
    bgColor: "bg-[#9FD0E3]",
    githubApi: "https://api.github.com/repos/powerwebs/astro-paper",
  },
  {
    title: "Bonfida",
    type: "Full stack",
    image: (
      <Image
        src={bonfida}
        sizes="100vw"
        fill
        alt="AstroPaper"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Establishing your identity in a permissionless and censorship-resistant way using Solana. We give the power back to our users",
    tags: ["Solana", "Rust", "React", "Typescript", "Anchor"],
    liveUrl: "https://www.bonfida.org/",
    codeUrl: "https://github.com/powerwebs/astro-paper",
    bgColor: "bg-[#9FD0E3]",
    githubApi: "https://api.github.com/repos/powerwebs/astro-paper",
  },
  {
    title: "lattis",
    type: "Full stack",
    image: (
      <Image
        src={lattis}
        sizes="100vw"
        fill
        alt="AstroPaper"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Lattis is revolutionizing fleet management across industries like micromobility, car rental, delivery, and public transit.",
    tags: ["Next", "TypeScript", "React", "TailwindCSS"],
    liveUrl: "https://lattis.io",
    codeUrl: "https://github.com/powerwebs/astro-paper",
    bgColor: "bg-[#9FD0E3]",
    githubApi: "https://api.github.com/repos/powerwebs/astro-paper",
  },
  {
    title: "amera",
    type: "Full stack",
    image: (
      <Image
        src={amera}
        sizes="100vw"
        fill
        alt="Terminal Portfolio"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Remote secure work website in terminal version developed with React and TypeScript. ",
    tags: ["React", "TypeScript", "Styled-Components"],
    liveUrl: "https://amerashare.com",
    codeUrl: "https://github.com/powerwebs/terminal-portfolio",
    bgColor: "bg-[#B4BEE0]",
    githubApi: "https://api.github.com/repos/powerwebs/terminal-portfolio",
  },
  {
    title: "blast",
    type: "Frontend",
    image: (
      <Image
        src={blast}
        sizes="100vw"
        fill
        alt="Haru Fashion App"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "An ecommerce web application where users can browse various products, add to wishlist, add to cart, and make purchase. Available in English and Burmese languages.",
    tags: ["NextJS", "TypeScript", "TailwindCSS", "ContextAPI", "Vue"],
    liveUrl: "https://app.blast.gg/",
    codeUrl: "https://github.com/powerwebs/haru-fashion",
    bgColor: "bg-[#A6CECE]",
    githubApi: "https://api.github.com/repos/powerwebs/haru-fashion",
  },
  {
    title: "Bonzo",
    type: "Backend",
    image: (
      <Image
        src={bonzo}
        sizes="100vw"
        fill
        alt="Haru API"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "A RESTful API developed for Haru fashion ecommerce project. Include CRUD operations, authentication, authorization, forgot/reset password and full-text search.",
    tags: ["ExpressJS", "TypeScript", "PostgreSQL", "Prisma"],
    liveUrl: "https://getbonzo.com/",
    codeUrl: "https://github.com/powerwebs/haru-api",
    bgColor: "bg-[#C5E4E7]",
    githubApi: "https://api.github.com/repos/powerwebs/haru-api",
  },
  {
    title: "Botbot",
    type: "Frontend + HeadlessCMS",
    image: (
      <Image
        src={botbot}
        sizes="100vw"
        fill
        alt="Next Bookstore"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "An online bookstore developed using NextJS 13 with appDir and StrapiCMS.",
    tags: ["NextJS", "Radix UI ", "TailwindCSS", "TanstackQuery", "StrapiCMS"],
    liveUrl: "https://oi.botbot.bot/",
    codeUrl: "https://github.com/powerwebs/next-bookstore",
    bgColor: "bg-[#EBF4F4]",
    githubApi: "https://api.github.com/repos/powerwebs/next-bookstore",
  },
  {
    title: "Pricevault",
    type: "Backend",
    image: (
      <Image
        src={pricevault}
        sizes="100vw"
        fill
        alt="Shadcn Admin"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Admin Dashboard UI built with Shadcn and Vite. Built with responsiveness and accessibility in mind.",
    tags: ["ShadcnUI", "Vite", "React Router", "TypeScript"],
    liveUrl: "https://pricevault.io/",
    codeUrl: "https://github.com/powerwebs/shadcn-admin",
    bgColor: "bg-[#FBFBFB]",
    githubApi: "https://api.github.com/repos/powerwebs/shadcn-admin",
  },
  
];

export default ProjectSection;
