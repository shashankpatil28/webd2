import React from 'react'
import './NewsFeed.css'
import {PiTelevisionSimpleBold} from 'react-icons/pi'
import {MdOutlineExplore} from 'react-icons/md'
import {GiWorld} from 'react-icons/gi'
import {BsPerson} from 'react-icons/bs'
import { Link } from 'react-router-dom'


export default function NewFeed() {
  return (
    <div className="newsfeed">
      <div className="newsfeedmaincontainer">
        <p className='newsfeedheaderText'>New Feeds</p>
        <div className='newsfeedSubContainer'>
          <div className="newsfeedcontent">
            <PiTelevisionSimpleBold className='Icons'/>
            <span className='newfeesContentText'>News-Feed</span>
          </div>
          <div className="newsfeedcontent">
            <MdOutlineExplore className='Icons'/>
            <span className='newfeesContentText'>Explore</span>
          </div>
          <div className="newsfeedcontent">
            <GiWorld className='Icons'/>
            <span className='newfeesContentText'>Community</span>
          </div>
          <Link to='/profile'>
            <div className="newsfeedcontent">
              <BsPerson className='Icons'/>
              <span className='newfeesContentText'>Author Profile</span>
            </div>
          </Link>
        </div>
      </div>      
    </div>
  )
}
