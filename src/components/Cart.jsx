import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove, increment, decrement } from '../Features/CartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart); // Retrieve items from the Redux cart state
  const dispatch = useDispatch();

  const removeItem = (id) => {
    dispatch(remove(id)); // Remove item from cart
  };

  const increaseQuantity = (id) => {
    dispatch(increment(id)); // Increase item quantity
  };

  const decreaseQuantity = (id) => {
    dispatch(decrement(id)); // Decrease item quantity
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 gap-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white max-w-md mx-auto pt-10 rounded-3xl px-10 shadow-lg flex flex-row justify-between items-center gap-3"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-[60px] mb-4 scale-110 transform -translate-y-6"
              />
              <div>
                <h1 className="text-lg font-semibold">{item.title}</h1>
                <p className="text-lg font-semibold text-secondary">Rs. {item.price}</p>
                <div className="flex items-center gap-2">
                  {/* Decrease quantity button */}
                  <button
                    className="bg-gray-300 px-3 py-1 rounded-md hover:bg-gray-400 transition duration-200"
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    -
                  </button>
                  <span className="text-lg font-semibold">{item.quantity}</span> {/* Display quantity */}
                  {/* Increase quantity button */}
                  <button
                    className="bg-gray-300 px-3 py-1 rounded-md hover:bg-gray-400 transition duration-200"
                    onClick={() => increaseQuantity(item.id)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="bg-red-500 text-white mt-3 px-4 py-2 rounded-md hover:bg-red-600 active:scale-95 transition transform duration-150 ease-in-out"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          
          {/* Checkout Button */}
          <div className="text-center py-6">
            <Link to="/checkout">
              <button className="bg-red-700 text-white py-2 px-4 rounded-md hover:bg-red-800 transition duration-200">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <h1 className="text-center font-semibold text-2xl py-10">
          Oops! Nothing here yet! <br />
          Fill your cart with nature’s best flavors and discover the sweetness of choice.
        </h1>
      )}
    </div>
  );
};

export default Cart;


