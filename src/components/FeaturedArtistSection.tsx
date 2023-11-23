"use client";

import { artists, artistsSpotifyUrls } from "@/data";
import FeaturedArtist from "./FeaturedArtist";

import { useKeenSlider } from "keen-slider/react";
import useSpotifyArtists from "@/utils/artists";
import "keen-slider/keen-slider.min.css";
import { ArtistDetails } from "@/interfaces";

export default function FeaturedArtistSection() {
  const firstArtistId = "1lKpEqady4EQ8wz5ZpJCuU";
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 1.4,
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 540px)": {
        slides: { perView: 2.6, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 2.3, spacing: 25 },
      },
    },
    vertical: true,
  });

  const { artistsData, isLoading, error } =
    useSpotifyArtists(artistsSpotifyUrls);

  if (isLoading) return <div>Loading...</div>;
  return error ? (
    <div>Error: {error}</div>
  ) : (
    <div className='grid md:grid-rows-2 md:grid-cols-5 gap-4 lg:gap-6 mt-10 md:h-[500px]'>
      <div className='md:row-span-2 md:col-span-3 h-[200px] md:h-full'>
        <FeaturedArtist {...artistsData["1lKpEqady4EQ8wz5ZpJCuU"]} isFeatured />
      </div>
      <div className='space-y-4 lg:space-y-6 md:col-span-2'>
        <div ref={sliderRef} className='keen-slider h-[300px] md:h-[500px]'>
          {Object.values(artistsData)
            .filter((artist) => artist.id != firstArtistId)
            .map((artist: ArtistDetails) => {
              return (
                <div key={artist.id} className='keen-slider__slide h-200px'>
                  <FeaturedArtist {...artist} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
