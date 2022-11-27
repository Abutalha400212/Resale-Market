import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { confirmPayment, confirmPaymentUpdate } from "../Api/OrderBooking";

const OrderConfirm = ({ data }) => {
  const { price, product, email, _id } = data;
  const [processign, setProcessing] = useState(false);
  console.log(data);
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [cardError, setCardError] = useState("");
  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setClientSecret(data.clientSecret);
      });
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
      setCardError("");
    }
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: product,
            email: email,
          },
        },
      });
    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }

    if (paymentIntent.status === "succeeded") {
      const id = paymentIntent.id;
      const payment = {
        price,
        transactionId: paymentIntent.id,
        email,
      };
      confirmPayment(payment).then((Udata) => {
        confirmPaymentUpdate(_id).then((data) => {
          if (data.acknowledged && Udata.acknowledged ) {
            toast.success(
              `Your ${product}s bill paid . your transaction Id is ${id}`
            );
          }
        });
      });
    }
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
        <button
          className="btn btn-sm btn-primary mt-5"
          type="submit"
          disabled={!stripe || !clientSecret || processign}
        >
          Pay
        </button>
      </form>
      <p className="text-red-500">{cardError}</p>
    </>
  );
};

export default OrderConfirm;
