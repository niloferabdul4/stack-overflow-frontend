import * as api from "../api/index";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const updatePlan = (planData) => async (dispatch) => {
    try{
    const {userId,plan}=planData;
    const { data } = await api.updatePlan(userId,plan)
    // console.log(data)
    dispatch({ type: 'UPDATE_PLAN', payload: data.plan })
   toast.success(data.message)
    dispatch({
        type: 'UPDATE_CURRENT_USER',
       payload: data.updatedUser
    })
}
catch(error){
    console.log(error)
}
}

export const handleQuota=(quotaData,navigate)=>async(dispatch)=>{
    try{
    const {userId,date}=quotaData;
    const {data}=await api.handleQuota(userId,date)
    console.log(data)
    dispatch({ type: 'HANDLE_QUOTA', payload: data });
    navigate('/AskQuestion');
    }
    catch(error){
        toast.error(error.response.data.message);
    }
}

export const checkout=(planData,navigate)=>async(dispatch)=>{
    try{
    const {userId,plan,amount}=planData;
    const {data}=await api.checkout(userId,plan,amount)
    navigate('/Checkout', { state: { clientSecret: data.clientSecret,plan } });
    dispatch({ type: 'ADD_PAYMENT', payload:data.clientSecret});
    
    }
    catch(error){
        console.error('Error creating PaymentIntent:', error);
        toast.error('Error processing payment. Please try again.');
    }
}