import Image from "next/image";
import Link from "next/link";

import { ChevronRightIcon } from "lucide-react";
import { BlogDetails } from "@/interfaces";
import { colorMap } from "@/data";

export default function HorizontalBlogCard({
  id,
  title,
  desc,
  url,
  tag,
  time,
  cover_img,
}: BlogDetails) {
  const badgeColor =
    tag.color in colorMap ? colorMap[tag.color] : "badge-ghost";
  return (
    <div className='card md:card-side'>
      <div className='lg:rounded-md h-[230px] flex-shrink-0 overflow-hidden'>
        <Image
          width={240}
          height={240}
          src={cover_img}
          alt={`${title}'s cover image`}
          className='object-center h-[230px] w-full'
        />
      </div>
      <div className='card-body p-4'>
        <span className='space-x-3 text-xs'>
          <span
            className={`badge ${badgeColor} text-white capitalize rounded text-xs xl:py-3`}
          >
            {tag.text}
          </span>
          <span className='font-light'>{time}</span>
        </span>
        <h2 className='card-title text-lg md:text-xl lg:text-[1.35rem] line-clamp-2'>
          {title}
        </h2>
        <p className='text-neutral-500 line-clamp-3'>{desc}</p>
        <div className='card-actions xl:mt-4'>
          <Link
            href={url || "#"}
            className='link flex items-center link-hover link-warning'
          >
            <span>Read More</span>
            <ChevronRightIcon size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
