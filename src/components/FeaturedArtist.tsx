import Image from "next/image";
import Link from "next/link";
import { FeaturedArtistDetails } from "@/interfaces";

export default function FeaturedArtist({
  isFeatured,
  name,
  url,
  cover_img,
}: FeaturedArtistDetails) {
  return (
    <Link
      href={url || "#"}
      className={`card w-full overflow-hidden rounded-3xl image-full h-full`}
      target='_blank'
    >
      <figure>
        <Image
          width={250}
          height={250}
          src={cover_img}
          alt={`${name}'s Image`}
          objectFit='cover'
          className='object-contain w-[100%] h-[100%]'
        />
      </figure>
      <div className='card-body hover:bg-black/70 transition duration-200 bg-black/50 rounded-3xl grid place-items-center'>
        <h2
          className={`card-title text-white ${
            isFeatured
              ? "font-garet text-3xl md:text-4xl lg:text-5xl"
              : "text-xl md:text-2xl lg:text-3xl"
          }`}
        >
          {name}
        </h2>
      </div>
    </Link>
  );
}
