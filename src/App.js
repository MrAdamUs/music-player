import React, { useState, useRef } from 'react';
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';
import Nav from './components/Nav';
import data from './data';
// Import Style
import './styles/app.scss';

function App() {
  //Ref
  const audioRef = useRef(null);
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songIfo, setSonginfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);

  const timeUpdateHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    setSonginfo({ ...songIfo, currentTime, duration });
  };
  return (
    <div className='App'>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        songIfo={songIfo}
        setSonginfo={setSonginfo}
        audioRef={audioRef}
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
      />
      <Library
        songs={songs}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      />
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
}

export default App;
