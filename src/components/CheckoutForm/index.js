import React, { useMemo, useState } from "react"
import {
    useStripe,
    useElements,
    CardNumberElement,
    CardCvcElement,
    CardExpiryElement
} from "@stripe/react-stripe-js";
import axios from "axios";
import useResponsiveFontSize from "./useResponsiveFontSize";
import { ButtonPay } from '../CheckoutForm/styled'
const image = require('../../assets/imgs/bike2.png')

const useOptions = () => {
    const fontSize = useResponsiveFontSize();
    const options = useMemo(
        () => ({
            style: {
                base: {
                    fontSize,
                    color: "#424770",
                    letterSpacing: "0.025em",
                    fontFamily: "Roboto, Source Code Pro, monospace, SFUIDisplay",
                    "::placeholder": {
                        color: "#aab7c4"
                    }
                },
                invalid: {
                    color: "#9e2146"
                },

            }
        }),
        [fontSize]
    );

    return options;
};
const SplitForm = () => {
    const [isProcessing, setProcessingTo] = useState(false);
    const [checkoutError, setCheckoutError] = useState();

    const stripe = useStripe();
    const elements = useElements();
    const options = useOptions();

    const handleCardDetailsChange = event => {
        event.error ? setCheckoutError(event.error.message) : setCheckoutError();
    };

    const handleSubmit = async (event) => {
        event.preventDefault()
        // our payment process starts here
    }

    return (
        <main id="main">
            <section id="left">
                <div id="head">
                    <h1>Life has great moments</h1>
                    <p>Enjoy them with music!</p>
                </div>
                <h3> $160</h3>
            </section>
            <section id="right">
                <h1>Compra</h1>
                <form onSubmit={handleSubmit}>
                    <div id="form-card" className="form-field">
                        <label>Numero de tarjeta:</label>
                        <CardNumberElement id="cc-number" options={options} onChang={handleCardDetailsChange} />
                    </div>

                    <div id="form-date" className="form-field">
                        <label>Fecha de expiración:</label>
                        <div id="date-val">
                        </div>
                        <CardExpiryElement options={options} onChange={handleCardDetailsChange} />
                    </div>

                    <div id="form-sec-code" className="form-field">
                        <label>CVV:</label>
                        <CardCvcElement options={options} onChange={handleCardDetailsChange} />
                    </div>

                    {/* {!checkoutError && <CheckoutError>{checkoutError}</CheckoutError>} */}
                    <ButtonPay type="submit" disabled={isProcessing || !stripe}>
                        Checkout
                    </ButtonPay>
                </form>
            </section>
        </main>
    );

}

export default SplitForm;