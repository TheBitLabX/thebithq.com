import Link from "next/link";
import Image from "next/image";

import {
  SiFacebook,
  SiTwitter,
  SiInstagram,
  SiLinkedin,
} from "@icons-pack/react-simple-icons";

export default function Footer() {
  const data = {
    projects: [
      { id: 1, text: "BitConcert", url: "/soon/concert" },
      { id: 2, text: "BitFilms", url: "/soon/films" },
      { id: 3, text: "BitPoems", url: "/soon/poems" },
      { id: 4, text: "BitJokes", url: "/soon/jokes" },
    ],
    companies: [
      {
        id: 1,
        text: "About Us",
        url: "/about",
      },
      {
        id: 2,
        text: "Press",
        url: "/soon",
      },
      {
        id: 3,
        text: "Proposals",
        url: "/soon",
      },
      {
        id: 4,
        text: "Contact Us",
        url: "/contact",
      },
    ],
    resources: [
      {
        id: 1,
        text: "FAQs",
        target: "_self",
        url: "/contact",
      },
      { id: 2, text: "Partners", url: "/soon" },
      { id: 2, text: "Sponsors", url: "/soon" },
      { id: 3, text: "Business Profile", url: "/soon" },
    ],
    links: [
      { id: 1, text: "Login", url: "/soon" },
      {
        id: 2,
        text: "Events",
        url: "/events",
      },
    ],
    socials: [
      {
        id: 1,
        text: "Facebook",
        url: "https://www.facebook.com/thebithq",
        icon: <SiFacebook className="w-4 h-4 text-zinc-800" />,
      },
      {
        id: 2,
        text: "(Formerly Twitter)",
        url: "https://www.twitter.com/thebithq",
        icon: <SiTwitter className="w-4 h-4 text-zinc-800" />,
      },
      {
        id: 3,
        text: "Instagram",
        url: "https://www.instagram.com/thebithq",
        icon: <SiInstagram className="w-4 h-4 text-zinc-800" />,
      },
      {
        id: 4,
        text: "LinkedIn",
        url: "https://www.linkedin.com/company/thebithq",
        icon: <SiLinkedin className="w-4 h-4 text-zinc-800" />,
      },
    ],
    currentYear: new Date().getFullYear(),
  };

  return (
    <footer className="pt-12" role="contentinfo">
      <div className="container">
        <div className="border-y border-zinc-500 py-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
          <div className="s self-center space-y-4 xl:col-span-2 col-span-2 md:col-span-1">
            <Link href={"/"} className="w-40">
              <Image
                src="/img/svg/logo_black.svg"
                alt="TheBitHQ Logo"
                width={144}
                height={54}
              />
            </Link>
            <p className="text-zinc-500 text-sm max-w-xs">
              Elevating artists, inspiring fans, and enriching global music
              culture
            </p>
          </div>
          <div className="w-full mt-6 lg:mt-0">
            <h2 className="text-zinc-500 font-semibold mb-6">BitHQ</h2>
            <div className="flex flex-col space-y-3">
              {data.projects.map((link) => (
                <Link
                  key={link.id}
                  href={link.url}
                  aria-label={`Go to ${link.text} page`}
                  className="text-sm text-[#707070] hover:text-black transition duration-200 font-medium flex flex-col -space-y-4"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
          <div className="w-full mt-6 lg:mt-0">
            <h2 className="text-zinc-500 font-semibold mb-6">Company</h2>
            <div className="flex flex-col space-y-3">
              {data.companies.map((link) => (
                <Link
                  key={link.id}
                  aria-label={`Go to ${link.text} page`}
                  href={link.url}
                  className="text-sm text-[#707070] hover:text-black transition duration-200 font-medium"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
          <div className="w-full mt-6 lg:mt-0">
            <h2 className="text-zinc-500 font-semibold mb-6">Resources</h2>
            <div className="flex flex-col space-y-3">
              {data.resources.map((link) => (
                <Link
                  key={link.id}
                  aria-label={`Go to ${link.text} page`}
                  href={link.url}
                  target="_blank"
                  className="text-sm flex items-center space-x-2 text-[#707070] hover:text-black transition duration-200 font-medium"
                >
                  <span>{link.text}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="w-full mt-6 lg:mt-0">
            <h2 className="text-zinc-500 font-semibold mb-6">Useful Links</h2>
            <div className="flex flex-col space-y-3">
              {data.links.map((link) => (
                <Link
                  key={link.id}
                  aria-label={`Go to ${link.text} page`}
                  href={link.url}
                  className="text-sm text-[#707070] hover:text-black transition duration-200 font-medium"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-4 mb-8">
          <p className="text-[13px] text-[#707070]">
            {data.currentYear} BitHQ. All right reserved.
          </p>
          <div className="flex items-center space-x-4">
            {data.socials.map((link) => (
              <Link href={link.url} key={link.id}>
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
