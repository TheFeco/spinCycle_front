
import React, {useState} from "react"
import {
  Elements,
  CardElement,
  useElements,
  useStripe
} from "@stripe/react-stripe-js";
import { CardBox } from "./styled";
import { Grid } from "@material-ui/core";
import { loadStripe } from "@stripe/stripe-js";
//import { useState } from "react";
import axios from "axios";

const stripePromise = loadStripe("pk_test_51Lq1d0Fb3RklvSdcc68KEst3o35qIoYU9yCAILdQxpzQdxsFuFyO8Mp2PoysjWXVw1oprqTm6wbxulGDwbI3q6o9005RHxH19r");



const handleSubmit = (stripe, elements) => async () => {
  const cardElement = elements.getElement(CardElement);

  const {error, paymentMethod} = await stripe.createPaymentMethod({
    type: 'card',
    card: cardElement,
  });

  if (error) {
    console.log('[error]', error);
  } else {
    console.log('[PaymentMethod]', paymentMethod);
    // ... SEND to your API server to process payment intent
  }
};

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [isPaymentLoading, setPaymentLoading] = useState(false);
    const params = {
            "origin": "eee",
            "total": 20
        }
    
    const getClientSecret = () => {
        axios.post("http://127.0.0.1:8000/webhook", params).then((response) => {
            console.log(response);
        });
    }

    const payMoney = async (e) => {
        e.preventDefault();
        const clientSecret = getClientSecret();//'pi_3LqQ76Fb3RklvSdc0ejZGZ9d_secret_uIYplpCTlKTvxuEM9d7NXN0P6';
        const paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
            card: elements.getElement(CardElement),
            billing_details: {
            name: "Yusuff Faruq",
            },
        },
        });
        setPaymentLoading(false);
        if (paymentResult.error) {
        alert(paymentResult.error.message);
        console.log(paymentResult.error.message);
        } else {
        if (paymentResult.paymentIntent.status === "succeeded") {
            alert("Success!");
            console.log(paymentResult);
        }
        }
    };
  return (
    <div>
        <h1>stripe form</h1>
        <CardElement />
        <button onClick={(e)=>payMoney(e)}>Pagar</button>
    </div>
    
  );
}

const StripePaymentForm  = () => (
  <Elements stripe={stripePromise}>
    <PaymentForm />
  </Elements>
);

export default StripePaymentForm;