"use client";

import ArtistCard from "./ArtistCard";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { artists } from "@/data";

export default function SpotlightCarousel() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free",
    slides: {
      perView: 1,
      spacing: 10,
    },
    breakpoints: {
      "(min-width: 540px)": {
        slides: { perView: 2.2, spacing: 20 },
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
    <div ref={sliderRef} className="keen-slider">
      {artists.map((artist) => (
        <div
          key={`artist-${artist.id}`}
          className="keen-slider__slide"
        >
          <div className="relative h-96 flex justify-center items-center">
              <ArtistCard {...artist} />
          </div>
        </div>
      ))}
    </div>
  );
}
