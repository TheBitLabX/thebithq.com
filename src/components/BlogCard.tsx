import Image from "next/image";
import { ChevronRightIcon, ExternalLinkIcon, MessagesSquareIcon, ThumbsUpIcon } from "lucide-react";
import Link from "next/link";
import { colorMap } from "@/data";
import { BlogDetails } from "@/interfaces";

export default function BlogCard({
  id,
  title,
  desc,
  url,
  tag,
  time,
  cover_img,
  v2,
  date,
}: BlogDetails) {
  const badgeColor =
    tag.color in colorMap ? colorMap[tag.color] : "badge-ghost";
  return (
    <div className="card border border-[#FAF9FF] rounded-lg bg-base-100 shadow-[9px_18px_76px_0px_rgba(65,18,251,0.10)]">
      <figure className="mx-4 mt-4 h-[250px] rounded-md overflow-hidden">
        <Image
          width={420}
          height={250}
          src={cover_img}
          alt={`${title}'s cover image`}
          className="object-cover h-[250px] w-full"
        />
      </figure>
      <div className="card-body p-4 pb-6">
        {v2 == true ? (
          <p className="text-sm text-neutral-500">{date}</p>
        ) : (
          <div className="space-x-3 text-xs">
            <span
              className={`badge ${badgeColor} text-white capitalize rounded text-xs py-3`}
            >
              {tag.text}
            </span>
            <span className="font-light">{time}</span>
          </div>
        )}

        <h2 className="card-title text-lg md:text-xl lg:text-[1.35rem] line-clamp-2">{title}</h2>
        <p className="text-neutral-500 line-clamp-2">{desc}</p>

        {v2 == true ? (
          <div className="card-actions justify-between mt-4">
            <div className="flex items-center space-x-1 text-neutral-500 font-light">
              <span>99k</span>
              <ThumbsUpIcon className="w-5 h-5 text-current" />
            </div>
            <div className="flex items-center space-x-1 text-neutral-500 font-light">
              <span>99k</span>
              <MessagesSquareIcon className="w-5 h-5 text-current" />
            </div>
            <div className="flex items-center space-x-1 text-neutral-500 font-light">
              <ExternalLinkIcon className="w-5 h-5 text-current" />
            </div>
          </div>
        ) : (
          <div className="card-actions mt-4">
            <Link href={url || "#"} className="link link-hover link-secondary">
              Read More
            </Link>
            <ChevronRightIcon className="inline-block -ml-1" size={24} />
          </div>
        )}
      </div>
    </div>
  );
}
