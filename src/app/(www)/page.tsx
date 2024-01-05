"use client";
import DiscoverScrollTabs from "@/components/DiscoverScrollTabs";
import SubscribeSection from "@/components/SubscribeSection";
import SpotlightCarousel from "@/components/SpotlightCarousel";
import StoriesSection from "@/components/StoriesSection";
//import EventCarousel from "@/components/EventCarousel";
import FeaturedArtistSection from "@/components/FeaturedArtistSection";
import HeroSection from "@/components/HeroSection";
import Link from "next/link";

export default function Home() {

  return (
    <main className="">
      <HeroSection isHomepage />

      <section className="py-12 bg-base-100">
        <div className="container">
          <div className="lg:flex lg:space-x-6 lg:items-end lg:justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Artist Spotlight
              </h2>
              <p className="text-lg mt-3">
                Meet the creative forces defining today&apos;s music. Dive into
                their artistic journeys, one profile at a time.
              </p>
            </div>
            <div className="hidden lg:block">
              <Link
                href="/trends"
                className="btn btn-primary btn-outline rounded-xl"
              >
                Discover More
              </Link>
            </div>
          </div>

          <div className="mt-10">
            <SpotlightCarousel />
          </div>

          <div className="lg:hidden mt-6 text-center">
            <Link
              href="/trends"
              className="btn btn-primary btn-outline rounded-xl"
            >
              Discover More
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-base-100">
        <div className="container">
          <div className="z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Discover the Artistic Edge
            </h2>
            <p className="text-lg mt-3">
              Empowering Artists and Brands: Unlock the Limitless Potential of
              Our Services
            </p>
          </div>
          <DiscoverScrollTabs />
        </div>
      </section>

      <section className="py-12 bg-base-100">
        <div className="container">
          <div className="lg:flex lg:space-x-6 lg:items-end lg:justify-between">
            <div className="max-w-4xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Inspiring Stories and Insights from the Artists’ World
              </h2>
              <p className="text-lg mt-3">
                Stay Updated: Discover the Latest Trends and Artists Shaping the
                Music Industry
              </p>
            </div>
            <div className="hidden lg:block">
              <Link
                href="/blogs"
                className="btn btn-primary btn-outline rounded-xl"
              >
                See More
              </Link>
            </div>
          </div>

          <StoriesSection />

          <div className="lg:hidden mt-6 text-center">
            <Link
              href="/blogs"
              className="btn btn-primary btn-outline rounded-xl"
            >
              See More
            </Link>
          </div>
        </div>
      </section>

      {/* <section className="py-12 bg-base-100">
        <div className="container">
          <div className="lg:flex lg:space-x-6 lg:items-end lg:justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Upcoming Events
              </h2>
              <p className="text-lg mt-3">
                Discover the Latest Trends, Events, and Artists Shaping the
                music industry
              </p>
            </div>

            <div className="hidden lg:block">
              <Link
                href="/events"
                className="btn btn-primary btn-outline rounded-xl"
              >
                View All
              </Link>
            </div>
          </div>

          <div className="mt-10">
            <EventCarousel />
          </div>

          <div className="lg:hidden mt-6 text-center">
            <Link
              href="/events"
              className="btn btn-primary btn-outline rounded-xl"
            >
              View All
            </Link>
          </div>
        </div>
      </section> */}

      {/* <section className="py-12 bg-base-100">
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
      </section> */}

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
