import React from 'react';
import { motion } from 'framer-motion';
import apple from '../assets/fruits/apple.png';
import orange from '../assets/fruits/orange.png';
import avocado from '../assets/fruits/avocado.png';
import cherry from '../assets/fruits/cherry.png';
import banana from '../assets/fruits/banana.png';
import mango from '../assets/fruits/mango.png';
import strawberry from '../assets/fruits/strawberry.png';
import kiwi from '../assets/fruits/kiwi.png';
import blueberry from '../assets/fruits/blueberry.png';
import peach from '../assets/fruits/peach.png';
import pomegranate from '../assets/fruits/pomegranate.png';
import watermelon from '../assets/fruits/watermelon.png';
import papaya from '../assets/fruits/papaya.png';
import grapes from '../assets/fruits/grapes.png';
import guava from '../assets/fruits/guava.png';
import pineapple from '../assets/fruits/pineapple.png';
import { useDispatch } from 'react-redux';
import {add} from './Features/CartSlice'


const MenusData = [
  { id: 1, title: "Red Apple", price: 80, img: apple, delay: 0.3 },
  { id: 2, title: "Oranges", price: 60, img: orange, delay: 0.6 },
  { id: 3, title: "Avocado", price: 200, img: avocado, delay: 0.9 },
  { id: 4, title: "Cherries", price: 40, img: cherry, delay: 1.2 },
  { id: 5, title: "Banana", price: 30, img: banana, delay: 1.5 },
  { id: 6, title: "Mango", price: 100, img: mango, delay: 1.8 },
  { id: 7, title: "Strawberry", price: 50, img: strawberry, delay: 2.1 },
  { id: 8, title: "Kiwi", price: 150, img: kiwi, delay: 2.4 },
  { id: 9, title: "Blueberry", price: 120, img: blueberry, delay: 2.7 },
  { id: 10, title: "Peach", price: 110, img: peach, delay: 3.0 },
  { id: 11, title: "Pomegranate", price: 130, img: pomegranate, delay: 3.3 },
  { id: 12, title: "Watermelon", price: 80, img: watermelon, delay: 3.6 },
  { id: 13, title: "Papaya", price: 60, img: papaya, delay: 3.9 },
  { id: 14, title: "Grapes", price: 70, img: grapes, delay: 4.2 },
  { id: 15, title: "Guava", price: 50, img: guava, delay: 4.5 },
  { id: 16, title: "Pineapple", price: 90, img: pineapple, delay: 4.8 },
];

const Menus = () => {  

  const dispatch = useDispatch()

  const addToCart = (menu) => {
  //i have to dispatch an add function
  dispatch(add(menu))
  }

  return (
    <motion.section>
      <motion.div className="container pt-12 pb-20">
        <motion.h1
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-2xl font-bold text-left pb-10 uppercase"
        >
          Our Menu
        </motion.h1>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {MenusData.map((menu) => (
            <motion.div
              key={menu.id}
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: menu.delay }}
              className="bg-white rounded-3xl px-4 py-2 shadow-lg flex flex-row justify-around items-center gap-3"
            >
              <img src={menu.img} alt={menu.title} className="w-[60px] mb-4 scale-110 transform -translate-y-6" />
              <motion.div>
                <h1 className="text-lg font-semibold">{menu.title}</h1>
                <p className="text-lg font-semibold text-secondary">Rs. {menu.price}/kg</p>
                <button
                  className="bg-pink-200 p-2 rounded-md text-sm active:scale-95 transition transform duration-150 ease-in-out"
                  onClick={()=> addToCart(menu)}
                >
                  Add to Cart
                </button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Menus;
