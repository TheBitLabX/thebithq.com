"use client";

import { artists } from "@/data";
import FeaturedArtist from "./FeaturedArtist";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function FeaturedArtistSection() {
  const firstArtist = artists[0];
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free",
    slides: {
      perView: 1.4,
      spacing: 15,
      // origin: "center",
    },
    breakpoints: {
      "(min-width: 540px)": {
        slides: { perView: 2.6, spacing: 20, origin: "center" },
      },
      "(min-width: 1024px)": {
        slides: { perView: 2.3, spacing: 25, origin: "center" },
      },
    },
    vertical: true,
  });
  return (
    <div className="grid md:grid-rows-2 md:grid-cols-5 gap-4 lg:gap-6 mt-10 md:h-[500px]">
      <div className="md:row-span-2 md:col-span-3 h-[200px] md:h-full">
        <FeaturedArtist {...firstArtist} isFeatured />
      </div>
      <div className="space-y-4 lg:space-y-6 md:col-span-2">
        <div ref={sliderRef} className="keen-slider h-[300px] md:h-[500px]">
          {artists
            .filter((artist) => artist.id !== 1)
            .map((artist) => (
              <div key={artist.id} className="keen-slider__slide h-200px">
                <FeaturedArtist {...artist} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
