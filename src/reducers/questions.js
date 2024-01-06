const initialState = {
    data: null,
  
}

const questionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'POST_QUESTION':
            return { ...state };
        case 'FETCH_ALL_QUESTIONS':
            return {
                ...state, data: action.payload
            }
        case 'POST_ANSWER':
            return {
                ...state
            }
        default:
            return state;
    }
}
export default questionsReducer