import React, { useState } from 'react'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import { updatePlan } from '../../actions/subscription';
import { CircularProgress } from '@mui/material';
import ChatBotTab from '../../components/ChatBotTab/ChatBotTab';


const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const dispatch = useDispatch();
    const location = useLocation()
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false)
    const User = useSelector((state) => state.currentUserReducer)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        setIsLoading(true)
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const { clientSecret, plan } = location.state;
        // Confirm the PaymentIntent with the card details
        const result = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
            },
        });

        if (result.error) {
            setError(result.error.message);
        } else {
            // Payment successful, update state and navigate to success page
            dispatch({ type: 'ADD_PAYMENT', payload: { status: 'succeeded' } });
            setIsLoading(false)
            toast.success('Payment successful!');
            dispatch(updatePlan({
                userId: User.result?._id,
                plan
            }))
            setTimeout(() => {
                navigate('/');
            }, 2000);
        }
    };

    return (
        <div>

            <h2 className="checkout-title">Payment</h2>
            <form onSubmit={handleSubmit}>
                <label style={{ display: 'flex' }}>
                    Name:
                    <p>{User?.result.name}</p>
                </label>
                <label>
                    Card details:
                    <CardElement className="card-element" />

                </label>
                {error && <div>{error}</div>}
                <button className='pay-btn' type="submit" >
                    {isLoading ? 'Processing...' : 'Subscribe'}
                </button>
            </form>
            <ChatBotTab/>
        </div>

    )
}

export default CheckoutForm
