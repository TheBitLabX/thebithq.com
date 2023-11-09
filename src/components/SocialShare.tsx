"use client";
import Link from "next/link";
import {
  SiFacebook,
  SiTwitter,
  SiLinkedin,
} from "@icons-pack/react-simple-icons";
import { LinkIcon } from "lucide-react";
import { usePathname } from "next/navigation";

export default function SocialShare() {
  const postURL = usePathname();
  return (
    <div className="flex items-center space-x-2 lg:space-x-4">
      <Link
        className="bg-zinc-100 w-8 h-8 group hover:bg-black grid place-content-center rounded-full"
        href={"/"}
      >
        <LinkIcon className="text-zinc-800 h-4 xl:h-5 group-hover:text-white transition duration-300" />
      </Link>
      <Link
        className="bg-zinc-100 w-8 h-8 group hover:bg-black grid place-content-center rounded-full"
        href={encodeURI(`https://www.facebook.com/sharer.php?u=${postURL}`)}
      >
        <SiFacebook className="text-zinc-800 h-4 xl:h-5 group-hover:text-white transition duration-300" />
      </Link>
      {/* <Link className="bg-zinc-100 w-8 h-8 group hover:bg-black grid place-content-center rounded-full" href={"/"}>
        <SiInstagram className="text-zinc-800 h-4 xl:h-5 group-hover:text-white transition duration-300" />
      </Link> */}
      <Link
        className="bg-zinc-100 w-8 h-8 group hover:bg-black grid place-content-center rounded-full"
        href={encodeURI(
          `https://twitter.com/intent/tweet?url=${postURL}&text="The Faces of the Artistic Renaissance"&via=`
        )}
      >
        <SiTwitter className="text-zinc-800 h-4 xl:h-5 group-hover:text-white transition duration-300" />
      </Link>
      <Link
        className="bg-zinc-100 w-8 h-8 group hover:bg-black grid place-content-center rounded-full"
        href={encodeURI(
          `https://www.linkedin.com/sharing/share-offsite/?url=${postURL}&title=The Faces of the Artistic Renaissance`
        )}
      >
        <SiLinkedin className="text-zinc-800 h-4 xl:h-5 group-hover:text-white transition duration-300" />
      </Link>
    </div>
  );
}
