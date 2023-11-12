import Image from "next/image";
import AboutArtist from "./AboutArtist";
import Link from "next/link";
import PartnerLogos from "./PartnerLogos";

export default function HeroSection({ isHomepage }: { isHomepage?: boolean }) {
  return (
    <section className='relative'>
      <div>
        <Image
          className='w-full h-full absolute inset-0 object-cover object-center'
          src='/img/hero_3.jpg'
          alt='Hero'
          width={1280}
          height={853}
        />
        <div className='absolute w-full h-full left-0 top-0 bg-gradient-to-r from-black via-black/60 z-5'></div>
        <div
          className={`container relative ${
            isHomepage
              ? "min-h-screen grid place-content-center lg:place-content-stretch"
              : "min-h-[500px]"
          }`}
        >
          <div
            className={`lg:max-w-xl text-white lg:self-center py-20 md:py-40 ${
              isHomepage ? "lg:pt-72" : "lg:py-32"
            }`}
          >
            <p className='text-primary text-lg xl:text-xl'>
              Artist On Spotlight
            </p>
            <h1 className='my-6 font-garet text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-bold'>
              Emma Robin
            </h1>
            <p className='text-base md:text-lg lg:text-xl xl:text-[1.4rem] font-light xl:leading-8 mb-4 lg:mb-10'>
              Emma Robin | @emmarobinmusic is a 24 year old <br />
              London-based, singer-songwriter from the Netherlands.
            </p>
            <div className='mb-10 lg:mb-0 lg:absolute lg:right-0 lg:bottom-10 xl:bottom-20'>
              <AboutArtist />
            </div>
            <div className='space-y-4 md:space-y-0 md:flex md:gap-x-4'>
              <Link
                href='/blogs'
                role='button'
                className='btn btn-primary px-10 btn-block md:w-auto btn-outline'
              >
                View Blog
              </Link>
              <Link
                href='/profile'
                role='button'
                className='btn btn-primary px-10 btn-block md:w-auto'
              >
                Artist Profile
              </Link>
            </div>
            {isHomepage && (
              <div className='absolute bottom-0 md:bottom-0 left-1/2 -translate-x-1/2 lg:hidden'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='0.2'
                  className='arrows'
                >
                  <path className='a1' d='m6 8 6 6 6-6' />
                  <path className='a2' d='m6 13 6 6 6-6' />
                  <path className='a3' d='m6 18 6 6 6-6' />
                </svg>
              </div>
            )}
          </div>
        </div>
        {isHomepage && (
          <div className='relative'>
            <h2 className='text-center font-bold text-xl md:text-2xl xl:text-3xl text-white mt-12'>
              Supported by the Most Recognized Brands in the Industry
            </h2>
            <div
              className='relative pb-12 lg:pb-20 overflow-x-hidden'
              style={{
                background:
                  "linear-gradient(0deg, #fff 0%, rgba(255, 255, 255, 0) 90%)",
              }}
            >
              <PartnerLogos />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
