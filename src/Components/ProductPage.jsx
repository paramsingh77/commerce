import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../Components/ProductPage.css'
import Navbar from './Navbar';

// Things to be added
// 1. Add Extra Description Feature
// 2. Add color field.


const extraOptoins = (
  <div>
    <ul>
      <li>Xl</li>
      <li>Sm</li>
    </ul>
  </div>
)

const ProductPage = () => {
    const {title} = useParams();
    const [data,setData] = useState([]);
    console.log(title);
    
    useEffect(()=>{
      const getData = async() =>{
      try {
        const d = await fetch(`http://localhost:9000/api/product/title/${title}`)
        const response = await d.json();
        setData(response);
        console.log(data);
      } catch (err) {
          console.log("Error occur");
      }
      }
      getData();
    })
  return ( 
    <div>
      <Navbar classstyle={"size"} titletext={"titText1"} navbar={"navbar1"} flex={"flex2"} loginText={"login-text1"} hidden={"hidden"} />
      <div className='prod-desc flex4'>
          <div className='description-i'>
            <div className='text-wrap2 color0'>
              <div>
             Men's One of a Kind
              </div>
              <div className='color1'>
                {data.Name}
              </div>
            </div>
            <div className='text-wrap'>
              {data.ProductDescription}
            </div>
            <div className='text-wrap1'>
               <ul>
                <li>Boxy Fit</li>
                <li>Titched Buttons</li>
                <li>Hand Crafted</li>
                <li>Dry Clean Only</li>
               </ul>
            </div>
            <div className='text-wrap1'>
            All wear, mending, and idiosyncrasies are unique to the original textile.


            </div>
          </div>

          <div className='image-i'><img className='img-sx' src={data.ImgSrc}/></div>


          <div className='price-i'>
            <div className='set-w'>
              <div className=' set-width1'>${data.Price}</div>
              <div className='set-width box-1'>Color</div>
              <div className='set-width flex-b box-1'>
                  <div className='wi-10'>
                  Choose Size 
                  </div>
                  <div className='wi-20'>
                  <i class="fa-solid fa-chevron-down"></i>
                  </div>

              </div>
              <div className='set-width color2 box-1'>Add to Bag</div>
            </div>
            </div>
    </div>
    </div>
    
  )
}

export default ProductPage
