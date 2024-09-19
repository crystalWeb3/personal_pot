import { useEffect, useRef } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { RoughNotation } from "react-rough-notation";

import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";
import { MdxMeta } from "pages/blog/posts/[slug]";
import BlogImageCard from "@/components/BlogImageCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Props = {
  posts: MdxMeta[];
};

const BlogSection: React.FC<Props> = ({ posts }) => {
  const { theme } = useTheme();

  const sectionRef = useRef<HTMLDivElement>(null);

  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);

  const teamInfo = [
    {
      id: 1,
      name: "Brandon",
      role: "Team leader & Blockchain engineer",
      description:
        "Results-driven Innovative Blockchain Engineerin designing and implementing secure Blockchain solutions. Proficient in Rust, Node.js, React, Vue and Solidity, with a strong focus on smart contracts, dApps, and tokenomics. Demonstrated success in enhancing system performance and security across DeFi and NFT platforms. Committed to driving technological advancements and fostering team collaboration.",
      imageUrl: "/team/brandon.png",
      resume: "#",
    },
    {
      id: 2,
      name: "Angie",
      role: "Content Mangement",
      description:
        "Malaysian. Ambitious, tech-savvy enthusiast, and well-rounded professional. Passionate in travel, education, healthcare and the creative industry of films and writing. Quick to pick up new skills and adjust to new environment while giving 200% in the work. ",
      imageUrl: "/team/angie.png",
      resume: "#",
    },
    {
      id: 3,
      name: "Kevin",
      role: "Seinor FullStack Developer",
      description:
        "Senior Full Stack Developer with a vast array of knowledge in many different front end and backend languages, responsive frameworks, databases and best code practices. Having extensive experience working with web and blockchain.",
      imageUrl: "/team/kevin.png",
      resume: "#",
    },
    {
      id: 4,
      name: "Melisa",
      role: "Seinor UI/UX designer",
      description:
        "A creative enthusiast with an expansive design skill set and a love for engaging experiences. I believe that the best digital solutions can only be achieved by utilizing a user-centric approach, compelling visual interfaces, and an implementation of powerful interaction design. I enjoy experiencing design in various spaces and creating products that cater to a wide array of human behaviors.",
      imageUrl: "/team/melisa.png",
      resume: "#",
    },
    {
      id: 5,
      name: "Jolly",
      role: "Seinor Backend Engineer.",
      description:
        "Senior backend developer, I seek challenging projects, collaboration with skilled professionals. I value positive company culture, competitive compensation. Driven by 'Creation is my life,' I aim to leverage cutting-edge techs, make a significant impact.",
      imageUrl: "/team/jolly.png",
      resume: "#",
    },
    {
      id: 6,
      name: "Pedro",
      role: "CTO & Project Management",
      description:
        "Professional focus on project management for IT projects, business analyses, digital transformation, process mapping, e-commerce and strategy consulting, within global and virtual teams. Experience working in Agile/Devops environments.",
      imageUrl: "/team/pedro.png",
      resume: "#",
    },
  ];

  // Set active link for blog section
  const blogSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();
  useEffect(() => {
    blogSection && onSectionChange!("team");
  }, [blogSection]);

  return (
    <div className="bg-[#F5F5F5] dark:bg-[#1B2731]">
      <section ref={sectionRef} id="team" className="section md:px-10">
        <div className="text-center">
          <RoughNotation
            type="underline"
            color={`${
              theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"
            }`}
            strokeWidth={3}
            order={1}
            show={isOnScreen}
          >
            <h2 className="section-heading">Powerful Team</h2>
          </RoughNotation>
        </div>
        <div className="text-center mb-8" ref={elementRef}>
          Powerful team for Power websites
          <br className="hidden sm:block" aria-hidden="true" />
          The most creativce and innovative Developing team
        </div>
        <div>
          <Swiper
            modules={[Navigation, Pagination]}
            pagination={{
              dynamicBullets: true,
            }}
            wrapperTag="ul"
            navigation
            className="swiper-padding-mobile xs:swiper-padding"
            breakpoints={{
              100: {
                slidesPerView: "auto",
                spaceBetween: 50,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
                centeredSlides: true,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
                centeredSlides: false,
              },
            }}
          >
            {teamInfo.map((team, index) => (
              <SwiperSlide key={team.id} tag="li">
                <BlogImageCard
                  className={`${index > 3 ? "hidden lg:block" : ""}`}
                  key={team.id}
                  team={team}
                  fullWH
                />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* <div className="mt-4 text-center">
            <Link href="/blog" className="link">
              Read all blog posts{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline-block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default BlogSection;
