import React, { useEffect, useState } from 'react';
import api from '../../logic/api';
import './GenreButton.css';

export default function GenreButton({genre_prop}) {



  return (
    <div>
        
        <button className='GenreButton' >
            <span className='span-gb'>#</span> {genre_prop.genre_name}
        </button>
        
    </div>
  )
}
