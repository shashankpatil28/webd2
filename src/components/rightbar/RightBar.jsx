import React from 'react'
import './RightBar.css'
import OnlineFrnds from '../onlinefrnds/onlinefrnds'
import FrndReq from '../frndreq/FrndReq'
import WhoToFollow from '../whotofollow/WhoToFollow'
import TodayNews from '../todaysnews/TodayNews'

export default function RightBar() {
  return (
    <div className="rightbar">
      <OnlineFrnds />
      <FrndReq />
      <WhoToFollow />
      <TodayNews />
    </div>
  )
}
