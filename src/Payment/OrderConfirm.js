import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const OrderConfirm = ({data}) => {
    const {price,customer,email} = data
   
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret , setClientSecret] = useState('')
  const [cardError, setCardError] = useState('');
    useEffect(()=>{
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({ price}),
          })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
        }, [price]);


  const handlePayment = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
        setCardError(error.message);
    } else {
      setCardError('')
    }
    const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              name: customer,
              email:email
            },
          },
        },
      );
      if(confirmError){
        setCardError(confirmError.message);
        return
      }

console.log(paymentIntent);

  };
  return (
    <>
    <form onSubmit={handlePayment}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button className="btn btn-sm btn-primary mt-5" type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
    </form>
    <p className="text-red-500">{cardError}</p>
    </>
  );
};

export default OrderConfirm;
