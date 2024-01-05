"use client";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ChevronRightIcon } from "lucide-react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function DiscoverScrollTabs() {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  const tabs = [
    {
      id: 1,
      title: "Discover Our Vast Network of Exceptional Artists",
      desc: `Gain access to a diverse and talented pool of artists from various disciplines, ensuring the perfect match for your event or project.`,
      image: "/img/discover/1.png",
    },
    {
      id: 2,
      title: "Seamless Booking Process",
      desc: `Enjoy a hassle-free experience with our user-friendly platform, allowing you to easily browse, select, and book artists that align with your unique requirements.`,
      image: "/img/discover/2.png",
    },
    {
      id: 3,
      title: "Expert Guidance and Support",
      desc: `Receive personalized assistance from our team of experts who understand the industry inside out. We're here to guide you through the selection process, ensuring a successful outcome.`,
      image: "/img/discover/3.png",
    },
    {
      id: 4,
      title: "Unforgettable Artistic Experiences",
      desc: `Create captivating and unforgettable moments with exceptional artists. From live performances to immersive installations, our artists will leave a lasting impression on your audience.`,
      image: "/img/discover/4.png",
    },
  ];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)"); // For desktop upwards
    let isDesktop = mediaQuery.matches;

    ScrollTrigger.refresh();

    const pin = ScrollTrigger.create({
      trigger: ".gallery",
      start: "top top+=160px",
      end: "bottom bottom+=60px",
      pin: ".left", // pin the trigger element while active
      // markers: true,
      // onToggle: (self) => self.isActive && setActive(a),
    });

    if (!isDesktop) {
      return pin.kill();
    }

    const links = gsap.utils.toArray(".left a");
    links.forEach((a: any) => {
      const element = document.querySelector(a.getAttribute("href"));
      const linkST = ScrollTrigger.create({
        trigger: element,
        start: "top top",
      });
      const highlightST = ScrollTrigger.create({
        trigger: element,
        start: "top center",
        end: "bottom center",
        onToggle: (self) => self.isActive && setActive(a),
      });

      a.addEventListener("click", function (e: Event) {
        e.preventDefault();
        gsap.to(window, {
          duration: 1,
          scrollTo: linkST.start,
          overwrite: "auto",
        });
      });
    });


    function setActive(link: any) {
      links.forEach((el: any) => el.classList.remove("!border-primary"));
      link.classList.add("!border-primary");
    }

    return () => {
      pin.kill();
    };
  }, []);

  const pathname = usePathname();
  useEffect(() => {
    if (pathname === "/" || pathname === "/about") {
      ScrollTrigger.refresh();
    }
  }, [pathname]);

  useEffect(() => {
    if (pathname === "/") {
      ScrollTrigger.refresh();
    }
  });

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    mode: "snap",
    slides: {
      perView: 1.1,
      spacing: 10,
    },
    breakpoints: {
      "(min-width: 540px)": {
        slides: { perView: 2.9, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 2.9, spacing: 25 },
      },
      "(min-width: 1400px)": {
        slides: { perView: 3.2, spacing: 25 },
      },
    },
  });

  return (
    <div className="mt-10">
      <div className="lg:hidden">
        <div ref={sliderRef} className="keen-slider">
          {tabs.map(({ id, image }) => (
            <div key={`feature-${id}`} className="keen-slider__slide">
              <div className="relative h-96 flex justify-center items-center">
                <Image
                  src={image}
                  width={580}
                  height={640}
                  alt="Feature Image"
                  className="h-full rounded-lg object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="gallery lg:flex">
        <div className="left w-full lg:w-1/2 pt-4">
          <div className="mb-0">
            {tabs.map(({ id, title, desc }) => (
              <div key={id}>
                <a
                  role="button"
                  className={`hidden lg:block mb-6 border-l-2 border-transparent pl-5 py-2`}
                  href={`#tabNav${id}`}
                >
                  <h2 className="text-lg md:text-xl lg:text-2xl text-zinc-700 font-semibold">
                    {title}
                  </h2>
                  <p className="xl:text-lg mt-3 pr-12 font-light normal-case">
                    {desc}
                  </p>
                </a>
                <div
                  key={id}
                  className={`lg:hidden mb-6 flex items-start space-x-5 py-2`}
                >
                  <ChevronRightIcon className="h-6 w-6 mt-1 flex-none" />
                  <div>
                    <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">
                      {title}
                    </h2>
                    <p className="xl:text-lg mt-3 normal-case">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="right hidden lg:block w-1/2 pt-4">
          <div className="w-full lg:pl-6">
            {tabs.map(({ id, image }) => (
              <Image
                key={id}
                id={`tabNav${id}`}
                className="mb-10 last:mb-0"
                src={image}
                width={580}
                height={640}
                alt="Tab Image"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
