import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// import DateTime from "@/components/DateTime";

type Props = {
  team: {
    name?: string;
    description?: string;
    imageUrl?: string;
    resume?: string;
  };
  fullWH?: boolean;
  className?: string;
};

const BlogImageCard: React.FC<Props> = ({
  team,
  fullWH = false,
  className = "",
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { name, description, imageUrl, resume } = team;

  // Animations
  useEffect(() => {
    const q = gsap.utils.selector(sectionRef);

    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: `70% bottom`,
      },
    });

    tl.fromTo(
      q(".blog-image"),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        ease: "Power3.easeInOut",
        duration: 0.5,
        stagger: 0.2,
      }
    )
      .fromTo(q(".blog-title"), { y: 100 }, { y: 0, stagger: 0.2 }, "<25%")
      .fromTo(
        q(".blog-text"),
        { opacity: 0 },
        { opacity: 1, stagger: 0.2 },
        "<10%"
      );
  }, []);
  return (
    <div
      ref={sectionRef}
      className={`sm:min-w-[17rem] transition translate-y-2 hover:-translate-y-0 max-w-md bg-gray-100 dark:bg-carddark p-4 rounded shadow-md hover:shadow-xl ${fullWH ? "w-full" : "w-72 my-2"
        } ${className}`}
    >
      <div className="flex flex-col-reverse" style={{ textAlign: "center" }}>
        <div className="mb-1 overflow-hidden h-14">
          <h3
            className={`${fullWH ? "text-lg sm:text-md" : "text-md"
              } font-medium line-clamp-2`}
          >
            {name}
          </h3>
          <Link target="_blank" rel="noreferrer" href={String(resume)}>
            Resume{" "}
          </Link>
        </div>
        <div className="blog-image relative w-full h-48 md:h-40 mb-3">
          <Image
            src={String(imageUrl)}
            alt={name || "Team Member"}
            fill
            style={{ objectFit: "contain", width: "100%" }}
            className="object-contain"
          />
        </div>
      </div>
      <p
        className={`blog-text dark:text-gray-300 ${fullWH ? "text-base sm:text-sm" : "text-sm w-60"
          } overflow-hidden text-ellipsis line-clamp-4 leading-7 sm:leading-6`}
      >
        {description}
      </p>
    </div>
  );
};

export default BlogImageCard;
