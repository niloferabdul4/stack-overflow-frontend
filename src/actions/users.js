import * as api from "../api";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const fetchAllUsers=()=>async(dispatch)=>{
    try{
        const {data}=await api.getAllUsers()    
        console.log(data)         // data received from backend
        dispatch({type:'FETCH_USERS',payload:data})
    }
    catch (error) {
        toast.error(error.response.data.message);
    }
}

export const updateProfile=(id,updatedData)=>async(dispatch)=>{
    try{
        const {data}=await api.updateProfile(id,updatedData)
        dispatch({type:'UPDATE_CURRENT_USER',payload:data})
       
    }
    catch(error){
        toast.error(error.response.data.message);
    }
}

