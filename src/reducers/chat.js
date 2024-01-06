// reducers/modalReducer.js

const initialState = {
    isOTPFormOpen: false,
    isChatBoxOpen:false,
    botResponse: '',
    chats: [],
    otp: '',
    isOTPValid:false,
    isLoading:false

}
const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'OPEN_OTP_FORM':
            return {
                ...state,
                isOTPFormOpen: true,
            };
        case 'CLOSE_CHATBOX':
                    return {
                        ...state,
                        isChatBoxOpen: false,
                    };
        case 'SEND_MESSAGE':
                        return {
                          ...state,
                          chats: [...state.chats,action.payload],
                        };             
        case 'RECEIVE_RESPONSE':
            return {
                ...state,botResponse:action.payload.botResponse,chats:[...state.chats,action.payload]
            }

            
        case 'FETCH_ALL_MESSAGES':
            return {
                ...state,
                chats: action.payload
            };
        case 'GENERATE_OTP':
            return {
                ...state,
                otp: action.payload,
              
            }
       
            case 'CHECK_VALID_OTP':
                return {
                    ...state,
                    isOTPValid:true,
                    isOTPFormOpen: false, // Close OTP form after submission
                    isChatBoxOpen:true
                }
                case 'START_LOADING':
                    return{
                        ...state,
                        isLoading:true
                    }
                    case 'STOP_LOADING':
                        return{
                            ...state,
                            isLoading:false
                        }
        default:
            return state;
            }
    }

    export default chatReducer;