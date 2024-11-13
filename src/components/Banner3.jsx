import React from 'react';
import { motion } from 'framer-motion';
import { FadeLeft } from '../utility/Animation';
import BannerPng from '../../assets/banner-bg.jpg';

const bgStyle = {
  backgroundImage: `url(${BannerPng})`,
  backgroundSize: 'cover',
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Banner3 = () => {
  return (
    <motion.section className='container mb-12'>
      <div style={bgStyle} className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 rounded-3xl">
        {/* Blank div */}
        <div></div>

        {/* Brand Info */} 
        <div className='flex flex-col justify-center'>
          <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
            <motion.h1
              variants={FadeLeft(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className='text-3xl lg:text-6xl font-bold uppercase'
            >
              Get Fresh Fruits Everyday
            </motion.h1>
            <motion.p
              variants={FadeLeft(0.9)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea vero libero cum eveniet voluptatibus soluta odit nesciunt
              veritatis, dolorem earum. Rerum ducimus natus velit ut voluptatibus possimus vero quia alias!
            </motion.p>

            {/* Button Section */}
            <motion.div
              variants={FadeLeft(1.1)}
              initial="hidden"
              animate="visible"
              className='flex justify-center md:justify-start'
            >
              <button className='primary-btn'>Learn More</button>
            </motion.div>

       
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Banner3;
