import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../assest/Image/Android.jpg'
const ShopDesk = () => {
    return (
        <div className="hero min-h-screen bg-base-200 mt-20">
        <div className="hero-content flex-col lg:flex-row ">
          <img src={img1} className="rounded-lg shadow-2xl" alt='' />
          <div className='w-1/2'>
            <h1 className="text-5xl font-bold">Reseller Market</h1>
            <p className="py-6">The market consisting of wholesalers and retailers who buy products for resale purposes.</p>
           <Link to={'/category'}> <button className="btn btn-primary">Shop Now</button></Link>
          </div>
        </div>
      </div>
    );
};

export default ShopDesk;