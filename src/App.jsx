import React from 'react';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menus from './Menus';
import Banner3 from './components/Banner3';
import Banner from './components/Banner';
import Bannerr from './components/Bannerr';
import Footer from './components/Footer';
import Cart from './components/Cart';
import CheckOut from './components/CheckOut';
import OrderConfirmation from './components/OrderConfirmation';



function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={
                    <>
                        <Navbar />
                        <Hero />
                        <Menus />
                        <Bannerr />
                        <Banner3 />
                        <Banner />
                        <Footer />
                    </>
                } />
                <Route path="/cart" element={<Cart />} />
                <Route path="/products" element={<Menus/>} />
                <Route path="/about" element={<Bannerr/>}/>
                <Route path="/contact" element={<Banner/>}/>
                <Route path="About" element={<Bannerr />}/>
                <Route path="/checkout" element={<CheckOut />} />
                <Route path= "/order-Confirmation" element={<OrderConfirmation/>} />
             </> 
        
        ),
        {
            basename: '/fruits-store/',
        }
    );

    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
