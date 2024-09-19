import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import LinkButton from "../components/LinkButton";
import powerwebs from "../public/powerwebs-illustration.png";
import ContactModal from "@/components/ContactModal";

const HeroSection: React.FC = () => {
  const sectionRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Your GSAP animations here...

  }, []);

  return (
    <section ref={sectionRef} className="relative mt-16 sm:mt-8 pt-8 lg:pt-0 px-4 sm:px-8 md:px-20 max-w-5xl sm:pb-24 min-h-[769px] mx-auto sm:flex sm:flex-col sm:justify-center sm:items-center lg:flex-row-reverse">
      <span aria-hidden="true" className="bg-text absolute -top-36 rotate-12 text-gray-100 dark:text-[#1f2e3a] text-9xl scale-150 tracking-wide font-bold select-none pointer-events-none text-center z-0">
        TRUSTED POWERFUL WEB3 + WEB2 PROFESSIONAL TEAM
      </span>

      <div className="image-animation z-10 select-none mt-0 xs:mt-6 sm:mt-14 lg:mt-0 px-0 mx-auto lg:p-0 lg:basis-1/3">
        <div className="relative w-72 md:w-80 h-80 flex items-center mx-auto">
          <div className="absolute pointer-events-none scale-90 xs:scale-95 mx-auto">
            <Image
              src={powerwebs}
              width={1177}
              height={1374}
              priority
              id="character-illustration"
              alt="PowerWeb"
            />
          </div>
        </div>
      </div>

      <div className="lg:basis-2/3 z-10 relative">
        <span className="text-marrsgreen lg:text-lg font-medium dark:text-carrigreen">Welcome</span>
        <h1 className="text-animation text-4xl md:text-5xl lg:text-7xl md:my-2 font-semibold my-1">PowerWebs</h1>
        <h1 className="text-animation text-2xl md:text-3xl lg:text-5xl block md:my-3 text-marrsgreen dark:text-carrigreen font-medium">
          Trusted Web3 & Web2 Developing Team
        </h1>
        <div className="mt-2 my-4 md:mb-8">
          <p className="mb-1">With over 15 years of experience, we have successfully delivered 130+ innovative products across various industries.</p>
          <p>Our commitment to quality and efficiency ensures that you receive top-notch solutions at competitive prices, all at lightning speed.</p>
          <p>Join us in shaping the future of Web3 and Web2 development!</p>
        </div>
        <LinkButton onClick={() => setIsModalOpen(true)}>Contact Us!</LinkButton>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default HeroSection;
