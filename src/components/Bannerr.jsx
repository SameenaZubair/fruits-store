import React from 'react';
import { motion } from 'framer-motion';
import BannerImage from '../../assets/fruit2-removebg-preview.png';

const Banner = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section className="bg-green-50 py-14 md:py-24">
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0">
        {/* Brand Info */}
        <div className="flex flex-col justify-center">
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center md:text-left space-y-4 lg:max-w-[400px]"
          >
            <h1 className="text-3xl lg:text-6xl font-bold uppercase">
              Brand Info
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea vero
              libero cum eveniet voluptatibus soluta odit nesciunt veritatis,
              dolorem earum. Rerum ducimus natus velit ut voluptatibus possimus
              vero quia alias!
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
              nesciunt ex cupiditate? Iusto, eveniet nemo.
            </p>
            {/* Button Section */}
            <div className="flex justify-center md:justify-start">
              <button className="primary-btn">Learn More</button>
            </div>
          </motion.div>
        </div>
        {/* Banner Image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 200, rotate: 75 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            src={BannerImage}
            alt="Banner"
            className="w-[350px] md:max-w-[500px] h-full object-cover drop-shadow"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Banner;
