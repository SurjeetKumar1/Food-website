import React, {  useState } from "react";
import "./SingnUpForm.css"
  import axios from "axios";

export default function SignUpForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/signup",{name, email, password})
    setName('') 
    setEmail('')
    setPassword('')
  };

  return (
    <div className="Form">
      <form method="POST" onSubmit={handleSubmit}>
        <div className="box">
          <label className="same" htmlFor="name">
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
          Log In
        </button>
      </form>
    </div>
  );
}
