import React from 'react'
import Question from './Question'

const QuestionList = ({questionsList}) => {

  return (
    <div className='question-list-container'>
      {questionsList?.data?.map((question) => (
        <Question question={question} key={question._id} />
      ))}
    </div>
  )
}

export default QuestionList
