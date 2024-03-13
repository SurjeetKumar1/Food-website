import {useNavigate} from 'react-router-dom'
// import "./LoginForm.css"
import React, {  useState } from "react";
import "./SingnUpForm.css"
  import axios from "axios";
  import { FaGoogle } from "react-icons/fa";
  import { FaGithub } from "react-icons/fa";
  import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

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

//get data from local storage
const loggedUser=JSON.parse(localStorage.getItem("user"));   //get and covert string data to object
console.log("data get in local storage ",loggedUser)
if(email===loggedUser.email && password===loggedUser.password){
  navigate("/");
  localStorage.setItem("loggedin",true)
}else{
  alert({message:"Wrong details"})
}

setEmail("");
setPassword("");
  }
  return (
    <div className="Form">
    <form method='GET' onSubmit={onsubmit}>
      <div className="sss">
      <div className="boxinfo">
          <div style={{fontSize:"1.5rem",fontWeight:"500"}}>Login</div>
          <div>To Visit Our Website</div>
          <div style={{width:"100%", height:"2px",borderBottom:"2px solid #00000047", margin:"1rem 0 2rem 0"}}></div>
        </div>
        <label className="same" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          placeholder="abc@gmail.com"
          required
          
        onChange={(e)=>{setEmail(e.target.value)}}
        />
      </div>
      <div className="Password">
        <label className="same" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}
        />
      </div>
      <button type="submit" className="submit-button">
        Log In
      </button>
      <div style={{display:"flex", marginTop:"1rem",justifyContent:"center",alignItems:"center"}}>
        <div style={{width:"48%", height:"1.8px", background:"#4f424247"}}></div>
        <span style={{margin:"0px 4px"}}>or</span>
        <div style={{width:"48%", height:"1.8px", background:"#4f424247"}}></div>
      </div>
      <div className="Google">
        <div className="googleBox">
        <FaGoogle onClick={() => console.log('Google button clicked')} />
        </div>
        <div className="googleBox">
        <FaGithub onClick={() => console.log('Google button clicked')} />
        </div>
        <div className="googleBox">
        <FaLinkedin onClick={() => console.log('Google button clicked')} />
        </div>
      </div>
      <div style={{marginTop:"1rem"}}>
        Alredy have an account?<Link to="/"> Singn Up</Link>
      </div>
    </form>
  </div>
  )
}
