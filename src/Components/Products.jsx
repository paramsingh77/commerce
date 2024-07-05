import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import './Product.css'

const Products = () => {
  const [data,setData] = useState();
  useEffect(()=>{
    const  getData = async() => {
      try{
        const d = await fetch('../../public/Data/products.json')
        if(!d.ok){
          console.log("Error Fetching Data");
        }
        const response = await d.json();
        if(response === undefined) console.log("Data not fetch");
        console.log('response is ' ,response);
        setData(response);
      }
      catch{
        console.log("Error");
      } 
      
    }
    getData();
  })
  console.log(data);
  return (
   <>
   <div className='product-container' style={{marginTop:"100px" , width:"80%" , marginLeft:"auto" , marginRight:"auto"}}>
   <div className='negative-padding text-overlay' style={{}}>
         Summer Sale
    </div>
    <img src='https://images.unsplash.com/photo-1674302556189-a311b4ae2eda?q=80&w=2524&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='img-style' alt='propss'></img>
    
    <div className='cards-container'>
    <Cards className="card" title="Bode" price="10.99" imgSrc="https://www.mrporter.com/variants/images/1647597302331118/in/w2000_q60.jpg"/>
    <Cards className="card" title="Bode" price="10.99" imgSrc="https://www.solarmtp.com/cdn/shop/files/image_aa1fd217-501e-4b45-9527-bbd696344747.webp?v=1685656328"/>
    <Cards className="card" title="Bode" price="10.99" imgSrc="https://bode.com/cdn/shop/files/SEQUINEDFLORALNETSSSHIRT_10.jpg?v=1706646685"/>
    </div>
        
   
   </div>
   </>
  )
}

export default Products
