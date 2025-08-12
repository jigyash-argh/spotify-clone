import React from "react";
import { FiPlus } from "react-icons/fi";

const dummyPlaylists = [
  { id: 1, name: "Chill Hits", cover: "https://misc.scdn.co/liked-songs/liked-songs-64.png" },
  { id: 2, name: "Lo-Fi Beats", cover: "https://i.scdn.co/image/ab67616d0000b2736e3f90b82f991b3e7c03e6ee" },
  { id: 3, name: "Top 50 Global", cover: "https://i.scdn.co/image/ab67616d0000b273b24b5f346c7e2e0a74a02d4b" },
  { id: 4, name: "Jazz Vibes", cover: "https://i.scdn.co/image/ab67616d0000b273d25b9b7b80bb3a35217e55a1" },
  { id: 5, name: "Workout Pump", cover: "https://i.scdn.co/image/ab67616d0000b273dcfb0c949cc6a3e8f7e39687" },
  { id: 6, name: "Acoustic Chill", cover: "https://i.scdn.co/image/ab67616d0000b2733b4c4b8f9b9c8dbca339e75a" },
  { id: 7, name: "Evening Jazz", cover: "https://i.scdn.co/image/ab67616d0000b27363d729d7bc5a2b6c56dd4c78" },
  { id: 8, name: "Morning Motivation", cover: "https://i.scdn.co/image/ab67616d0000b273dbbfbec6d759f4f512cbb0b0" },
  { id: 9, name: "Focus Now", cover: "https://i.scdn.co/image/ab67616d0000b2737f3fba209d9d2b9932b2f64d" },
  { id: 10, name: "Party Mix", cover: "https://i.scdn.co/image/ab67616d0000b27399e4572586bcd1c7c9dfd5f2" },
  { id: 11, name: "Romantic Hits", cover: "https://i.scdn.co/image/ab67616d0000b273c7a74f146f4328d3a0e84b6d" },
  { id: 12, name: "Classical Essentials", cover: "https://i.scdn.co/image/ab67616d0000b27347b0a0632f2a2c4ec1e029d0" },
  { id: 13, name: "Indie Pop", cover: "https://i.scdn.co/image/ab67616d0000b273ee98b8fd0c7e7af10e5f7d02" },
  { id: 14, name: "EDM Festival", cover: "https://i.scdn.co/image/ab67616d0000b273b198ed8bcf9c420d8a5d2e12" },
  { id: 15, name: "Rainy Day", cover: "https://i.scdn.co/image/ab67616d0000b273e4372a0b9e8a09a2e68f1a11" },
  { id: 16, name: "Hip-Hop Vibes", cover: "https://i.scdn.co/image/ab67616d0000b273f99bb42d8cdad0b85b6e7e88" },
  { id: 17, name: "Country Roads", cover: "https://i.scdn.co/image/ab67616d0000b2731a62e4f548f92c7e2df4e1f4" },
  { id: 18, name: "Instrumental Focus", cover: "https://i.scdn.co/image/ab67616d0000b27358de4a731b9c38a9c21e0f92" },
  { id: 19, name: "Throwback Classics", cover: "https://i.scdn.co/image/ab67616d0000b273cc7bbf0dcfe84c2b19d44f85" },
  { id: 20, name: "Meditation Sounds", cover: "https://i.scdn.co/image/ab67616d0000b2732a44cfed56e67f8a11907e62" }
];


const liberarylist = [
  { id: 1, value: "Playlists" },
  { id: 2, value: "Artists" },
  { id: 3, value: "Albums" },
  { id: 4, value: "Podcasts" },
  { id: 5, value: "Recently Played" },
  { id: 6, value: "Top Tracks" },
  { id: 7, value: "Liked Songs" },
  { id: 8, value: "New Releases" },
  { id: 9, value: "Discover Weekly" },
  { id: 10, value: "Daily Mix" }
];


const Yourliberarysectio = ({ collapsed, setCollapsed }) => {
  return (
    <div className="flex flex-col h-full shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 cursor-pointer">
        {/* Collapse / Expand Icon */}
        

        {/* Title visible only when expanded */}
        {!collapsed && (
          <>
          <button
          onClick={() => setCollapsed((prev) => !prev)}
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
            className="text-white items-center cursor-pointer"
          >
            <path d="M14.5 2.134a1 1 0 0 1 1 0l6 3.464a1 1 0 0 1 .5.866V21a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V3a1 1 0 0 1 .5-.866M16 4.732V20h4V7.041zM3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1m6 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1" />
          </svg>
        </button>
          <h1 className="text-white font-medium text-base">Your Library</h1>
          <div className="flex items-center gap-2 hover:bg-[#1F1F1F] px-5 py-3 rounded-full bg-[#1A1A1A] mt-1">
            <FiPlus className="text-xl" />
            <span className="">Create</span>
          </div>
          </>
        )}
      </div>

      {/* Expanded View */}
      {!collapsed && (
        <>
          {/* Create button */}
          

          {/* Scrollable library list */}
<div
  className="flex flex-nowrap gap-2 p-2 mt-3 overflow-y-auto max-h-40 ml-2 mr-2"
  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
>
  {liberarylist.map((item) => (
<button
  key={item.id}
  className="text-white bg-[#2A2A2A] px-6 py-3 rounded-4xl text-md hover:bg-[#3A3A3A] whitespace-nowrap"
>
  {item.value}
</button>

  ))}
  <style jsx>{`
    div::-webkit-scrollbar {
      display: none;
    }
  `}</style>
</div>


          {/* Playlist section */}
          <div className="p-4 space-y-3 overflow-y-auto flex-1">
            {dummyPlaylists.map((pl) => (
              <div key={pl.id} className="flex items-center cursor-pointer gap-5 hover:bg-[#1F1F1F] px-5 py-3">
                <img
                  src={pl.cover}
                  alt={pl.name}
                  className="w-15 h-15 rounded-md object-cover"
                />
                <span className="text-white">{pl.name}</span>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Collapsed View */}
      {collapsed && (
        <div className="flex flex-col items-center gap-4 mt-4">
          {/* Create Button */}
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
            className="text-white items-center cursor-pointer"
            onClick={() => setCollapsed((prev) => !prev)}
          >
            <path d="M14.5 2.134a1 1 0 0 1 1 0l6 3.464a1 1 0 0 1 .5.866V21a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V3a1 1 0 0 1 .5-.866M16 4.732V20h4V7.041zM3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1m6 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1" />
          </svg>
          <div className="w-12 h-12 flex items-center justify-center bg-[#1F1F1F] rounded-full cursor-pointer">
            <FiPlus className="text-2xl" />
          </div>

          {/* Playlist Covers */}
          {dummyPlaylists.map((pl) => (
            <img
              key={pl.id}
              src={pl.cover}
              alt={pl.name}
              className="w-10 h-10 rounded-md object-cover shadow-2xl"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Yourliberarysectio;
