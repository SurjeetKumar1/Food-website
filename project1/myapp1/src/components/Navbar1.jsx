import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css"
import { Button } from '@mui/material';
import { FiAlignJustify } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

export default function Navbar1() {
  return (
    <nav>
      <div className="navbar">
      <Link to="/">
        <div className="left">Go Food</div>
        </Link>
        <div className="right">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>

            <li>
              <Link to="/login">
                <Button variant="contained" style={{ backgroundColor: 'green', color: 'white' }}>
                  Login
                </Button>
              </Link>
            </li>
            <li>
              <Link to="/signup">
                <Button className='singnupbtn' variant="contained"  style={{ backgroundColor: 'red', color: 'white' }} >
                  Sign Up
                </Button>
              </Link>
            </li>
          </ul>
          {/* <FiAlignJustify />
          <RxCross2 /> */}
        </div>
      </div>
    </nav>
  );
}
