import React, { useEffect, useState } from 'react';
import api from '../../logic/api';
import './GenreButton.css';

export default function GenreButton({genre_prop}) {

    const [genres, setGenres] = useState([]);

    useEffect(function(){
        api.get("genres")
        .then(res => {
            console.log(res.data)
            setGenres(res.data)
        })
        .catch(err => {
            console.log(err.message)
        })
    }, [])

  return (
    <div>
        { genres.map((genre) =>
        <button className='GenreButton' key={genre.id}>
            <span className='span-gb'>#</span> {genre.genre_name}
        </button>
        ) }
    </div>
  )
}
