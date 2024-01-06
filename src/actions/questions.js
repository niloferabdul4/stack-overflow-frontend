import * as api from "../api/index";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { countNoOfQuestionsPosted,countNoOfAnswersPosted ,countUpVotes} from "./rewards";

export const askQuestion = (questionData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.postQuestion(questionData)
        dispatch({ type: 'POST_QUESTION', payload: data })
        toast.success('Question Posted Successfully')
        dispatch(countNoOfQuestionsPosted(questionData))
        dispatch(fetchAllQuestions());
        navigate('/')
       
    }
    catch (error) {
        toast.error(error.response.data.message);
    }
}


export const fetchAllQuestions=()=>async(dispatch)=>{
    try{
        const {data}=await api.getAllQuestions()
        dispatch({type:'FETCH_ALL_QUESTIONS',payload:data})
      
    }
    catch (error) {
       console.log(error)

    }
}



export const deleteQuestion=(id,navigate)=>async(dispatch)=>{
    try{
       
    await api.deleteQuestion(id)
    toast.success('Question Deleted')
    dispatch(fetchAllQuestions());
    navigate("/");
   
    }
    catch(error){
        console.log(error)
    }
}

export const voteQuestion=(id,value,earnedPoints,silverBadge)=>async(dispatch)=>{
    try
    {
    const {data}= await api.voteQuestion(id,value)
    dispatch(countUpVotes(id,silverBadge,earnedPoints))
    dispatch(fetchAllQuestions())
    }
    catch(error){
       console.log(error)
    }
}


/****************  Answer Functions *******************/

export const postAnswer=(answerData)=>async(dispatch)=>{             //using  async(dispatch) since we are using redux thunk
    
    try{
        const {id, noOfAnswers, answerBody, userAnswered,userId }=answerData
        const {data}=await api.postAnswer(id, noOfAnswers, answerBody, userAnswered,userId )    // data from the backend
        dispatch({type:'POST_ANSWER',payload:data})
        toast.success('Answer Posted Successfully')
        dispatch(countNoOfAnswersPosted(answerData))
        dispatch(fetchAllQuestions());

    }
    catch (error) {
        toast.error(error.response.data.message);
    }
}



export const deleteAnswer=(id,answerBody,noOfAnswers)=>async(dispatch)=>{
    
    try{
       
    await api.deleteAnswer(id,answerBody,noOfAnswers)
    toast.success('Answer Deleted ')
    dispatch(fetchAllQuestions());
    
   
    }
    catch(error){
        console.log(error)
    }
}