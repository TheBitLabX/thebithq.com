import BlogCard from "@/components/BlogCard";
import SocialShare from "@/components/SocialShare";
import {
  ArrowRightIcon,
  CalendarIcon,
  ChevronLeftIcon,
  ClockIcon,
  MapPin,
  MessageSquarePlus,
  TagIcon,
  ThumbsUpIcon,
  TicketIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BlogDetails } from "@/interfaces";
import SpotlightCarousel from "@/components/SpotlightCarousel";
import SubscribeSection from "@/components/SubscribeSection";
import FeaturedArtist from "@/components/FeaturedArtist";
import { blogs, artists } from "@/data";
import EventCarousel from "@/components/EventCarousel";

export default function EventDetails() {
  return (
    <main>
      <section className='py-10 pb-6 pt-[170px]'>
        <div className='container space-y-8'>
          <Link
            href={"/blogs"}
            className='flex items-center text-zin-700 font-light'
          >
            <ChevronLeftIcon />
            Back One Step
          </Link>
          <h1 className='text-black text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold'>
            The Faces of the Artistic Renaissance
          </h1>
        </div>
      </section>

      <section className=''>
        <div className='container'>
          <div className='space-y-5'>
            <div className='md:flex md:justify-between md:items-center'>
              <p>
                <strong>Posted On:</strong>&nbsp; 05 June 2023
              </p>
              <SocialShare />
            </div>
            <figure className='h-96 w-full overflow-hidden rounded-2xl'>
              <Image
                className='h-full w-full object-cover object-top-right'
                src={`/img/artist.jpeg`}
                alt='The Faces of the Artistic Renaissance Cover Image'
                width={1440}
                height={520}
              />
            </figure>
            <div className='md:flex md:items-center md:justify-between'>
              <div className='flex items-center space-x-3'>
                <div className='flex-none w-12 h-12 overflow-hidden rounded-full'>
                  <Image
                    className='h-full w-full object-cover'
                    src='/img/live.png'
                    alt="Author's Picture"
                    width={50}
                    height={50}
                  />
                </div>
                <div>
                  <p className='text-neutral-600 font-semibold'>
                    Suka Sounds Labels
                  </p>
                  <p className='font-light text-stone-400'>2k Followers</p>
                </div>
              </div>

              <button className='btn btn-sm md:btn-md mt-4 md:mt-0 btn-accent px-6'>
                Subscribe
              </button>
            </div>
          </div>

          <section className='space-y-6 mt-12'>
            <div className='lg:col-span-2'>
              <article className='prose !min-w-full prose:text-zinc-800 prose-p:text-zinc-800 prose-h2:text-zinc-800'>
                <h2>About this Event</h2>
                <blockquote className=' border-stone-700'>
                  <p>
                    Once upon a time in a bustling city, there lived a talented
                    musician named Emily. With her enchanting voice and soulful
                    melodies, she captivated audiences wherever she performed.
                    Emily had a deep passion for music and spent countless hours
                    honing her skills and writing heartfelt songs. Her dream was
                    to share her music with the world and touch the hearts of
                    people from all walks of life.
                  </p>
                </blockquote>

                <div className='card p-4 shadow-[3px_4px_20px_0px_rgba(214,_213,_213,_0.25)]'>
                  <div className='grid md:grid-cols-2 p-4 md:p-6 gap-6 '>
                    <div className='flex space-x-4 items-center'>
                      <div className='flex-none'>
                        <div className='w-10 h-10 grid place-content-center bg-white/10 rounded-full shadow-[3px_4px_20px_0px_rgba(214,_213,_213,_0.45)]'>
                          <TagIcon className=' w-6 h-6 text-gray-400' />
                        </div>
                      </div>
                      <div>
                        <span className='text-zinc-500 text-base'>Price</span>
                        <div>
                          <span className='text-slate-900 text-lg xl:text-xl'>
                            $ 999.
                          </span>
                          <span className='text-slate-900 text-xs'>00</span>
                        </div>
                      </div>
                    </div>

                    <div className='flex space-x-4 items-center'>
                      <div className='flex-none'>
                        <div className='w-10 h-10 grid place-content-center bg-white/10 rounded-full shadow-[3px_4px_20px_0px_rgba(214,_213,_213,_0.45)]'>
                          <CalendarIcon className=' w-6 h-6 text-gray-400' />
                        </div>
                      </div>
                      <div>
                        {/* <span className="text-zinc-500 text-base">Price</span> */}
                        <div>
                          <span className='text-slate-800 text-lg'>
                            Wed, 4th of June
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className='flex space-x-4 items-center'>
                      <div className='flex-none'>
                        <div className='w-10 h-10 grid place-content-center bg-white/10 rounded-full shadow-[3px_4px_20px_0px_rgba(214,_213,_213,_0.45)]'>
                          <TicketIcon className=' w-6 h-6 text-gray-400' />
                        </div>
                      </div>
                      <div>
                        <span className='text-zinc-500 text-base'>
                          Available Tickets
                        </span>
                        <div>
                          <span className='text-slate-800 text-lg'>
                            99/1000
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className='flex space-x-4 items-center'>
                      <div className='flex-none'>
                        <div className='w-10 h-10 grid place-content-center bg-white/10 rounded-full shadow-[3px_4px_20px_0px_rgba(214,_213,_213,_0.45)]'>
                          <ClockIcon className=' w-6 h-6 text-gray-400' />
                        </div>
                      </div>
                      <div>
                        {/* <span className="text-zinc-500 text-base">Price</span> */}
                        <div>
                          <span className='text-slate-800 text-lg'>
                            7 hours
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className='flex space-x-4 items-center'>
                      <div className='flex-none'>
                        <div className='w-10 h-10 grid place-content-center bg-white/10 rounded-full shadow-[3px_4px_20px_0px_rgba(214,_213,_213,_0.45)]'>
                          <MapPin className=' w-6 h-6 text-gray-400' />
                        </div>
                      </div>
                      <div>
                        <span className='text-zinc-500 text-base'>
                          Lagos Oriental Hotel
                        </span>
                        <div>
                          <span className='text-slate-800 text-lg'>
                            3 Lekki - Epe Expressway Lagos, LA 106104
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='my-12 card p-8 md:p-10 shadow-[3px_4px_20px_0px_rgba(214,_213,_213,_0.25)]'>
                  <h6 className='text-lg !font-sans md:text-xl text-zinc-700 font-bold'>
                    Event Info
                  </h6>
                  <p>
                    One of the standout features of HarmonyHub was the ability
                    to connect her existing streaming accounts. Emily eagerly
                    linked her Spotify and Apple Music profiles, instantly
                    making her songs accessible to a wider audience. This
                    integration not only streamlined her music promotion efforts
                    but also enabled users to sample her songs directly from her
                    profile.
                  </p>
                  <p>
                    Excited by the possibilities, Emily started engaging with
                    the community. She followed other talented artists, left
                    thoughtful comments on their songs, and even collaborated on
                    a few projects. The platform&apos;s messaging system allowed
                    her to connect with fans and fellow musicians, fostering
                    meaningful connections and collaborations.
                  </p>
                  <p>
                    On HarmonyHub, Emily could not only share her music but also
                    create posts and events to keep her followers updated. She
                    announced her upcoming live performances, shared
                    behind-the-scenes glimpses of her creative process, and even
                    offered exclusive sneak peeks of her upcoming album. The
                    engagement and support from her growing fanbase were a
                    constant source of motivation for her musical journey.
                  </p>
                </div>
              </article>

              <div className='comments mt-12'>
                <h3 className='text-zinc-500 font-semibold xl:text-lg'>
                  Comments
                </h3>
                <hr className='border-gray-200 my-4' />
                <div className=' divide-y divide-orange-50'>
                  {Array.from({ length: 3 }, (_, i) => (
                    <div
                      key={i}
                      className='md:flex py-6 lg:items-center md:space-x-4 lg:space-x-6'
                    >
                      <div className='hidden md:block flex-none h-full w-20 overflow-hidden rounded-3xl'>
                        <Image
                          className='object-cover w-full h-full'
                          src={`/img/artist.jpeg`}
                          alt='User Picture'
                          width={80}
                          height={96}
                        />
                      </div>
                      <div className='w-full space-y-2 lg:space-y-3'>
                        <div className='flex items-center space-x-2 md:space-x-0'>
                          <div className='md:hidden flex-none w-8 h-8 overflow-hidden rounded-full'>
                            <Image
                              className='object-cover w-full h-full'
                              src={`/img/artist.jpeg`}
                              alt='User Picture'
                              width={32}
                              height={32}
                            />
                          </div>
                          <div className='w-full md:flex md:justify-between md:items-center'>
                            <p className='font-semibold'>
                              Olamide Live In concert
                            </p>
                            <div className='flex space-x-2'>
                              <p className='text-sm text-neutral-500'>
                                25/04/2035
                              </p>
                              <p className='text-sm text-neutral-500'>09:30</p>
                            </div>
                          </div>
                        </div>
                        <p className='font-light text-sm text-neutral-600'>
                          Once upon a time in a bustling city, there lived a
                          talented musician named Emily. With her enchanting
                          voice and soulful melodies, she captivated audiences
                          wherever she performed.
                        </p>
                        <div className='flex space-x-4'>
                          <a
                            className='w-36 flex items-center space-x-2 text-neutral-400 hover:text-neutral-800'
                            href='javascript:void(0)'
                          >
                            <ThumbsUpIcon className='w-4 h-4' />
                            <span className='text-sm'>Like</span>
                          </a>
                          <a
                            className='w-36 flex items-center space-x-2 text-neutral-400 hover:text-neutral-800'
                            href='javascript:void(0)'
                          >
                            <MessageSquarePlus className='w-4 h-4' />
                            <span className='text-sm'>Reply</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className='mt-5 pt-6'>
                    <p className='text-zinc-800 text-lg mb-2'>
                      Sign In/Sign Up to join the conversation
                    </p>
                    <p className='text-sm'>
                      To add a comment, You need to &nbsp;
                      <a
                        className='link link-info !text-sm'
                        href='javascript:void(0)'
                      >
                        Register
                      </a>
                      &nbsp;or&nbsp;
                      <a
                        className='link link-info !text-sm'
                        href='javascript:void(0)'
                      >
                        sign in
                      </a>
                      &nbsp; to an account
                    </p>
                    <div className='space-x-3 mt-6'>
                      <Link
                        href='#'
                        role='button'
                        className='btn btn-primary px-5'
                      >
                        Sign In
                      </Link>
                      <Link
                        href='#'
                        role='button'
                        className='btn btn-primary px-5 btn-outline'
                      >
                        Register
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className='py-12 bg-base-100'>
            <div className='container'>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold'>
                Upcoming Events
              </h2>
              <p className='text-lg mt-3'>
                Discover the Latest Trends, Events, and Artists Shaping the
                music industry
              </p>

              <div className='mt-10'>
                <EventCarousel />
              </div>
            </div>
          </section>

          <section className='py-12 bg-base-100'>
            <div className='container'>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold'>
                Featured Artist
              </h2>
              <p className='text-lg mt-3'>
                Discover the Latest Trends, Events, and Artists Shaping the
                music industry
              </p>

              <div className='mt-10'>
                <SpotlightCarousel />
              </div>
            </div>
          </section>

          <SubscribeSection />
        </div>
      </section>
    </main>
  );
}
