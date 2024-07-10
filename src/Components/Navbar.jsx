import React from 'react'
import './Navbar.css'
import {useNavigate} from 'react-router-dom'
const Navbar = ({classstyle = "navbar" , titletext = "title-text" , navbar="navbar" , flex="flex1" , loginText="login-text" , hidden="list" , bottom=''}) => {
  const navigate = useNavigate();
  console.log( "element is: ",classstyle,titletext,navbar,loginText,hidden);
  return (
    <div className={`${navbar} ${classstyle} ${bottom}`}>
      <div className={`${flex}`}> 
      <div className={`${titletext}`}> Anorica </div>
      <div className={`${loginText} ${flex}`}> <ul className='ul'><li><i onClick={()=>navigate('/login')} class="fas fa-user"></i></li><li><i onClick={()=>navigate('createProduct')} class="fa fa-shopping-bag" aria-hidden="true"></i></li></ul> </div>
      </div>
             
               <div className={`${hidden}`}>
                    <ul className='li'>
                        <li> Woman </li>
                        <li> Men's </li>
                        <li> Kid's </li>
                        <li> Beauty </li>
                    </ul>
               </div>
    </div>
  )
}

export default Navbar
