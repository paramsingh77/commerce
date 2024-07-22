import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../Components/ProductPage.css'
import Navbar from './Navbar';
import { ProductContext } from '../contexts/productCart';

// Things to be added
// 1. Add Extra Description Feature
// 2. Add color field.


const extraOptoins = (
  <div className='op-width'>
    <ul>
      <li className='op-hover'>XXS</li>
      <li className='op-hover'>XS</li>
      <li className='op-hover'>S</li>
      <li className='op-hover'>M</li>
      <li className='op-hover'>L</li>
      <li className='op-hover'>XL</li>
      <li className='op-hover'>XXL</li>
    </ul>
  </div>
)

const ProductPage = () => {
    const {title} = useParams();
    const [data,setData] = useState([]);
    const [vis , setVis] = useState(false);
    const {dataUpload,setDataUpload} = useContext(ProductContext)
    console.log(dataUpload.length);
    // console.log(title);
    
    useEffect(()=>{
      const getData = async() =>{
      try {
        const d = await fetch(`http://localhost:9000/api/product/title/${title}`)
        const response = await d.json();
        setData(response);
        // console.log(data);
      } catch (err) {
          console.log("Error occur");
      }
      }
      getData();
    },[title,dataUpload])

    const toggle = () => {
      console.log(vis);
      setVis(!vis)
    }
    var cla;
     vis? cla = `op-box visible set-width`  : cla='noVisible'

    const addToBox = ({Price,Name}) => {
      console.log("function called");
      if(Array.isArray(dataUpload)){
        let ans = dataUpload.find(item => item.name === Name)
        if(!ans){
          console.log("Item not present");
          setDataUpload([...dataUpload , { name: Name, Price}])
          console.log("data uploaded");
        }
        else{
          console.log("Item is present in list");
          const updatedList = dataUpload.map(item => item.name === Name ? {...item , Name: Name, Price:Price}: item)
          setDataUpload(updatedList);
          console.log("List is updated ",updatedList);
        }
      }
      else{
        console.log("Arrat is not iterable");
      }
      console.log("data upload is: ",dataUpload);
    }
     console.log("cla is  " , cla)
      
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

          <div className='image-i'><img alt='product' className='img-sx' src={data.ImgSrc}/></div>
          

          <div className='price-i'>
            <div className='set-w'>
              <div className=' set-width1'>${data.Price}</div>
              <div className='set-width box-1'>Color</div>
              <div className='set-width flex-b box-1'>
                  <div className='wi-10'>
                  Choose Size 
                  </div>
                  <div onClick={toggle} className='wi-20'>
                    {
                      vis?  
                      <i class=" cursor-pointer fa-solid fa-chevron-up"></i> :<i class=" cursor-pointer fa-solid fa-chevron-down"></i>
                    }
                 
                  </div>
              </div> 
                { vis && (<div className='op-box visible set-width'>
                 {extraOptoins}
                 </div>)
                 }
              
             
             
              <div className='set-width color2 box-1' onClick={() => addToBox({Price: data.Price , Name: data.Name})}>Add to Bag</div>
            </div>
            </div>
    </div>
    </div>
    
  )
}

export default ProductPage
