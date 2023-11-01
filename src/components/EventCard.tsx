import Image from "next/image";
import { MapPinIcon, CalendarDaysIcon, ClockIcon } from "lucide-react";
import Link from "next/link";
import { EventDetails } from "@/interfaces";

export default function EventCard({
  id,
  title,
  desc,
  cover_img,
  location,
  date,
  time,
  price,
  url,
  isHorizontal
}: EventDetails) {
  return (
    <div className={`card ${!isHorizontal || 'lg:card-side'} w-full border border-[#FAF9FF] rounded-2xl bg-base-100 shadow-[9px_18px_76px_0px_rgba(65,18,251,0.10)]`}>
      <figure className={`${!isHorizontal || 'lg:w-[40rem]'}`}>
        <Image
          width={500}
          height={450}
          src={cover_img}
          alt={`${title}'s Image`}
          className="object-cover !w-full !h-full object-bottom"
        />
      </figure>
      <div className={`card-body ${isHorizontal ? 'pt-6': 'pt-0'} px-6 pb-6`}>
        <h2 className="card-title text-2xl line-clamp-2">{title}</h2>
        <p className="text-lg line-clamp-2">{desc}</p>
        <div className="grid md:grid-cols-2 gap-3 text-neutral-600 font-light text-sm">
          <div className="flex space-x-2 items-center">
            <MapPinIcon size={16} className="text-[#828282]" />
            <p>{location}</p>
          </div>
          <div className="flex space-x-2 items-center">
            <CalendarDaysIcon size={16} className="text-[#828282]" />
            <p>{date}</p>
          </div>
          <div className="flex space-x-2 items-center">
            <ClockIcon size={14} className="text-[#828282]" />
            <p>{time}</p>
          </div>
        </div>
        <div className="card-actions mt-4">
          <div className="w-full flex items-center justify-between rounded-3xl border-accent border">
            <h6 className="pl-4 text-zinc-800 text-xl font-semibold">
              $ {price.default}.
              <span className="text-xs font-normal leading-none">
                {price.cent}
              </span>
            </h6>
            <Link
              href={url || "#"}
              role="button"
              className="btn btn-accent px-5 rounded-3xl"
            >
              Buy Tickets
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
