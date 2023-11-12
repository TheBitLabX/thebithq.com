"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { EventDetails } from "@/interfaces";
import { events } from "@/data";
import EventCard from "@/components/EventCard";
import Datepicker from "tailwind-datepicker-react";
import { useState } from "react";
import Image from "next/image";
import SpotlightCarousel from "@/components/SpotlightCarousel";
import SubscribeSection from "@/components/SubscribeSection";

export default function Events() {
  const options = {
    // title: "Choose a Date",
    autoHide: false,
    todayBtn: true,
    clearBtn: true,
    clearBtnText: "Clear",
    maxDate: new Date("2030-01-01"),
    minDate: new Date("1950-01-01"),
    theme: {
      background: "",
      todayBtn: "!btn-primary",
      clearBtn: "",
      icons: "",
      text: "font-normal font-sans",
      disabledText: "text-gray-300",
      input: "input !input-primary",
      inputIcon: "",
      selected: "!btn-primary",
    },
    icons: {
      // () => ReactElement | JSX.Element
      prev: () => <ChevronLeftIcon />,
      next: () => <ChevronRightIcon />,
    },
    datepickerClassNames: "custom-datepicker",
    defaultDate: new Date(),
    language: "en",
    disabledDates: [],
    weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
    inputNameProp: "date",
    inputIdProp: "date",
    inputPlaceholderProp: "Select Date",
    inputDateFormatProp: {
      day: "numeric",
      month: "long",
      year: "numeric",
    },
  };

  const [show, setShow] = useState(true);
  const handleChange = (selectedDate: Date) => {
    console.log(selectedDate);
  };
  const handleClose = (state: boolean) => {
    setShow(state);
  };

  return (
    <main>
      <section className='py-12 pb-6 pt-[170px]'>
        <div className='container space-y-8'>
          <Link
            href={"/"}
            className='flex items-center text-zin-700 font-light'
          >
            <ChevronLeftIcon />
            Back One Step
          </Link>
          <h1 className='text-black text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold'>
            All Events are here
          </h1>
        </div>
      </section>

      <section>
        <div className='container'>
          <div className='grid lg:grid-cols-3 gap-6 mt-10'>
            <div className='lg:col-span-2 space-y-6'>
              {events.map((event) => (
                <EventCard
                  isHorizontal
                  key={event.id}
                  {...(event as EventDetails)}
                />
              ))}
            </div>
            <div className='hidden lg:block lg:pl-6'>
              <div className='relative'>
                <Datepicker
                  inline-datepicker
                  options={options as any}
                  onChange={handleChange}
                  show={show}
                  setShow={handleClose}
                />
              </div>

              <div className='card p-4 my-6 shadow-[3px_4px_20px_0px_rgba(214,_213,_213,_0.45)]'>
                <div className='flex items-center justify-between'>
                  <p className='text-lg font-medium text-zinc-500'>
                    Upcoming Events
                  </p>
                </div>

                <div className='space-y-4 mt-4'>
                  {events.map((event) => (
                    <article key={event.id}>
                      <Link href='' className='flex space-x-4'>
                        <div className='flex-none w-24 h-30'>
                          <Image
                            className='object-cover rounded-xl h-full w-full'
                            src={event.cover_img}
                            alt='Event'
                            width={100}
                            height={120}
                          />
                        </div>
                        <div className='relative'>
                          <div className='absolute -top-1 right-0 badge badge-accent border-primary py-3'>
                            Free
                          </div>

                          <p className='text-[13px] mb-0 text-neutral-500'>
                            {event.date}
                          </p>
                          <p className='font-semibold mb-1 text-zinc-700 line-clamp-1'>
                            {event.title}
                          </p>
                          <p className='text-xs text-neutral-500 line-clamp-3'>
                            {event.desc}
                          </p>
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-12 bg-base-100'>
        <div className='container'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold'>
            Other Similar Artists
          </h2>
          <p className='text-lg mt-3'>
            Discover the Latest Trends, Events, and Artists Shaping the music
            industry
          </p>

          <div className='mt-10'>
            <SpotlightCarousel />
          </div>
        </div>
      </section>

      <SubscribeSection />
    </main>
  );
}
