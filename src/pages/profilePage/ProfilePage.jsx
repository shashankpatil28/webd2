import React from 'react'
import './ProfilePage.css'
import TopBar from "../../components/topbar/TopBar"
import LeftBar from "../../components/leftbar/LeftBar"
import ProfileRightbar from '../../components/profilerightbar/ProfileRightbar'

export default function ProfilePage() {
  return (
    <>
        <TopBar/>
        <div className="mainContainer">
            <LeftBar/>
            <ProfileRightbar />
        </div>
    </>
  )
}
