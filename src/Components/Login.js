import React from 'react'
import './Signup.css'
const Login = () => {
  return (
    <>
    <div className='aronica'>Anorica</div>
    <div className='login-container'>
      <div >
      <h1 className='h-1'>Login</h1>
      <div className='input-containers'>
      <form action='http://localhost:9000/api/user/login' method='post'>
        <div className='emails'>
        <label>email</label><br/>
        <input className='inp-box' type='text' name='email'/>
        </div>
       <div className='emails'>
       <label>password</label> <br/>
       <input className='inp-box' type='text' name='password'/>
       </div>
       
        <button className='box' type='submit'>LOGIN</button>
     </form>
      </div>
    
      </div>
     
    </div>
    </>
    
  )
}

export default Login
