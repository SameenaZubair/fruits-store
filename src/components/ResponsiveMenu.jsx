import React from 'react';
import { motion, AnimatePresence } from "framer-motion";

const ResponsiveMenu = ({ isOpen, menuItems }) => {
  return (
    <AnimatePresence mode='wait'>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -100 }} 
          animate={{ opacity: 1, y: 0 }} 
          exit={{ duration: 0.3 }} 
          className='absolute top-20 left-0 w-full h-screen z-20'
        >
          <div className='text-xl font-semibold uppercase bg-primary text-white py-10 m-6 rounded-3xl'>
            <ul className='flex flex-col items-center gap-10'>
              {menuItems.map((menu) => (
                <li key={menu.id}>
                  <a href={menu.link} className="hover:text-secondary">
                    {menu.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;






