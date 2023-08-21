import React from 'react'
import './WhoToFollow.css'
import {FaPlus} from 'react-icons/fa'
// import {BsPersonPlus} from 'react-icons/bs'
import {users} from '../../dummyData'

export default function WhoToFollow() {
  return (
    <div className="Whotofollow">
      <div className="whotofollowWrapper">
          <div className="whotofollowUpper">
            <p>Who To Follow</p>
          </div>
          <div className="whotofollowMain">
            {users.map((u) => 
              u.id >= 6 ?
              <div className="whotofollowData">
                  <div className="postOfwhome">
                      <img src={u.profilePicture} alt="" />
                      <div className="postOfwhomeText">
                          <p className='postWhome'>{u.userName}</p>
                          <p>{u.profession}</p>
                      </div>
                  </div>
                  <div className="whotofollowDataButton">
                    <FaPlus className='whotofollowPlus'/>
                  </div>
              </div>
              :
              null
            )}
            
          </div>

          <div className="whotofollowMainButton">
            <button>View More</button>
          </div>
      </div>
    </div>
  )
}
