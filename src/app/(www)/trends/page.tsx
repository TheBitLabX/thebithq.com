import { ChevronDownIcon, ChevronLeftIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import AboutArtist from "@/components/AboutArtist";
import SpotlightCarousel from "@/components/SpotlightCarousel";
import SongCard from "@/components/SongCard";
import { trends } from "@/data";

export default function Trending() {
  return (
    <main>
      <section className="py-10 bg-orange-50/90">
        <div className="container space-y-6">
          <Link
            href={"/"}
            className="flex items-center text-zin-700 font-light"
          >
            <ChevronLeftIcon />
            Back One Step
          </Link>
          <h1 className="text-black text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
            Top Artist of the Week
          </h1>
        </div>
      </section>

      <section className="relative">
        <Image
          className="w-full h-full absolute inset-0 object-cover object-center"
          src="/img/hero_3.jpg"
          alt="Hero"
          width={1280}
          height={853}
        />
        <div className="absolute w-full h-full left-0 top-0 bg-gradient-to-r from-black via-black/60 z-5"></div>
        <div className="container min-h-[500px] relative">
          <div className="lg:max-w-xl text-white lg:self-center py-20 md:py-40 lg:py-32">
            <p className="text-primary text-lg xl:text-xl">
              Artist Of The Week
            </p>
            <h1 className="my-6 font-garet text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-bold">
              Wonder H
            </h1>
            <p className="text-base md:text-lg lg:text-xl xl:text-[1.4rem] font-light xl:leading-8 mb-4 lg:mb-10">
              Wonder H is a talented Rapper, known for his heavy weight
              punchlines. His lyrics are packed with puns and metaphorical bars
              that are breath-taking.
            </p>

            <div className="mb-10 lg:mb-0 lg:absolute lg:right-0 lg:bottom-10">
              <AboutArtist />
            </div>

            <div className="space-y-4 md:space-y-0 md:flex md:gap-x-4">
              <Link
                href="/profile"
                role="button"
                className="btn btn-primary btn-block md:w-auto btn-outline"
              >
                More from Artist
              </Link>
              <Link
                href="/soon"
                role="button"
                className="btn btn-primary btn-block md:w-auto"
              >
                Book this Artist
              </Link>
            </div>
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

      <section className="py-12 bg-base-100">
        <div className="container">
          <div className="lg:flex lg:justify-between lg:items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Just In
              </h2>
              <p className="text-lg mt-3">
                Discover the Latest Trends, Events, and Artists Shaping the
                music industry
              </p>
            </div>
            <select className="mt-5 lg:mt-0 select select-primary w-full max-w-xs lg:w-40">
              <option disabled selected>
                Filter Genre
              </option>
              <option>R & B</option>
              <option>Soul</option>
              <option>Jazz</option>
              <option>HipHop</option>
              <option>Afrobeats</option>
            </select>
          </div>

          <div className="mt-10 grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {trends.map((trend) => (
              <SongCard key={trend.id} {...trend} />
            ))}
            {trends.map((trend) => (
              <SongCard key={trend.id} {...trend} />
            ))}
            {trends.map((trend) => (
              <SongCard key={trend.id} {...trend} />
            ))}
            {trends.map((trend) => (
              <SongCard key={trend.id} {...trend} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
