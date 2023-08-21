import React from 'react'
import './LeftBar.css'
import NewFeed from '../newsfeed/NewsFeed'
import AccountData from '../accoutdata/AccountData'

export default function LeftBar() {
  return (
    <div className="leftbar">
        <NewFeed/>
        <AccountData/>
    </div>
  )
}
