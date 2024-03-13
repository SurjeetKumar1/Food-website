import React, { useEffect, useRef, useState } from 'react';
import { FaCartPlus } from "react-icons/fa";
 
import { useDispatchCart, useCart } from './ContextReducer';

const FoodCard = ({foodItem}) => { 
  let dispatch = useDispatchCart();
  let CartSatedata = useCart();
     const [quantity, setQuantity] = useState("1");
    const [option, setOption] = useState("Half"); 
    const [category, setCategory] = useState([]);
    const [price, setPrice] = useState(0); 

    useEffect(() => {
        if (option === "Half" ) {
          setPrice(quantity * foodItem.Options[0].Prize);
        } else if (option === "Full" ) {
          setPrice(quantity * foodItem.Options[1].prize);
        }
      }, [quantity, option]);
    
  const handleData = async (id, img, foodname, quantity, option, prize) => {
    const cartData = {
      id: id,
      img: img,
      FoodName: foodname,
      Quantity: quantity,
      Option: option,
      Prize: prize
    }
    await dispatch({ type: "ADD", cartData });
    console.log(CartSatedata);
  }

  return (
    <div key={foodItem._id} className='imageCard'>
    <img src={foodItem.img} alt={foodItem.name} />
    <div className='cardTitle'>
      <h3 className='foodItemName'>{foodItem.name}</h3>
      <h4>{foodItem.category}</h4>
    </div>
    <div className='price'>
      <select className='totalPlate' onChange={(e) => { setQuantity(e.target.value) }}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
      <select className='plateSize' onChange={(e) => { setOption(e.target.value) }}>
        <option>{foodItem.Options[0].name}</option>
        <option>{foodItem.Options[1].name}</option>
      </select>
      <div className='toPrice'>
        <h4>${price}/-</h4>
      </div>
    </div>
    <div className='addCart'>
      <button onClick={() => handleData(foodItem._id, foodItem.img, foodItem.name, quantity, option, price)}>
        <FaCartPlus style={{ fontSize: "1.4rem", marginRight: "8px", marginBottom: "-6px" }} />
        Add To Cart
      </button>
    </div>
  </div>
  )
}

export default FoodCard
