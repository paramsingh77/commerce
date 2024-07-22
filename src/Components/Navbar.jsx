import React, { useState,useContext } from 'react'
import './Navbar.css'
import {useNavigate} from 'react-router-dom'
import { ProductContext} from '../contexts/productCart';


const Navbar = ({classstyle = "navbar" , titletext = "title-text" , navbar="navbar" , flex="flex1" , loginText="login-text" , hidden="list" , bottom=''}) => {

  const navigate = useNavigate();
  const [vis,setVis] = useState(false);
  const crContext = useContext(ProductContext);
  const toggle = () => {
    setVis(!vis);
  }

  var ans;

  vis? ans='boxer':ans=''

  return (
    <div className={`${navbar} ${classstyle} ${bottom}`}>
      <div className={`${flex}`}> 
      <div className={`${titletext}`}> Anorica </div>
      <div className={`${loginText} ${flex}`}>
  <ul className='ul'>
    <li>
      <i onClick={() => navigate('/login')} className="fas fa-user"></i>
    </li>
    <li className='icon-container'>
      <i onClick={() => navigate('createProduct')} className="fa fa-shopping-bag" aria-hidden="true"></i>
      <span className="badge">{crContext.dataUpload.length}</span> {/* Number to display */}
    </li>
  </ul>
</div>
</div>
             
               <div className={`${hidden}`}>
                    <ul className='li'>
                        <li onMouseEnter={toggle}> Woman </li>
                        <li> Men's </li>
                        <li> Kid's </li>
                        <li> Beauty </li>
                    </ul>
               </div>
               { vis && (<div className={ans}>
                random
               </div>)}
    </div>
  )
}

export default Navbar
