import { ArtistDetails, BlogDetails, ColorMapDetails, EventDetails, SongDetails } from "./interfaces";

export const blogs: BlogDetails[] = [
    {
        id: 1,
        title: "The Faces of the Artistic Renaissance",
        desc: "Discover the Magic That Happens When Artists from Different Disciplines Unite",
        url: "/blog/test",
        tag: { text: "spotlight", color: "green" },
        time: "5 min read",
        cover_img: "/img/artists/1.png",
        isFeatured: true,
        date: "23rd of May, 23"
    },
    {
        id: 2,
        title: "Unveiling the Hottest Music Festivals of the Year",
        desc: "Experience the Rhythm and Energy of Top Music Events Around the Globe",
        url: "/blog/test",
        tag: { text: "events", color: "yellow" },
        time: "5 min read",
        cover_img: "/img/artists/2.png",
        isFeatured: false,
        date: "23rd of May, 23"
    },
    {
        id: 3,
        title: "Revolutionizing the Music Industry",
        desc: "Explore the Future of Live Music in the Digital Realm",
        url: "/blog/test",
        tag: { text: "virtual concerts", color: "yellow" },
        time: "3 min read",
        cover_img: "/img/artists/3.png",
        isFeatured: false,
        date: "23rd of May, 23"

    },
];

export const trends: SongDetails[] = [
    {
        id: 1,
        name: "Wake Up",
        cover_img: "/img/songs/1.jpg",
        author: "Wonder H",
        url: "/profile",
    },
    {
        id: 2,
        name: "Wake Up",
        cover_img: "/img/songs/2.jpg",
        author: "Wonder H",
        url: "/profile",
    },
    {
        id: 3,
        name: "Wake Up",
        cover_img: "/img/songs/3.jpg",
        author: "Wonder H",
        url: "/profile",
    },
];

export const artists: ArtistDetails[] = [
    {
        id: "1",
        name: "Wonder H",
        cover_img: "/img/artists/1.png",
        song: "Lyriccal Jedi",
        url: "/trends",
    },
    {
        id: "2",
        name: "Kendrick",
        cover_img: "/img/artists/2.png",
        song: "Some song title",
        url: "/trends",
    },
    {
        id: "3",
        name: "Olamide",
        cover_img: "/img/artists/3.png",
        song: "Sarah Thompson",
        url: "/trends",
    },
    {
        id: "4",
        name: "Rodriquez",
        cover_img: "/img/artists/4.png",
        song: "Lyriccal Jedi",
        url: "/trends",
    },
];

export const events: EventDetails[] = [
    {
        id: 1,
        title: "OLIC: Olamide Live In Concert",
        desc: "Includes event titles, dates, locations, and brief descriptions.Includes event titles, dates, locations, and brief descriptions.Includes event titles, dates, locations,",
        cover_img: "/img/event.png",
        location: "Land Mark, Victoria Island.",
        date: "23rd of May, 23.",
        time: "10AM - 8PM",
        price: { default: "99", cent: "00" },
        url: "/event/test",
    },
    {
        id: 2,
        title: "OLIC: Olamide Live In Concert",
        desc: "Includes event titles, dates, locations, and brief descriptions.Includes event titles, dates, locations, and brief descriptions.Includes event titles, dates, locations,",
        cover_img: "/img/event.png",
        location: "Land Mark, Victoria Island.",
        date: "23rd of May, 23.",
        time: "10AM - 8PM",
        price: { default: "99", cent: "00" },
        url: "/event/test",
    },
];

export const colorMap: ColorMapDetails = {
    red: "badge-error",
    blue: "badge-info",
    yellow: "badge-warning",
    green: "badge-info",
    gold: "badge-primary",
    purple: "badge-secondary",
    cream: "badge-accent",
    black: "badge-ghost",
};

export const faqs = [
    { id: 1, title: "What is BitHQ and who can use it?", desc: "BitHQ is a dynamic platform designed to amplify artists' careers through various channels like BitConcert for live music performances, BitFilm for filmmakers, BitJoke for comedians, and BitPoem for poets. It's for music artists, spoken word artists, filmmakers, content creators, comedians, and poets looking to connect, create, and captivate audiences. Whether you're an emerging artist or an established brand, BitHQ provides the tools and platform to help you succeed." },
    { id: 2, title: "What services does BitHQ offer and how can it help amplify my career?", desc: "BitHQ offers a variety of services, including live studio performances, artist promotion across multiple platforms such as blogs, podcasts, and social media, and opportunities for collaboration and partnerships. It provides a global stage for you to showcase your talent, engage with fans, and build your brand. We also offer a personalised portfolio for you to showcase your talents." },
    { id: 3, title: "How can I submit my creative works to BitHQ?", desc: "Artists are encouraged to submit their creative works to BitHQ through our email (info@bithq.com). Currently, we are only accepting submissions for BitConcert. You can subscribe to our mailing list to stay updated on when submissions can be made for all the other subdivisions of BitHQ." },
    { id: 4, title: "How does BitHQ promote artists and how can I stay updated with the latest news and releases?", desc: "BitHQ promotes artists through a variety of channels, including blogs, podcasts, social media, and more. We aim to provide maximum exposure for our artists and help them connect with their fans. To stay updated with the latest news and releases from BitHQ, you can follow us on our social media channels, including YouTube, Instagram, Facebook, and Twitter. We regularly share updates, artist features, and behind-the-scenes content." },
    { id: 5, title: "How can I get involved with BitConcert and watch live performances?", desc: "If you're a music artist, you can submit your work to BitConcert for consideration. We provide a platform for you to showcase your live performances and connect with a global audience. Stay tuned for announcements about our submission process and upcoming events. You can watch these performances on our website or social media platforms such as YouTube, TikTok, Facebook, and Instagram. Stay connected to stay updated on the latest live shows." },
]


export const artistsSpotifyUrls = [
    "7BwjYTbA5Gybk7FS1wKwfD",
    "2IjKHNJcVhx0q4Kvxtcwzq",
    "1lKpEqady4EQ8wz5ZpJCuU",
    "6voEBlyJ5eygkBN9gJXaol",
    "1dT7fhcwrOEvMWxO9Zz2sP",
    "40m3Z5JrfDJFA02bcBsxZW",
    "01LRSA3PUxvPANcF3Edavg",
    "2e4CpFLefIelZvwVPmAPPp",
    "2Ypiqm6JP1iPSp5E0W2IkO",
    "6aRR67FWOs0V93Hr25mheA",
    "2mMkAbnk5RyNVDXs8gzisd",
    "3vM5Os04dAuqP1vJQj7kDG",
    "1eVhwb11qMszxNPrAe490I",
    "00exVUSrv8cP9bx6hcHRTs",
    "191QALKicsp2Tcm5Wf4911"
]