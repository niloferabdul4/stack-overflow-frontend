import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import UsersList from './UsersList'
import ChatBotTab from '../../components/ChatBotTab/ChatBotTab'

const Users = () => {

  return (

    <div className="home_container_1">
      <LeftSidebar />
      <div className="home_container_2" style={{marginTop:'50px' }} > 
      <div className="users-container">      
          <h2 className='users-title'>Users</h2>
          <UsersList />        
      </div>
      </div>
   <ChatBotTab/>
    </div>

  )
}

export default Users
