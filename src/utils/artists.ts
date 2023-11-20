"use client"
import { Spotifly } from "spotifly";
import { artistsSpotifyUrls } from "@/data";
import { cookies } from "next/headers";


export const fetchArtistsData = async () => {
  let dataList = [];
  const sp = new Spotifly();
    for(let artist of artistsSpotifyUrls){
      const artistData = await sp.getArtist(artist);
      console.log(artistData.data.artistUnion.profile.name)
      const data = {
        id: artist,
        name: artistData.data.artistUnion.profile.name,
        cover_img: artistData.data.artistUnion?.visuals.avatarImage.sources[0]?.url,
        song: artistData.data.artistUnion?.discography.topTracks.items[0]?.track.name,
        url: artistData.data.artistUnion.sharingInfo.shareUrl,
      };
      dataList.push(data);
      console.log(data)
    }
    console.log(dataList);
    cookies().set("artistsData", JSON.stringify(dataList));
    console.log(dataList)
  };
