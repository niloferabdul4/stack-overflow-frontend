import * as api from "../api/index";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const countNoOfQuestionsPosted = (questionData) => async (dispatch) => {
    try {
        const { userId, earnedPoints } = questionData
        const { data } = await api.countQuestions(userId, earnedPoints)
        dispatch({ type: 'SET_NO_OF_QUESTIONS_POSTED', payload: data.userQuestionCount })
        dispatch({ type: 'SET_POINTS', payload: data.earnedPoints })
        toast.success(data.message);
        dispatch({
            type: 'UPDATE_CURRENT_USER',
            payload: data.updatedUser
        })
    }
    catch (error) {
        console.log(error)
    }
}



export const countNoOfAnswersPosted = (answerData) => async (dispatch) => {
    try {
        const { userId, earnedPoints, goldBadge } = answerData;
        const { data } = await api.countAnswers(userId, earnedPoints, goldBadge)
        dispatch({ type: 'SET_NO_OF_ANSWERS_POSTED', payload: data.userAnsCount })
        dispatch({ type: 'SET_POINTS', payload: data.earnedPoints })
        dispatch({ type: 'SET_GOLD_BADGE', payload: data.goldBadge })
        toast.success(data.message);
        dispatch({
            type: 'UPDATE_CURRENT_USER',
          payload: data.updatedUser
        })

    }
    catch (error) {
        console.log(error)
    }
}


export const countUpVotes = (id) => async (dispatch) => {
    try {
        const { data } = await api.countUpVotes(id)
        dispatch({ type: 'SET_SILVER_BADGE', payload: data.silverBadge })
        dispatch({ type: 'SET_POINTS', payload: data.earnedPoints })
        toast.success(data.message);
        dispatch({
            type: 'UPDATE_CURRENT_USER',
            payload: data.updatedUser
        })

    }

    catch (error) {
        console.log(error)
    }
}