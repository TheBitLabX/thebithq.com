import Link from "next/link";

import {
  SiFacebook,
  SiTwitter,
  SiInstagram,
  SiLinkedin,
} from "@icons-pack/react-simple-icons";

export default function AboutArtist() {
  return (
    <div className='bg-black/30 max-w-xs lg:max-w-sm backdrop-blur-lg p-3 lg:px-6 rounded-lg text-lg border-x-8 border-primary flex space-x-2 justify-between lg:justify-normal lg:space-x-6'>
      <span className='text-white'>@emmarobinmusic</span>
      <div className='flex items-center space-x-2 lg:space-x-4'>
        <Link href={"/"}>
          <SiFacebook className='text-white h-4 lg:h-[18px]' />
        </Link>
        <Link href={"/"}>
          <SiInstagram className='text-white h-4 lg:h-[18px]' />
        </Link>
        <Link href={"/"}>
          <SiTwitter className='text-white h-4 lg:h-[18px]' />
        </Link>
        <Link href={"/"}>
          <SiLinkedin className='text-white h-4 lg:h-[18px]' />
        </Link>
      </div>
    </div>
  );
}
