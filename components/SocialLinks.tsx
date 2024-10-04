import { useSection } from "context/section";

const SocialLinks: React.FC<{ page?: string }> = ({ page }) => {
  const { currentSection } = useSection();
  return (
    <>
      {page === "index" ? (
        <div className="hidden fixed left-10 bottom-1/3 md:flex flex-col w-6 h-52 items-center justify-between">
          {navLinks.map((nav) => {
            return (
              <a
                title={nav.text}
                href={nav.url}
                key={nav.url}
                className={`transition-all outline-marrsdark dark:outline-textlight hover:bg-marrsgreen dark:hover:bg-carrigreen ${
                  currentSection === nav.text.toLowerCase()
                    ? "bg-marrsgreen dark:bg-carrigreen rotate-0"
                    : "opacity-50 focus-visible:opacity-100 hover:opacity-80 rotate-45 hover:rotate-12"
                } w-3 h-3 border-2 border-marrsgreen dark:border-carrigreen`}
              ></a>
            );
          })}
        </div>
      ) : (
        <div className="hidden fixed left-10 bottom-0 md:flex flex-col w-6 h-56 items-center justify-between">
          <div className="-rotate-90 text-lg tracking-widest">
            <a
              href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
              className="link-outline hover:text-marrsgreen dark:hover:text-carrigreen"
            >
              {process.env.NEXT_PUBLIC_EMAIL}
            </a>
          </div>
          <div className="w-40 h-1 bg-bgdark dark:bg-bglight rotate-90"></div>
        </div>
      )}
      <div className="hidden fixed right-10 bottom-0 md:flex flex-col w-6 h-[17rem] items-center justify-between">
        {/* <div className="flex flex-col space-y-6">
          {socialLinks.map((social) => (
            <a
              key={social.id}
              title={social.title}
              href={social.link}
              target="_blank"
              rel="noreferrer"
              className="scale-110 rounded link-outline"
            >
              {social.svg}
            </a>
          ))}
        </div>
        <div className="w-40 h-1 bg-bgdark dark:bg-bglight rotate-90"></div> */}
      </div>
    </>
  );
};

const socialLinks = [
  {
    id: 1,
    title: "Crystal Web3's Github Profile",
    link: "https://github.com/lucky-gru",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        className="dark:fill-bglight hover:fill-marrsgreen dark:hover:fill-carrigreen"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Crystal Web3's Guru Profile",
    link: "https://www.guru.com/freelancers/Brandon-tanaka",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-0.9931181463856724 -0.9546043143233174 28.8745185488991 22.312229453083127"
        width="24"
        height="24"
        className="dark:fill-bglight hover:fill-marrsgreen dark:hover:fill-carrigreen"
      >
        <g data-name="Layer 1">
          <path d="M17.07 13.74a7.06 7.06 0 0 1-4.25 4 7.84 7.84 0 0 1-4.65.27 8.43 8.43 0 0 1-6.26-7.93 8 8 0 0 1 2.38-5.81A8.12 8.12 0 0 1 9.88 1.9H10a9 9 0 0 1 6.28 3 1 1 0 1 0 1.48-1.2A10.78 10.78 0 0 0 10 0 10 10 0 0 0 0 10.12a10.35 10.35 0 0 0 7.67 9.76 8.69 8.69 0 0 0 2.34.31 10.11 10.11 0 0 0 3.46-.62c2.93-1.07 5.79-3.89 5.69-7.14a20.58 20.58 0 0 1-2.09 1.31" />
          <path d="M13.27 11.44c-.74 0-1.62-.18-1.63-.88a.64.64 0 0 1 .17-.48 1.9 1.9 0 0 1 1.38-.37 5.7 5.7 0 0 1 3 1 6.56 6.56 0 0 1-3 .75m8.09-3.63a1 1 0 0 0-1.28.03 14.72 14.72 0 0 1-2 1.78 7.29 7.29 0 0 0-4.76-1.83 3.68 3.68 0 0 0-2.73.93 2.53 2.53 0 0 0-.72 1.85c0 1.3.95 2.7 3.49 2.75a8.47 8.47 0 0 0 4-1A13.62 13.62 0 0 0 19 11.25a16.82 16.82 0 0 0 2.44-2.09 1 1 0 0 0-.05-1.35" />
        </g>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Check Crystal Web3 on Dev.to",
    link: "https://www.hackerrank.com/certificates/3cbb5ba60c92",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        className="dark:fill-bglight hover:fill-marrsgreen dark:hover:fill-carrigreen"
      >
        <path d="M0 0v24h24V0zm9.95 8.002h1.805c.061 0 .111.05.111.111v7.767c0 .061-.05.111-.11.111H9.95a.111.111 0 0 1-.111-.11v-2.87H7.894v2.87c0 .06-.05.11-.11.11H5.976a.11.11 0 0 1-.11-.11V8.112c0-.06.05-.11.11-.11h1.806c.061 0 .11.05.11.11v2.869H9.84v-2.87c0-.06.05-.11.11-.11zm2.999 0h5.778c.061 0 .111.05.111.11v7.767a.11.11 0 0 1-.11.112h-5.78a.11.11 0 0 1-.11-.11v-7.77c0-.06.05-.11.11-.11z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Crystal Web3's Profile on Facebook",
    link: "/resume/Brandon.pdf",
    svg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="dark:fill-bglight hover:fill-marrsgreen dark:hover:fill-carrigreen"
      >
        <path
          d="M8 22.0002H16C18.8284 22.0002 20.2426 22.0002 21.1213 21.1215C22 20.2429 22 18.8286 22 16.0002V15.0002C22 12.1718 22 10.7576 21.1213 9.8789C20.3529 9.11051 19.175 9.01406 17 9.00195M7 9.00195C4.82497 9.01406 3.64706 9.11051 2.87868 9.87889C2 10.7576 2 12.1718 2 15.0002L2 16.0002C2 18.8286 2 20.2429 2.87868 21.1215C3.17848 21.4213 3.54062 21.6188 4 21.749"
          stroke="#1C274C"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M12 2L12 15M12 15L9 11.5M12 15L15 11.5"
          stroke="#1C274C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const navLinks = [
  {
    url: "#",
    text: "Welcome",
  },
  {
    url: "#whoami",
    text: "Who am i?",
  },
  {
    url: "#projects",
    text: "Projects",
  },
  {
    url: "#team",
    text: "Team",
  },
  {
    url: "#contact",
    text: "Contact",
  },
];

export default SocialLinks;
