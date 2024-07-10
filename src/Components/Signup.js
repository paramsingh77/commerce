import React from 'react'
import './Signup.css'
const Signup = () => {
  return (
    <div>
     <h1>Sign Up</h1>
     <form action='http://localhost:9000/api/createProductRoute' method='post'>
        <label>Full Name</label>
        <input className='inp-box' type='text' name='name'/>
        <label>Email</label>
        <input className='inp-box' type='text' name='email'/>
        <label>password</label>
        <input className='inp-box' type='text' name='password'/>
        <button className='box' type='submit'>Sign UP</button>
     </form>
    </div>
  )
}

export default Signup
