import './App.css';
import Home1 from "./Screens/Home1";
import Navbar from './components/Navbar1';
import Footer from './components/Footer1';
import Contact from './components/Contact';
import Signup from './components/SingnUpForm';
import Login from './components/LoginForm';
// import ParticlesBackground from './Screens/Particles/ParticlesBackground';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    {/* <ParticlesBackground/> */}
     <BrowserRouter>
    <Navbar/>

    
        <Routes>
          <Route path='/' element={<Home1 />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/signup' element={<Signup/>}/>
        </Routes>
         {/* <Home1/> */}
        <Footer/>
      </BrowserRouter>
    
    </>
  );
}

export default App;
