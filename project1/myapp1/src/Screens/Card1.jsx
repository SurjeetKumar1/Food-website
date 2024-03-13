import React, { useEffect, useRef, useState } from 'react';
import './Card.css';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FoodCard from '../components/FoodCard';
export default function Card() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:5000/fooditems');
        setData(res.data);
      } catch (e) {
        console.log(e);
      }
    };

    const fetchCategory = async () => {
      try {
        const categoryData = await axios.get('http://localhost:5000/foodcategory');
        setCategory(categoryData.data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
    fetchCategory();
  }, []);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);


  return (
    <div className='disFlex'>
      {category.map((cat) => (
        <div key={cat._id} className='catCard'>
          <div className='lineBorder'></div>
          <h2 className='foodName' style={{ color: "#080224" }}>{cat.categoryName}</h2>
          <div className='mainCard'>
            {data
              .filter((catItem) => catItem.categoryName === cat.categoryName)
              .map((foodItem) => (
                <FoodCard foodItem={foodItem} />
              ))}
          </div>
        </div>
      ))}
      <br />
    </div>
  );
}
