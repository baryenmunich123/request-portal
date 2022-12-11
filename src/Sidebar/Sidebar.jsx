import React from 'react'
import './Sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar-container'>
        <ul className="sidebar-list">
            <li className="sidebar-item">Services</li>
            <li className="sidebar-item">My Requests</li>
            <li className="sidebar-item">Approvals</li>
        </ul>
    </div>
  )
}

export default Sidebar