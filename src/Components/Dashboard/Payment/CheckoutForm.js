import React, { useState } from 'react';
import {
    CardElement,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        if (error) {
            setCardError(error?.message)
            console.log(error)
        }
        else {
            setCardError('')
            console.log(paymentMethod)
        }
    }

    /**
     * Install stripe react stripe js
     * Open stripe account on stripe website
     * Get punlishable key pk_
     * Create elements wrapper using punlishable key
     * Create checkout form using card element, useStripe, useElements
     * Get Card elements info (credit card info)
     * 
     * ----------------------
     * Get credit card info/error
    */

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-success btn-sm mt-4" type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className="text-red-500">{cardError}</p>
            }
        </>
    );
};

export default CheckoutForm;