import { useState, useEffect } from 'react';
import axios from 'axios';
import {ArtistDetails} from '@/interfaces';
import { artists } from '../data';

type Artist = {
    id: string;
    name: string;
    // Add other relevant artist properties
};

type UseSpotifyArtistsReturn = {
    artistsData: { [key: string]: ArtistDetails };
    isLoading: boolean;
    error: string | null;
};

type SpotifyAccessTokenResponse = {
  access_token: string;
};


const useSpotifyArtists = (artistIds: string[]): UseSpotifyArtistsReturn => {
    const [artistsData, setArtistsData] = useState<{ [key: string]: ArtistDetails }>({});
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getSpotifyAccessToken = async (): Promise<string | null> => {
          const params = new URLSearchParams();
          params.append('grant_type', 'client_credentials');


          console.log(process.env.SPOTIFY_CLIENT_ID);
      
          const headers = {
              'Content-Type': 'application/x-www-form-urlencoded',
              Authorization: 'Basic ' + Buffer.from(`${"1b7cc37e247b4535904f8ed70aea2e5d"}:${"4e993cfc127046e2b8afb3cca00573e2"}`).toString('base64'),
          };
      
          try {
              const response = await axios.post<SpotifyAccessTokenResponse>('https://accounts.spotify.com/api/token', params, { headers });
              return response.data.access_token;
          } catch (error) {
              console.error('Error getting Spotify access token', error);
              return '';
          }
        };

        const getArtistsData = async (ids: string[], accessToken: string): Promise<ArtistDetails[]> => {
          try {
            const response = await axios.get<{ artists: ArtistDetails[] }>(`https://api.spotify.com/v1/artists?ids=${artistIds.join(',')}`, {
                headers: { Authorization: `Bearer ${accessToken}` }
            });

            console.log(response.data.artists[0]);
            return response.data.artists;
        } catch (error) {
            console.error('Error fetching artists data', error);
            return [];
        }
        };

        const fetchArtistsData = async (): Promise<void> => {
            setIsLoading(true);
            setError(null);

            try {
                const accessToken = await getSpotifyAccessToken();
                if (accessToken) {
                    const artists = await getArtistsData(artistIds, accessToken);
                    setArtistsData(artists.reduce((acc: { [key: string]: ArtistDetails }, artist: any) => {
                      const data: ArtistDetails = {
                        name: artist.name,
                        url: artist.external_urls.spotify,
                        cover_img: artist.images[0].url,
                        song: artist.type,
                        id: artist.id,
                      }
                        acc[artist.id] = data;
                        return acc;
                    }, {}));
                } else {
                    throw new Error('Failed to retrieve access token');
                }
            } catch (err: any) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        if (artistIds && artistIds.length > 0) {
            fetchArtistsData();
        }
    }, [artistIds]);

    return { artistsData, isLoading, error };
};

export default useSpotifyArtists;
