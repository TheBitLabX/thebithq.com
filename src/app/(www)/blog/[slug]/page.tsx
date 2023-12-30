"use client";

import BlogCard from "@/components/BlogCard";
import SocialShare from "@/components/SocialShare";
import {
  ArrowRightIcon,
  ChevronLeftIcon,
  MessageSquarePlus,
  ThumbsUpIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BlogDetails } from "@/interfaces";
import SpotlightCarousel from "@/components/SpotlightCarousel";
import SubscribeSection from "@/components/SubscribeSection";
import FeaturedArtist from "@/components/FeaturedArtist";
import { blogs, artists } from "@/data";
import useCosmicBlogPost from "@/utils/useGetPostBySlug";
import { usePathname } from "next/navigation";
import DOMPurify from "dompurify";


export default function BlogDetails() {
  const pathname = usePathname();

  // console.log(pathname);
  const {
    loading,
    error,
    data: post,
  } = useCosmicBlogPost(pathname.split("/blog/")[1]);
  const safeHtml = DOMPurify.sanitize(post?.metadata.content);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!post) return <div>Post not found</div>;

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
            {post.title}
          </h1>
        </div>
      </section>

      <section className=''>
        <div className='container'>
          <div className='space-y-5'>
            <div className='md:flex md:justify-between md:items-center'>
              <p>
                <strong>Posted On:</strong>&nbsp; {post.metadata.date}
              </p>
              <SocialShare />
            </div>
            <figure className='h-96 w-full overflow-hidden rounded-2xl'>
              <Image
                className='h-full w-full object-cover object-top-right'
                src={`${post.metadata.cover_img.url}`}
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
                  <p className='text-neutral-600 font-semibold'>BitHQ</p>
                  <p className='font-light text-stone-400'>2k Followers</p>
                </div>
              </div>

              <button className='btn btn-sm md:btn-md mt-4 md:mt-0 btn-accent px-6'>
                Subscribe
              </button>
            </div>
          </div>

          <section className='grid lg:grid-cols-2 lg:divide-x gap-6 mt-10'>
            <div className='lg:col-span-2'>
              <article
                className='prose !min-w-full prose-p:text-zinc-800 prose-h2:text-zinc-800'
                dangerouslySetInnerHTML={{ __html: safeHtml }}
              ></article>

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
                    {/* <p className='text-zinc-800 text-lg mb-2'>
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
                    </p> */}
                    <div className='space-x-3 mt-6'>
                      <Link
                        href='/auth/login'
                        role='button'
                        className='btn btn-primary px-5'
                      >
                        Sign In
                      </Link>
                      <Link
                        href='/auth/login'
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
            {/* <div className='hidden lg:block lg:pl-6'>
              <div className='space-y-4 lg:space-y-6 '>
                {artists.map((artist) => (
                  <div key={artist.id} className='h-[200px]'>
                    <FeaturedArtist {...artist} />
                  </div>
                ))}
              </div>

              <div className='mt-6'>
                <div>
                  <h5 className='!font-sans md:text-lg lg:text-xl font-semibold text-zinc-800'>
                    Get More Updates from
                  </h5>
                  <div className='max-w-sm'>
                    <p className='text-sm lg:text-base my-5 font-light text-slate-800'>
                      Subscribe to receive the latest blog posts to your inbox
                      every week.
                    </p>

                    <div className='space-y-3'>
                      <div className='relative w-full'>
                        <input
                          type='text'
                          placeholder='Enter your email'
                          className='input input-bordered placeholder:text-neutral-500 font-light rounded-3xl input-primary bg-[#FFF5C2] text-sm w-full pr-12 py-5'
                        />
                        <ArrowRightIcon className='absolute text-primary top-1/2 -translate-y-1/2 right-4' />
                      </div>
                      <button className='btn btn-primary btn-block rounded-3xl text-base'>
                        Submit
                      </button>
                    </div>
                    <p className='text-xs mt-3'>
                      By subscribing you agree to with our
                      <Link
                        href='#'
                        className='link link-hover !text-xs text-blue-500'
                      >
                        &nbsp; Privacy Policy
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
          </section>

          {/* <section className='py-16 md:py-20 xl:py-24'>
            <div className='max-w-4xl'>
              <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold'>
                Similar topics
              </h2>
              <p className='text-lg mt-3'>
                Discover the Latest Trends, Events, and Artists Shaping the
                music industry
              </p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
              {blogs.map((blog) => (
                <BlogCard key={blog.id} {...(blog as BlogDetails)} />
              ))}
            </div>
          </section> */}

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
