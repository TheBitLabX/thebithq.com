import Image from "next/image";
import Link from "next/link";

import DiscoverScrollTabs from "@/components/DiscoverScrollTabs";
import SubscribeSection from "@/components/SubscribeSection";
import AboutArtist from "@/components/AboutArtist";
import SpotlightCarousel from "@/components/SpotlightCarousel";
import StoriesSection from "@/components/StoriesSection";
import PartnerLogos from "@/components/PartnerLogos";
import EventCarousel from "@/components/EventCarousel";
import FeaturedArtistSection from "@/components/FeaturedArtistSection";

export default function Home() {
  return (
    <main className="">
      <section className="relative overflow-hidden">
        <div className="">
          <Image
            className="w-full h-full absolute inset-0 object-cover object-center"
            src="/img/hero_3.jpg"
            alt="Hero"
            width={1280}
            height={853}
          />
          <div className="absolute w-full h-full left-0 top-0 bg-gradient-to-r from-black via-black/60 z-5"></div>
          <div className="container relative h-screen grid place-content-center lg:place-content-stretch">
            <div className="lg:max-w-xl text-white lg:self-center md:pt-40 lg:pt-20">
              <p className="text-primary text-lg xl:text-xl">
                Artist Of The Week
              </p>
              <h1 className="my-6 font-garet text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-bold">
                Wonder H
              </h1>
              <p className="text-base md:text-lg lg:text-xl xl:text-[1.4rem] font-light xl:leading-relaxed">
                Wonder H is a talented Rapper, known for his heavy weight
                punchlines. His lyrics are packed with puns and metaphorical
                bars that are breath-taking.
              </p>

              <div className="lg:hidden my-6">
                <AboutArtist />
              </div>
            </div>

            <div className="hidden lg:block lg:absolute lg:right-10 lg:bottom-20">
              <AboutArtist />
            </div>

            <div className="space-y-4 md:space-y-0 md:flex md:gap-x-4 lg:hidden">
              <Link
                href="/"
                role="button"
                className="btn btn-primary btn-block md:w-1/2 btn-outline"
              >
                View Blog
              </Link>
              <Link
                href=""
                role="button"
                className="btn btn-primary btn-block md:w-1/2"
              >
                Artist Profile
              </Link>
            </div>

            <div className="absolute bottom-0 md:bottom-0 left-1/2 -translate-x-1/2 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.2"
                className="arrows"
              >
                <path className="a1" d="m6 8 6 6 6-6" />
                <path className="a2" d="m6 13 6 6 6-6" />
                <path className="a3" d="m6 18 6 6 6-6" />
              </svg>
            </div>
          </div>
        </div>
        <div
          className="relative py-12"
          style={{
            background:
              "linear-gradient(0deg, #fff 0%, rgba(255, 255, 255, 0) 90%)",
          }}
        >
          <div className="container py-12">
            <h2 className="text-center font-bold text-lg md:text-xl xl:text-2xl text-white mt-12">
              Supported by the Most Recognized Brands in the Industry
            </h2>
            <PartnerLogos />
          </div>
        </div>
      </section>

      <section className="py-12 bg-base-100">
        <div className="container">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Artist Spotlight
          </h2>
          <p className="text-lg mt-3">
            Meet the creative forces defining today&apos;s music. Dive into
            their artistic journeys, one profile at a time.
          </p>

          <div className="mt-10">
            <SpotlightCarousel />
          </div>
        </div>
      </section>

      <section className="py-12 bg-base-100">
        <div className="container">
          <div className="">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Discover the Artistic Edge
            </h2>
            <p className="text-lg mt-3">
              Empowering Artists and Brands: Unlock the Limitless Potential of
              Our Services
            </p>
          </div>

          <div className="mt-10">
            <DiscoverScrollTabs />
          </div>
        </div>
      </section>

      <section className="py-12 bg-base-100">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Inspiring Stories and Insights from the Artists’ World
            </h2>
            <p className="text-lg mt-3">
              Stay Updated: Discover the Latest Trends and Artists Shaping the
              Music Industry
            </p>
          </div>

          <StoriesSection />
        </div>
      </section>

      <section className="py-12 bg-base-100">
        <div className="container">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Upcoming Events
          </h2>
          <p className="text-lg mt-3">
            Discover the Latest Trends, Events, and Artists Shaping the music
            industry
          </p>

          <div className="mt-10">
            <EventCarousel />
          </div>
        </div>
      </section>

      <section className="py-12 bg-base-100">
        <div className="container">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Featured Artist
          </h2>
          <p className="text-lg mt-3">
            Discover the Latest Trends, Events, and Artists Shaping the music
            industry
          </p>

          <div className="mt-10">
            <SpotlightCarousel />
          </div>
        </div>
      </section>

      <section className="py-12 bg-base-100 overflow-hidden">
        <div className="container">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Featured Artist
          </h2>
          <p className="text-lg mt-3">
            Spotlight on Talent: Meet the Diverse Artists Featured in Our
            Project
          </p>

          <FeaturedArtistSection />
        </div>
      </section>

      <SubscribeSection />
    </main>
  );
}
