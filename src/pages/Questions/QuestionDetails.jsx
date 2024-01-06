import React from 'react'
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment'
import copy from 'copy-to-clipboard'
import {toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import upvote from "../../assets/sort-up.svg";
import downvote from "../../assets/sort-down.svg";
import './Questions.css'
import Avatar from '../../components/Avatar/Avatar';
import DisplayAnswers from './DisplayAnswers';
import { postAnswer, deleteQuestion, voteQuestion } from '../../actions/questions';
import ChatBotTab from '../../components/ChatBotTab/ChatBotTab';



const QuestionDetails = () => {
  const User = useSelector((state) => state.currentUserReducer)
  const { id } = useParams()
  const questionsList = useSelector((state) => state.questionsReducer)
  const earnedPoints = useSelector((state) => state.rewardsReducer.earnedPoints)
  const goldBadge = useSelector((state) => state.rewardsReducer.goldBadge)
  const silverBadge = useSelector((state) => state.rewardsReducer.silverBadge)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const url = 'https://stackoverflow-clone1-vioi.onrender.com'

  const [answer, setAnswer] = useState('')

  /********** Share Function **********/

  const handleShare = () => {
    copy(url + location.pathname)

  }

  /********   Delete Function  ************/

  const handleDelete = () => {

    dispatch(deleteQuestion(id, navigate))


  }

  /***** Post Answer Function   ********/

  const handlePostAns = (event, answerLength) => {
    event.preventDefault()
    if (User === null) {
      toast.error('Login or SignUp to answer a question')
      navigate('/Auth')
    }
    else {
      if (answer === '') {
        toast.info("Enter an answer before submitting");
      }
      else {
        dispatch(postAnswer({ id, 
          answerBody: answer, 
          noOfAnswers: answerLength + 1, 
          earnedPoints,
          goldBadge,
          userAnswered: User?.result.name, 
          userId: User?.result._id ,
        }))
        setAnswer('')
      }
    }

  }

  const handleUpVote = () => {
    if (User === null) {
      toast.info("Login or Signup to up vote a question");
      navigate("/Auth");
    } else {
      dispatch(voteQuestion(id, "upVote",earnedPoints,silverBadge));
    }

  }

  const handleDownVote = () => {

    if (User === null) {
      toast.info("Login or Signup to down vote a question");
      navigate("/Auth");
    } else {
      dispatch(voteQuestion(id, "downVote"));
    }

  }

  // const questionList = [
  //     {
  //         _id: '1',
  //         upVotes: 3,
  //         downVotes: 2,
  //         noOfAnswers: 1,
  //         questionTitle: 'What is a function',
  //         questionBody: 'It meant to be',
  //         questionTags: ['javascript', 'function', 'variable'],
  //         userPosted: 'ravi',
  //         userId: 1,
  //         askedOn: 'Jun1',
  //         answer: [{
  //             answerBody: 'Answer',
  //             userAnswered: 'Manoj',
  //             answeredOn: 'Jun 4',
  //             userId: 2
  //         }]
  //     },
  //     {
  //         _id: '2',
  //         upVotes: 4,
  //         downVotes: 1,
  //         noOfAnswers: 1,
  //         questionTitle: 'What is a prop',
  //         questionBody: 'It meant to be',
  //         questionTags: ['javascript', 'function', 'variable'],
  //         userPosted: 'ravi',
  //         userId: 1,
  //         askedOn: 'Jun1',
  //         answer: [{
  //             answerBody: 'Answer',
  //             userAnswered: 'Manoj',
  //             answeredOn: 'Jun 4',
  //             userId: 3
  //         }]

  //     },
  //     {
  //         _id: '3',
  //         upVotes: 6,
  //         downVotes: 2,
  //         noOfAnswers: 1,
  //         questionTitle: 'What is a state',
  //         questionBody: 'It meant to be',
  //         questionTags: ['javascript', 'variable', 'react'],
  //         userPosted: 'ravi',
  //         userId: 1,
  //         askedOn: 'Jun1',
  //         answer: [{
  //             answerBody: 'Answer',
  //             userAnswered: 'Manoj',
  //             answeredOn: 'Jun 4',
  //             userId: 2
  //         }]
  //     },
  //     {
  //         _id: '4',
  //         upVotes: 5,
  //         downVotes: 4,
  //         noOfAnswers: 1,
  //         questionTitle: 'What is a DOM',
  //         questionBody: 'It meant to be',
  //         questionTags: ['javascript', 'html', 'reactjs'],
  //         userPosted: 'ravi',
  //         userId: 1,
  //         askedOn: 'Jun1',
  //         answer: [{
  //             answerBody: 'Answer',
  //             userAnswered: 'Manoj',
  //             answeredOn: 'Jun 4',
  //             userId: 2
  //         }]
  //     },
  //     {
  //         _id: '5',
  //         upVotes: 7,
  //         downVotes: 4,
  //         noOfAnswers: 1,
  //         questionTitle: 'What is a function',
  //         questionBody: 'It meant to be',
  //         questionTags: ['javascript', 'function', 'variable', 'react full course', 'react beginner project' ],
  //         userPosted: 'ravi',
  //         userId: 1,
  //         askedOn: 'Jun1',
  //         answer: [{
  //             answerBody: 'Answer',
  //             userAnswered: 'Manoj',
  //             answeredOn: 'Jun 4',
  //             userId: 2
  //         }]
  //     }]


  return (
    
    <div className="question-details-page">
      {questionsList.data === null ? (
        <h1 style={{fontWeight:'500'}}>Loading...</h1>
      ) : (
        <>
          {questionsList.data
            .filter((question) => question._id === id)
            .map((question) => (

              <div key={question._id}>
                <section className="question-details-container1">
                  <h1 className='question-details-title'>{question.questionTitle}</h1>
                  <div className="question-details-container2">
                    <div className="question-votes">
                      <img
                        src={upvote}
                        alt=""
                        width="18"
                        className="votes-icon"
                        onClick={handleUpVote}

                      />
                      <p>{question.upVote.length - question.downVote.length}</p>
                      <img
                        src={downvote}
                        alt=""
                        width="18"
                        className="votes-icon"
                        onClick={handleDownVote}
                      />
                    </div>
                    <div style={{ width: "100%" }}>
                      <p className="question-body">{question.questionBody}</p>
                      <div className="question-details-tags">
                        {question.questionTags.map((tag) => (
                          <p key={tag}>{tag}</p>
                        ))}
                      </div>
                      <div className="question-actions-user">
                        <div className='question-details-btns'>
                          <button type="button" onClick={handleShare}>
                            Share
                          </button>
                          {User?.result?._id === question.userId &&
                            (
                              <button onClick={handleDelete} >
                                Delete
                              </button>
                            )
                          }
                        </div>
                        <div className='question-time-user'>
                          <p>asked {moment(question.askedOn).fromNow()}</p>
                          <Link
                            to={`/Users/${question.userId}`}
                            className="user-link"
                            style={{ color: "#0086d8" }}
                          >
                            <Avatar
                              backgroundColor="orange"
                              px="0.4em"
                              py="0.5em"
                              borderRadius="4px"

                            >
                              {question.userPosted.charAt(0).toUpperCase()}
                            </Avatar>
                            <div style={{ marginLeft: '5px' }}>{question.userPosted}</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {question.noOfAnswers !== 0 && (
                  <section>
                    <h3>{question.noOfAnswers} Answers</h3>
                    <DisplayAnswers
                      key={question._id}
                      question={question}
                      handleShare={handleShare}
                    />
                  </section>
                )}
                <section className="post-ans-container">
                  <h3>Your Answer</h3>
                  <form
                    onSubmit={(e) => {
                      handlePostAns(e, question.answer.length);
                    }}
                  >
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      value={answer}
                      onChange={(e) => setAnswer(e.target.value)}
                    ></textarea>
                    <br />
                    <input
                      type="submit"
                      className="post-ans-btn"
                      value="Post Your Answer"
                    />
                  </form>
                  <p className='extra-text'>
                    Browse other Question tagged
                    {question.questionTags.map((tag) => (
                      <Link to="/Tags" key={tag} className="ans-tags">
                        {" "}
                        {tag}{" "}
                      </Link>
                    ))}{" "}
                    or
                    <Link
                      to="/AskQuestion"
                      style={{ textDecoration: "none", color: "#009dff" }}
                    >
                      {" "}
                      ask your own question.
                    </Link>
                  </p>
                 
                </section>
              
              </div>
            ))}
        </>
      )}
     <ChatBotTab/>
    </div>
  )
}

export default QuestionDetails
