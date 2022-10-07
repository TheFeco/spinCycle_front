import React, { Component } from "react"
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import CheckoutForm from '../CheckoutForm';

const stripePromise = loadStripe('pk_test_51Lq1d0Fb3RklvSdcc68KEst3o35qIoYU9yCAILdQxpzQdxsFuFyO8Mp2PoysjWXVw1oprqTm6wbxulGDwbI3q6o9005RHxH19r');


const options = {
    // passing the client secret obtained from the server
};
 


const Payments = (props) => (
  <Elements stripe={stripePromise}>
        <CheckoutForm />
    </Elements>
)

export default Payments;