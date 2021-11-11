import React from 'react'
import { Link } from 'react-router-dom'

import './topnav.css'
import Dropdown from '../dropdown/Dropdown'

import notifications from '../../assets/json/notification.json'
import user_menu from '../../assets/json/user_menus.json'
import user_image from '../../assets/images/face.jpg'

const curr_user = {
  display_name: 'John Whitaker',
  image: user_image
}

const renderNotificationItem = (item, index) => (
  <div className="notification-item" key={index}>
    <i className={item.icon}></i>
    <span>{item.content}</span>
  </div>
)

const renderUserToggle = user => (
  <div className="topnav_right-user">
    <div className="topnav_right-user_image">
      <img src={user.image} alt="" />
    </div>
    <div className="topnav_right-user_name">
      {user.display_name}
    </div>
  </div>
)

const renderUserMenu = (item, index) => (
  <Link to='/' key={index}>
    <div className="notification-item">
      <i className={item.icon}></i>
      <span>{item.content}</span>
    </div>
  </Link>
)

const Topnav = () => {
  return (
    <div className="topnav">
      <div className="topnav_search">
        <input type="text" placeholder="Search..." />
        <i className="bx bx-search"></i>
      </div>
      <div className="topnav_right">
        <div className="topnav_right-item">
          <Dropdown 
            customToggle={() => renderUserToggle(curr_user)}
            contentData={user_menu}
            renderItems={(item, index) => renderUserMenu(item, index)}
          />
          {/* dropdown here */}
        </div>
        <div className="topnav_right-item">
          <Dropdown
            icon='bx bx-bell'
            badge='12'
            contentData={notifications}
            renderItems={(item, index) => renderNotificationItem(item, index)}
            renderFooter={() => <Link to='/'>View All</Link>}
          />
          {/* dropdown here */}
        </div>
        <div className="topnav_right-item">
          <Dropdown />
          {/* theme setting */}
        </div>
      </div>
    </div>
  )
}

export default Topnav