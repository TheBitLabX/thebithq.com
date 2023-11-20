export interface BlogDetails {
    id: number;
    title: string;
    desc: string;
    url: string;
    tag: { text: string; color: string };
    time: string;
    cover_img: string;
    isFeatured?: Boolean,
    v2?: Boolean,
    date?: string
}

export interface EventDetails {
    id: number;
    title: string;
    desc: string;
    cover_img: string;
    location: string;
    date: string;
    time: string;
    price: { default: string; cent: string };
    url: string;
    isHorizontal?: Boolean
}

export interface FeaturedArtistDetails {
    isFeatured?: boolean;
    id: number;
    name: string;
    cover_img: string;
    url: string;
}

export interface ArtistDetails {
    id: string;
    name: string;
    cover_img: string;
    song: string;
    url: string;
}

export interface SongDetails {
    id: number,
    name: string,
    cover_img: string,
    author: string,
    url: string,
}

export interface ColorMapDetails {
    [key: string]: string;
}