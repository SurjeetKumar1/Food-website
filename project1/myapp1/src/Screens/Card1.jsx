import React, { useEffect, useState } from 'react';
import './Card.css';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';



export default function Card() {
  const [data, setData] = useState([]); // State to store the fetched data
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:5000/fooditems');
        console.log(res.data);
        setData(res.data);
      } catch (e) {
        console.log(e);
      }
    };

    const fetchCategory = async () => {
      try {
        const categoryData = await axios.get('http://localhost:5000/foodcategory');
        setCategory(categoryData.data);
        console.log(categoryData.data)
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
    fetchCategory();
  }, []);

  useEffect(()=>{
    AOS.init({duration:2000});
  },[]);

  return (
    <div className='disFlex'>
      {category.map((cat) => (
        <div key={cat._id} className='catCard'>
       <div className='lineBorder'></div>
          <h2 className='foodName'>{cat.categoryName}</h2>
          <div className='mainCard' data-aos="fade-up">
          {data
            .filter((catItem) => catItem.categoryName === cat.categoryName)
            .map((foodItem) => (
             
              <div key={foodItem._id} className='imageCard'> 

                <img src={foodItem.img} alt={foodItem.name} />
                <div className='cardTitle'>
                  <h3 className='foodItemName' >{foodItem.name}</h3>
                  <h4 >{foodItem.category}</h4>
                  {/* <p>{foodItem.description}</p> */}
                </div>
                <div className='price'>
                  <select className='totalPlate'>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                  <select className='plateSize'>
                    <option>Half</option>
                    <option>Full</option>
                  </select>
                  <div className='toPrice'>
                    <h4>Total Price</h4>
                    {/* You can calculate the total price based on selected options and display it here */}
                  </div>
                </div>
              </div>
              
            ))}
            </div>
         {/* <br/> tag outside map() function */}
        </div>
      ))}
      <br /> 
    </div>
  );
}
