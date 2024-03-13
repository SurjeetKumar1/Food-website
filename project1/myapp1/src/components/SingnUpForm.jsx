import React, { useState } from "react";
import "./SingnUpForm.css";
import axios from "axios";
import { FaGoogle, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export default function SignUpForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();
  const handleSubmit = async (e) => {

    e.preventDefault();

    const res = await axios.post("http://localhost:5000/signup",{name, email, password})
    setName('') 
    setEmail('')
    setPassword('');
    if(res.data.message==="SignUp"){
      navigate("/");
    }
    const input={
      name:name,
      email:email,
      password:password
    }

    //store data in local storage
    localStorage.setItem("user",JSON.stringify(input))
  };

  return (
    <div className="Form">
      <form method="POST" onSubmit={handleSubmit}>
        <div className="box">
          <div className="boxinfo">
            <div style={{fontSize:"1.5rem",fontWeight:"500"}}>Welcome to Foodie Fusion website</div>
            <div>Create your account</div>
            <div style={{width:"100%", height:"2px",borderBottom:"2px solid #00000047", margin:"1rem 0 2rem 0"}}></div>
          </div>
          <div className="same"> {/* Added div wrapper */}
            <label htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
          </div>
        </div>
        <div className="sss">
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
            onChange={(e)=>setEmail(e.target.value)}
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
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="submit-button">
          Sign in
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
          Already have an account? <Link to="/">Login</Link>
        </div>
      </form>
    </div>
  );
}
