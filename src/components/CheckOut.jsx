import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart); // Getting cart items from Redux
  const navigate = useNavigate();

  // State for shipping form
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    country: '',
    zip: '',
  });

  // Calculate the total price
  const getTotalPrice = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order Submitted', formData, cartItems);
    navigate('/order-confirmation');
  };

  return (
    <div className="container mx-auto py-8">
   

      {/* Conditionally render either the cart summary and form, or a message if the cart is empty */}
      {cartItems.length > 0 ? (
        <>
          {/* Cart Items Summary */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h1 className="text-2xl font-semibold mb-6">Checkout</h1>
            <h2 className="text-xl font-semibold mb-4">Your Order (Cash on Delivery)</h2>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <span>{item.title}</span>
                  <span>{item.quantity} x Rs. {item.price}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-4">
              <span className="font-semibold">Total:</span>
              <span className="font-semibold">Rs. {getTotalPrice()}</span>
            </div>
          </div>

          {/* Shipping Information Form */}
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
            <div className="space-y-4">
              {['name', 'address', 'city', 'country', 'zip'].map((field) => (
                <div key={field}>
                  <label className="block font-semibold" htmlFor={field}>
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    type="text"
                    id={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-md"
                    required
                  />
                </div>
              ))}
            </div>
            <div className='py-6 text-center '>
              <button type="submit" className='bg-gray-900 text-white py-2 px-4'>Confirm Order</button>
            </div>
          </form>
        </>
      ) : (
        <p className="text-center text-gray-800 py-7 text-4xl">Add items to your cart before proceeding to checkout.</p>
      )}
    </div>
  );
};

export default Checkout;
