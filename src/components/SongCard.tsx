import Image from "next/image";
import { PlayIcon } from "lucide-react";
import Link from "next/link";

interface ArtistProps {
  id: number;
  name: string;
  cover_img: string;
  author: string;
  url: string;
}
export default function SongCard({
  id,
  name,
  cover_img,
  author,
  url,
}: ArtistProps) {
  return (
    <Link
      href={url || "#"}
      className="group card h-full rounded-xl image-full"
    >
      <figure>
        <Image
          width={250}
          height={250}
          src={cover_img}
          alt={`${author}'s Song Cover`}
          className="object-cover w-full object-center"
        />
      </figure>
      <div className="card-body bg-transparent hover:bg-black/30 transition duration-300 rounded-xl justify-end">
        <h2 className="card-title font-garet text-white text-xl md:text-2xl lg:text-3xl">
          {name}
        </h2>
        <div className="flex items-center justify-between">
          <p className="flex-grow-0 text-white text-xl">{author}</p>
          <div className="h-10 w-10 bg-white/20 backdrop-blur-sm grid place-content-center rounded-full transition duration-300 ease-out group-hover:-translate-y-2">
            <PlayIcon size={24} className="text-[#FDFFFC] fill-white opacity-80" />
          </div>
        </div>
      </div>
    </Link>
  );
}
