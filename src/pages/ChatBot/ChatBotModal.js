// components/Modal.js
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Message from './Message';
import { useDispatch } from 'react-redux';
import { sendMessageToChatbot, fetchAllMessages, closeChatBox } from '../../actions/chat';
import './Chat.css'
import { CircularProgress } from '@mui/material';

const ChatBotModal = () => {
  const User = useSelector((state) => state.currentUserReducer)
  const chats = useSelector((state) => state.chatReducer.chats)
  const isChatBoxOpen = useSelector((state) => state.chatReducer.isChatBoxOpen)
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

          {chats?.map((chat, index) =>
            <Message chat={chat} key={index} index={index} />
          )}

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
