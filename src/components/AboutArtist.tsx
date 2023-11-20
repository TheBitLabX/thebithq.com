import Link from "next/link";

import {
  SiInstagram,
  SiTiktok,
  SiSpotify,
  SiYoutube,
} from "@icons-pack/react-simple-icons";

export default function AboutArtist() {
  return (
    <div className='bg-black/30 max-w-xs lg:max-w-sm backdrop-blur-lg p-3 lg:px-6 rounded-lg text-lg border-x-8 border-primary flex space-x-2 justify-between lg:justify-normal lg:space-x-6'>
      <span className='text-white'>@emmarobinmusic</span>
      <div className='flex items-center space-x-2 lg:space-x-4'>
        <Link
          href={"https://open.spotify.com/artist/1lKpEqady4EQ8wz5ZpJCuU"}
          target='_blank'
        >
          <SiSpotify className='text-white h-4 lg:h-[18px]' />
        </Link>
        <Link
          href={"https://www.instagram.com/emmarobinmusic/"}
          target='_blank'
        >
          <SiInstagram className='text-white h-4 lg:h-[18px]' />
        </Link>
        <Link href={"https://www.tiktok.com/@emmarobinmusic"} target='_blank'>
          <SiTiktok className='text-white h-4 lg:h-[18px]' />
        </Link>
        <Link
          href={"https://youtube.com/channel/UCit9YMm2MRbdisL0pXLhjBg"}
          target='_blank'
        >
          <SiYoutube className='text-white h-4 lg:h-[18px]' />
        </Link>
      </div>
    </div>
  );
}
