import React, { useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'
import robot from '../../assets/robot.png'
import moment from 'moment'
import { CircularProgress } from '@mui/material'


const Message = ({ chat, index }) => {
  const User = useSelector((state) => state.currentUserReducer)
  const chats = useSelector((state) => state.chatReducer.chats)
  const isLoading = useSelector((state) => state.chatReducer.isLoading)
  const scrollRef = useRef(null)

  useEffect(() => {
    if (scrollRef.current && index === chats.length - 1) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }

  }, [chats, index])

  return (
    <div >
      <div className="message user-message">
        <h3 style={{ fontWeight: 500 }}>{`${User?.result?.name}: `}</h3>
        <p>{chat.prompt}</p>
        <small>{moment(chat.timestamp).fromNow()}</small>
      </div>

      <div className='message bot-message'>
        <img className='chat-message-image' src={robot} alt='' />
        <p>{chat.botResponse}</p>
        <small>{moment(chat.timestamp).fromNow()}</small>
      </div>
      <div style={{ marginBottom: '20px', padding: '24px 8px' }} >
        {index === chats.length - 1 && isLoading &&
          <>
            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <p >Loading. Please Wait....</p>
              <CircularProgress size={20} color='primary' />
            </span>
          </>
        }
      </div>
      <div ref={scrollRef}></div>
    </div>
  )
}

export default Message
