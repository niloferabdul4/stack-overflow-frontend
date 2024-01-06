import React from 'react'
import { Link } from 'react-router-dom'


const Button = () => {
  return (
    <div>
        <Link to='/login' className='nav_item nav_link'>LogOut</Link>
      
    </div>
  )
}

export default Button
