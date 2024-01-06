import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { verifyOTP } from '../../actions/otp'
import './Chat.css'


const OTPForm = () => {

  const User = useSelector((state) => state.currentUserReducer)
  const [OTPInput, setOTPInput] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (OTPInput === "") {
      toast.error("Please Enter OTP");
      return;
    }
    dispatch(verifyOTP({ OTPInput, 
      email: User?.result?.email,
      OTPEnteredTime:new Date().getTime() }))
    setOTPInput('')

  }

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      dispatch(verifyOTP({ OTPInput, 
        email: User?.result?.email,
        OTPEnteredTime:new Date().getTime() 
       }))
      setOTPInput('')

    }
  }

  return (
    <div>
      <div className='otp-container'>
        <form className='otp-form' onSubmit={handleSubmit} >
          <h2 className='otp-heading' >Email Verification</h2>
          <div className='otp-container-div'>
            <p>We've sent a verification code to your email </p>
            <h3 style={{ fontWeight: '500' }}>{User?.result?.email}</h3>
          </div>
          <input type='text'
            value={OTPInput}
            placeholder='Enter verification code'
            className='otp-input'
            onChange={(e) => setOTPInput(e.target.value)}
            onKeyDown={handleEnter} />
          <button type='submit' className='otp-btn'>Submit</button>
        </form>

      </div>
    </div>
  )
}

export default OTPForm
