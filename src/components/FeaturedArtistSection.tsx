import { artists } from "@/data";
import FeaturedArtist from "./FeaturedArtist";

export default function FeaturedArtistSection() {
  const firstArtist = artists[0];
  return (
    <div className="grid md:grid-rows-2 md:grid-flow-col gap-4 lg:gap-6 mt-10 md:h-[500px]">
      <div className="md:row-span-2 md:col-span-2 h-[200px] md:h-full">
        <FeaturedArtist {...firstArtist} isFeatured />
      </div>
      <div className="space-y-4 lg:space-y-6 ">
        {artists
          .filter((artist) => artist.id !== 1)
          .map((artist) => (
            <div key={artist.id} className="h-[200px]">
              <FeaturedArtist {...artist} />
            </div>
          ))}
      </div>
    </div>
  );
}
