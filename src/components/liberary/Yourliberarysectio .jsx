import React from "react";
import { FiPlus } from "react-icons/fi";

const dummyPlaylists = [
  { 
    id: 1, 
    name: "Chill Hits", 
    cover: "https://misc.scdn.co/liked-songs/liked-songs-64.png"
  },
  { 
    id: 2, 
    name: "Lo-Fi Beats", 
    cover: "https://i.scdn.co/image/ab67616d0000b2736e3f90b82f991b3e7c03e6ee" 
  },
  { 
    id: 3, 
    name: "Top 50 Global", 
    cover: "https://i.scdn.co/image/ab67616d0000b273b24b5f346c7e2e0a74a02d4b" 
  },
  { 
    id: 4, 
    name: "Jazz Vibes", 
    cover: "https://i.scdn.co/image/ab67616d0000b273d25b9b7b80bb3a35217e55a1" 
  },
  { 
    id: 5, 
    name: "Workout Pump", 
    cover: "https://i.scdn.co/image/ab67616d0000b273dcfb0c949cc6a3e8f7e39687" 
  }
];

const liberarylist=[
  {id:1, value:"Playlists"},
  {id:2, value:"Artists"},
  {id:3, value:"Albums"},
  {id:4, value:"Podcasts"},

]
const Yourliberarysectio = ({ collapsed, setCollapsed }) => {
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div
      onClick={() => setCollapsed((prev) => !prev)}
        className={`flex items-center cursor-pointer  px-4 py-3 ${
          collapsed ? "justify-center" : ""
        }`}
      >
        {/* Collapse Button */}
        <div
          
          className="flex items-center justify-center w-8 h-8"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <path d="M14.5 2.134a1 1 0 0 1 1 0l6 3.464a1 1 0 0 1 .5.866V21a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V3a1 1 0 0 1 .5-.866M16 4.732V20h4V7.041zM3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1m6 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1" />
          </svg>
        </div>

        {!collapsed && (
          <>
            <h1 className="ml-3 text-white font-medium text-base">Your Library</h1>
            <div className="flex ml-auto items-center gap-2 hover:bg-[#1F1F1F] px-5 py-3 rounded-full bg-[#1A1A1A]">
              <FiPlus className="text-xl" />
              <span>Create</span>
            </div>
          </>
        )}
      </div>

      {/* Content */}
      {collapsed ? (
        <div className="flex flex-col items-center gap-4 mt-4">
          {/* Create Button */}
          <div className="w-13 h-13 flex items-center justify-center bg-[#1F1F1F] rounded-full cursor-pointer">
            <FiPlus className="text-3xl" />
          </div>

          {/* Playlist Covers */}
          {dummyPlaylists.map((pl) => (
            <img
              key={pl.id}
              src={pl.cover}
              alt="playlist cover"
              className="w-10 h-10 rounded-md object-cover"
            />
          ))}
        </div>
      ) : (
        <div className="p-4">
          <p className="text-sm text-gray-400">Your playlists here...</p>
        </div>
      )}
    </div>
  );
};

export default Yourliberarysectio;
