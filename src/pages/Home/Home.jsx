import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import ChatBotTab from '../../components/ChatBotTab/ChatBotTab'


const Home = () => {
 
  return (
  
      <div className="home_container_1">
          <LeftSidebar/>
          <div className="home_container_2">
               <HomeMainbar/>
              <ChatBotTab/>
               <RightSidebar/>
          </div>
      </div>
  
  )
}

export default Home
