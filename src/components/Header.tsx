"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { MenuIcon, XIcon } from "lucide-react";
import { useEffect, useState } from "react";

const projects = [
  // {
  //   id: 1,
  //   url: "/",
  //   text: "BitConcert",
  //   logo: "/img/svg/bit_icon.svg",
  // },
  {
    id: 2,
    url: "/soon/films",
    text: "BitFilms",
    logo: "/img/svg/bit_icon.svg",
  },
  {
    id: 3,
    url: "/soon/poems",
    text: "BitPoems",
    logo: "/img/svg/bit_icon.svg",
  },
  {
    id: 4,
    url: "/soon/jokes",
    text: "BitJokes",
    logo: "/img/svg/bit_icon.svg",
  },
];

const navItems: { label: string; url?: string }[] = [
  { label: "About Us", url: "/about" },
  { label: "Blogs ", url: "/blogs" },
  { label: "Contact Us", url: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [headerType, setHeaderType] = useState("overlay");
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    setHeaderType(pathname === "/" ? "overlay" : "classic");
    setIsOpen(false);
  }, [pathname]);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`tbhq-header`}
      data-type={scrollPosition > 0 ? "classic" : headerType}
    >
      <div
        className={`container transition-all duration-300 ${
          isOpen ? "is-open" : ""
        }`}
      >
        <ul className="tbhq-topbar">
          <li>
            <Link
              href="/"
              className={`flex space-x-2 rounded appearance-none p-1 pl-2 pr-24
              ${
                !pathname.includes("/soon/")
                  ? "bg-zinc-400/20"
                  : "hover:bg-[#BBBBBB2B]"
              }`}
            >
              <Image
                src={`/img/svg/bit_icon.svg`}
                alt={`BitConcert Icon`}
                width={24}
                height={24}
              />
              <span>BitConcert</span>
            </Link>
          </li>
          {projects.map(({ id, url, logo, text }) => (
            <li key={id}>
              <Link
                href={url}
                className={`flex space-x-2 rounded appearance-none p-1 pl-2 pr-24 ${
                  pathname === url ? "bg-zinc-400/20" : "hover:bg-[#BBBBBB2B]"
                }`}
              >
                <Image src={logo} alt={`${text} Icon`} width={24} height={24} />
                <span>{text}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="w-full lg:flex lg:flex-nowrap md:items-center pt-4 pb-4">
          <div>
            <Link href={"/"} className="w-40 inline-block">
              <Image
                src={
                  scrollPosition > 0
                    ? `/img/svg/logo_black.svg`
                    : headerType === "overlay"
                    ? `/img/svg/logo.svg`
                    : `/img/svg/logo_black.svg`
                }
                alt="TheBitHQ Logo"
                width={144}
                height={54}
              />
            </Link>
          </div>
          <button
            className="toggle-button"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? <XIcon /> : <MenuIcon />}
          </button>
          <div className={`nav-block ${isOpen ? "block" : "hidden lg:flex"}`}>
            <nav className="nav-bar">
              {navItems.map(({ label, url }) => (
                <Link key={label} className="nav-links" href={url || "#"}>
                  <span className={pathname === url ? "active" : undefined}>
                    {label}
                  </span>
                </Link>
              ))}
            </nav>
            <div className="mt-4 lg:mt-0 md:flex md:w-full md:flex-auto space-y-4 md:space-y-0 md:space-x-2">
              <div className="relative w-full mt-4 md:mt-0">
                <input
                  type="text"
                  placeholder="Search for an artist, songs, etc"
                  className="nav-input"
                />
                <Image
                  className="absolute top-1/2 -translate-y-1/2 right-4"
                  src="/img/svg/arrow_right.svg"
                  alt="Button Icon"
                  width={24}
                  height={24}
                />
              </div>
              <Link
                href={`/auth/login`}
                className="btn btn-outline btn-primary rounded-lg w-1/2 md:w-auto mr-2 md:mr-0"
              >
                Create Account
              </Link>
              <Link
                href={`/auth/login`}
                className="btn btn-primary rounded-lg w-[47%] md:w-auto"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
