import React from 'react'
import './Cards.css'
const Cards = (props) => {
  return (
    <div className='card'>
        <div className='discard'>
        <img src={props.imgSrc} alt='props'></img>
        <div className='text-font'>{props.title} $</div> <span className='font-price'>{props.price}</span>
        </div>
           
    </div>
  )
}

export default Cards
