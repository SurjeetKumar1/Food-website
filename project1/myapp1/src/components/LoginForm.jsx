import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import "./LoginForm.css"
import axios from "axios";
export default function LoginForm() {
  const navigate = useNavigate();
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const onsubmit=async(e)=>{
e.preventDefault();
const res= await axios.post("http://localhost:5000/login",{email,password})
if(res){
if(res.data.message==='correct'){
  navigate("/")
}else{
  alert(res.data.message)
}
}
setEmail("");
setPassword("");
  }
  return (
    <div className='SingnUpform'>
      <form method='GET' onSubmit={onsubmit}>
      <div className='email' htmlFor="email"
>
        <label  htmlFor='email'>Email</label>
        <input type='email'
        id='email'
        placeholder='abc@gmail.com'
        name='email'
        value={email}
        onChange={(e)=>{setEmail(e.target.value)}}
        required></input>
    </div>
    <div className='passwprd'>
        <label htmlFor="password">Password</label>
        <input type='password'
        id='password'
        name='password'
        value={password}
        placeholder='abxxxxxx123'
        onChange={(e)=>{setPassword(e.target.value)}}
        required></input>
    </div>
    <button type='submit' className='btn'>Singn Up</button>
      </form>
    </div>
  )
}
