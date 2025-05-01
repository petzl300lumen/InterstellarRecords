import React from 'react'
import Artists from './Artists'

export default function ArtistsContainer({artists}) {
    const filteredArtists = artists.filter((artist) => artist.artist_name.includes('Mareux'));
  return (
    <div>ArtistsContainer
        {filteredArtists.map((artist) => ( <Artists key={artist.id} artist={artist} /> ))}
    

    </div>
  )
}
