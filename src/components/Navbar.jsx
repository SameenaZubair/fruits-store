import React from 'react';
import { FaLeaf } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from './ResponsiveMenu';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux'

const NavbarMenu = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Products", link: "/products" },
  { id: 3, title: "About", link: "/about" },
  { id: 4, title: "Contact", link: "/contact" },
];

const Navbar = () => {
  const CartSelect = useSelector(state => state.cart)
  return (
    <div>
      <nav>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="container flex justify-between items-center py-4 md:pt-4"
        >
          {/* Logo Section */}
          <div className="text-2xl flex items-center gap-2 font-bold uppercase">
            <p className="text-primary">
              Fruit <span className="text-secondary">Store</span> <br /> By Sameena Zubair
            </p>
            <FaLeaf className="text-green-500" />
          </div>

          {/* Desktop Menu Section */}
          <div className="hidden md:flex items-center gap-6 text-gray-600">
            <ul className="flex items-center gap-6">
              {NavbarMenu.map((menu) => (
                <li key={menu.id}>
                  <a
                    href={menu.link}
                    className="inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold"
                  >
                    {menu.title}
                  </a>
                </li>
              ))}
            </ul>
            <Link to="/cart">
            <button
                className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200"
            >    
                <IoCartOutline /> {CartSelect.length}
            </button>
        </Link>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className='md:hidden'>
            <MdMenu className='text-4xl' />
          </div>

          {/* Mobile Menu */}
          <ResponsiveMenu menuItems={NavbarMenu} />
        </motion.div>
      </nav>
    </div>
  );
};

export default Navbar;

