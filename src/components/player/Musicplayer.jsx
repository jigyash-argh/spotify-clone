// Musicplayer.jsx
import React from "react";
import Songprofile from "./Songprofile";
import SongControl from "./SongControl";

const song = {
  name: "Donali",
  image: "https://i.scdn.co/image/ab67616d00004851a972f021145a2298c67efdd0",
  singer: "Harkirat",
  audio: "/music/donali.mp3" // path to your audio file
};

const Musicplayer = () => {
  const dummySong = {
  url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  title: "Dummy Song 1"
};
  return (
    <div className="relative bottom-0 w-full  h-[88px] px-4 flex items-center  gap-4">
      
      <Songprofile song={song} />
      <div className="flex justify-center flex-1  ">
        <SongControl song={dummySong} />
      </div>  
    </div>
  );
};

export default Musicplayer;
