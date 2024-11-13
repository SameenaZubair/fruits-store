import React from 'react';
import { motion } from 'framer-motion';
import { FadeUp } from '../utility/Animation';
import BannerPng from '../../assets/splash-removebg-preview.png';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Banner = () => {
  return (
    <motion.div className='px-10 ml-8 mr-8'>
      <motion.section className='bg-lime-100'>
        <motion.div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 ">

          {/* Banner Image */}
          <motion.div className='flex justify-center items-center'>
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}   
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              viewport={{ once: true }}
              src={BannerPng} 
              alt="Banner"
              className='w-[300px] md:max-w-md h-full object-cover drop-shadow'
            />
          </motion.div>

          {/* Brand Info */}
          <motion.div className='flex flex-col justify-center'>
            <motion.div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>

              {/* Contact Us Header */}
              <motion.p
                variants={FadeUp(0.5)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-4xl uppercase font-bold"
              >
                Contact Us 
              </motion.p>
              <br/>

              {/* Additional Info or Message */}
              <motion.p
                variants={FadeUp(0.7)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-2 text-xl font-normal text-gray-800"
              >
                Feel free to reach out if you have any questions or need help with your orders. Our team is always happy to assist you!
              </motion.p>

              {/* Contact Details */}
              <motion.div
                variants={FadeUp(0.9)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-4 text-gray-600"
              >
                <br/>
                <p className="font-bold">Phone: +1 (234) 567-890</p>
                <p className="font-bold">Email: support@fruitstore.com</p>
              </motion.div>

              {/* Social Media Icons */}
              <motion.div
                variants={FadeUp(1.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-4 text-gray-600"
              >
                <br/>
                
                <p className="font-bold text-2xl">Follow Us:</p>
                <div className="flex space-x-4">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="w-6 h-6 text-blue-600" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="w-6 h-6 text-blue-400" />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="w-6 h-6 text-pink-500" />
                  </a>
                </div>
              </motion.div>

            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default Banner;
