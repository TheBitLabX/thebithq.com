import { Spotifly } from "spotifly";
import { artistsSpotifyUrls } from "@/data";
import React, { useState, useEffect } from 'react';
var SpotifyWebApi = require('spotify-web-api-node');

const useFetchArtistsData = async () => {
  const sp = new Spotifly();
  let dataList: { id: string; name: string; cover_img: string; song: string; url: string; }[] = [];
  for (const artist of artistsSpotifyUrls) {
    const tempData = await sp.getArtist(artist);
    const newData = {
      id: artist,
      name: tempData.data.artistUnion.profile.name,
      cover_img: tempData.data.artistUnion?.visuals.avatarImage.sources[0]?.url,
      song: tempData.data.artistUnion?.discography.topTracks.items[0]?.track.name,
      url: tempData.data.artistUnion.sharingInfo.shareUrl,
    };
    dataList.push(newData);
  }
  console.log(dataList)
  return dataList;
};

export default useFetchArtistsData;