import React, { useState } from 'react';
import Player from './components/Player';
import Song from './components/Song';
import data from './util';
// Import Style
import './styles/app.scss';

function App() {
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCuttentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className='App'>
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </div>
  );
}

export default App;
