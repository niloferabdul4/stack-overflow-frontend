import * as api from "../api/index";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const openOTPForm = (navigate) => async(dispatch)=>{
    await dispatch({type: 'OPEN_OTP_FORM'})
    navigate('/ChatBox')
  };
  

export const sendOTP = (userData) => async(dispatch) => {
    try {
        const { email } = userData
        const { data } = await api.generateOTP(email)
        dispatch({ type: 'GENERATE_OTP', payload: data })
       
    }
    catch (error) {
        console.log(error);

    }
}

export const verifyOTP=(OTPData)=>async(dispatch)=>{
    try{
      const {OTPInput,email,OTPEnteredTime}=OTPData;
      await api.verifyOTP(OTPInput,email,OTPEnteredTime)
      toast.success('Email Verified Successfully')
      dispatch({type:'CHECK_VALID_OTP'})    
     
    }
    catch(error){
        toast.error(error.response.data.message);
    }
}
