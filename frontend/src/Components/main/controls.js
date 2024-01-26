import React, { useRef, useState ,useEffect} from 'react';
import YouTube from 'react-youtube';
import Search from '../Search/searchbar';

const YouTubePlayer = (props) => {
  const [player, setPlayer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50); // initial volume
  const [currentTime, setCurrentTime] = useState(0);
  const [videoid, setvideoid] = useState(null);
  const [Duration , setDuration ]= useState(null);
  const onReady = (event) => {
    setPlayer(event.target);
  };

  const setid =(id)=>{
    console.log(id);
    setvideoid(id);
  }

  const play = () => {
    if (isPlaying) {
      player.pauseVideo();
    } else {
      player.playVideo();
    }
    setIsPlaying(!isPlaying);
  };

  const onVolumeChange = (event) => {
    const newVolume = event.target.value;
    setVolume(newVolume);
    player.setVolume(newVolume);
  };

//   const play = () => {
//     setIsPlaying(!isPlaying)
//   }


  setInterval(() => {
    
    if (player && isPlaying) {
      setDuration(player.getCurrentTime());
      console.log(player.getCurrentTime());
    
    }
  }, 1000);

  const onSeekChange = (event) => {
    const newTime = event.target.value;
    setCurrentTime(newTime);
    player.seekTo(newTime);
  };

  const onStateChange = (event) => {
    // Handle state changes if needed
  };
  const playerOpts = {
    width : '100%',
    playerVars: {
      modestbranding: 1, // Remove YouTube logo
      rel: 0,           // Disable related videos
    },
  };

  return (
    <div >
        <Search setid={setid}/>
      <YouTube
        videoId={videoid}
        onReady={onReady}
        onStateChange={onStateChange}
        opts={playerOpts}
        onPlay={play}
        // onPause={play}
      />

      <button onClick={play}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>

      <input
        type="range"
        min={0}
        max={100}
        value={volume}
        onChange={onVolumeChange}
      />

      <input
        type="range"
        min={0}
        max={player ? player.getDuration() : 0}
        value={Duration}
        onChange={onSeekChange}
      />
    </div>
  );
};

export default YouTubePlayer;
