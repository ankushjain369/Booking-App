import React from 'react'
import './MailList.css';

const MailList = () => {
  return (
    <div className="mail">
    <h1 className="mailTitle">Save Time, Save Money</h1>
      <span className="mailDesc">Sign Up and we will send you great deals!!</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Enter Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default MailList

