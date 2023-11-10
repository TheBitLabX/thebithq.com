import Image from "next/image";
import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import { ArtistDetails } from "@/interfaces";

export default function ArtistCard({
  id,
  name,
  cover_img,
  song,
  url,
}: ArtistDetails) {
  return (
    <Link
      href={url || "#"}
      className='group card h-full rounded-3xl image-full'
    >
      <figure>
        <Image
          width={250}
          height={250}
          src={cover_img}
          alt={`${song}'s Song Cover`}
          className='object-cover w-full object-center'
        />
      </figure>
      <div className='card-body bg-black/50 hover:bg-black/70 transition duration-300 rounded-3xl justify-end'>
        <h2 className='card-title font-garet text-white text-xl md:text-2xl lg:text-3xl mb-0'>
          {name}
        </h2>
        <div className='flex items-center justify-between -mt-2'>
          <p className='flex-grow-0 text-white text-xl'>{song}</p>
          <div className='h-10 w-10 bg-white/20 backdrop-blur-sm grid place-content-center rounded-full transition duration-300 ease-out group-hover:-translate-y-2'>
            <ArrowUpRightIcon size={24} className='text-[#FDFFFC] opacity-80' />
          </div>
        </div>
      </div>
    </Link>
  );
}
