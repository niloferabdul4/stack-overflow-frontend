import * as api from "../api";
import { setCurrentUser } from "./currentUser";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const signup = (authData, navigate) => async(dispatch) => {
    try {
        const { data } = await api.signUp(authData);
        dispatch({ type: "AUTH", data });
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))                             // for setting the current user
        navigate(-1)
    }
    catch (error) {
        toast.error(error.response.data.message);
    }
}
export const login = (authData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.logIn(authData);
        dispatch({ type: "AUTH", data });
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))                             // for setting the current user
        navigate(-1)
    }
    catch (error) {
        toast.error(error.response.data.message);
    }
}