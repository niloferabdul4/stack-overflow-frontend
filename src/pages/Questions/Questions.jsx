import React from 'react'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import { useSelector } from 'react-redux'
import ToggleSidebar from '../../components/ToggleSidebar/ToggleSidebar'
import ChatBotTab from '../../components/ChatBotTab/ChatBotTab'

const Questions = () => {
  const isSidebarOpen=useSelector((state)=>(state.Reducer))
  return (
     <div className="home_container_1">
     <LeftSidebar/>
     {isSidebarOpen===true && <ToggleSidebar/>}
     <div className="home_container_2">
          <HomeMainbar/>
          <ChatBotTab/>
          <RightSidebar/>
     </div>
 </div>


  )
}

export default Questions
