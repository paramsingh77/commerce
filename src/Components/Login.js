import React from 'react'
import './Signup.css'
const Login = () => {
  return (
    <div>
     <h1>Sign Up</h1>
     <form action='http://localhost:9000/api/user/login' method='post'>
        
        <label>Email</label>
        <input className='inp-box' type='text' name='email'/>
        <label>password</label>
        <input className='inp-box' type='text' name='password'/>
        <button className='box' type='submit'>LOGIN</button>
     </form>
    </div>
  )
}

export default Login
