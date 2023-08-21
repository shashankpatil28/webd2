import React from 'react'
import './AccountData.css'
import {FiSettings} from 'react-icons/fi'
import {GrAnalytics} from 'react-icons/gr'
import {MdChatBubbleOutline} from 'react-icons/md'


export default function AccountData() {
  return (
    <div className="newsfeed">
      <div className="newsfeedmaincontainer">
        <p className='newsfeedheaderText'>Account</p>
        <div className='newsfeedSubContainer'>
          <div className="newsfeedcontent">
            <FiSettings className='Icons'/>
            <span className='newfeesContentText'>Settings</span>
          </div>
          <div className="newsfeedcontent">
            <GrAnalytics className='Icons'/>
            <span className='newfeesContentText'>Analytics</span>
          </div>
          <div className="newsfeedcontent">
            <MdChatBubbleOutline className='Icons'/>
            <span className='newfeesContentText'>Chats</span>
          </div>
        </div>
      </div>
      <div className="aboutLogin">
        <p className='login'>login</p>
        <p className='addAcc'>Add Account</p>
        <p className='logoutAcc'>Log out</p>
      </div>
    </div>
  )
}
