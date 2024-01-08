// components/Modal.js
import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Message from './Message';
import { useDispatch } from 'react-redux';
import { sendMessageToChatbot, fetchAllMessages, closeChatBox } from '../../actions/chat';
import './Chat.css'
import robot from '../../assets/robot.png'
import { CircularProgress } from '@mui/material';

const ChatBotModal = () => {
  const User = useSelector((state) => state.currentUserReducer)
  const chats = useSelector((state) => state.chatReducer.chats)
  const isChatBoxOpen = useSelector((state) => state.chatReducer.isChatBoxOpen)
  const isLoading = useSelector((state) => state.chatReducer.isLoading)
  const isOTPValid = useSelector((state) => state.chatReducer.isOTPValid)
  const [prompt, setPrompt] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllMessages(User?.result?._id))
  }, [isChatBoxOpen, isOTPValid]);


  const handleCloseModal = () => {
    dispatch(closeChatBox())
  };

  if (!isChatBoxOpen) {
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (prompt === "") {
      toast.error("Please Enter Some Text");
      return;
    }

    dispatch(sendMessageToChatbot({ prompt: prompt, botResponse: '', userId: User?.result?._id }))

    setPrompt('')
  }

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      dispatch(sendMessageToChatbot({ prompt: prompt, botResponse: '', userId: User?.result?._id }))
      setPrompt('')
    }
  }
  console.log(chats)
  return (

    <div>
      <div className="chatbox">
        <div className="chatbox-header">
          <h3>ChatBot</h3>
          <button onClick={handleCloseModal}>
            <CloseIcon />
          </button>
        </div>
        <div className="chatbox-messages">
          {chats?.length === 0 ?
            (<div className='message bot-message'>
              <img className='chat-message-image' src={robot} alt='' />
              <p>Hi... how can i help you</p>
              <div style={{ marginBottom: '20px', padding: '24px 8px' }} >
                { isLoading &&
                  <>
                    <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <p >Loading. Please Wait....</p>
                      <CircularProgress size={20} color='primary' />
                    </span>
                  </>
                }
              </div>
            </div>)
            :
            chats?.map((chat, index) =>
              <Message chat={chat} key={index} index={index}  isLoading={isLoading}/>
            )
          }

        </div>
        <div className="chatbox-footer">
          <form onSubmit={handleSubmit} >
            <input type='text' value={prompt} placeholder='Type something' onChange={(e) => setPrompt(e.target.value)} />
            <button className='chat-send-btn' type='submit' onKeyDown={handleEnter}>
              <SendIcon color='grey' />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatBotModal;
