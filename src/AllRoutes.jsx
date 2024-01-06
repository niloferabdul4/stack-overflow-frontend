import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'
import Questions from './pages/Questions/Questions'
import DisplayQuestion from './pages/Questions/DisplayQuestion'
import AskQuestion from './pages/AskQuestion/AskQuestion'
import Tags from './pages/Tags/Tags'
import Users from './pages/Users/Users'
import UserProfile from './pages/UserProfile/UserProfile'
import ChatBot from './pages/ChatBot/ChatBot'
import Subscriptions from './pages/Subscriptions/Subscriptions'
import Checkout from './pages/Checkout/Checkout'


const AllRoutes = () => {
  return (
   <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/Questions' element={<Questions />} />
         <Route path='/Questions/:id' element={<DisplayQuestion/>} />
         <Route path='/AskQuestion' element={<AskQuestion/>} />
         <Route path='/Auth' element={<Auth/>}  /> 
         <Route path='/Tags' element={<Tags />}  /> 
         <Route path='/Users' element={<Users/>}  /> 
         <Route path='/Users/:id' element={<UserProfile />} />
         <Route path='/ChatBox'  element={<ChatBot/>}/>
         <Route path='/Subscriptions'  element={<Subscriptions/>}/>
         <Route path='/Checkout' element={<Checkout/>}/>
   </Routes>
  )
}

export default AllRoutes
