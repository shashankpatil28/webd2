import React from 'react'
import './ProfileRightbar.css'
import ProfileUpper from '../profileupper/ProfileUpper'
import ProfileLower from '../profilelower/ProfileLower'



export default function ProfileRightbar() {
  return (
    <div className="profileRightbar">
        <ProfileUpper />
        <ProfileLower />
    </div>
  )
}
