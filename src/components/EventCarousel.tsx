"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import EventCard from "./EventCard";
import { events } from "@/data";

export default function EventCarousel() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    // mode: "free-snap",
    slides: {
      perView: 1,
      spacing: 0,
    },
    breakpoints: {
      "(min-width: 540px)": {
        slides: { perView: 1.6, spacing: 15 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 2, spacing: 20 },
      },
    },
  });
  return (
    <div ref={sliderRef} className="keen-slider">
      {events.map((event) => (
        <div key={`event-${event.id}`} className="keen-slider__slide">
          <EventCard key={event.id} {...event} />
        </div>
      ))}
    </div>
  );
}
