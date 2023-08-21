import React from 'react'
import data from '../Socials.json'

const handleEmailClick = () => {
  window.location.href = 'mailto:abderaouf-hocine.bouklab@epitech.eu';
}

const Socials = () => {
  return (
    <div className='flex flex-row '>
    {data.map( (items) =>  (
    <div key={items.name}>
    { items.name === "Gmail" ?  <img src= {items.imgSrc} alt={items.alt} onClick={handleEmailClick} width={'50px'} height={'50px'} />
    :
    <a href={items.Link} target="_blank" rel="noopener noreferrer" >
    <img src= {items.imgSrc} alt={items.alt} width={'50px'} height={'50px'} />
    </a>
    }
    </div>
    ))}
    </div>
  )
}

export default Socials