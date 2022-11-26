import React from 'react';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData } from 'react-router-dom';
import OrderConfirm from './OrderConfirm';
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_SECRET);
const Payment = () => {
    const data = useLoaderData()
    return (
        <div>
        <h1 className='text-xl font-mono'>{data.product}</h1>
        <p className='text-sm font-semibold'>
          Please Pay <strong>${data.price}</strong> for your Order
        </p>
        <div className="w-96 my-12">
          <Elements stripe={stripePromise}>
            <OrderConfirm data={data} />
          </Elements>
        </div>
      </div>
    );
};

export default Payment;