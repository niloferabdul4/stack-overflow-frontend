import React from 'react'
import { NavLink } from 'react-router-dom'

import './ToggleSidebar.css'
import Globe from '../../assets/Globe.svg'

const ToggleSidebar = ({isSidebarOpen, setIsSidebarOpen}) => {

  return (
    <>

      <div className={"menu "+(isSidebarOpen && "open")}>

        <div className="side-nav">
          <button className="nav-btn">
            <NavLink to="/" className="side-nav-links" activeclassname="active" onClick={() => setIsSidebarOpen(false)}  >
              <p>Home</p>
            </NavLink>
          </button>
          <div className="side-nav-div">
            <div>
              <p>PUBLIC</p>
            </div>
            <button className="nav-btn">
              <NavLink
                to="/Questions"
                className="side-nav-links"
                activeclassname="active"
                onClick={() => setIsSidebarOpen(false)}

              >
                <img src={Globe} alt="Globe" />
                <p style={{ paddingLeft: "10px" }}> Questions </p>
              </NavLink>
            </button>
            <button className="nav-btn">
              <NavLink
                to="/Tags"
                className="side-nav-links"
                activeclassname="active"
                style={{ paddingLeft: "40px" }}
                onClick={() => setIsSidebarOpen(false)}
              >
                <p>Tags</p>
              </NavLink>
            </button>
            <button className="nav-btn">
              <NavLink
                to="/Users"
                className="side-nav-links"
                activeclassname="active"
                style={{ paddingLeft: "40px" }}
                onClick={() => setIsSidebarOpen(false)}
              >
                <p>Users</p>
              </NavLink>
            </button>
            <button className="nav-btn">
              <NavLink
                to="/Subscriptions"
                className="side-nav-links"
                activeclassname="active"
                style={{ paddingLeft: "40px" }}
                onClick={() => setIsSidebarOpen(false)}
              >
                <p>Subscriptions</p>
              </NavLink>
            </button>
          </div>
        </div>
      </div>

    </>
  )
}

export default ToggleSidebar
