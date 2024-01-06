import * as api from "../api/index";

    
export const closeChatBox = () =>async(dispatch)=>{
    await dispatch({type: 'CLOSE_CHATBOX'})
  };
  export const startLoading = () =>async(dispatch)=>{
    await dispatch({type: 'START_LOADING'})
  };

  export const stopLoading = () =>async(dispatch)=>{
    await dispatch({type: 'STOP_LOADING'})
  };

export const sendMessageToChatbot = (textData) => async (dispatch) => {
    try {
        dispatch(startLoading())
        const {prompt,userId,botResponse}=textData
        
        const { data } = await api.sendChatbot(textData);
      dispatch({ type: 'RECEIVE_RESPONSE', payload: {prompt:prompt, botResponse: data, userId } });
        dispatch(stopLoading())
        dispatch(fetchAllMessages(userId))
        

    }
    catch (error) {
        console.log(error)
    }
}


export const fetchAllMessages = (userId) => async (dispatch) => {
    try {
        const { data } = await api.getAllMessages(userId)
        dispatch({ type: 'FETCH_ALL_MESSAGES', payload: data })

    }
    catch (error) {
        console.log(error);
    }
}

