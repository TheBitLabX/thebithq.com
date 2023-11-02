"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { MenuIcon, XIcon } from "lucide-react";
import { useEffect, useState } from "react";

const projects = [
  {
    id: 1,
    url: "/soon/concert",
    text: "BitConcert",
    logo: "/img/svg/bit_icon.svg",
  },
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
  { label: "Top Artists", url: "/trends" },
  { label: "About Us", url: "/about" },
  { label: "Blogs ", url: "/blogs" },
];

export default function Header() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [headerType, setHeaderType] = useState("overlay");

  useEffect(() => {
    setHeaderType(pathname === "/" ? "overlay" : "classic");
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="tbhq-header" data-type={headerType}>
      <div
        className={`container transition-all duration-300 ${
          isOpen ? "is-open" : ""
        }`}
      >
        <ul className="tbhq-topbar">
          {projects.map(({ id, url, logo, text }) => (
            <li key={id}>
              <Link
                href={url}
                className={`flex space-x-2 rounded appearance-none p-1 pl-2 pr-24 ${
                  pathname == url ? "bg-zinc-400/20" : "hover:bg-[#BBBBBB2B]"
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
            <Link href={"/"} className="w-40">
              <Image
                src={
                  headerType === "overlay"
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
              <button className="btn btn-outline btn-primary rounded-lg w-1/2 md:w-auto mr-2 md:mr-0">
                Create Account
              </button>
              <button className="btn btn-primary rounded-lg w-[47%] md:w-auto">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
