import React, { useState, useRef, useEffect } from 'react';
import {
  FaPlayCircle,
  FaPauseCircle,
  FaForward,
  FaBackward,
  FaRandom,
  FaRedo,
  FaVolumeUp,
  FaVolumeMute
} from 'react-icons/fa';

const SongControl = ({ song }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const setMetadata = () => setDuration(audio.duration);
    const updateTime = () => setProgress(audio.currentTime);
    audio.addEventListener('loadedmetadata', setMetadata);
    audio.addEventListener('timeupdate', updateTime);
    return () => {
      audio.removeEventListener('loadedmetadata', setMetadata);
      audio.removeEventListener('timeupdate', updateTime);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    isPlaying ? audio.pause() : audio.play();
    setIsPlaying(!isPlaying);
  };

  const formatTime = (sec) => `${Math.floor(sec / 60)}:${String(Math.floor(sec % 60)).padStart(2, '0')}`;

  return (
    <div className='flex w-full items-center justify-center mt-10'>
                <div className="flex flex-col items-center w-full text-white">
      <audio ref={audioRef} src={song?.url} />

      {/* Control Buttons */}
      <div className="flex items-center gap-6">
        <FaRandom className="hover:text-green-400 cursor-pointer" size={18} />
        <FaBackward className="hover:text-green-400 cursor-pointer" size={18} />
        <button onClick={togglePlay} className="text-center">
          {isPlaying ? (
            <FaPauseCircle size={34} />
          ) : (
            <FaPlayCircle size={34} />
          )}
        </button>
        <FaForward className="hover:text-green-400 cursor-pointer" size={18} />
        <FaRedo className="hover:text-green-400 cursor-pointer" size={18} />
      </div>

      {/* Progress Bar */}
      <div className="flex items-center gap-2 w-full px-4 mt-2 text-xs">
        <span>{formatTime(progress)}</span>
        <input
          type="range"
          min="0"
          max={duration}
          value={progress}
          onChange={(e) => {
            const t = e.target.value;
            audioRef.current.currentTime = t;
            setProgress(t);
          }}
          className="w-full accent-white"
        />
        <span>{formatTime(duration)}</span>
      </div>

      {/* Volume Control */}
      
    </div>
    <div>
        <div className="flex items-center gap-2 mt-2">
        {volume > 0 ? <FaVolumeUp /> : <FaVolumeMute />}
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => {
            const v = e.target.value;
            setVolume(v);
            if (audioRef.current) audioRef.current.volume = v;
          }}
          className="w-24 accent-white"
        />
      </div>
    </div>
    </div>

  );
};

export default SongControl;
