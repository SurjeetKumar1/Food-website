import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { FiAlignCenter } from "react-icons/fi";
import { TfiClose } from "react-icons/tfi";
// const { cartItems } = useContext(CartContext); 

import logo from "../Images/linkedin_banner_image_1-removebg-preview.png";

export default function Navbar1() {
  // const { cartItems } = useContext(CartContext);
  // Calculate the total number of items in the cart
  // const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

   const [clicked,setclicked]=useState(false);
  //  const [navshow,setnavshow]=useState(false)

  const navigate = useNavigate();
  const [navbar, setNavbar] = useState(false);
  console.log(clicked)


  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 90) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedin");
    navigate("/login");
  };

  return (
    <nav>
      <div className={navbar ? "navbar active" : "navbar"}>
        <Link to="/">
          <div className="left">
            <img style={{ width: "15rem", height: "4rem" }} src={logo} alt='' />
          </div>
        </Link>
        <div className="right">
        <ul id='navUl' className={clicked ? "navUl active" : "navUl"}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            {localStorage.getItem("loggedin") ? (
              <li>
                <Link to="/login/myorder">My Orders</Link>
              </li>
            ) : null}
            {!localStorage.getItem("loggedin") ? (
              <>
                <li>
                  <Link to="/login">
                    <Button variant="contained" style={{ backgroundColor: 'green', color: 'white' }}>
                      Login
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link to="/signup">
                    <Button className='signupbtn' variant="contained" style={{ backgroundColor: 'red', color: 'white' }} >
                      Sign Up
                    </Button>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login/mycart">
                    {/* <Badge badgeContent={cartCount} color="secondary"> */}
                    <Badge badgeContent="3" color="secondary">

                      <Button className='signupbtn' variant="contained" style={{ backgroundColor: 'red', color: 'white' }}>
                        <ShoppingCartIcon /> My Cart
                      </Button>
                    </Badge>
                  </Link>
                </li>
                <li>
                  <Button className='signupbtn' variant="contained" style={{ backgroundColor: 'red', color: 'white' }} onClick={handleLogout}>
                    Logout
                  </Button>
                </li>
              </>
            )}
           
          </ul>
          <div className='mobile' onClick={()=>setclicked(!clicked)}>
            { clicked?<TfiClose />: <FiAlignCenter  />  
    }
      </div>
        </div>
      </div>
    </nav>
  );
}
