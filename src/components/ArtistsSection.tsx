import { ArtistDetails } from "@/interfaces";
import ArtistCard from "./ArtistCard";
import { Fragment } from "react";

async function getData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL ?? process.env.VERCEL_URL}/api/sportify`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  return res.json();
}

export default async function ArtistSection() {
  const artistsData: ArtistDetails | ArrayLike<unknown> = await getData();
  
  if (Object.keys(artistsData).length === 0) {
    return <div>An Error Occurred</div>;
  }
  return (
    <Fragment>
      {Object.values(artistsData).map((artist) => {
        const data = {
          name: artist.name,
          url: artist.external_urls.spotify,
          cover_img: artist.images[0].url,
          song: artist.type,
          id: artist.id,
        };
        return (
          <div key={`artist-${artist.id}`} className='keen-slider__slide'>
            <div className='relative h-96 flex justify-center items-center'>
              <ArtistCard {...data} />
            </div>
          </div>
        );
      })}
    </Fragment>
  );
}
