import React, { useState } from 'react'
import './Subscriptions.css'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import { updatePlan } from '../../actions/subscription'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'
import { checkout } from '../../actions/subscription'
import ChatBotTab from '../../components/ChatBotTab/ChatBotTab'

const Subscriptions = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const User = useSelector((state) => state.currentUserReducer)

    const handleSubscription = (plan, amount) => {
        if (User === null) {
            toast.info("Login or Signup to subscribe");
            navigate("/Auth");
        } else {
            if (plan === 'free') {
                dispatch(updatePlan({
                    userId: User.result?._id,
                    plan,

                }))
            }
            else {
                dispatch((checkout({
                    userId: User.result?._id,
                    plan,
                    amount
                },
                    navigate)))
            }

        }
    }


    return (
        <div>
            <div className="home_container_1">
                <LeftSidebar />
                <div className="home_container_2 ">
                    <div className="subscription">
                        <h2 className="subscription-title">Subscriptions: </h2>
                        <p>Choose the Right Plan For You</p>
                        <div className="subscription-container">
                            <div className="subscription-card">
                                <h3 className='plan-title'>Basic</h3>
                                <h2 className='plan-amount'>Free</h2>
                                <p className='plan-condition'>1 question/day</p>
                                <button className='subscription-btn' onClick={() => handleSubscription('free')}>Start</button>
                            </div>

                            <div className="subscription-card">
                                <h3 className='plan-title'>Silver</h3>
                                <h2 className='plan-amount'>₹100/month</h2>
                                <p className='plan-condition'>5 questions/day</p>
                                <button className='subscription-btn' onClick={() => handleSubscription('silver', 100)}>Start</button>
                            </div>

                            <div className="subscription-card">
                                <h3 className='plan-title'>Gold</h3>
                                <h2 className='plan-amount'>₹1000/month</h2>
                                <p className='plan-condition'>unlimited questions</p>
                                <button className='subscription-btn' onClick={() => handleSubscription('gold', 1000)}>Start</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ChatBotTab />
        </div>


    )
}

export default Subscriptions
