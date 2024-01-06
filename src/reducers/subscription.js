const initialState = {
    subscriptionPlan: 'free',
    quota:'',
    payment:''
    
}

const subscriptionReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_PLAN':
             return{
                ...state,subscriptionPlan:action.payload
             }
             case 'HANDLE_QUOTA':
                return{
                   ...state,quota:action.payload
                }
                case 'ADD_PAYMENT':
                    return{
                        ...state,payment:action.payload
                    }
        default:
            return state;
    }
}