import Carousel from "react-multi-carousel";
import React, { useState } from 'react';
import "react-multi-carousel/lib/styles.css";
import Button from '@mui/material/Button';
import "./Home.css"
import Card from "./Card1";
import { Typewriter } from 'react-simple-typewriter'
// import ParticlesBackground from "./Particles/ParticlesBackground";

const Home1 = () => {

  const [foodvalue, setfoodvalue] = useState('');
  const [changeValue, setchangeValue] = useState([]);
  const handleSaerch = (e) => {
    setfoodvalue(e.target.value);
  }

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      
      <Carousel responsive={responsive}>
        {/* <div className="imageBox"> */}
        <div className="imageBox"> <img src="https://images.unsplash.com/photo-1610614819513-58e34989848b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D " /> </div>
        <div className="imageBox"> <img src="https://images.unsplash.com/photo-1544378730-8b5104b18790?q=80&w=2049&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D " /> </div>
        <div className="imageBox"> <img src="https://images.unsplash.com/photo-1617692855027-33b14f061079?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /> </div>
        <div className="imageBox"> <img src="https://images.unsplash.com/photo-1613292443284-8d10ef9383fe?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D " /> </div>
        {/* </div>s */}
      </Carousel>
      <div className="typing_text">
        <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
        <span style={{ fontWeight: 400 }}>Make your day good with a good, <br></br></span>{' '}
          <span style={{ color: ' #f1c40f ', fontWeight: '1000',fontSize:'3.9rem' }}>
            <Typewriter
              words={['PIZZA ', 'PANNER', 'PASTA', 'FRUIT CHAAT', 'DAAL', 'SOUP', 'CHICKEN', 'INDIAN FOOD ', 'BIRTHDAY CAKE', 'BURGER']}
              loop={true}
              cursor={true}
              cursorStyle='|'
              cursorColor="yellow"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}

            />
          </span>
        </h1>
      </div>

      <div className="SearchBaar1">
        <input type="text" className="inputType1" placeholder="Search Food Name" value={foodvalue} onChange={(e) => handleSaerch(e)} ></input>
        {/* <button className="searchbtn1"  >Search</button> */}
        <Button className="searchbtn1" variant="contained"  onClick={handleSaerch}>Search</Button>
      </div>
      

  {/* <ParticlesBackground/> */}

      <Card />
  
    </>

  );
};




export default Home1;
