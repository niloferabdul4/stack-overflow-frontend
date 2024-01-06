import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import { jwtDecode } from 'jwt-decode'

import './Navbar.css'
import Avatar from '../Avatar/Avatar';
import { setCurrentUser } from '../../actions/currentUser.js'
import { nav_links } from '../../constants/data'
import logo from '../../assets/logo.png'
import icon from '../../assets/icon.png'

const Navbar = ({isSidebarOpen,setIsSidebarOpen}) => {


  const User = useSelector((state) => (state.currentUserReducer))
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {

    const token = User?.token;   // if the token is present  
    // console.log(token)
    if (token) {
      const decodedToken = jwtDecode(token)
      if (decodedToken.exp * 1000 < new Date().getTime())            // if the expiry time is less than current time
      {
        handleLogout()
      }

    }

    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));


  }, [User?.token, dispatch])

  const handleLogout = () => {

    dispatch({ type: "LOGOUT" });
    navigate("/");
    dispatch(setCurrentUser(null));
  };

  return (
    <nav>
      <div className="navbar">
        <div className="menu_icon"  >
          {isSidebarOpen? <CloseIcon onClick={() => {setIsSidebarOpen(false) }} />
          :
          <MenuIcon onClick={() => {setIsSidebarOpen(true)}} />
          }
         
        </div>

        <Link to='/' className='nav_item nav_logo'>
          <img src={logo} className='logo' alt='logo' />
          <img src={icon} alt='stack_overflow' className='mobile_logo' />
        </Link>

        {nav_links.map(item => {
          return <>
            <Link key={item.id} to={item.path} className='nav_item nav_btn'>
              {item.title}
            </Link>
          </>
        })}


        <form className='search'>
          <SearchIcon color='grey' fontSize='small' />
          <input type='text' placeholder='Search...' className='input' />
        </form>
        {User === null ?
          (<Link to='/Auth' className='nav_item nav_link'>Login</Link>
          )
          :
          (

            <div className="profile">
              <Avatar
                backgroundColor="#009dff"
                px="0.4em"
                py="0.5em"
                borderRadius="50%"
                color="white"
              >
                <Link
                  to={`/Users/${User?.result?._id}`}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {User.result.name.charAt(0).toUpperCase()}
                </Link>
              </Avatar>
              <button className="nav_item nav_link" onClick={handleLogout}>
                Log out
              </button>
            </div>

          )
        }

      </div>
    </nav>
  )
}

export default Navbar
