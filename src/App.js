
import './App.css';
import Navbar from './components/Navbar/Navbar';
import AllRoutes from './AllRoutes';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllQuestions } from './actions/questions.js';
import { setCurrentUser } from './actions/currentUser.js';
import { fetchAllUsers } from './actions/users.js';
import ToggleSidebar from './components/ToggleSidebar/ToggleSidebar.js';
import { ToastContainer } from 'react-toastify';


function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
  }, [dispatch])

  useEffect(() => {
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
   
  }, [dispatch]);
  return (

    <div className="App">
      {isSidebarOpen && <ToggleSidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />}
      <Navbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <ToastContainer/>
      <AllRoutes />
    </div>

  );
}

export default App;
