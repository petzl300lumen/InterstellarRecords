import React from 'react';
import './CategoryButton.css';
import cdd from '/cdicon.svg';
import cassete from '/casseteicon.svg';
import vinyl from '/vinylicon.svg';

export default function CategotyButton({category_prop}) {

    let icon;
    if(category_prop.category_name == "Винил"){
        icon = vinyl
    }
    else if(category_prop.category_name == "Aудиокассета"){
        icon = cassete
    }
    else{
        icon = cdd
    }
    

  return (
    <div>
        <button className='CategoryButton'>
           <span className='span-cb'><img src={icon} alt="" /></span> {category_prop.category_name}
        </button>
    </div>
  )
}
