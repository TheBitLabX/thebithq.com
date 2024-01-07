import axios from "axios";
import {ArtistDetails} from '@/interfaces';
import { artistsSpotifyUrls } from "@/data";


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

const getSpotifyAccessToken = async (): Promise<string | null> => {
    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials');


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

export async function GET(req: Request) {
    try {
        const accessToken = await getSpotifyAccessToken();
        if (accessToken) {
            const response = await axios.get<{ artists: ArtistDetails[] }>(`https://api.spotify.com/v1/artists?ids=${artistsSpotifyUrls.join(',')}`, {
                headers: { Authorization: `Bearer ${accessToken}` }
            });

            return Response.json(response.data.artists);

        }
    } catch (error) {
        console.error('Error fetching artists data', error);
        return [];
    }
 }