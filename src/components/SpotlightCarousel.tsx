"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import ArtistSection from "@/components/ArtistsSection";

export default function SpotlightCarousel() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
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
    <div ref={sliderRef} className='keen-slider'>
      <ArtistSection />
    </div>
  );
}
