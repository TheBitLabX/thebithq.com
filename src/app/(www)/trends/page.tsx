import { ChevronDownIcon, ChevronLeftIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import AboutArtist from "@/components/AboutArtist";
import SpotlightCarousel from "@/components/SpotlightCarousel";
import SongCard from "@/components/SongCard";
import { trends } from "@/data";
import HeroSection from "@/components/HeroSection";

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

     <HeroSection />

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
