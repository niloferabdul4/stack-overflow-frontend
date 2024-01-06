import React from 'react'
import { Link} from 'react-router-dom'
import './Users.css'

const User = ({ user }) => {

  return (
    <div>
      <Link to={`/Users/${user._id}`} className='user-profile-link'>
       <h3> {user.name.charAt(0).toUpperCase()}</h3>
        <p>{user.name}</p>
      </Link>

    </div>
  )
}

export default User
