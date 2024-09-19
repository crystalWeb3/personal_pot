import { useEffect, useRef } from "react";
import Image from "next/image";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { useTheme } from "next-themes";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";

import Techs from "../public/provides/techs.webp";
import Software from "../public/provides/software.webp";
import Web from "../public/provides/web.webp";
import Blockchain from "../public/provides/blockchain.webp";


import AboutBgSvg from "@/components/AboutBgSvg";
import EduGroup from "@/components/EduGroup";

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isSecOnScreen = useOnScreen(sectionRef);

  useEffect(() => {
    const q = gsap.utils.selector(sectionRef);

    gsap.registerPlugin(ScrollTrigger);

    // profile-picture
    gsap.fromTo(
      q(".profile-picture"),
      {
        x: -200,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: q(".profile-picture"),
          start: "20% bottom",
        },
      }
    );

    const fromAnimation = {
      y: 100,
      opacity: 0,
    };

    const toAnimation = (triggerTarget: string) => ({
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: q(`.${triggerTarget}`),
        start: "top bottom",
      },
    });

    // about-intro
    gsap.fromTo(q(".about-intro"), fromAnimation, toAnimation("about-intro"));

    // edu-bg
    gsap.fromTo(q(".edu-bg"), fromAnimation, toAnimation("edu-bg"));

    // bg svg parallax effect
    gsap.fromTo(
      q(".bg-svg"),
      { y: -80 },
      {
        scrollTrigger: {
          trigger: q(".bg-svg"),
          scrub: true,
        },
        y: 65,
        duration: 3,
      }
    );

    // image bg svg parallax effect
    gsap.fromTo(
      q(".img-svg"),
      { y: -30 },
      {
        scrollTrigger: {
          trigger: q(".img-svg"),
          start: "80% 75%",
          scrub: true,
        },
        y: 30,
      }
    );
  }, []);

  const { theme } = useTheme();

  const eduRef = useRef<HTMLDivElement>(null);

  // Set active link for about section
  const aboutSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();
  useEffect(() => {
    aboutSection ? onSectionChange!("What we Provide") : onSectionChange!("");
  }, [aboutSection, onSectionChange]);

  return (
    <div
      ref={sectionRef}
      className="about-panel bg-white dark:bg-[#1B2731] relative"
    >
      <section id="whoami" className="section">
        <RoughNotationGroup>
          <div className="text-center mb-10">
            <RoughNotation
              type="underline"
              color={`${theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"
                }`}
              strokeWidth={2}
              order={1}
              show={isSecOnScreen}
            >
              <h2 className="section-heading">What we Provide</h2>
            </RoughNotation>
          </div>
          <div className="md:grid grid-rows-5 lg:grid-rows-8 grid-cols-5">
            <div className="col-start-1 col-end-6 row-start-1 row-end-4 lg:row-start-0 lg:row-end-6 lg:col-start-1 lg:col-end-3 flex justify-center  py-4 lg:mb-[8%]">
              <div className="relative w-72">
                <svg
                  width="96"
                  height="21"
                  viewBox="0 0 96 21"
                  aria-hidden="true"
                  style={{marginTop: "-70px"}}
                  className="img-svg hidden lg:block fill-marrsgreen dark:fill-carrigreen absolute -top-14 -left-14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M79.2202 0.959991L62.7802 17.32L46.3301 0.959991L29.8902 17.32L13.4501 0.959991L0.410156 13.94L0.400146 17.58L13.4501 4.58999L29.8902 20.95L46.3301 4.58999L62.7802 20.95L79.2202 4.58999L93.7302 19.02L95.5402 17.19L79.2202 0.959991Z" />
                </svg>
                                
                
                
                <div className="profile-picture overflow-hidden md:overflow-visible rounded-md md:shadow-2xl m-2">
                  <Image
                    src={Software}
                    width={1700}
                    height={1790}
                    priority
                    alt="PowerWebs profile picture"
                    className="rounded-md"
                  />
                </div>
                <div className="profile-picture overflow-hidden md:overflow-visible rounded-md md:shadow-2xl m-2">
                  <Image
                    src={Blockchain}
                    width={1700}
                    height={1790}
                    priority
                    alt="PowerWebs profile picture"
                    className="rounded-md"
                  />
                </div>
                <div className="profile-picture overflow-hidden md:overflow-visible rounded-md md:shadow-2xl m-2">
                  <Image
                    src={Web}
                    width={1700}
                    height={1790}
                    priority
                    alt="PowerWebs profile picture"
                    className="rounded-md"
                  />
                </div>
                <div className="profile-picture overflow-hidden md:overflow-visible rounded-md md:shadow-2xl m-2">
                  <Image
                    src={Techs}
                    width={1700}
                    height={1790}
                    priority
                    alt="PowerWebs profile picture"
                    className="rounded-md"
                  />
                </div>
                

                <svg
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  aria-hidden="true"
                  className="img-svg hidden lg:block fill-marrsgreen dark:fill-carrigreen absolute bottom-8 -right-12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.68 11.51L9.23 7.05998L13.68 2.61C14.24 2.05 14.24 1.12999 13.68 0.569994C13.12 0.00999391 12.2 0.00999391 11.64 0.569994L7.19002 5.02001L2.74001 0.569994C2.18001 0.00999391 1.26003 0.00999391 0.700029 0.569994C0.140029 1.12999 0.140029 2.05 0.700029 2.61L5.15004 7.05998L0.700029 11.51C0.140029 12.07 0.140029 12.99 0.700029 13.55C1.26003 14.11 2.18001 14.11 2.74001 13.55L7.19002 9.09999L11.64 13.55C12.2 14.11 13.12 14.11 13.68 13.55C14.24 12.99 14.24 12.08 13.68 11.51Z" />
                </svg>

                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="img-svg hidden lg:block fill-[#FF9D00] absolute -bottom-10 right-6 scale-150"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.6799 5.68002C11.6799 8.65002 9.27994 11.05 6.30994 11.05C3.33994 11.05 0.939941 8.65002 0.939941 5.68002C0.939941 2.71002 3.33994 0.309998 6.30994 0.309998C9.27994 0.309998 11.6799 2.71002 11.6799 5.68002Z" />
                </svg>
              </div>
            </div>
            
            <p className="col-start-1 col-end-3 row-start-0 row-end-3 lg:row-start-0 lg:row-end-1 lg:col-start-3 lg:col-end-5 lg:ml-8 lg:mt-auto about-intro">
              At our development team, we offer a comprehensive range of services tailored to meet the needs of both Web3 and Web2 projects. Our expertise ensures that we deliver high-quality solutions that drive success for our clients. Here’s what we offer:
            </p>

            <div
              className="col-start-3 col-end-6 row-start-1 row-end-6 lg:row-start-1 lg:row-end-0 md:ml-8 place-content-end"
              ref={eduRef}
            >
              <p className="edu-bg my-4">Parts Of Provide</p>
              {educationInfo.map((edu) => (
                <EduGroup edu={edu} key={edu.id} />
              ))}
            </div>
          </div>
        </RoughNotationGroup>
      </section>

      <AboutBgSvg />
    </div>
  );
};

const educationInfo = [
  {
    id: 1,
    title: "Custom Software Development",
    subTitle: "Bespoke Solutions to Drive Your Vision",
    list: [
      "Tailored applications that transform unique ideas into reality.",
      "Scalable, high-performance solutions developed using cutting-edge technologies.",
      "Agile methodology for rapid iterations and continuous improvement."
    ],
  },
  {
    id: 2,
    title: "Blockchain Development ",
    subTitle: "Unlock the Future with Decentralized Solutions",
    list: [
      "Robust smart contracts that automate processes and enhance security.",
      "Decentralized application (DApp) development for transparency and trust.",
      "Tailored functionalities to meet specific use cases and business needs."
    ],
  },
  {
    id: 3,
    title: "Web Development",
    subTitle: "Transformative Digital Experiences",
    list: [
      "Stunning, responsive websites that captivate users and drive engagement.",
      "Best practices in SEO and performance optimization for better visibility.",
      "Dynamic corporate sites and expansive e-commerce platforms crafted for results."
    ],
  },
  {
    id: 4,
    title: "Mobile App Development",
    subTitle: "Engage Users Anytime, Anywhere",
    list: [
      "Cross-platform mobile applications that provide seamless experiences.",
      "Intuitive interfaces designed to enhance user engagement and retention.",
      "Scalable solutions that allow for future enhancements as your user base grows."
    ],
  },
  {
    id: 5,
    title: "UI/UX Design",
    subTitle: "Crafting Experiences That Resonate",
    list: [
      "User-centered design principles that enhance usability and satisfaction.",
      "In-depth research and testing to create visually stunning designs.",
      "Meaningful interactions that drive higher conversion rates."
    ],
  },
  {
    id: 6,
    title: "Consulting Services",
    subTitle: "Strategic Insights for Digital Transformation",
    list: [
      "Expert guidance on the latest technologies and industry trends.",
      "Assessment of current systems to identify opportunities for improvement.",
      "Strategic planning to align technology initiatives with business goals."
    ],
  },
  {
    id: 7,
    title: "Maintenance and Support",
    subTitle: "Proactive Support for Optimal Performance",
    list: [
      "Ongoing maintenance to keep systems secure and up-to-date.",
      "Regular performance assessments to minimize downtime.",
      "Focus on technical details while you concentrate on core business activities."

    ],
  },
  {
    id: 8,
    title: "Training and Workshops",
    subTitle: "Empowering Your Team for Success",
    list: [
      "Hands-on training sessions that equip your team with essential skills.",
      "Coverage of best practices in development and project management.",
      "Workshops on emerging technologies to drive productivity and innovation."

    ],
  },
  
];

export default AboutSection;
