"use client";
import { useState } from "react";
import SongCard from "./SongCard";
import { BlogDetails, EventDetails, SongDetails } from "@/interfaces";
import { blogs, events, trends } from "@/data";
import BlogCard from "./BlogCard";
import EventCard from "./EventCard";

export default function TabProfile() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Posts",
      content: blogs,
    },
    {
      title: "Songs",
      content: trends,
    },
    {
      title: "Events",
      content: events,
    },
  ];

  const currentTab = tabs[activeTab];

  return (
    <div>
      <ul className="flex justify-between md:justify-normal space-x-4 border-b border-neutral-100 pb-5">
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={`cursor-pointer px-2 py-1 ${
              activeTab === index
                ? "border-b-2 border-primary text-black font-medium"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {currentTab.title === "Posts" &&
            currentTab.content.map((post) => (
              <BlogCard key={post.id} v2 {...(post as BlogDetails)} />
            ))}
          {currentTab.title === "Songs" &&
            currentTab.content.map((song) => (
              <SongCard key={song.id} {...(song as SongDetails)} />
            ))}
          {currentTab.title === "Events" &&
            currentTab.content.map((event) => (
              <EventCard key={event.id} {...(event as EventDetails)} />
            ))}
        </div>
      </div>
    </div>
  );
}
