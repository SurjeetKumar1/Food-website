import './App.css';
import Home1 from "./Screens/Home1";
import Navbar from './components/Navbar1';
import Footer from './components/Footer1';
import Contact from './components/ContactUs';
import Signup from './components/SingnUpForm';
import Login from './components/LoginForm';
import MyCart from './components/MyCart/MyCart';
import MyOrder from './components/MyOrder/MyOrder';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from './components/ContextReducer';

function App() {
  return (
    <>
     <BrowserRouter>
     <CartProvider>

    <Navbar/>
 <Routes>
          <Route path='/' element={<Home1 />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/signup' element={<Signup/>}/>
          <Route exact path='/login/mycart' element={<MyCart/>}/>
          <Route exact path='/login/myorder' element={<MyOrder/>}/>
        </Routes>
     </CartProvider>
      </BrowserRouter>
    
    </>
  );
}

export default App;
