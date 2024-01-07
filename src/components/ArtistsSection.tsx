import { ArtistDetails } from "@/interfaces";
import ArtistCard from "./ArtistCard";
async function getData() {
  const res = await fetch(`http://localhost:3000/api/sportify`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function ArtistSection() {
  const artistsData: ArtistDetails | ArrayLike<unknown> = await getData();
  return (
    <>
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
    </>
  );
}
