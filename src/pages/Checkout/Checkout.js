
import React from 'react';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import './Checkout.css'
import CheckoutForm from './CheckoutForm';

const Checkout = () => {

    const stripePromise = loadStripe('pk_test_51OUtL2DFzqSUPDL5t79A0Go5QBlbZIWDhWoCSTIRj1qNaUh8rv9F6mYy57KnIj2riHI5XAcMrjvppIbzeUN7qNXe00CHLe9gTn');

    return (
        <div className="home_container_1">
            <LeftSidebar />
            <div className="home_container_2">
                <div className="checkout">
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
                </div>
            </div>
        </div>
    );
};

export default Checkout;