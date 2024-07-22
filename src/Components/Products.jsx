import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import './Product.css';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Products = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const getData = async () => {
      try {
        const d = await fetch(`http://localhost:9000/api/product/`);
        if (!d.ok) {
          console.log("Error Fetching Data");
        }
        const response = await d.json();
        if (response === undefined) console.log("Data not fetch");
        else setData(response);
      } catch {
        console.log("Error");
      }
    }
    getData();
  }, [data]);

  const routen = (title) => {
    navigate(`/product/${title}`);
    console.log("Navigated to");
    console.log("location is ", location);
  }

  return (
    <>
      <Navbar />
      <div className='product-container' style={{ marginTop: "100px", width: "80%", marginLeft: "auto", marginRight: "auto" }}>
        <div className='negative-padding text-overlay'>
          Fashion Week
        </div>
        <img src='https://images.unsplash.com/photo-1580568287125-ae9bad4f0eef?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='img-style' alt='propss'></img>
        <div className='cards-container'>
          {data.map(({ Name, Price, ImgSrc }, index) => (
            <React.Fragment key={index}>
              <Cards onClick={() => routen(Name)} className="card" Name={Name} Price={Price} ImgSrc={ImgSrc} />
              <div className="blur-overlay"></div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  )
}

export default Products;
