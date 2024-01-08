import axios from 'axios'

             // create a base url and store in API                                                                // post (url,data) to the API
const API=axios.create({baseURL:'https://stack-overflow-s9dj.onrender.com'})  
//Adding Authorization(for each req,check if the token is valid or not and then allow the specific actions(postQuestion,deleteAnswer.. etc))

API.interceptors.request.use((req) => {

  if (localStorage.getItem("Profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("Profile")).token
    }`;
  }
  return req;                       //only then req will go the backend
});


export const logIn=(authData)=>API.post('/user/login',authData)           
export const signUp=(authData)=>API.post('/user/signup',authData)
export const getAllUsers=()=>API.get('/user/getAllUsers')
export const updateProfile=(id,updatedData)=>API.patch(`/user/update/${id}`,updatedData)


/********     Questions   *************/

export const postQuestion = (questionData) => API.post("/questions/Ask", questionData);
export const getAllQuestions = () => API.get("/questions/get");
export const deleteQuestion=(id)=>API.delete(`/questions/delete/${id}`)
export const voteQuestion=(id,value)=>API.patch(`/questions/vote/${id}`,{value})

/******  Answer Sections *******/

export const postAnswer= (id, noOfAnswers, answerBody, userAnswered,userId) =>API.patch(`/answer/post/${id}`,{ noOfAnswers, answerBody, userAnswered,userId})
export const deleteAnswer = (id, answerId, noOfAnswers) =>
  API.patch(`/answer/delete/${id}`, { answerId, noOfAnswers });    //adding {answrId,noOfAnswers} as body to url


/**********  ChatBot ***********/

export const sendChatbot = (textData) => API.post("/chatbot/send",textData);
export const getAllMessages = (userId) => API.get(`/chatbot/get/${userId}`);
export const generateOTP=(email)=>API.post('/chatbot/sendOTP',{email})
export const verifyOTP=(OTPInput,email,OTPEnteredTime)=>API.post('/chatbot/verifyOTP',{OTPInput,email,OTPEnteredTime})

/*********    Rewards  ****************/

export const countQuestions=(userId)=>API.post('/questions/count',{userId})
export const countAnswers=(userId)=>API.post('/answer/count',{userId})
export const countUpVotes=(id)=>API.post(`/questions/vote/${id}/count`)

/*******  Subscriptions  ***********/

export const updatePlan=(userId,plan)=>API.post(`/subscription/updatePlan`,{userId,plan})
export const handleQuota=(userId,date)=>API.post('/subscription/quota',{userId,date})
export const checkout=(userId,plan,amount)=>API.post('/subscription/checkout',{userId,plan,amount})