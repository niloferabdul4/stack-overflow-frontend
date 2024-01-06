import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import './Chat.css'
import ChatModal from './ChatBotModal'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar'
import OTPForm from './OTPForm'

const ChatBot = () => {
    const isChatBoxOpen=useSelector((state)=>state.chatReducer.isChatBoxOpen)
    const isOTPValid=useSelector((state)=>state.chatReducer.isOTPValid)
    const isOTPFormOpen=useSelector((state)=>state.chatReducer.isOTPFormOpen)
  return (
    <div>
      <div className="home_container_1">
          <LeftSidebar/>
          <div className="home_container_2">
               <HomeMainbar/>
               {isOTPFormOpen && <OTPForm />}
                {isChatBoxOpen && isOTPValid && !isOTPFormOpen && <ChatModal/>}
               <RightSidebar/>
          </div>
      </div>
    </div>
  )
}

export default ChatBot
