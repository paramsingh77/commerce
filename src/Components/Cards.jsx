import React from 'react'
import './Cards.css'
const Cards = ({ onClick, className, Name, Price, ImgSrc }) => {
  
  function trimString(Name){
    if(Name.length > 35){
        return Name.trim().substring(0,9)+"..."
    }
    return Name.trim()
  }
  
  const deletes = async(name) => {
    console.log("Function called" , Name);
     fetch(`http://localhost:9000/api/createProduct/delete`,{
      credentials:'include',
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body: JSON.stringify({Name:name})
     }).then(data => console.log("Success" , data)).catch((error)=>console.log(error))
  }
  return (
    <><div className='card' >
        <div className='discard'>
        <img src={ImgSrc} onClick={onClick} alt='props'></img>
        <div className='flex price-container font-nesca'>
        <div className='text-font'>{trimString(Name)} </div> 
        <div className='font-price'>${Price}</div>
        <button onClick={() => deletes(Name)}>X</button>
        </div> 
        </div>
           
    </div>
    
    </>
    
  )
}

export default Cards
