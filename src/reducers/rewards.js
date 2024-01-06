const initialState = {
    noOfQuestionsPosted: 0,
    noOfAnswersPosted: 0,
    earnedPoints: 0,
    goldBadge: 0,
    silverBadge: 0
}

const rewardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_NO_OF_QUESTIONS_POSTED':
            return {
                ...state, noOfQuestionsPosted: action.payload
            }
        case 'SET_NO_OF_ANSWERS_POSTED':
            return {
                ...state, noOfAnswersPosted: action.payload
            }
        case 'SET_POINTS':
            return { ...state, earnedPoints: action.payload }
        case 'SET_GOLD_BADGE':
            return {
                ...state, goldBadge: action.payload
            }
        case 'SET_SILVER_BADGE':
            return {
                ...state, silverBadge: action.payload
            }

        default:
            return state;
    }
}
export default rewardsReducer