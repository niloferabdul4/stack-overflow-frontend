import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './ChatBot.css'
import robot from '../../assets/airobot.png'
import { sendOTP, openOTPForm } from '../../actions/otp';


const ChatBotTab = () => {

    const User = useSelector((state) => state.currentUserReducer)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleOpenModal = () => {
        if (User !== null)
        {
            dispatch(openOTPForm(navigate))
            dispatch(sendOTP({ email: User?.result?.email }))
            

        }
        else
        {
            toast.error('Please SignUp or Login To Continue')
            navigate('/Auth')
        }
    };

    return (
        <>
            <div>
                <img src={robot} className='chatbot-img' alt='robot' />
                <button className='chat' onClick={handleOpenModal}>
                    <h3 style={{ fontWeight: '500' }}>Hi.How can I help you..</h3>
                </button>
            </div>
        </>
    )
}

export default ChatBotTab
