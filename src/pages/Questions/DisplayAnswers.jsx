import React from 'react'
import { Link, useParams } from 'react-router-dom'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'

import { deleteAnswer } from '../../actions/questions'
import Avatar from '../../components/Avatar/Avatar'

const DisplayAnswers = ({ question,handleShare }) => {

    const User=useSelector((state)=>state.currentUserReducer)
    const {id}=useParams()                                    //getting the id of the question from the url
    const dispatch=useDispatch()
    

    const handleDelete=(answerId,noOfAnswers)=>
    {
        dispatch(deleteAnswer(id,answerId,noOfAnswers-1))    //dipatch an action with parameters(......)
                                                             // reduce the (no of ans) while deleting
    }

    return (
        <>

            <div >
                {question?.answer?.map(ans => (
                    <div className="display-ans" key={ans._id}>
                        <p className='ans-body'>{ans.answerBody}</p>
                        <div className='question-actions-user'>
                            <div className="question-details-btns">
                                <button type='button' onClick={handleShare}>Share</button>
                                {User?.result?._id===ans.userId &&
                         (
                           <button onClick={() => handleDelete(ans._id, question.noOfAnswers)} >  {/*** getting id of ans nad no of ans */}
                              Delete
                            </button>
                         )
                         }
                            </div>

                            <div className='question-time-user'>
                                <p>answered {moment(ans.answeredOn).fromNow()}</p>
                                <Link to={`/Users/${ans.userId}`}
                                    className="user-link"
                                    style={{ color: "#0086d8" }}>
                                    <Avatar backgroundColor="green"
                                        px="0.4em"
                                        py="0.5em"
                                        color='white'
                                        borderRadius="4px">{ans.userAnswered.charAt(0).toUpperCase()}</Avatar>
                                    <p>{ans.userAnswered}</p>
                                </Link>
                            </div>
                        </div>
                    </div>

                ))}

            </div>

        </>
    )
}

export default DisplayAnswers
