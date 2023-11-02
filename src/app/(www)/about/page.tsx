import DiscoverScrollTabs from "@/components/DiscoverScrollTabs";
import FeaturedArtistSection from "@/components/FeaturedArtistSection";
import PartnerLogos from "@/components/PartnerLogos";
import SubscribeSection from "@/components/SubscribeSection";
import {
  SiApple,
  SiApplemusic,
  SiAudiomack,
  SiDeezer,
  SiSoundcloud,
  SiSpotify,
  SiYoutube,
} from "@icons-pack/react-simple-icons";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main>
      <section className="relative bg-gradient-radial from-white to-orange-50 h-screen grid place-content-center">
        <div className="absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:148px_148px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
        {/* <div className="absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div> */}
        <div className="relative container">
          <div className="max-w-2xl text-center space-y-6">
            <h1 className="text-black text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
              Unleash the Power of Artistry
            </h1>
            <p className="text-zinc-800 font-light lg:text-lg">
              Welcome to Bit HQ, where artistry comes alive. Explore a world of
              creativity, inspiration, and talent. Book exceptional artists,
              ignite unforgettable experiences, and make your vision a reality.
              Let the power of art transform your moments into extraordinary
              memories.
            </p>
            <div className="space-x-3">
              <Link
                href="#"
                role="button"
                className="btn btn-primary px-5 btn-outline"
              >
                More from Artist
              </Link>
              <Link href="#" role="button" className="btn btn-primary px-5">
                Book this Artist
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-12 bg-black">
        <Image
          className="absolute inset-0 opacity-50 object-cover object-bottom-right"
          src={`/img/partners/bg.jpg`}
          alt="Partners Background"
          width={1440}
          height={525}
        />
        <div className="relative container py-12">
          <h2 className="text-center font-bold text-lg md:text-xl xl:text-2xl text-white">
            Supported by the Most Recognized Brands in the Industry
          </h2>
          <div className="relative">
            <PartnerLogos />
          </div>
        </div>
      </section>

      <section className="py-12 bg-base-100">
        <div className="container">
          <div className="">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Discover the Artistic Edge
            </h2>
            <p className="text-lg mt-3">
              Empowering Artists and Brands: Unlock the Limitless Potential of
              Our Services
            </p>
          </div>

          <div className="mt-10">
            <DiscoverScrollTabs />
          </div>
        </div>
      </section>

      <section className="py-12  bg-base-100">
        <div className="container">
          <div className="max-w-5xl mx-auto space-y-20 lg:space-y-6">
            <div className="md:flex md:space-x-8 lg:space-x-10 md:items-center">
              <div className="w-52 mx-auto md:mx-0 md:w-2/5 lg:p-10">
                <Image
                  className="object-cover"
                  src={`/img/socials.png`}
                  alt="Podcast Experience"
                  width={422}
                  height={422}
                />
              </div>
              <div className="mt-6 md:mt-0 md:w-3/5">
                <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl xl:max-w-lg bg-blue font-bold text-teal-950 text-center md:text-left">
                  Engaging Podcast Experiences
                </h2>
                <p className="lg:text-lg mt-6 max-w-lg text-center md:text-left">
                  Indulge in captivating podcast dialogues with extraordinary
                  artists, immersing yourself in a world of enriching
                  interactions. Unlock the richness of meaningful conversations
                  and gain unique insights into the minds of exceptional
                  talents.
                </p>
              </div>
            </div>

            <div className="md:flex md:space-x-8 lg:space-x-10 md:items-center">
              <div className="w-52 mx-auto md:mx-0 md:w-2/5 lg:p-10 lg:order-last">
                <Image
                  className="object-cover rounded-full"
                  src={`/img/live.png`}
                  alt="Podcast Experience"
                  width={422}
                  height={422}
                />
              </div>
              <div className="mt-6 md:mt-0 md:w-3/5 lg:order-first">
                <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl bg-blue font-bold text-teal-950 text-center md:text-left">
                  Captivating Live Performances
                </h2>
                <p className="lg:text-lg mt-6 max-w-lg text-center md:text-left">
                  Embark on a mesmerizing journey of intimate live performances
                  by exceptional artists. Immerse yourself in captivating
                  musical moments, unlocking the true essence of artistry.
                </p>
              </div>
            </div>

            <div className="md:flex md:space-x-8 lg:space-x-10 md:items-center">
              <div className="md:w-2/5">
                <div className="relative w-60 mx-auto translate-x-8 grid grid-cols-3 gap-4 gap-y-8 outline-red-900">
                  <div className="relative -bottom-5 w-16 h-16">
                    <div className="absolute w-32 rounded-lg -bottom-5 right-0 border h-32 grid place-content-center text-center">
                      <span>Distribution Channels</span>
                    </div>
                  </div>
                  <div className="w-16 h-16 bg-green-200 rounded-xl grid place-content-center">
                    <div className="bg-white rounded-full">
                      <SiSpotify className="text-black w-8 h-8" />
                    </div>
                  </div>
                  <div className="w-16 h-16 bg-orange-100 rounded-xl grid place-content-center">
                    <div className="bg-black rounded-full h-10 w-10 grid place-content-center">
                      <SiAudiomack className="text-white w-8 h-8" />
                    </div>
                  </div>
                  <div className="relative -bottom-5 w-16 h-16 bg-orange-100 rounded-xl grid place-content-center">
                    <div className=" bg-black rounded-full h-10 w-10 grid place-content-center">
                      <SiSoundcloud className="text-white w-8 h-8" />
                    </div>
                  </div>
                  <div className="w-16 h-16 bg-red-500 rounded-xl grid place-content-center">
                    <SiApple className="text-black w-8 h-8" />
                  </div>
                  <div className="w-16 h-16 bg-green-200 rounded-xl grid place-content-center">
                    <SiYoutube className="text-black w-10 h-10" />
                  </div>
                  <div className="relative -bottom-5 w-16 h-16 bg-green-200 rounded-xl grid place-content-center">
                    <div className="bg-black rounded-full h-10 w-10 grid place-content-center">
                      <SiDeezer className="text-white w-7 h-7" />
                    </div>
                  </div>
                  <div className="w-16 h-16 bg-orange-100 rounded-xl grid place-content-center">
                    <SiApplemusic className="w-8 h-8 text-black" />
                  </div>
                </div>
              </div>
              <div className="mt-12 md:mt-0 md:w-3/5">
                <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl xl:max-w-lg bg-blue font-bold text-teal-950 text-center md:text-left">
                  <span className="font-light">Top-rated</span> Distribution
                  Channels
                </h2>
                <p className="lg:text-lg mt-6 max-w-lg text-center md:text-left">
                  Elevating artists through dynamic exposure on blogs, podcasts,
                  and social media platforms. Amplifying their talent across
                  multiple channels for wider recognition. Join us on a journey
                  to empower artists and celebrate their creativity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-base-100 md:overflow-hidden">
        <div className="container">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Featured Artist
          </h2>
          <p className="text-lg mt-3">
            Spotlight on Talent: Meet the Diverse Artists Featured in Our
            Project
          </p>

          <FeaturedArtistSection />
        </div>
      </section>

      <SubscribeSection />
    </main>
  );
}
