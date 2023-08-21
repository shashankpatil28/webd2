import React from 'react'
import './onlinefrnds.css'
import {users} from '../../dummyData'
import { useState } from 'react';

export default function Onlinefrnds() {

        const[DisplayPost,setDisplayPost] = useState(5);
        function LoadMorePost() {
            setDisplayPost(DisplayPost + 3);
        }
  return (
    <div className="onlinefrndsMain">
        <div className="onlinefrndsWrapper">
            <p className='onlineText'>Online Friends</p>
            <div className="onlinefrndsContent">
                {users.slice(0,DisplayPost).map((u) => 
                    <div className='onlinerfrndsData'>
                        <div className="greenDot"></div>
                        <img src={u.profilePicture} alt="" />
                        <p>{u.userName}</p>
                    </div>
                )}
  
            </div>
            <div className="MoreButton">
            {DisplayPost < users.length && ( <button onClick={LoadMorePost}>click for more</button>)}
                {/* // <button onClick={LoadMorePost}>click for more</button> */}
            </div>
        </div>
    </div>
  )
}

