import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  SiApplemusic,
  SiAudiomack,
  SiDeezer,
  SiSoundcloud,
  SiSpotify,
  SiYoutube,
} from "@icons-pack/react-simple-icons";
import TabProfile from "@/components/TabProfile";
import SpotlightCarousel from "@/components/SpotlightCarousel";
import SubscribeSection from "@/components/SubscribeSection";

export default function Trending() {
  return (
    <main>
      <section className="py-10 bg-orange-50/90">
        <div className="container space-y-6">
          <Link
            href={"/trends"}
            className="flex items-center text-zin-700 font-light"
          >
            <ChevronLeftIcon />
            View More Artists
          </Link>
          <h1 className="text-black text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
            Artist&apos;s Profile
          </h1>
        </div>
      </section>

      <section className="py-12 relative">
        <div className="container">
          <div className="grid grid-rows-5 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
            <div className="row-span-5 lg:col-span-3">
              <div className="card md:card-side p-4 sm:p-6 md:space-x-8 h-full rounded-xl bg-base-100 shadow-[3px_4px_20px_0px_rgba(214,_213,_213,_0.45)] space-y-4 md:space-y-0">
                <figure className="h-[17rem] md:w-[16rem]">
                  <Image
                    className="w-full h-full object-cover rounded-xl"
                    src="/img/artist.jpeg"
                    width={216}
                    height={216}
                    alt="Artist Image"
                  />
                </figure>
                <div className="space-y-6">
                  <div>
                    <h2 className="card-title text-2xl md:text-3xl !font-bold !font-sans mb-0">
                      Avi of Lagos
                    </h2>
                    <p className="font-light text-sm">
                      Lyricist, Song Writer, Rapper
                    </p>
                    <div className="mt-1">
                      <span className="font-light">Record Label</span>&nbsp;
                      <span className="font-light">Lagos, Nigeria</span>
                    </div>
                  </div>
                  <p className="text-[15px] pr-6 leading-relaxed text-neutral-600 max-w-md">
                    Excited by the possibilities, Emily started engaging with
                    the community. She followed other talented artists, left
                    thoughtful comments on their songs, and even collaborated on
                    a few projects.
                  </p>
                  <div className="flex item-center space-x-5">
                    <div className="p-3 px-5 shadow-[4px_4px_12px_0px_rgba(19,19,19,0.06)] rounded bg-white">
                      <p className="text-neutral-600">24 Followers</p>
                    </div>
                    <div className="p-3 px-5 shadow-[4px_4px_12px_0px_rgba(19,19,19,0.06)] rounded bg-white">
                      <p className="text-neutral-600">124 Followings</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row-span-3 lg:col-span-2">
              <div className="card h-full p-6 space-y-3 md:space-y-4 rounded-xl shadow-[3px_4px_20px_0px_rgba(214,_213,_213,_0.45)]">
                <div className="md:flex md:items-center md:justify-between">
                  <p className="font-medium text-neutral-800">Engagement</p>
                  <p className="font-light text-neutral-500">-</p>
                </div>
                <div className="md:flex md:items-center md:justify-between">
                  <p className="font-medium text-neutral-800">Songs</p>
                  <p className="font-light text-neutral-500">23</p>
                </div>
                <div className="md:flex md:items-center md:justify-between">
                  <p className="font-medium text-neutral-800">Followers</p>
                  <p className="font-light text-neutral-500">234K</p>
                </div>
                <div className="md:flex md:items-center md:justify-between">
                  <p className="font-medium text-neutral-800">Plays</p>
                  <p className="font-light text-neutral-500">234K</p>
                </div>
              </div>
            </div>
            <div className="row-span-2 lg:col-span-2">
              <div className="card h-full p-6 space-y-4 rounded-xl shadow-[3px_4px_20px_0px_rgba(214,_213,_213,_0.45)]">
                <p className="font-medium text-neutral-800">Socials</p>
                <div className="flex items-center justify-between">
                  <Link href={`#`}>
                    <SiSpotify />
                  </Link>
                  <Link href={`#`}>
                    <SiApplemusic />
                  </Link>
                  <Link href={`#`}>
                    <SiAudiomack />
                  </Link>
                  <Link href={`#`}>
                    <SiDeezer />
                  </Link>
                  <Link href={`#`}>
                    <SiYoutube />
                  </Link>
                  <Link href={`#`}>
                    <SiSoundcloud />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-base-100">
        <div className="container">
          <TabProfile />
        </div>
      </section>

      <section className="py-12 bg-base-100">
        <div className="container">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Other Similar Artists
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

      <SubscribeSection />
    </main>
  );
}
