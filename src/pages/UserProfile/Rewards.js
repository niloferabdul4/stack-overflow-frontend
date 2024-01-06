import React from 'react'
import './Rewards.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import gold from '../../assets/gold.jpeg';
import silver from '../../assets/silver.jpeg'


const Rewards = ({ currentUser}) => {
    const { id } = useParams()
    const users = useSelector((state) => state.usersReducer)
    const selectedProfile = users?.filter(user => user._id === id)[0]
    console.log(selectedProfile)
    const navigate = useNavigate()
    return (
        <>
            <h3 style={{ fontWeight: '500', margin: '20px 0px 10px 0px' }} >User Rewards</h3>
            <div className="rewards-container">
            <h4 style={{  fontWeight: '400' }}>{`Subscription Plan: : ${selectedProfile?.subscriptionPlan}`}</h4>
                <h4 style={{  fontWeight: '400' }}>{`Points Earned: ${selectedProfile?.earnedPoints}`}</h4>
                <h4 style={{ fontWeight: '400' }}>{`No Of Questions Posted: ${selectedProfile?.noOfQuestionsPosted}`}</h4>
                <h4 style={{ fontWeight: '400' }}>{`No Of Answers Posted: ${selectedProfile?.noOfAnswersPosted}`}</h4>

                <div className='wrapper'>
                    <div className="badge-container">
                        <img className='badge-img' src={gold} alt='gold-badge' />
                        {selectedProfile?.goldBadge > 0 ?
                            (<>
                                <h4 style={{ fontWeight: '500' }}>{`Gold Badge: ${selectedProfile?.goldBadge}`}</h4>
                                {currentUser && selectedProfile?._id===currentUser?.result?._id  && 
                                <>
                                <p>Post more answers to earn additional badges.</p>
                                <button className="btn" onClick={() => navigate('/Questions')}>Browse Question</button>
                                </>
}

                            </>)
                            :
                            (<>
                             
                                <p>You don’t have a gold badge yet. </p>
                                {currentUser && selectedProfile?._id===currentUser?.result?._id && 
                                <>
                                 <p>Write 5 or more answers to earn your first.</p>
                                <button className="btn" onClick={() => navigate('/Questions')}>Browse Questions</button>
                                </>
                                
                                }
                               
                            </>
                            )
                        }
                    </div>
                    <div className='badge-container'>
                        <img className='badge-img' src={silver} alt='gold-badge' />
                        {selectedProfile?.silverBadge > 0  ?
                            (<>
                                <h4 style={{ fontWeight: '500' }}>{`Silver Badge: ${selectedProfile?.silverBadge}`}</h4>
                                {currentUser && selectedProfile?._id===currentUser.result._id  && 
                                <>
                                <p>Ask more questions to earn additional badges.</p>
                                <button className="btn" onClick={() => navigate('/AskQuestion')}>Ask Question</button>
                                </>
}

                            </>)
                            :
                            (<>
                                <p>You don’t have a silver badge yet. </p>
                                {currentUser && selectedProfile?._id===currentUser.result._id  && 
                                <>
                                <p>Ask a question that scores 5 or more to earn your first.</p>
                                <button className="btn" onClick={() => navigate('/AskQuestion')}>Ask Question</button>
                                </>
}
                            </>
                            )
                        }
                    </div>
                </div>
            </div>
        </>

    )
}

export default Rewards
