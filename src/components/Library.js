import React from 'react';
import LibrarySong from './LibrarySong';

const Library = ({ songs, setCurrentSong }) => {
  return (
    <div className='library'>
      <h1>Library</h1>
      <div className='library-songs'>
        {songs.map((song) => (
          <LibrarySong
            setCurrentSong={setCurrentSong}
            song={song}
            songs={songs}
            id={song.id}
            key={song.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
